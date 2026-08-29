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
- 12px image corners; buttons use a full pill shape.
- No decorative card grids; information is organised with open columns and ruled lists.

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

## Open decision: Belmond against the current system

The imagery direction above conflicts with two rules set earlier in this file.

| This file says | Belmond does |
|---|---|
| 12px image corners | Square corners, full-bleed |
| "No decorative card grids" | Leans on grids for destination and property tiles |

Both cannot hold. This has deliberately not been resolved: the incumbent look is approved and
built, and redesigning it is a decision for the business, not a developer.

The natural moment to settle it is when the brand kit lands, since that is the document that
should govern. If Belmond stays pinned as the reference, this file is what changes, because a
pinned reference is a brief and the brief wins.

Until then the site renders in the approved style: 12px corners, open columns, ruled lists.
