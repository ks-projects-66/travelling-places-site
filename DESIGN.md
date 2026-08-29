# Design System

## Direction

A bright, image-led travel brand site with the welcoming poise of a long-established local advisor. White space carries the page; Travelling Places blue provides structure and confidence; the logo red appears in small, decisive accents.

## Colour

- Brand blue: `oklch(48% 0.14 264)`
- Deep blue: `oklch(31% 0.10 264)`
- Brand red: `oklch(62% 0.22 23)`
- Ink: `oklch(25% 0.025 264)`
- Muted ink: `oklch(46% 0.025 264)`
- Cool mist: `oklch(96.5% 0.008 264)`
- White: `oklch(100% 0 0)`

## Typography

- Display and headings: Baskerville / Libre Baskerville, matching the serif character of the wordmark.
- Body and interface: IBM Plex Sans with system sans-serif fallbacks.
- Large headings use balanced line wrapping and restrained tracking.

## Layout

- Maximum content width: 1200px.
- Responsive gutters: 20px to 48px.
- Generous vertical section rhythm: 80px to 144px.
- Photographic imagery is square-cornered and uncorniced; buttons use a full pill shape.
- No card grids; information is organised with open columns and ruled lists. This is a
  deliberate departure from the imagery reference and is explained below.

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
