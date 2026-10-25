# QA report

Generated 2026-10-25T09:41:32.778Z against brand kit **v3.0.2** on linux, Node v22.22.0.

All automated tests passed. 0 distinct blocking findings, 32 warnings and 23 informational items, from 89 recorded occurrences.

Every failure below is a real defect in the site or a real deviation from the brand kit. Nothing has been masked, no threshold was raised, and no rule was disabled to produce this result.

## Passed checks

| Suite | Passed | Result |
|---|---|---|
| `a11y` | 40 / 40 | pass |
| `brand` | 48 / 48 | pass |
| `crossbrowser-firefox` | 15 / 15 | pass |
| `crossbrowser-webkit` | 15 / 15 | pass |
| `functional` | 93 / 93 | pass |
| `responsive` | 171 / 171 | pass |


## Failed checks

_None._


## Brand-kit deviations

_None._


Warnings, reported not enforced:

| Finding | Detail | Occurrences | Where |
|---|---|---|---|
| `token-derived-colour-uncertified` | oklch(0.883521 0.0273314 268.509) on p (a color-mix of tokens; no certified contrast figure) | 9 | 9 routes; desktop-1440 |
| `token-derived-colour-uncertified` | oklch(0.851756 0.0347718 268.509) on p (a color-mix of tokens; no certified contrast figure) | 9 | 9 routes; desktop-1440 |
| `token-derived-colour-uncertified` | oklch(0.761755 0.0558531 268.509) on span (a color-mix of tokens; no certified contrast figure) | 9 | 9 routes; desktop-1440 |
| `token-derived-colour-uncertified` | oklch(0.841168 0.037252 268.509) on p (a color-mix of tokens; no certified contrast figure) | 1 | /who-we-are/; desktop-1440 |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/blocks.css:169 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-val | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/blocks.css:172 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-val | 1 | site-wide |
| `stylelint-no-duplicate-selectors` | src/styles/blocks.css:105 Duplicate selector ".newsletter h2", first used at line 99 (no-duplicate-selectors) | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/pages.css:683 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-valu | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/pages.css:707 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-valu | 1 | site-wide |
| `stylelint-declaration-property-value-disallowed-list` | src/styles/pages.css:406 Disallowed value "underline" for property "text-decoration" (declaration-property-value-disallowed-list) | 1 | site-wide |
| `stylelint-declaration-property-value-disallowed-list` | src/styles/pages.css:452 Disallowed value "underline" for property "text-decoration" (declaration-property-value-disallowed-list) | 1 | site-wide |
| `stylelint-declaration-property-value-disallowed-list` | src/styles/pages.css:1266 Disallowed value "underline" for property "text-decoration" (declaration-property-value-disallowed-list) | 1 | site-wide |
| `stylelint-no-duplicate-selectors` | src/styles/pages.css:420 Duplicate selector ".journal-teaser", first used at line 207 (no-duplicate-selectors) | 1 | site-wide |
| `stylelint-no-duplicate-selectors` | src/styles/pages.css:977 Duplicate selector ".team-roster", first used at line 615 (no-duplicate-selectors) | 1 | site-wide |
| `stylelint-no-duplicate-selectors` | src/styles/pages.css:988 Duplicate selector ".contact-page", first used at line 732 (no-duplicate-selectors) | 1 | site-wide |
| `stylelint-no-duplicate-selectors` | src/styles/pages.css:997 Duplicate selector ".service-detail", first used at line 522 (no-duplicate-selectors) | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/placeholders.css:36 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-stric | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/placeholders.css:45 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-stric | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/site.css:451 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-value | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/site.css:635 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-value | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/site.css:646 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-value | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/site.css:169 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-value | 1 | site-wide |
| `css-colour-off-palette` | 11 value(s) outside the kit: oklch(18% .03 264 / .74), oklch(18% .03 264 / .54), oklch(18% .03 264 / .18), oklch(18% .03 264 / .44), oklch(18% .03 264 | 1 | site-wide |
| `css-font-size-off-scale` | 8 value(s) outside the kit: 1.3rem, .84rem, 1.8rem, 1.2rem, 4.4em, .9em, .6875rem, .75rem | 1 | site-wide |
| `css-radius-unapproved` | 1 value(s) outside the kit: 4px | 1 | site-wide |


## Responsive layout failures

_None._


Warnings:

| Finding | Detail | Occurrences | Where |
|---|---|---|---|
| `container-width-inconsistent` | .shell renders at 1200, 980px on one page | 6 | /journal/looking-south-to-antarctica/; 6 viewports |
| `container-width-inconsistent` | .shell renders at 1184, 980px on one page | 1 | /journal/looking-south-to-antarctica/; desktop-1280 |
| `container-width-inconsistent` | .shell renders at 1086, 980px on one page | 1 | /journal/looking-south-to-antarctica/; ipad-air-landscape |
| `button-wraps` | a.button.button-outline "Send an enquiry instead" wraps to 2 lines | 1 | /contact/; mobile-320 |


## Accessibility failures

_None._


Moderate and minor, reported in full rather than filtered:

| Finding | Detail | Occurrences | Where |
|---|---|---|---|
| `focus-outline-thin` | button "" focus outline is 2px | 1 | /; desktop-1440 |
| `focus-outline-thin` | a "Cruising From intimate luxury " focus outline is 2px | 1 | /; desktop-1440 |
| `focus-outline-thin` | a "Luxury travel Exceptional stay" focus outline is 2px | 1 | /; desktop-1440 |


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
| 1 | warn | `token-derived-colour-uncertified` | 28 | oklch(0.883521 0.0273314 268.509) on p (a color-mix of tokens; no certified contrast figure) |
| 2 | warn | `stylelint-scale-unlimited/declaration-strict-value` | 10 | src/styles/blocks.css:169 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-value) |
| 3 | warn | `container-width-inconsistent` | 8 | .shell renders at 1200, 980px on one page |
| 4 | warn | `stylelint-no-duplicate-selectors` | 5 | src/styles/blocks.css:105 Duplicate selector ".newsletter h2", first used at line 99 (no-duplicate-selectors) |
| 5 | warn | `focus-outline-thin` | 3 | button "" focus outline is 2px |
| 6 | warn | `stylelint-declaration-property-value-disallowed-list` | 3 | src/styles/pages.css:406 Disallowed value "underline" for property "text-decoration" (declaration-property-value-disallowed-list) |
| 7 | warn | `button-wraps` | 1 | a.button.button-outline "Send an enquiry instead" wraps to 2 lines |
| 8 | warn | `css-colour-off-palette` | 1 | 11 value(s) outside the kit: oklch(18% .03 264 / .74), oklch(18% .03 264 / .54), oklch(18% .03 264 / .18), oklch(18% .03 264 / .44), oklch(18% .03 264 / .16), #0b111fcc, #0b111fa8, #0b111f80 … |
| 9 | warn | `css-font-size-off-scale` | 1 | Route these through the ten type tokens rather than ad-hoc rem values. |
| 10 | warn | `css-radius-unapproved` | 1 | 1 value(s) outside the kit: 4px |
| 11 | info | `element-outside-viewport` | 25 | 2 element(s) past a 1024px document, first: img spans -20.5 to 1044.5 (contained by overflow-x: clip, intended full-bleed) |
| 12 | info | `reduced-motion-residual` | 1 | 0 element(s) keep a transition or animation longer than 300ms under prefers-reduced-motion |
| 13 | info | `enquiry-form-not-delivering` | 1 | PUBLIC_WEB3FORMS_KEY is unset, so the form opens a mail draft instead of delivering. Tracked as a placeholder in docs/CONTENT-REGISTER.md. |
| 14 | info | `carousel-no-pause-control` | 1 | The hero advances every 6s with previous and next buttons but no pause button. Hover on the title or arrows, focus, a hidden tab and reduced motion all hold it; the residual WCAG 2.2.2 gap is a recorded accepted risk (brand-kit/BRAND.md, carousel). |


## How to reproduce

```bash
corepack pnpm build
corepack pnpm test:qa
```

Machine-readable form of everything above: `qa/reports/results.json`.
