# QA

Automated testing for the site: functional behaviour, responsive layout, accessibility, brand-kit
compliance and visual regression.

Everything runs against `astro preview` on **port 4322**, not Astro's default 4321. On the build
machine 4321 is regularly held by an orphaned preview serving a stale `dist/`, and a 200 from that
process is indistinguishable from a 200 from ours. Playwright owns the server lifecycle with
`reuseExistingServer: false` for the same reason.

## Commands

| Command | What it does |
|---|---|
| `pnpm test:qa` | Everything, then writes the report. This is the one to run. |
| `pnpm test:ui` | Functional behaviour in Chromium. |
| `pnpm test:responsive` | Layout audit, 9 routes x 19 viewports. |
| `pnpm test:a11y` | axe-core plus keyboard and focus checks. |
| `pnpm test:brand` | Stylelint, then css-analyzer, then computed-style checks. |
| `pnpm test:crossbrowser` | Firefox and WebKit smoke at three viewports. |
| `pnpm test:visual` | Compare against the reference images. |
| `pnpm test:visual:ref` | Regenerate references. Resets them to unapproved. |
| `pnpm lint:css` | Stylelint on its own. |

The existing `pnpm check`, `check:licensing`, `check:placeholders`, `brand:check` and `brand:qa`
are unchanged and still work as before.

First run needs browsers: `pnpm exec playwright install chromium firefox webkit`.

## Layout

```
qa/
  viewports.js        the 19 viewports, and every derived subset. Edit a viewport here only.
  routes.js           routes discovered from dist/, with a hard assertion on the nine known ones
  playwright.config.js
  lib/
    page-audit.js     the in-page layout audit
    settle.js         scroll, load lazy images, wait for fonts
    collect.js        findings sink, one file per test to survive parallel workers
  specs/
    functional/  responsive/  a11y/  brand/  crossbrowser/
  brand/
    run-brand.mjs     the three-layer brand runner
    css-analyzer.mjs  Project Wallace over dist/_astro/*.css
  visual/
    backstop.config.cjs
    engine_scripts/playwright/{onBefore,onReady}.js
    reference/        committed baselines
    BASELINE-STATUS.md
    approve.mjs
  report/
    aggregate.mjs     everything -> qa/reports/results.json
    render.mjs        results.json -> qa/reports/QA-REPORT.md
```

## Severity

`fail` turns a suite red. `warn` is a heuristic that gives real signal but also false positives, so
it is reported and never enforced. `info` is context, including risks the brand kit has explicitly
accepted.

Do not resolve a failure by downgrading it. If a `fail` is wrong, fix the check so it stops being
wrong, and say so in the code. There are worked examples of that in `page-audit.js`: the
"element outside viewport" rule only fires when real overflow accompanies it, because `overflow-x:
clip` plus two deliberately full-bleed images would otherwise trip it on every page.

## Visual baselines

**The current references are not approved.** Read `visual/BASELINE-STATUS.md` before trusting them.
A first baseline records what was there, defects included; it is not evidence the design is right.

Approval is deliberately two steps:

```bash
pnpm test:visual                                    # writes qa/visual/report/index.html
# open it, look at every diff
node qa/visual/approve.mjs --i-have-reviewed-the-diffs
```

There is no script that approves without that flag.

References are generated on **Ubuntu in CI**, which is canonical. Running `pnpm test:visual` on
Windows will diff on font rendering alone, so treat a local run as a smoke check. Use the
`refresh-visual-baselines` job (Actions, run workflow) to produce Ubuntu references; it uploads
them as an artifact for review rather than committing them.

## Two things that will change the baselines

1. **Environment.** `PUBLIC_WEB3FORMS_KEY`, `PUBLIC_GENESYS_CLIENT_ID`, `PUBLIC_GENESYS_FORM_ID`
   and `PUBLIC_CALENDLY_URL` are unset, so the enquiry form is in `mailto` mode and the newsletter
   and Calendly render as placeholders. Setting any of them changes the DOM. Specs branch on
   `[data-mode]` and `.is-placeholder` rather than assuming, but references will need regenerating.
2. **Brand kit version.** The suite asserts against `brand-kit/brand.tokens.json`. A kit release
   changes what "correct" means.

## Adding a test

Selectors come from the site's own behavioural attributes: `body[data-page]`, `[data-header]`,
`[data-menu-toggle]`, `[data-nav]`, `[data-carousel]`, `[data-slide]`, `[data-enquiry-form]`,
`[data-filter]`, `[data-year-item]`, `[data-placeholder]`. No `data-testid` was added anywhere, and
none is needed. Prefer role and accessible-name locators over both.

Two site-specific traps:

- `site.js` is a module script and so runs after paint. Use `waitForScript()` from `lib/settle.js`;
  slide 0 gaining an explicit `aria-hidden="false"` is the only signal it has booted.
- Footer images are `loading="lazy"`. Scrolling past them quickly is not enough: the lazy trigger
  never fires and they read as broken. `settlePage()` dwells at each scroll stop and resolves every
  image while still at the bottom.

## What is deliberately not tested

`check:licensing` is a content gate, not a QA check, so it is not folded into `test:qa` and its
status is never mixed into the test result. It currently passes.
