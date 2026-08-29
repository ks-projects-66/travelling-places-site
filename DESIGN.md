# Design System

## Direction

A bright, image-led travel brand site with the welcoming poise of a long-established local advisor. White space carries the page; Travelling Places blue provides structure and confidence; the logo red appears in small, decisive accents.

## What this file governs

Since brand kit v2.1.0, `brand-kit-v2/` is canonical for **tokens, type scale, colour and
controls**. This file governs **layout and imagery** and does not restate values the kit owns.
Where the two disagree, the kit wins on values and this file wins on layout and imagery.

Values live in one place: `src/styles/tokens.css` imports the kit's tokens and aliases them onto
the site's variable names, so a kit release propagates without edits here.

| Looking for | Read |
|---|---|
| Colour, type scale, spacing, shape, motion | `brand-kit-v2/styles/tokens.css` and `brand.tokens.json` |
| Logo rules, contrast pairs, button and form specification | `brand-kit-v2/BRAND.md` |
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
| Heroes | Full-bleed, edge to edge, no containing gutter |
| Text over image | Heroes only. Cards place text beneath the image, never on it |
| Overlays | Minimal darkening, and only where legibility demands it |
| Captions | Never burned into the image. Descriptive text sits below as a separate element |
| Grading | Warm and saturated, jewel tones, natural light |
| Crop | Subject placed prominently rather than dead-centre |
| Motion | Stills only. No video anywhere on the reference site |

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

| Page | Characters | Lines at 375px |
|---|---|---|
| Home | 31, but "beautifully planned." is 20 | 3 |
| Expertise | 42 | 3 |
| Virtuoso | 35 | 3 |
| Who we are | 43 | 3 |
| Contact | 39 | 3 |

`BRAND.md` offers three remedies. Widening the measure is already exhausted at 375px, and
reducing the size below 34px would leave the token range. That leaves shortening the copy, which
is an editorial decision rather than a styling one. The headings are unchanged pending that call.

The article page also runs to three lines at every width, but its title is placeholder text from
the design mock-up and is replaced when Sienna's approved article arrives.
