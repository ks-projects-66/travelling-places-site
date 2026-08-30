/**
 * Project Wallace CSS analysis over the built stylesheets.
 *
 * This runs on dist/, not src/, because dist is what ships. A token that resolves to something
 * unexpected, or a value introduced by the build, only appears here.
 *
 * It reports unique-value sets against the brand kit contract and writes a machine-readable
 * result. It does not fail the build on its own; the counts feed the QA report, where an
 * unapproved value is ranked alongside everything else.
 */

import { analyze } from '@projectwallace/css-analyzer';
import { readFileSync, readdirSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(fileURLToPath(new URL('.', import.meta.url)), '..', '..');
const DIST_CSS = join(ROOT, 'dist', '_astro');
const OUT = join(ROOT, 'qa', 'reports', 'raw');

const tokens = JSON.parse(readFileSync(join(ROOT, 'brand-kit', 'brand.tokens.json'), 'utf8'));

const approvedColours = new Set(
  Object.values(tokens.color).map((c) => c.value.toLowerCase()),
);

// The type scale, as the set of sizes a stylesheet may legitimately land on.
const approvedSizes = new Set();
for (const role of Object.values(tokens.type)) {
  for (const key of ['min', 'max', 'size']) {
    if (role[key]) approvedSizes.add(parseFloat(role[key]));
  }
}

const approvedRadii = new Set([0, 2, 12, 999]);

function loadCss() {
  if (!existsSync(DIST_CSS)) {
    throw new Error('css-analyzer: no dist/_astro found. Run `pnpm build` first.');
  }
  const files = readdirSync(DIST_CSS).filter((f) => f.endsWith('.css'));
  if (files.length === 0) throw new Error('css-analyzer: no built stylesheets in dist/_astro.');
  return { files, css: files.map((f) => readFileSync(join(DIST_CSS, f), 'utf8')).join('\n') };
}

function main() {
  const { files, css } = loadCss();
  const stats = analyze(css);
  const findings = [];

  const uniqueColours = Object.keys(stats.values.colors.unique || {});
  const offPalette = uniqueColours.filter((c) => {
    const v = c.toLowerCase();
    if (approvedColours.has(v)) return false;
    // Alpha variants and mixes of approved colours resolve at runtime, not here.
    return !v.startsWith('color-mix') && !v.startsWith('var(') && v !== 'transparent' && v !== 'currentcolor';
  });

  const uniqueSizes = Object.keys(stats.values.fontSizes.unique || {});
  const offScale = uniqueSizes.filter((s) => {
    if (s.includes('var(') || s.includes('clamp(')) return false;
    const px = s.endsWith('rem') ? parseFloat(s) * 16 : parseFloat(s);
    return Number.isFinite(px) && !approvedSizes.has(px);
  });

  const uniqueFamilies = Object.keys(stats.values.fontFamilies.unique || {});
  const offFamily = uniqueFamilies.filter((f) => {
    const v = f.toLowerCase();
    return !v.includes('libre baskerville') && !v.includes('ibm plex sans') && !v.includes('var(');
  });

  const uniqueRadii = Object.keys(stats.values.borderRadiuses?.unique || {});
  const offRadius = uniqueRadii.filter((r) => {
    if (r.includes('var(') || r.includes('%')) return false;
    const px = r.endsWith('rem') ? parseFloat(r) * 16 : parseFloat(r);
    return Number.isFinite(px) && !approvedRadii.has(px);
  });

  const shadows = Object.keys(stats.values.boxShadows?.unique || {}).filter((s) => s !== 'none');

  const push = (id, severity, list, expected) => {
    if (list.length === 0) return;
    findings.push({
      suite: 'brand',
      route: null,
      viewport: null,
      browser: null,
      id,
      severity,
      detail: `${list.length} value(s) outside the kit: ${list.slice(0, 8).join(', ')}${list.length > 8 ? ' …' : ''}`,
      expected,
      actual: list.join(', '),
      source: `dist/_astro/*.css (${files.length} file(s))`,
    });
  };

  push('css-colour-off-palette', 'warn', offPalette, 'a brand.tokens.json colour');
  push('css-font-size-off-scale', 'warn', offScale, 'one of the ten type tokens');
  push('css-font-family-unapproved', 'fail', offFamily, 'Libre Baskerville or IBM Plex Sans');
  push('css-radius-unapproved', 'warn', offRadius, '0, 2px, 12px or 999px');
  if (shadows.length > 1) {
    push('css-too-many-shadows', 'warn', shadows, 'a single sticky-header shadow');
  }

  mkdirSync(OUT, { recursive: true });
  writeFileSync(
    join(OUT, 'css-analyzer.json'),
    JSON.stringify(
      {
        files,
        totals: {
          rules: stats.rules.total,
          declarations: stats.declarations.total,
          uniqueColours: uniqueColours.length,
          uniqueFontSizes: uniqueSizes.length,
          uniqueFontFamilies: uniqueFamilies.length,
          uniqueRadii: uniqueRadii.length,
          shadows: shadows.length,
        },
        unique: {
          colours: uniqueColours,
          fontSizes: uniqueSizes,
          fontFamilies: uniqueFamilies,
          radii: uniqueRadii,
          shadows,
        },
        findings,
      },
      null,
      2,
    ),
  );

  console.log(`css-analyzer — ${files.length} built stylesheet(s), ${stats.rules.total} rules, ${stats.declarations.total} declarations.`);
  console.log(`  colours ${uniqueColours.length} unique, ${offPalette.length} off palette`);
  console.log(`  font sizes ${uniqueSizes.length} unique, ${offScale.length} off scale`);
  console.log(`  families ${uniqueFamilies.length} unique, ${offFamily.length} unapproved`);
  console.log(`  radii ${uniqueRadii.length} unique, ${offRadius.length} unapproved`);
  console.log(`  shadows ${shadows.length}`);

  const blocking = findings.filter((f) => f.severity === 'fail');
  if (blocking.length) {
    for (const f of blocking) console.error(`FAIL ${f.id}: ${f.detail}`);
    process.exitCode = 1;
  }
}

main();
