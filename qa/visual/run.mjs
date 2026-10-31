/**
 * Runs BackstopJS against a preview server this script owns.
 *
 *   node qa/visual/run.mjs test        compare against the references
 *   node qa/visual/run.mjs reference   regenerate the references
 *
 * BackstopJS has no equivalent of Playwright's webServer, so something has to start `astro
 * preview` on 4322 first. That used to be done in three places: run-all.mjs started one, the CI
 * refresh job started one in shell, and the CI "Visual regression" step started none. So in CI
 * every scenario hit net::ERR_CONNECTION_REFUSED, Backstop captured an error page for each, and
 * the step failed 0 of 44 on every run from the day the suite landed. The comparison never looked
 * at the site at all. Putting the server here means every way of running Backstop gets one.
 *
 * Two refusals, both for the reason playwright.config.js gives for reuseExistingServer: false.
 * If 4322 already answers before we start, that is someone else's build and we stop rather than
 * measure it. If our server never answers, we stop rather than let Backstop photograph a refused
 * connection 44 times and call it a visual diff.
 */

import { spawn, spawnSync } from 'node:child_process';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(fileURLToPath(new URL('.', import.meta.url)), '..', '..');
const PORT = 4322;
const BASE_URL = `http://127.0.0.1:${PORT}/`;

const command = process.argv[2];
if (!['test', 'reference'].includes(command)) {
  console.error('Usage: node qa/visual/run.mjs <test|reference>');
  process.exit(2);
}

const answers = async () => {
  try {
    return (await fetch(BASE_URL)).ok;
  } catch {
    return false;
  }
};

if (await answers()) {
  console.error(`Something is already serving ${BASE_URL}. Stop it first; it may be a stale dist/.`);
  process.exit(1);
}

const server = spawn(process.execPath, ['node_modules/astro/astro.js', 'preview', '--host', '127.0.0.1', '--port', String(PORT)], {
  cwd: ROOT,
  stdio: ['ignore', 'ignore', 'inherit'],
});
let exited = false;
server.on('exit', () => {
  exited = true;
});

let ready = false;
for (let i = 0; i < 60 && !exited && !ready; i += 1) {
  await new Promise((r) => setTimeout(r, 500));
  ready = await answers();
}

if (!ready) {
  console.error(`Preview server did not come up on ${BASE_URL}. Has \`pnpm build\` been run?`);
  server.kill();
  process.exit(1);
}

const res = spawnSync('npx', ['backstop', command, '--config=qa/visual/backstop.config.cjs'], {
  cwd: ROOT,
  stdio: 'inherit',
  shell: true,
});

server.kill();
process.exit(res.status ?? 1);
