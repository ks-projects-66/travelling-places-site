# Brand kit changelog

The version lives in `brand.tokens.json` and in the header of `BRAND.md`. It is not in the folder
name. Between 2.1.0 and 3.0.0 those two files disagreed, and that gap is what let the kit fork from
itself, so any release that changes a value changes both.

## 3.4.0

From the owner's phone redesign, decided 2 November 2026 and built in stages. Under the
lead-and-lag rule the website changed first and this kit records it. The sections below are
added to as each stage lands, so a later stage appends its own bold paragraphs here rather than
opening a new version.

**Phone hero is split.** At 680px and below the photographic hero no longer puts the title over
the photograph. The photograph sits on top, full width with no gutter, at a 3:2 ratio. The title,
lede and actions follow beneath it on the ground colour with a hairline at the bottom edge, in
navy, muted ink, the ordinary navy text link and navy arrows with a navy focus bar. The darkening
overlay is gone on phones, because nothing sits over the photograph. The navy tone and the
tablet and desktop hero are unchanged.

**Phone type scale.** Display and page title are 30px, section title 28px, subsection title 21px,
lead 17px and meta label 12px at 680px and below. Body stays 16px. `brand.tokens.json` records
these as `minPhone` with `phoneBreakpoint: "680px"`; the `min` values are unchanged because
tablets keep them. The 374px override stays at 29px: with the wider gutter it holds two lines on
every hero from 332px up (sampled in 6px steps), and three on the home hero at 320px and 326px,
which the rule already allows below 375px.

**Gutter floor is 24px.** `--tp-gutter` is `clamp(1.5rem, 4vw, 3rem)` and `layout.gutterMin` is
24px, up from 20px. It only changes anything below 600px.

**Phone header.** At 680px and below the lockup is 124px wide at the left gutter and the menu
toggle is an icon only at the right gutter. A centred lockup was built first and replaced the same
day on the owner's review. The Menu and Close labels are clipped from
view rather than removed, so the accessible name still follows the state. The open panel and its
links are unchanged, and from 681px to 940px the header keeps the logo on the left and the labelled
toggle on the right. The 124px lockup is below the 172px digital minimum in `BRAND.md`, which the
earlier 137px phone lockup already was; `BRAND.md` now records the phone figure as an owner decision.

**Buttons are refined.** The pill radius stays 999px. Height is 48px (`preferredButtonHeight`,
`--tp-button-height` 3rem), down from 50px, and inline padding is 32px (`buttonInlinePadding`), up
from 28px. Type is 15px at weight 500 with 0.02em tracking (`type.button`, `--tp-type-button`,
`--tp-button-tracking`), down from 16px at 600. Hover is a colour change over 220ms, and the 2px lift
is gone. The primary button is navy with white text (12.23 to 1) and turns night on hover (15.86 to
1), where it was blue turning navy. The on-dark button is white with navy text and turns mist (10.66
to 1) in place of red. The secondary and outline buttons carry a 1px border and no fill, and fill
navy (light) or white (dark) on hover with the text inverted. The header call to action keeps a 44px
height. Focus is unchanged. The site class `.button-blue` keeps its name so markup and tests do not
change, but it is navy now. The blue token stays for in-content accents and is no longer a button
colour.

## 3.3.0

From the owner's review on a phone, 31 October 2026. Under the lead-and-lag rule the website
changed first and this kit records it.

**Focus is never red.** The 3px red outline drew a red box, and after a tap on the menu iOS Safari
painted it on the first link beside the red current-page rule, which read as two current pages.
Focus is now a 2px rule under text links and icon controls, a 2px ring that follows a pill
button, and a 2px border on a field, in navy on light surfaces and white on dark ones. Red keeps
the current-page rule only. `focusWidth` is 2px and `focusStyle` records the treatment.

**Menu heading is 22px.** The open phone menu set its links at 26px to 30px and centred them, which
left a third of the screen empty under the header and dwarfed the Start planning button. Links
now start under the header hairline at 22px on a 44px row, and the button is full size. Measured
against Aman's phone menu (19px, regular, top-aligned under a hairline).

**Carousel arrows are plain arrowheads.** No circle and no wash. The two sit together at the
bottom right of the hero's text block, on the line of its last action, at every width.

## 3.2.0

From the owner's fitted pattern sheet of 31 October 2026. The website changed first and this kit
records it.

**Column rule.** Equal items with no photograph sit in equal columns divided by a 1px vertical rule
in the line colour, not on white cards. The rule collapses to space when the columns stack.

**Ruled list.** Short points in a column are rows between 1px rules, body size, regular weight, in
ink. Inclusions inside a photograph card stay two by two with no rules, now in ink at regular weight:
bold navy read as links.

**Meta label tokens corrected.** `brand.tokens.json` still described the retired uppercase label
after 3.1.0. It now matches BRAND.md: 13px, weight 500, sentence case, no tracking.
`--tp-type-meta-label` in `styles/tokens.css` is still 0.78rem and is used by two rules in the
website; aligning it is left for a separate change because it moves those two rules.

**Not adopted from the sheet:** the uppercase, tracked eyebrow at 11px. It would reverse 3.1.0 and
sits below the reading sizes; the sentence-case meta label does the same job.

## 3.1.0

From the owner's callout round of 25 October 2026 (`docs/CALLOUTS-2026-10-25.md`). Under the
owner's lead-and-lag rule the website changed first and this kit records it.

**New colour, night (#18213D).** The footer's surface and nothing else's, one step below navy, so
the footer is a place of its own rather than one more navy band. White on night is 15.86 to 1 and is
now a required pair in `brand-check.mjs`.

**The meta label is a quiet rubric.** Sentence case, fine size, weight 500, muted ink, no tracking.
The date moves to the byline, and nothing in a byline is separated by dots. The red, tracked,
uppercase label is retired.

**Linked headlines** answer the pointer with a hairline in their own colour; story photographs scale
very slightly inside their frame.

**Lists and cards.** Inclusions are short navy phrases two by two, with no rules or markers. Equal
promises may sit on white square cards on mist. Partner marks made for light grounds take a small
white plate on navy.

## 3.0.2

**The website carousel is now the home hero, at six seconds, with previous and next buttons.** The
owner moved the carousel from mid-page to the hero and asked for arrows on 25 October 2026, then
set the interval to six seconds, which matches the kit component. The "no visible control" rule in
`BRAND.md` is rewritten accordingly. Hover now holds only on the title and arrows, since a
full-screen hover hold would stop the sequence for most desktop visitors. There is still no pause
button and the WCAG 2.2.2 accepted risk stays recorded. No colour, size or token value changed.

The primary action is renamed from "Plan a journey" to "Start planning" in `BRAND.md` and the
header and button partials, on the owner's instruction that the main action carries one label
everywhere and goes to the Contact form.

`BRAND.md` typography records that the website now uses the kit's self-hosted fonts, preloaded,
instead of Google Fonts. No face, weight or size changed.

## 3.0.1

**The dark mark's white keyline is now continuous.** It was missing on the top of the hair and the
left wingtip, where the figure touches the edge of its artwork. The keyline is a dilation of the
artwork, and both the viewBox and the filter region were cut to the artwork's own bounds, so the
outline was clipped exactly where it met the frame. `mark-dark.svg` now pads its viewBox by 12
units, more than the 8-unit dilation, and the filter region widens to 120%. `lockup-dark.svg` is
regenerated from it. No colour, size or artwork changed.

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
