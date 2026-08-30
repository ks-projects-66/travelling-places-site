# Brand kit changelog

The version lives in `brand.tokens.json` and in the header of `BRAND.md`. It is not in the folder
name. Between 2.1.0 and 3.0.0 those two files disagreed, and that gap is what let the kit fork from
itself, so any release that changes a value changes both.

## 3.0.0

The folder dropped its version suffix: `brand-kit-v2/` became `brand-kit/`, with a 301 from
`/brand-kit-v2/*` in `public/_redirects` because that path was published on the review deployment.

**Type scale restored.** 2.2.1 had raised display to 72px, page title to 56px, section title to 44px
and subsection to 30px while every brand document still described the older, smaller scale. The
documents were right. The scale returns to 34–56px, 36–48px, 30–40px and 22–28px, with line heights
1.08, 1.12, 1.16 and 1.25 and a 24ch display measure. The 34px display floor did not move, so the
hero line-count budget in `DESIGN.md` is unchanged.

**Written down, having shipped in 2.2.1 without reaching the prose:** the warm palette (`ground`
#FAF8F5 as the primary page surface, warm `mist` #F2EFEA, warm `line` #DED8D0), the `redText`
#C92B37 token with its own contrast row, and the `label` type role.

**Written down, having shipped in the website without reaching the kit at all:**

- A `metaLabel` role — 12.5px, weight 600, 0.06em tracking, uppercase — as the one approved uppercase
  treatment. The prohibition on all-caps and eyebrow headings now says explicitly that it reaches
  headings only, and the meta label never uses a heading element.
- Button type moved to 16px/600 from 14px/500.
- Minimum lockup width lowered from 220px to 172px.
- Google Fonts recorded as an approved delivery route for the website, alongside the kit's
  self-hosted files.
- The website carousel: three seconds, no visible control, with four mitigations standing in for a
  pause button. The residual WCAG 2.2.2 gap is recorded as an accepted risk, not fixed.
- Section spacing keeps its 72–120px range, with the 64px floor below 680px named as an exception.

Neither `brand-check.mjs` nor `qa-browser.cjs` had its font-size threshold altered. Both assert 56px
and both were correct; restoring the scale is what made them pass again.

## 2.2.1

Warm neutral palette and the `redText` token, introduced with the Belmond-referenced redesign. Raised
the type scale. Updated `brand.tokens.json` and `styles/tokens.css` only — `BRAND.md`,
`AGENT-BRIEF.md` and both checkers were left describing 2.1.0.

## 2.1.0

Reversed the pill-button ban. Text buttons take the full pill radius; images and fields stay
square-cornered.
