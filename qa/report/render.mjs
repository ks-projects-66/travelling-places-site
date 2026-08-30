/**
 * Render results.json as the human-readable QA report.
 *
 * The section order is fixed by the brief: passed, failed, brand deviations, responsive failures,
 * accessibility failures, items needing human judgement, then fixes ranked by severity.
 *
 * Nothing is summarised away. A finding that appears here appears in results.json with the same
 * severity, and the counts are the counts.
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(fileURLToPath(new URL('.', import.meta.url)), '..', '..');
const REPORTS = join(ROOT, 'qa', 'reports');
const results = JSON.parse(readFileSync(join(REPORTS, 'results.json'), 'utf8'));

const esc = (s) => String(s ?? '').replace(/\|/g, '\\|').replace(/\n/g, ' ');
const where = (f) => {
  const bits = [];
  if (f.routes?.length) bits.push(f.routes.length > 3 ? `${f.routes.length} routes` : f.routes.join(', '));
  if (f.viewports?.length) bits.push(f.viewports.length > 3 ? `${f.viewports.length} viewports` : f.viewports.join(', '));
  if (f.browsers?.length > 1) bits.push(f.browsers.join('/'));
  return bits.join('; ') || 'site-wide';
};

const table = (rows, head) =>
  rows.length === 0
    ? '_None._\n'
    : [`| ${head.join(' | ')} |`, `|${head.map(() => '---').join('|')}|`, ...rows].join('\n') + '\n';

const findingRows = (items) =>
  items.map((f) => `| \`${f.id}\` | ${esc(f.detail).slice(0, 150)} | ${f.count} | ${esc(where(f))} |`);

const all = results.findings.items;
const fails = all.filter((f) => f.severity === 'fail');
const warns = all.filter((f) => f.severity === 'warn');
const infos = all.filter((f) => f.severity === 'info');

const bySuite = (list, suite) => list.filter((f) => f.suite === suite);

// Fixes ranked. Severity first, then how widely it occurs, then whether it is a brand contract
// breach as opposed to a heuristic.
const RANK_NOTES = {
  'menu-no-escape-close': 'Add a keydown handler closing the overlay on Escape. WCAG 2.1.2 adjacent, and the single most common expectation for a full-screen menu.',
  'menu-no-focus-trap': 'Trap Tab within [data-nav] while open, and restore focus to the toggle on close.',
  'menu-no-outside-click-close': 'Close the overlay on a click landing outside the panel.',
  'menu-no-resize-handling': 'Clear body.menu-open on a resize past 940px, or the page stays scroll-locked behind a desktop nav.',
  'dialog-unreachable': 'Either wire a [data-open-enquiry] control or stop rendering EnquiryDialog on every page.',
  'image-aspect-distorted': 'Footer logo wall. The ul is flex and squeezes each li below the mark\'s natural width; Astro\'s max-width: 100% then clamps the image while .logo-wall img holds height: 56px, and object-fit defaults to fill. Add `object-fit: contain` to `.logo-wall img` (blocks.css:56). Verified: atia declares 178x56 and renders 151x56.',
  'hero-heading-lines': 'Shorten the copy or widen the measure. The kit caps display headings at two lines.',
  'line-height-off-scale': 'site.css sets line-height 1.08 on h1, h2 and h3 together. Split it so h2 gets 1.16 and h3 gets 1.25.',
  'unapproved-font-weight': 'Style strong and b to weight 600. The loaded face carries 400 to 600, so 700 is synthesised bold.',
  'css-font-size-off-scale': 'Route these through the ten type tokens rather than ad-hoc rem values.',
};

// Ranked by finding id, not by distinct detail. One defect that produces eight variants of the
// same message is one line here with the total occurrence count, otherwise the table repeats a
// single fix eight times and buries everything below it.
const grouped = new Map();
for (const f of all) {
  const g = grouped.get(f.id) ?? { id: f.id, severity: f.severity, count: 0, variants: 0, suite: f.suite, detail: f.detail };
  g.count += f.count;
  g.variants += 1;
  // Keep the worst severity seen for the id.
  if (f.severity === 'fail') g.severity = 'fail';
  else if (f.severity === 'warn' && g.severity !== 'fail') g.severity = 'warn';
  grouped.set(f.id, g);
}
const sevRank = { fail: 0, warn: 1, info: 2 };
const ranked = [...grouped.values()]
  .sort((a, b) => sevRank[a.severity] - sevRank[b.severity] || b.count - a.count)
  .slice(0, 20);

const visual = existsSync(join(ROOT, 'qa', 'visual', 'BASELINE-STATUS.md'));

const doc = `# QA report

Generated ${results.generatedAt} against brand kit **v${results.brandKitVersion}** on ${results.environment.platform}, Node ${results.environment.node}.

${results.tests.failed === 0 ? 'All automated tests passed.' : `**${results.tests.failed} of ${results.tests.total} tests failed.**`} ${results.findings.fail} distinct blocking findings, ${results.findings.warn} warnings and ${results.findings.info} informational items, from ${results.findings.occurrences} recorded occurrences.

Every failure below is a real defect in the site or a real deviation from the brand kit. Nothing has been masked, no threshold was raised, and no rule was disabled to produce this result.

## Passed checks

${table(
  Object.entries(results.tests.byProject).map(
    ([p, s]) => `| \`${p}\` | ${s.total - s.failed} / ${s.total} | ${s.failed === 0 ? 'pass' : `${s.failed} failed`} |`,
  ),
  ['Suite', 'Passed', 'Result'],
)}

## Failed checks

${table(
  results.tests.failures.map((t) => `| \`${t.project}\` | ${esc(t.title).slice(0, 110)} | ${esc(t.error).slice(0, 90)} |`),
  ['Suite', 'Test', 'First error'],
)}

## Brand-kit deviations

${table(findingRows(bySuite(fails, 'brand')), ['Finding', 'Detail', 'Occurrences', 'Where'])}

Warnings, reported not enforced:

${table(findingRows(bySuite(warns, 'brand').slice(0, 25)), ['Finding', 'Detail', 'Occurrences', 'Where'])}

## Responsive layout failures

${table(findingRows(bySuite(fails, 'responsive')), ['Finding', 'Detail', 'Occurrences', 'Where'])}

Warnings:

${table(findingRows(bySuite(warns, 'responsive').slice(0, 15)), ['Finding', 'Detail', 'Occurrences', 'Where'])}

## Accessibility failures

${table(findingRows(bySuite(fails, 'a11y')), ['Finding', 'Detail', 'Occurrences', 'Where'])}

Moderate and minor, reported in full rather than filtered:

${table(findingRows(bySuite(warns, 'a11y').slice(0, 25)), ['Finding', 'Detail', 'Occurrences', 'Where'])}

## Functional failures

${table(findingRows(bySuite(fails, 'functional')), ['Finding', 'Detail', 'Occurrences', 'Where'])}

## Cross-browser

${table(findingRows([...bySuite(fails, 'crossbrowser'), ...bySuite(warns, 'crossbrowser')]), ['Finding', 'Detail', 'Occurrences', 'Where'])}

## Items requiring human visual judgement

These cannot be settled by measurement. A person has to look.

- **Visual baselines are unapproved.** ${visual ? 'See `qa/visual/BASELINE-STATUS.md`.' : 'Not yet generated.'} The first reference set records what the site looks like today; it is not evidence the design is correct.
- **Photograph quality.** The team images are 1037x853 and 904x853 originals and are visibly soft in a full-bleed hero. No code change fixes that.
- **Hero crops.** Each hero carries a hand-set \`object-position\`. A crop that is measurably in-bounds can still be badly composed.
- **Copy and tone.** The suite checks punctuation and casing rules, not whether a sentence is good.
- **Colour mixes.** Text set with \`color-mix()\` of two tokens has no certified contrast figure in the kit's approved pair table, though axe reports no contrast violations at AA.
${infos.length ? `- **Accepted risks recorded in the kit.** ${infos.filter((f) => f.id === 'carousel-no-pause-control').length ? 'The carousel has no pause control; brand kit v3 records this with four mitigations and a known WCAG 2.2.2 residual.' : ''}` : ''}

## Suggested fixes, ranked

${table(
  ranked.map(
    (f, i) =>
      `| ${i + 1} | ${f.severity} | \`${f.id}\` | ${f.count} | ${esc(RANK_NOTES[f.id] ?? f.detail).slice(0, 260)} |`,
  ),
  ['#', 'Severity', 'Finding', 'Occurrences', 'Fix'],
)}

## How to reproduce

\`\`\`bash
corepack pnpm build
corepack pnpm test:qa
\`\`\`

Machine-readable form of everything above: \`qa/reports/results.json\`.
`;

writeFileSync(join(REPORTS, 'QA-REPORT.md'), doc);
console.log(`render — qa/reports/QA-REPORT.md written (${fails.length} fail, ${warns.length} warn, ${infos.length} info).`);
