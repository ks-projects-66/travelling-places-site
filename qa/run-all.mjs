/**
 * The whole QA suite, then the report.
 *
 * Every suite runs even when an earlier one fails, because a report built from a run that stopped
 * at the first failure is a misleading report. The exit code reflects whether anything failed.
 *
 * check:licensing is deliberately not part of this. It is a content gate rather than a QA check,
 * and it is run separately so that its status is never conflated with the test result. (It passes
 * as of the licensed imagery delivery; the README and CLAUDE.md still describe it as expected to
 * fail, which is stale.)
 */

import { spawnSync } from 'node:child_process';
import { rmSync, mkdirSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(fileURLToPath(new URL('.', import.meta.url)), '..');
const RAW = join(ROOT, 'qa', 'reports', 'raw');

const run = (name, cmd, args, tolerate = []) => {
  console.log(`\n${'='.repeat(70)}\n  ${name}\n${'='.repeat(70)}`);
  const res = spawnSync(cmd, args, {
    cwd: ROOT,
    stdio: 'inherit',
    shell: true,
    // One JSON file per suite. Sharing a filename across invocations silently discarded every
    // suite but the last, and the aggregate then reported 48 tests instead of roughly 250.
    env: { ...process.env, PLAYWRIGHT_JSON_OUTPUT_NAME: `./reports/raw/playwright-${name.replace(/\W+/g, '-')}.json` },
  });
  const code = res.status ?? 1;
  const ok = code === 0 || tolerate.includes(code);
  return { name, code, ok };
};

// A stale findings directory would carry yesterday's defects into today's report.
rmSync(join(RAW, 'findings'), { recursive: true, force: true });
mkdirSync(RAW, { recursive: true });

const pw = ['playwright', 'test', '--config', 'qa/playwright.config.js'];
const results = [
  run('build', 'node', ['node_modules/astro/astro.js', 'build']),
  run('functional', 'npx', [...pw, '--project=functional']),
  run('responsive', 'npx', [...pw, '--project=responsive']),
  run('accessibility', 'npx', [...pw, '--project=a11y']),
  run('cross-browser', 'npx', [...pw, '--project=crossbrowser-firefox', '--project=crossbrowser-webkit']),
  run('brand', 'node', ['qa/brand/run-brand.mjs']),
];

// BackstopJS does not manage a server the way Playwright's webServer does, so one is started here
// and torn down afterwards. Playwright has already released 4322 by this point.
if (process.env.SKIP_VISUAL !== '1') {
  const { spawn } = await import('node:child_process');
  const server = spawn('node', ['node_modules/astro/astro.js', 'preview', '--host', '127.0.0.1', '--port', '4322'], {
    cwd: ROOT,
    stdio: 'ignore',
    detached: false,
  });

  const ready = async () => {
    for (let i = 0; i < 40; i += 1) {
      try {
        const res = await fetch('http://127.0.0.1:4322/');
        if (res.ok) return true;
      } catch {
        /* not up yet */
      }
      await new Promise((r) => setTimeout(r, 500));
    }
    return false;
  };

  if (await ready()) {
    results.push(run('visual regression', 'npx', ['backstop', 'test', '--config=qa/visual/backstop.config.cjs']));
  } else {
    console.error('visual regression skipped: preview server did not come up on 4322');
    results.push({ name: 'visual regression', code: 1, ok: false });
  }
  server.kill();
}

run('aggregate', 'node', ['qa/report/aggregate.mjs']);
run('report', 'node', ['qa/report/render.mjs']);

console.log(`\n${'='.repeat(70)}\n  Summary\n${'='.repeat(70)}`);
for (const r of results) {
  console.log(`  ${r.ok ? 'pass' : 'FAIL'}  ${r.name}${r.ok ? '' : ` (exit ${r.code})`}`);
}
console.log('\n  Report:  qa/reports/QA-REPORT.md');
console.log('  Data:    qa/reports/results.json');

const failed = results.filter((r) => !r.ok);
if (failed.length) {
  console.error(`\n${failed.length} suite(s) failed: ${failed.map((f) => f.name).join(', ')}`);
  process.exit(1);
}
