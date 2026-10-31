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

// A stale findings directory would carry yesterday's defects into today's report. The same goes
// for raw result files: a Playwright run outside this script (a single spec, a rerun) writes
// playwright-adhoc.json here, and the aggregate then counted those tests on top of this run's,
// reporting 186 functional tests where 93 ran. Start every full run from an empty folder.
rmSync(RAW, { recursive: true, force: true });
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

// qa/visual/run.mjs starts and stops its own preview server. Playwright has already released 4322
// by this point.
if (process.env.SKIP_VISUAL !== '1') {
  results.push(run('visual regression', 'node', ['qa/visual/run.mjs', 'test']));
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
