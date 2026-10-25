# Working in this repository

Notes for agents and developers. Read this before making changes.

## What this is

The website for Travelling Places, an operating travel agency on Tamborine Mountain. Astro,
static output, Sveltia CMS, Cloudflare Pages. Not live yet.

## Rules specific to this repo

**Never publish an image without a manifest row.** `src/assets/images/MANIFEST.md` is the
register. Nine photographs currently in the repo were saved from virtuoso.com and hold no
licence. `pnpm check:licensing` fails while any is referenced, and that failure is intended,
not a bug to work around. Do not silence the check, do not delete the images, and do not mark
one licensed without evidence that a licence exists.

**Never invent content.** Four team members have unconfirmed job titles and three have no
surname recorded. Guessing a colleague's job title or publishing draft copy under a real byline
misattributes words to a real person. (The Antarctica article is Sienna Gardner's: Karim confirmed
it on 30 August and again on 28 September 2026. See register C10.) Leave the placeholder, which is visible and marked.

**The privacy policy is a draft until a person approves it.** The owner asked for a drafted,
website-only policy on 25 October 2026 (`docs/WORK-PLAN.md`, Q11), which replaced the earlier
"never draft" rule. It is still a legal document: the page carries a visible unapproved marker and
a register row until someone with authority signs it off, placeholders stand in for the privacy
contact, retention periods and anything business-wide, and no agent removes the marker.

**Placeholders must be visible.** A missing image renders as a marked block at the correct
aspect ratio. A missing value renders as a red TODO pill. Never let a gap fail silently, and
never fill one with plausible-looking filler.

**Never touch DNS from here.** The domain carries the business's live Microsoft 365 email.
`docs/DNS-CUTOVER.md` is the runbook, and it is worked through by a person with the Microsoft
365 admin centre open, not executed by an agent.

## Where content lives

No page contains hard-coded prose. Copy lives in `src/content/` as markdown and `src/data/` as
JSON, both CMS-editable. If a change means typing a sentence into a `.astro` file, it probably
belongs in content instead.

## Design

**The canonical brand system is `brand-kit/`.** Read `brand-kit/BRAND.md`,
`brand-kit/AGENT-BRIEF.md` and `brand-kit/brand.tokens.json` before any interface work,
and reuse its tokens, logos, fonts and components rather than inventing new ones. Run
`pnpm brand:check` alongside `pnpm build` before calling interface work finished. See also
`AGENTS.md`.

`PRODUCT.md` and `DESIGN.md` sit under it and are the brief for the `impeccable` skill, which
built the original visual system. `DESIGN.md` carries the layout and imagery decisions; the kit
carries the tokens and components. Where they disagree, the kit wins on tokens and components
and `DESIGN.md` wins on layout and imagery.

**Lead and lag (owner, 25 October 2026).** Until the site is live with a settled visual language,
expert design judgement toward an elite, editorial-standard result leads, and `DESIGN.md` lags: it
is updated after each change to record what was built and why. A rule in `DESIGN.md` is a record of
the last decision, not a reason to refuse a better one. Argue with its reasoning, then update it in
the same commit. This does not loosen anything that is not a design taste call: the content,
licensing, placeholder, privacy and DNS rules above, the kit's tokens (amend the kit deliberately and
run `pnpm brand:check`), WCAG 2.2 AA and the owner's approval of visual baselines all still bind.
The scoped round of 25 October 2026 is `docs/CALLOUTS-2026-10-25.md`.

The brand voice is in `PRODUCT.md`: warm, assured, well-travelled, an experienced advisor
welcoming someone into a calm local office. It is the brand's voice, not the repository owner's.

## Before you finish

```bash
pnpm build
pnpm test:qa             # functional, responsive, a11y, cross-browser, brand, visual
pnpm check:placeholders
pnpm check:licensing     # passes since the licensed imagery landed in cc194c7
pnpm qa:lighthouse       # Lighthouse on every route, mobile and desktop; report-only
.claude/skills/impeccable/scripts/impeccable detect --json dist/   # design anti-patterns
```

Design refinement follows `docs/POLISH-PLAN.md`: one pass at a time across the whole site, and
every change cites the rule it serves.

`pnpm test:qa` writes `qa/reports/QA-REPORT.md` and `qa/reports/results.json`. Read the report
rather than the exit code: it separates real defects from heuristics, and some failures are
recorded gaps the site has not fixed yet rather than things you broke.

Verify on a live render at 1440px and 390px. Mobile centring has regressed on this kind of work
before, so a desktop-only pass is not a pass. The responsive suite now covers both, but it measures
geometry, not whether something looks right.

Never make a suite green by raising a threshold, masking a region, disabling a rule or approving a
baseline. If a check is wrong, fix the check and say why in the code. `qa/README.md` explains the
severity model and carries worked examples of doing that correctly.

## History worth knowing

The first draft kept every word of copy on all seven pages inside `src/main.js` as template
literals, injected with `document.body.innerHTML`. The `.html` files were empty shells. Search
engines received a blank page and no CMS could attach. That file and the seven shells are gone,
along with `vite.config.js` and its hand-written asset-copy plugin. Do not reintroduce
client-side content rendering.
