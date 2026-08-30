/**
 * Regenerate BASELINE-STATUS.md from whatever is actually in qa/visual/reference.
 *
 * Run after `pnpm test:visual:ref`. It always writes the unapproved state, because generating
 * references is not the same act as a person agreeing the design is right. approve.mjs is what
 * rewrites this file to say approved.
 */
const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

const DIR = path.join(__dirname, 'reference');
const OUT = path.join(__dirname, 'BASELINE-STATUS.md');

const files = fs.readdirSync(DIR).filter((f) => f.endsWith('.png')).sort();
const total = files.reduce((n, f) => n + fs.statSync(path.join(DIR, f)).size, 0);

const rows = files.map((f) => {
  const buf = fs.readFileSync(path.join(DIR, f));
  const hash = crypto.createHash('sha256').update(buf).digest('hex').slice(0, 16);
  return `| \`${f.replace('travelling-places_', '')}\` | ${Math.round(buf.length / 1024)} KB | \`${hash}\` |`;
});

fs.writeFileSync(
  OUT,
  `# Visual baseline status

## AWAITING HUMAN VISUAL APPROVAL

**No person has looked at these images and agreed the design is correct.**

They were generated on ${new Date().toISOString().slice(0, 10)} on ${process.platform} and they record what the site
rendered that day. That is all they record. A first baseline cannot validate a design: it captures
whatever was there, defects included, and every later run is measured against it. If something was
wrong when these were taken, the suite now treats that wrongness as correct and stays silent.

## What is captured, and why not more

${files.length} images, ${(total / 1048576).toFixed(1)} MB.

- **Components at three viewports.** Header, navigation, both menu states, footer, both hero tones,
  carousel, journal cards, team cards, contact form, and buttons in normal, hover, focus, active and
  disabled states. This is where a pixel diff is precise and worth storing.
- **Each page above the fold at 390px only.** Mobile, because CLAUDE.md records mobile centring as a
  repeat regression on this kind of work.

Full-page captures across the viewport matrix were measured and rejected on cost: this site is
photography-led, so a full-document PNG runs 2.4MB at 1440 and 4.6MB at 2560, and the full set came
to roughly 130MB of committed binaries on a public repository, growing by that again on every
regeneration. Page-level geometry is covered instead by the responsive suite, which audits nine
routes across all nineteen viewports and stores no pixels at all.

## Two reasons these will go stale

- They capture **placeholder mode**. \`PUBLIC_WEB3FORMS_KEY\`, the Genesys pair and
  \`PUBLIC_CALENDLY_URL\` are unset, so the enquiry form, newsletter and Calendly render as
  placeholders. When those land the DOM changes and these references no longer apply.
- They were generated on Windows. CI generates its own on Ubuntu, which is canonical, because text
  rendering differs and a cross-platform comparison diffs on font hinting alone.

## To approve

    pnpm test:visual                 # writes qa/visual/report/index.html
    # open that report and look at every image
    node qa/visual/approve.mjs --i-have-reviewed-the-diffs

There is no script that approves without that flag, deliberately.

## Manifest

| Reference | Size | sha256 (first 16) |
|---|---:|---|
${rows.join('\n')}
`,
);

console.log(`BASELINE-STATUS.md written: ${files.length} images, ${(total / 1048576).toFixed(1)} MB`);
