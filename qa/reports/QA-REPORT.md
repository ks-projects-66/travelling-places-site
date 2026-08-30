# QA report

Generated 2026-08-30T12:35:20.415Z against brand kit **v3.0.0** on win32, Node v24.14.0.

**21 of 358 tests failed.** 9 distinct blocking findings, 57 warnings and 23 informational items, from 138 recorded occurrences.

Every failure below is a real defect in the site or a real deviation from the brand kit. Nothing has been masked, no threshold was raised, and no rule was disabled to produce this result.

## Passed checks

| Suite | Passed | Result |
|---|---|---|
| `a11y` | 40 / 40 | pass |
| `brand` | 48 / 48 | pass |
| `crossbrowser-firefox` | 15 / 15 | pass |
| `crossbrowser-webkit` | 15 / 15 | pass |
| `functional` | 69 / 69 | pass |
| `responsive` | 150 / 171 | 21 failed |


## Failed checks

| Suite | Test | First error |
|---|---|---|
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-430 › expertise at 430x932 | Error: 1 layout failure(s) on /expertise/ at mobile-430 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-430 › who-we-are at 430x932 | Error: 1 layout failure(s) on /who-we-are/ at mobile-430 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-414 › expertise at 414x896 | Error: 1 layout failure(s) on /expertise/ at mobile-414 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-414 › who-we-are at 414x896 | Error: 1 layout failure(s) on /who-we-are/ at mobile-414 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-393 › expertise at 393x852 | Error: 1 layout failure(s) on /expertise/ at mobile-393 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-393 › who-we-are at 393x852 | Error: 1 layout failure(s) on /who-we-are/ at mobile-393 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-390 › expertise at 390x844 | Error: 1 layout failure(s) on /expertise/ at mobile-390 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-390 › who-we-are at 390x844 | Error: 1 layout failure(s) on /who-we-are/ at mobile-390 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-375 › contact at 375x812 | Error: 1 layout failure(s) on /contact/ at mobile-375 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-375 › expertise at 375x812 | Error: 1 layout failure(s) on /expertise/ at mobile-375 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-375 › who-we-are at 375x812 | Error: 1 layout failure(s) on /who-we-are/ at mobile-375 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-360 › home at 360x800 | Error: 1 layout failure(s) on / at mobile-360 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-360 › contact at 360x800 | Error: 1 layout failure(s) on /contact/ at mobile-360 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-360 › expertise at 360x800 | Error: 1 layout failure(s) on /expertise/ at mobile-360 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-360 › who-we-are at 360x800 | Error: 1 layout failure(s) on /who-we-are/ at mobile-360 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-320 › home at 320x568 | Error: 1 layout failure(s) on / at mobile-320 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-320 › contact at 320x568 | Error: 1 layout failure(s) on /contact/ at mobile-320 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-320 › expertise at 320x568 | Error: 1 layout failure(s) on /expertise/ at mobile-320 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-320 › journal-looking-south-to-antarctica at 320x568 | Error: 1 layout failure(s) on /journal/looking-south-to-antarctica/ at mobile-320 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-320 › virtuoso at 320x568 | Error: 1 layout failure(s) on /virtuoso/ at mobile-320 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-320 › who-we-are at 320x568 | Error: 1 layout failure(s) on /who-we-are/ at mobile-320 |


## Brand-kit deviations

_None._


Warnings, reported not enforced:

| Finding | Detail | Occurrences | Where |
|---|---|---|---|
| `token-derived-colour-uncertified` | oklch(0.851756 0.0347718 268.509) on p (a color-mix of tokens; no certified contrast figure) | 9 | 9 routes; desktop-1440 |
| `token-derived-colour-uncertified` | oklch(0.872933 0.0298115 268.509) on a (a color-mix of tokens; no certified contrast figure) | 9 | 9 routes; desktop-1440 |
| `token-derived-colour-uncertified` | oklch(0.761755 0.0558531 268.509) on span (a color-mix of tokens; no certified contrast figure) | 9 | 9 routes; desktop-1440 |
| `unapproved-font-family` | monospace on code (inside a tracked placeholder) | 3 | /contact/; desktop-1440, ipad-portrait, mobile-390 |
| `token-derived-colour-uncertified` | oklch(0.841168 0.037252 268.509) on p (a color-mix of tokens; no certified contrast figure) | 2 | /virtuoso/, /who-we-are/; desktop-1440 |
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
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/pages.css:321 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-valu | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/pages.css:357 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-valu | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/pages.css:390 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-valu | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/pages.css:521 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-valu | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/pages.css:617 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-valu | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/pages.css:650 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-valu | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/pages.css:657 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-valu | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/pages.css:664 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-valu | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/pages.css:678 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-valu | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/pages.css:686 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-valu | 1 | site-wide |


## Responsive layout failures

| Finding | Detail | Occurrences | Where |
|---|---|---|---|
| `hero-heading-lines` | h1 renders 3 lines at 34px (max 2): "Travel is personal. Planning should be too." | 6 | /expertise/; 6 viewports |
| `hero-heading-lines` | h1 renders 3 lines at 34px (max 2): "People who know travel. People who know you." | 6 | /who-we-are/; 6 viewports |
| `hero-heading-lines` | h1 renders 3 lines at 34px (max 2): "Your world, beautifully planned." | 2 | /; mobile-320, mobile-360 |
| `hero-heading-lines` | h1 renders 3 lines at 34px (max 2): "Tell us where your imagination is going." | 2 | /contact/; mobile-360, mobile-375 |
| `hero-heading-lines` | h1 renders 3 lines at 34px (max 2): "Connections that make travel richer." | 1 | /virtuoso/; mobile-320 |
| `hero-heading-lines` | h1 renders 4 lines at 34px (max 2): "People who know travel. People who know you." | 1 | /who-we-are/; mobile-320 |
| `hero-heading-lines` | h1 renders 4 lines at 34px (max 2): "Tell us where your imagination is going." | 1 | /contact/; mobile-320 |
| `hero-heading-lines` | h1 renders 4 lines at 34px (max 2): "Travel is personal. Planning should be too." | 1 | /expertise/; mobile-320 |
| `hero-heading-lines` | h1 renders 4 lines at 34px (max 3, article title): "Travelling with Sienna: looking south to Antarctica" | 1 | /journal/looking-south-to-antarctica/; mobile-320 |


Warnings:

| Finding | Detail | Occurrences | Where |
|---|---|---|---|
| `container-width-inconsistent` | .shell renders at 1200, 980px on one page | 6 | /journal/looking-south-to-antarctica/; 6 viewports |
| `line-length-long` | p measures about 94ch against a 68ch guide | 1 | /contact/; ipad-air-portrait |
| `container-width-inconsistent` | .shell renders at 1086, 980px on one page | 1 | /journal/looking-south-to-antarctica/; ipad-air-landscape |
| `button-wraps` | a.button.button-outline "Send an enquiry instead" wraps to 2 lines | 1 | /contact/; mobile-320 |
| `container-width-inconsistent` | .shell renders at 1184, 980px on one page | 1 | /journal/looking-south-to-antarctica/; desktop-1280 |


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
| 1 | fail | `hero-heading-lines` | 21 | Shorten the copy or widen the measure. The kit caps display headings at two lines. |
| 2 | warn | `stylelint-scale-unlimited/declaration-strict-value` | 37 | src/styles/blocks.css:121 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-value) |
| 3 | warn | `token-derived-colour-uncertified` | 31 | oklch(0.851756 0.0347718 268.509) on p (a color-mix of tokens; no certified contrast figure) |
| 4 | warn | `container-width-inconsistent` | 8 | .shell renders at 1200, 980px on one page |
| 5 | warn | `stylelint-no-duplicate-selectors` | 5 | src/styles/blocks.css:125 Duplicate selector ".newsletter h2", first used at line 119 (no-duplicate-selectors) |
| 6 | warn | `unapproved-font-family` | 3 | monospace on code (inside a tracked placeholder) |
| 7 | warn | `line-length-long` | 1 | p measures about 94ch against a 68ch guide |
| 8 | warn | `button-wraps` | 1 | a.button.button-outline "Send an enquiry instead" wraps to 2 lines |
| 9 | warn | `css-colour-off-palette` | 1 | 8 value(s) outside the kit: oklch(20% .03 264 / .55), oklch(18% .03 264 / .82), oklch(18% .03 264 / .45), oklch(18% .03 264 / .28), rgb(17 23 43 / 80%), rgb(17 23 43 / 38%), #f6f3ef, #ece7e2 |
| 10 | warn | `css-font-size-off-scale` | 1 | Route these through the ten type tokens rather than ad-hoc rem values. |
| 11 | warn | `css-radius-unapproved` | 1 | 2 value(s) outside the kit: 6px, 4px |
| 12 | info | `element-outside-viewport` | 25 | 2 element(s) past a 1024px document, first: img spans -30.7 to 1054.7 (contained by overflow-x: clip, intended full-bleed) |
| 13 | info | `reduced-motion-residual` | 1 | 0 element(s) keep a transition or animation longer than 300ms under prefers-reduced-motion |
| 14 | info | `carousel-no-pause-control` | 1 | The carousel advances every 3s with no visible pause control. Approved in brand kit v3 with four mitigations in place; the residual WCAG 2.2.2 gap is a recorded accepted risk, not a new finding. |
| 15 | info | `enquiry-form-not-delivering` | 1 | PUBLIC_WEB3FORMS_KEY is unset, so the form opens a mail draft instead of delivering. Tracked as a placeholder in docs/CONTENT-REGISTER.md. |


## How to reproduce

```bash
corepack pnpm build
corepack pnpm test:qa
```

Machine-readable form of everything above: `qa/reports/results.json`.
