# QA report

Generated 2026-08-31T01:01:11.222Z against brand kit **v3.0.0** on win32, Node v24.14.0.

All automated tests passed. 0 distinct blocking findings, 57 warnings and 23 informational items, from 117 recorded occurrences.

Every failure below is a real defect in the site or a real deviation from the brand kit. Nothing has been masked, no threshold was raised, and no rule was disabled to produce this result.

## Passed checks

| Suite | Passed | Result |
|---|---|---|
| `a11y` | 40 / 40 | pass |
| `brand` | 48 / 48 | pass |
| `crossbrowser-firefox` | 15 / 15 | pass |
| `crossbrowser-webkit` | 15 / 15 | pass |
| `functional` | 69 / 69 | pass |
| `responsive` | 171 / 171 | pass |


## Failed checks

_None._


## Brand-kit deviations

_None._


Warnings, reported not enforced:

| Finding | Detail | Occurrences | Where |
|---|---|---|---|
| `token-derived-colour-uncertified` | oklch(0.851756 0.0347718 268.509) on p (a color-mix of tokens; no certified contrast figure) | 9 | 9 routes; desktop-1440 |
| `token-derived-colour-uncertified` | oklch(0.872933 0.0298115 268.509) on a (a color-mix of tokens; no certified contrast figure) | 9 | 9 routes; desktop-1440 |
| `token-derived-colour-uncertified` | oklch(0.761755 0.0558531 268.509) on span (a color-mix of tokens; no certified contrast figure) | 9 | 9 routes; desktop-1440 |
| `unapproved-font-family` | monospace on code (inside a tracked placeholder) | 3 | /contact/; desktop-1440, ipad-portrait, mobile-390 |
| `token-derived-colour-uncertified` | oklch(0.841168 0.037252 268.509) on p (a color-mix of tokens; no certified contrast figure) | 2 | /who-we-are/, /virtuoso/; desktop-1440 |
| `token-derived-colour-uncertified` | oklch(0.883521 0.0273314 268.509) on p.page-hero-lede (a color-mix of tokens; no certified contrast figure) | 1 | /journal/; desktop-1440 |
| `token-derived-colour-uncertified` | oklch(0.883521 0.0273314 268.509) on p (a color-mix of tokens; no certified contrast figure) | 1 | /; desktop-1440 |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/blocks.css:121 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-val | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/blocks.css:203 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-val | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/blocks.css:68 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-valu | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/blocks.css:74 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-valu | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/blocks.css:206 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-val | 1 | site-wide |
| `stylelint-no-duplicate-selectors` | src/styles/blocks.css:125 Duplicate selector ".newsletter h2", first used at line 119 (no-duplicate-selectors) | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/pages.css:32 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-value | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/pages.css:96 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-value | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/pages.css:328 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-valu | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/pages.css:364 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-valu | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/pages.css:397 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-valu | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/pages.css:528 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-valu | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/pages.css:624 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-valu | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/pages.css:657 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-valu | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/pages.css:664 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-valu | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/pages.css:671 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-valu | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/pages.css:685 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-valu | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/pages.css:693 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-valu | 1 | site-wide |


## Responsive layout failures

_None._


Warnings:

| Finding | Detail | Occurrences | Where |
|---|---|---|---|
| `container-width-inconsistent` | .shell renders at 1200, 980px on one page | 6 | /journal/looking-south-to-antarctica/; 6 viewports |
| `button-wraps` | a.button.button-outline "Send an enquiry instead" wraps to 2 lines | 1 | /contact/; mobile-320 |
| `container-width-inconsistent` | .shell renders at 1086, 980px on one page | 1 | /journal/looking-south-to-antarctica/; ipad-air-landscape |
| `container-width-inconsistent` | .shell renders at 1184, 980px on one page | 1 | /journal/looking-south-to-antarctica/; desktop-1280 |
| `line-length-long` | p measures about 94ch against a 68ch guide | 1 | /contact/; ipad-air-portrait |


## Accessibility failures

_None._


Moderate and minor, reported in full rather than filtered:

_None._


## Functional failures

_None._


## Cross-browser

_None._


## Items requiring human visual judgement

These cannot be settled by measurement. A person has to look.

- **Visual baselines are unapproved.** See `qa/visual/BASELINE-STATUS.md`. The first reference set records what the site looks like today; it is not evidence the design is correct.
- **Photograph quality.** The team images are 1037x853 and 904x853 originals and are visibly soft in a full-bleed hero. No code change fixes that.
- **Hero crops.** Each hero carries a hand-set `object-position`. A crop that is measurably in-bounds can still be badly composed.
- **Copy and tone.** The suite checks punctuation and casing rules, not whether a sentence is good.
- **Colour mixes.** Text set with `color-mix()` of two tokens has no certified contrast figure in the kit's approved pair table, though axe reports no contrast violations at AA.
- **Accepted risks recorded in the kit.** The carousel has no pause control; brand kit v3 records this with four mitigations and a known WCAG 2.2.2 residual.

## Suggested fixes, ranked

| # | Severity | Finding | Occurrences | Fix |
|---|---|---|---|---|
| 1 | warn | `stylelint-scale-unlimited/declaration-strict-value` | 37 | src/styles/blocks.css:121 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-value) |
| 2 | warn | `token-derived-colour-uncertified` | 31 | oklch(0.851756 0.0347718 268.509) on p (a color-mix of tokens; no certified contrast figure) |
| 3 | warn | `container-width-inconsistent` | 8 | .shell renders at 1200, 980px on one page |
| 4 | warn | `stylelint-no-duplicate-selectors` | 5 | src/styles/blocks.css:125 Duplicate selector ".newsletter h2", first used at line 119 (no-duplicate-selectors) |
| 5 | warn | `unapproved-font-family` | 3 | monospace on code (inside a tracked placeholder) |
| 6 | warn | `button-wraps` | 1 | a.button.button-outline "Send an enquiry instead" wraps to 2 lines |
| 7 | warn | `line-length-long` | 1 | p measures about 94ch against a 68ch guide |
| 8 | warn | `css-colour-off-palette` | 1 | 8 value(s) outside the kit: oklch(20% .03 264 / .55), oklch(18% .03 264 / .82), oklch(18% .03 264 / .45), oklch(18% .03 264 / .28), rgb(17 23 43 / 80%), rgb(17 23 43 / 38%), #f6f3ef, #ece7e2 |
| 9 | warn | `css-font-size-off-scale` | 1 | Route these through the ten type tokens rather than ad-hoc rem values. |
| 10 | warn | `css-radius-unapproved` | 1 | 2 value(s) outside the kit: 6px, 4px |
| 11 | info | `element-outside-viewport` | 25 | 2 element(s) past a 390px document, first: img spans -11.7 to 401.7 (contained by overflow-x: clip, intended full-bleed) |
| 12 | info | `reduced-motion-residual` | 1 | 0 element(s) keep a transition or animation longer than 300ms under prefers-reduced-motion |
| 13 | info | `carousel-no-pause-control` | 1 | The carousel advances every 3s with no visible pause control. Approved in brand kit v3 with four mitigations in place; the residual WCAG 2.2.2 gap is a recorded accepted risk, not a new finding. |
| 14 | info | `enquiry-form-not-delivering` | 1 | PUBLIC_WEB3FORMS_KEY is unset, so the form opens a mail draft instead of delivering. Tracked as a placeholder in docs/CONTENT-REGISTER.md. |


## How to reproduce

```bash
corepack pnpm build
corepack pnpm test:qa
```

Machine-readable form of everything above: `qa/reports/results.json`.
