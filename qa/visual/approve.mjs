/**
 * Baseline approval, deliberately made a two-step act.
 *
 * `backstop approve` copies the last test run over the references. Wired straight into a script it
 * becomes a reflex, and a reflex approval is how a regression becomes the new baseline. So this
 * requires an explicit acknowledgement that a person has looked at the diff report.
 *
 *   node qa/visual/approve.mjs --i-have-reviewed-the-diffs
 *
 * It also refuses to run when no test output exists, because approving nothing silently succeeds.
 */

import { spawnSync } from 'node:child_process';
import { existsSync, readdirSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(fileURLToPath(new URL('.', import.meta.url)), '..', '..');
const TEST_DIR = join(ROOT, 'qa', 'visual', 'test');
const STATUS = join(ROOT, 'qa', 'visual', 'BASELINE-STATUS.md');

const ACK = '--i-have-reviewed-the-diffs';

if (!process.argv.includes(ACK)) {
  console.error(
    [
      'Refusing to approve baselines without an explicit acknowledgement.',
      '',
      'Approving copies the last test run over the reference images. If a real regression is in',
      'that run, approving makes it the new expected appearance and the suite will never report it',
      'again.',
      '',
      'Open qa/visual/report/index.html, look at every diff, then run:',
      `  node qa/visual/approve.mjs ${ACK}`,
    ].join('\n'),
  );
  process.exit(1);
}

if (!existsSync(TEST_DIR) || readdirSync(TEST_DIR).length === 0) {
  console.error('No test output in qa/visual/test. Run `pnpm test:visual` first; there is nothing to approve.');
  process.exit(1);
}

const res = spawnSync('npx', ['backstop', 'approve', '--config=qa/visual/backstop.config.cjs'], {
  cwd: ROOT,
  stdio: 'inherit',
  shell: true,
});

if (res.status === 0) {
  writeFileSync(
    STATUS,
    `# Visual baseline status

**Approved by a human on ${new Date().toISOString().slice(0, 10)}.**

The reference images in \`qa/visual/reference/\` were reviewed against the diff report and accepted
by a person running \`approve.mjs ${ACK}\`.

Re-generating references with \`pnpm test:visual:ref\` resets this file to unapproved.
`,
  );
  console.log('\nBaselines approved, and BASELINE-STATUS.md updated to record it.');
}

process.exit(res.status ?? 1);
