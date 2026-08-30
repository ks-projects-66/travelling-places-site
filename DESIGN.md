# Design System

## Direction

A bright, image-led travel brand site with the welcoming poise of a long-established local advisor. White space carries the page; Travelling Places blue provides structure and confidence; the logo red appears in small, decisive accents.

## What this file governs

Since brand kit v2.1.0, `brand-kit/` is canonical for **tokens, type scale, colour and
controls**. This file governs **layout and imagery** and does not restate values the kit owns.
Where the two disagree, the kit wins on values and this file wins on layout and imagery.

Values live in one place: `src/styles/tokens.css` imports the kit's tokens and aliases them onto
the site's variable names, so a kit release propagates without edits here.

| Looking for | Read |
|---|---|
| Colour, type scale, spacing, shape, motion | `brand-kit/styles/tokens.css` and `brand.tokens.json` |
| Logo rules, contrast pairs, button and form specification | `brand-kit/BRAND.md` |
| Layout, imagery direction, the Belmond ruling | This file |

## Layout

- Maximum content width: 1200px, matching the kit's `--tp-content-max`.
- Responsive gutters: 20px to 48px.
- Vertical section rhythm follows the kit's `--tp-space-section`, 72px to 120px.
- Photographic imagery is square-cornered and uncorniced. Fields are square-cornered.
  Text buttons use the full pill radius, per v2.1.0.
- No card grids; information is organised with open columns and ruled lists. This is a
  deliberate departure from the imagery reference and is explained below.
- No eyebrow headings, no decorative numbering, no diagonal arrows. Section openings are the
  heading itself.

## Imagery

Use the supplied team and founder photography as the primary visual story. Keep crops natural and human. The illustrated aircraft mark is a light brand signature, not a repeated decoration.

## Motion

Use one restrained first-load sequence and tactile hover/focus feedback. Respect `prefers-reduced-motion` and never hide content behind animation.

## Imagery direction

Reference: `belmond.com`. The visual system is what is being referenced, not the photographs.

| Aspect | Specification |
|---|---|
| Primary ratio | 4:5 portrait for destination and feature cards |
| Secondary ratio | 16:9 landscape for wider contextual scenes |
| Grid thumbnails | 1:1 square |
| Heroes | Full-bleed, edge to edge, no containing gutter. Built 30 August 2026 as `PageHero.astro`, `min(85vh, 860px)` |
| Text over image | Heroes only. Cards place text beneath the image, never on it |
| Overlays | Minimal darkening, and only where legibility demands it |
| Captions | Never burned into the image. Descriptive text sits below as a separate element |
| Grading | Warm and saturated, jewel tones, natural light |
| Crop | Subject placed prominently rather than dead-centre |
| Panoramic | 2.46:1 for the home carousel. Verified against the built page on 29 August 2026 |
| Motion | The reference site's hero is a **video loop**, not a still. Corrected 30 August 2026: the previous claim that it holds no video was wrong. This site remains stills-only by choice, not because the reference is |

Every image needs a row in `src/assets/images/MANIFEST.md` before it is used.

## Resolved: what was taken from Belmond, and what was not

Decided 29 August 2026. The imagery reference and the earlier layout rules conflicted in two
places, and both are now settled.

**Taken: the look.** Ratio discipline, grading, crop, full-bleed heroes, square corners, text
below cards rather than over them. Most of this was already how the site was built. The carousel,
the team panorama and the article hero were full-bleed and square-cornered before this reference
existed, while the written rule still said 12px corners. The rule described less than the code
did, so the rule changed.

Two things moved as a result. The home hero photograph and Gina's portrait lost their 12px
corners, which were the last two rounded photographs on the site. And five editorial image slots
that had drifted to four different landscape ratios (16:10, 16:8 and 4:3 twice) are now all 16:9.

Corners on interface chrome are untouched. The enquiry dialog and the booking panels keep 12px,
because the rule governs photography, not panels.

**Refused: the grid.** Belmond organises by tile grid, eight to twelve property thumbnails per
region. That is right for them and wrong here. They are selling forty hotels, so the visitor's job
is to compare properties. Travelling Places is selling one relationship with an advisor.

`PRODUCT.md` names this directly in its anti-references: avoid "interfaces that make visitors
compare dozens of products before speaking to a person." A tile grid is that interface. It is the
one element of the reference that fights the product rather than the design file.

So Expertise keeps its numbered ruled rows and the Journal keeps its horizontal article list. If a
future brief asks for a grid, this is the reasoning it has to argue with.

## Known residual: hero line count at 375px

`BRAND.md` requires hero headings to hold to two lines at 375, 768, 1280 and 1440px. At 1280 and
1440 every hero holds. At 375px four do not, and the cause is arithmetic rather than styling.

The kit floors display type at 34px. With 20px gutters a 375px screen leaves 335px of measure,
which fits about 18 characters per line at that size. A hero therefore has a budget of roughly
**36 characters, with no single word group longer than 18**. Four headings exceed it:

**Resolved 30 August 2026.** Approved by Karim, and measured across seven widths from 320 to 430px
on the built output rather than reasoned about.

Two of the three remedies `BRAND.md` offers were taken together, because neither was sufficient
alone. Four headings were shortened to a 32-character budget, and display type steps to 29px below
375px, where the 34px floor makes two lines unachievable rather than merely tight.

| Page | Was | Now | Chars |
|---|---|---|---|
| Home | Your world, beautifully planned. | unchanged | 32 |
| Expertise | Travel is personal. Planning should be too. | Planned around how you travel. | 30 |
| Who we are | People who know travel. People who know you. | People who know travel, and you. | 32 |
| Contact | Tell us where your imagination is going. | Where is your imagination going? | 32 |
| Virtuoso | Connections that make travel richer. | Connections that enrich travel. | 31 |
| Journal | Ideas worth travelling for. | unchanged | 27 |

Measured result: 48 of 49 page and width combinations hold two lines. The single exception is the
home hero at 320px, where "beautifully" is an eleven-character word that cannot share a line at any
size the scale permits. The kit therefore tolerates a third line below 375px, and the automated
check encodes that. From 375px up, every hero on every route holds two lines.

The article title is allowed three lines as an editorial headline rather than display copy, which
is also recorded in the kit. Karim confirmed on 30 August 2026 that the Antarctica piece is a real
Sienna article rather than mock-up copy; `CLAUDE.md` and `docs/CONTENT-REGISTER.md` C10 still
describe it as written for the mock-up, and need correcting to match.


## Hero tones, and which pages are waiting on photography

Added 30 August 2026, when the full-bleed hero was finally built.

`PageHero.astro` has two tones. `photo` is the intended state: one photograph, edge to edge, title
over it under a two-stop scrim. `navy` is the same opening on `--tp-navy` with no image.

The navy tone is not a placeholder. It is a finished design that a photograph replaces by passing
one prop, which is exactly what happened on three pages when the licensed set arrived.

Updated 30 August 2026, when the licensed imagery landed.

| Page | Tone | Photograph | `object-position` |
|---|---|---|---|
| Home | photo | `team/team-outside.jpg`, owned | `center 22%` |
| Who we are | photo | `team/team-office.jpg`, owned | `center 20%` |
| Expertise | photo | `hero/expertise-mountain-lake.jpg` | `center 38%` |
| Virtuoso | photo | `hero/virtuoso-island.jpg` | `center 42%` |
| Contact | photo | `hero/contact-lookout.jpg` | `center 55%` |
| Journal | navy | **awaiting**. The only page still on the navy tone | n/a |
| Privacy, 404 | plain | none wanted. A cinematic opening on a policy or error page is noise | n/a |

Crops are set per page with `object-position`, because both team photographs place faces near the
top of the frame and an 85vh crop decapitates them at the default `center`. Home sits at
`center 22%`, Who we are at `center 20%`. Any replacement photograph needs its own value checked at
1440px **and** 390px, since the crop ratio runs from about 0.54:1 to 2.98:1.

## Section rhythm

Every section shared one padding value until 30 August 2026, which is what made the page read as a
metronome. Three bands now:

| Band | Value at 1440px | Used by |
|---|---|---|
| Tight | 72px | `expertise-preview`, `team-roster`, `featured-article` |
| Standard | 120px | prose sections, and the default for anything unlisted |
| Open | 160px | `closing-cta`, `value-band`, `team-values` |

Two images leave the 1200px shell and run to the viewport edge, alternating side: the founder
portrait breaks left, the journal teaser breaks right. `html { overflow-x: clip }` guarantees the
negative margins cannot produce a horizontal scrollbar.


## Header and heading colour

Decided 30 August 2026, after reviewing the reference alongside the built pages.

**The header is solid white and sits in the flow**, sticky to the top. It previously floated
transparent over the hero and faded to a translucent tint past 24px of scroll. That forced the
link colour, the logo lockup and the menu label all to invert over dark heroes and swap back
mid-scroll, and it produced a white-on-white mobile menu at the top of six pages. A solid bar
removes the whole class of problem, and roughly 30 lines of `:has()` inversion CSS went with it.

**Hero headings are one colour.** The two-tone treatment set the first line in white and the
second in a red that had to be lightened to survive the photograph, which read as two competing
statements. The line break alone now carries the rhythm, matching how the reference sets a large
serif heading above smaller body text in a single colour. `.hero-accent` is kept in the markup as
the second-line wrapper but inherits its colour.

The logo lockup is 22% smaller: `clamp(172px, 17vw, 207px)`, from `clamp(220px, 22vw, 265px)`.

## Red is now two tokens

Kit 2.2.1. `--tp-red` #d7333f stays the brand red for display type and non-text marks. Warming the
page ground in 2.2.0 dropped it to 4.13:1 on mist and 4.47:1 on ground, both under AA for small
text. `--tp-red-text` #c92b37 clears 4.71:1 on every light surface and carries all small red text:
story meta, role labels, field errors, placeholder notes and text-link hover.
