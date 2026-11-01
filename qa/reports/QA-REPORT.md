# QA report

Generated 2026-11-01T09:52:11.550Z against brand kit **v3.3.0** on win32, Node v24.14.0.

All automated tests passed. 0 distinct blocking findings, 30 warnings and 31 informational items, from 86 recorded occurrences.

Every failure below is a real defect in the site or a real deviation from the brand kit. Nothing has been masked, no threshold was raised, and no rule was disabled to produce this result.

## Passed checks

| Suite | Passed | Result |
|---|---|---|
| `a11y` | 40 / 40 | pass |
| `brand` | 48 / 48 | pass |
| `crossbrowser-firefox` | 15 / 15 | pass |
| `crossbrowser-webkit` | 15 / 15 | pass |
| `functional` | 104 / 104 | pass |
| `responsive` | 171 / 171 | pass |


## Failed checks

_None._


## Brand-kit deviations

_None._


Warnings, reported not enforced:

| Finding | Detail | Occurrences | Where |
|---|---|---|---|
| `token-derived-colour-uncertified` | oklch(0.851002 0.0109388 268.882) on p (a color-mix of tokens; no certified contrast figure) | 9 | 9 routes; desktop-1440 |
| `token-derived-colour-uncertified` | oklch(0.746707 0.0185612 268.882) on h2.footer-heading (a color-mix of tokens; no certified contrast figure) | 9 | 9 routes; desktop-1440 |
| `token-derived-colour-uncertified` | oklch(0.883521 0.0273314 268.509) on p (a color-mix of tokens; no certified contrast figure) | 1 | /; desktop-1440 |
| `token-derived-colour-uncertified` | oklch(0.893285 0.0128109 268.546) on p (a color-mix of tokens; no certified contrast figure) | 1 | /; desktop-1440 |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/blocks.css:215 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-val | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/blocks.css:218 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-val | 1 | site-wide |
| `stylelint-declaration-property-value-disallowed-list` | src/styles/blocks.css:292 Disallowed value "underline" for property "text-decoration-line" (declaration-property-value-disallowed-list) | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/pages.css:532 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-valu | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/pages.css:728 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-valu | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/pages.css:752 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-valu | 1 | site-wide |
| `stylelint-declaration-property-value-disallowed-list` | src/styles/pages.css:425 Disallowed value "underline" for property "text-decoration" (declaration-property-value-disallowed-list) | 1 | site-wide |
| `stylelint-declaration-property-value-disallowed-list` | src/styles/pages.css:469 Disallowed value "underline" for property "text-decoration-line" (declaration-property-value-disallowed-list) | 1 | site-wide |
| `stylelint-no-duplicate-selectors` | src/styles/pages.css:434 Duplicate selector ".journal-teaser", first used at line 223 (no-duplicate-selectors) | 1 | site-wide |
| `stylelint-no-duplicate-selectors` | src/styles/pages.css:1019 Duplicate selector ".team-roster", first used at line 660 (no-duplicate-selectors) | 1 | site-wide |
| `stylelint-no-duplicate-selectors` | src/styles/pages.css:1023 Duplicate selector ".closing-cta", first used at line 238 (no-duplicate-selectors) | 1 | site-wide |
| `stylelint-no-duplicate-selectors` | src/styles/pages.css:1029 Duplicate selector ".contact-page", first used at line 777 (no-duplicate-selectors) | 1 | site-wide |
| `stylelint-no-duplicate-selectors` | src/styles/pages.css:1038 Duplicate selector ".service-detail", first used at line 575 (no-duplicate-selectors) | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/placeholders.css:36 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-stric | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/placeholders.css:45 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-stric | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/site.css:717 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-value | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/site.css:728 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-value | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/site.css:214 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-value | 1 | site-wide |
| `css-colour-off-palette` | 12 value(s) outside the kit: canvastext, oklch(18% .03 264 / .74), oklch(18% .03 264 / .54), oklch(18% .03 264 / .18), oklch(18% .03 264 / .44), oklch | 1 | site-wide |
| `css-font-size-off-scale` | 7 value(s) outside the kit: .84rem, 1.8rem, 1.2rem, 4.4em, .9em, .6875rem, .75rem | 1 | site-wide |
| `css-radius-unapproved` | 1 value(s) outside the kit: 4px | 1 | site-wide |


## Responsive layout failures

_None._


Warnings:

| Finding | Detail | Occurrences | Where |
|---|---|---|---|
| `container-width-inconsistent` | .shell renders at 1200, 980px on one page | 6 | /journal/looking-south-to-antarctica/; 6 viewports |
| `button-wraps` | a.button.button-outline "Send an enquiry instead" wraps to 2 lines | 1 | /contact/; mobile-320 |
| `container-width-inconsistent` | .shell renders at 1086, 980px on one page | 1 | /journal/looking-south-to-antarctica/; ipad-air-landscape |
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
| 1 | warn | `token-derived-colour-uncertified` | 20 | oklch(0.851002 0.0109388 268.882) on p (a color-mix of tokens; no certified contrast figure) |
| 2 | warn | `stylelint-scale-unlimited/declaration-strict-value` | 10 | src/styles/blocks.css:215 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-value) |
| 3 | warn | `container-width-inconsistent` | 8 | .shell renders at 1200, 980px on one page |
| 4 | warn | `stylelint-no-duplicate-selectors` | 5 | src/styles/pages.css:434 Duplicate selector ".journal-teaser", first used at line 223 (no-duplicate-selectors) |
| 5 | warn | `stylelint-declaration-property-value-disallowed-list` | 3 | src/styles/blocks.css:292 Disallowed value "underline" for property "text-decoration-line" (declaration-property-value-disallowed-list) |
| 6 | warn | `button-wraps` | 1 | a.button.button-outline "Send an enquiry instead" wraps to 2 lines |
| 7 | warn | `css-colour-off-palette` | 1 | 12 value(s) outside the kit: canvastext, oklch(18% .03 264 / .74), oklch(18% .03 264 / .54), oklch(18% .03 264 / .18), oklch(18% .03 264 / .44), oklch(18% .03 264 / .16), #0b111fcc, #0b111fa8 … |
| 8 | warn | `css-font-size-off-scale` | 1 | Route these through the ten type tokens rather than ad-hoc rem values. |
| 9 | warn | `css-radius-unapproved` | 1 | 1 value(s) outside the kit: 4px |
| 10 | warn | `css-too-many-shadows` | 1 | 3 value(s) outside the kit: 0 var(--tp-focus-width) 0 var(--focus-ring), 0 4px 8px color-mix(in oklch,var(--blue-deep) 8%,transparent), 0 calc(var(--tp-space-md) + var(--tp-focus-width)) 0 calc(-1 * var(--tp-space-md)) var(--focus-ring) |
| 11 | info | `element-outside-viewport` | 32 | 2 element(s) past a 390px document, first: img spans -7.8 to 397.8 (contained by overflow-x: clip, intended full-bleed) |
| 12 | info | `reduced-motion-residual` | 1 | 0 element(s) keep a transition or animation longer than 300ms under prefers-reduced-motion |
| 13 | info | `carousel-no-pause-control` | 1 | The hero advances every 6s with previous and next buttons but no pause button. Hover on the title or arrows, focus, a hidden tab and reduced motion all hold it; the residual WCAG 2.2.2 gap is a recorded accepted risk (brand-kit/BRAND.md, carousel). |
| 14 | info | `enquiry-form-not-delivering` | 1 | PUBLIC_WEB3FORMS_KEY is unset, so the form opens a mail draft instead of delivering. Tracked as a placeholder in docs/CONTENT-REGISTER.md. |


## How to reproduce

```bash
corepack pnpm build
corepack pnpm test:qa
```

Machine-readable form of everything above: `qa/reports/results.json`.
