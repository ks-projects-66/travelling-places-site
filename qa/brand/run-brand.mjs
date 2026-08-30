/**
 * The brand suite: three layers, run in order, none allowed to hide another.
 *
 * 1. Stylelint over the stylesheets, for token bypasses with a line number.
 * 2. Project Wallace over the built CSS, for the unique-value sets that ship.
 * 3. Playwright computed-style checks, for everything only a rendered page can answer.
 *
 * Every layer runs even if an earlier one fails, so one red step never conceals the others.
 */

import { spawnSync } from 'node:child_process';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(fileURLToPath(new URL('.', import.meta.url)), '..', '..');

const steps = [
  { name: 'stylelint', cmd: 'node', args: ['qa/brand/lint-css.mjs'] },
  { name: 'css-analyzer', cmd: 'node', args: ['qa/brand/css-analyzer.mjs'] },
  {
    name: 'computed styles',
    cmd: 'npx',
    args: ['playwright', 'test', '--config', 'qa/playwright.config.js', '--project=brand'],
  },
];

let failed = 0;
for (const step of steps) {
  console.log(`\n--- brand: ${step.name} ---`);
  const res = spawnSync(step.cmd, step.args, { cwd: ROOT, stdio: 'inherit', shell: true });
  const code = res.status ?? 1;
  const ok = code === 0 || (step.tolerate ?? []).includes(code);
  if (!ok) {
    failed += 1;
    console.error(`brand: ${step.name} failed with exit ${code}`);
  } else if (code !== 0) {
    console.log(`brand: ${step.name} reported findings (exit ${code}); recorded, continuing.`);
  }
}

if (failed) {
  console.error(`\nbrand suite: ${failed} step(s) failed.`);
  process.exit(1);
}
console.log('\nbrand suite: all steps completed.');
