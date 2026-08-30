/**
 * Stylelint through its Node API rather than the CLI.
 *
 * The CLI form was silently wrong on Windows: `stylelint "src/styles/*.css"` run through a pnpm
 * script had its quotes mangled by the shell, matched nothing, and exited 0. Fifty-five real
 * findings became a clean run, with no error to show for it. Passing the globs as an array to the
 * API removes the shell from the path entirely.
 */

import stylelint from 'stylelint';
import { writeFileSync, mkdirSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(fileURLToPath(new URL('.', import.meta.url)), '..', '..');
const OUT = join(ROOT, 'qa', 'reports', 'raw');

const FILES = ['src/styles/*.css', 'brand-kit/styles/*.css'];

const result = await stylelint.lint({
  files: FILES,
  cwd: ROOT,
  configFile: join(ROOT, 'stylelint.config.mjs'),
  formatter: 'json',
});

const report = JSON.parse(result.report);
const linted = report.length;
const warnings = report.flatMap((f) => f.warnings);

// A run that linted no files is a broken configuration, not a pass. This is the exact failure the
// API call above exists to prevent, so it is asserted rather than assumed.
if (linted === 0) {
  console.error(`lint-css: matched no files for ${FILES.join(', ')}. Refusing to report a clean run.`);
  process.exit(1);
}

mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'stylelint.json'), result.report);

const byRule = new Map();
for (const w of warnings) byRule.set(w.rule, (byRule.get(w.rule) || 0) + 1);

console.log(`lint-css — ${linted} file(s) linted, ${warnings.length} finding(s).`);
for (const [rule, count] of [...byRule].sort((a, b) => b[1] - a[1])) {
  console.log(`  ${count.toString().padStart(3)}  ${rule}`);
}

if (process.argv.includes('--print')) {
  for (const file of report) {
    const rel = file.source.replace(ROOT, '').replace(/^[\\/]/, '').replace(/\\/g, '/');
    for (const w of file.warnings) console.log(`  ${rel}:${w.line}:${w.column}  ${w.text}`);
  }
}

// Findings are reported, not thrown. The QA report ranks them alongside everything else, and
// test:brand decides what turns the suite red.
process.exit(0);
