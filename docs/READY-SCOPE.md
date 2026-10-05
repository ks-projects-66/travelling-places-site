# Ready scope

Prepared 5 October 2026 against `gina-review` at `03d7d50`. Scoping only: no site changes.
Read alongside `docs/CONTENT-REGISTER.md` (R1 to R21) and `docs/COPY-MAP.md`, which this does
not repeat.

**Standard.** Ready means the site says only what Gina has said or approved, offers only routes
that work, and launches with no visible gap.

## 1.0 The gap the copy map does not cover

`COPY-MAP.md` traces Gina's 75 paragraphs onto the site. It does not trace the other direction:
site copy that came from the mock-up and design review rather than from her. That copy is still
live, is hard-coded in `.astro` files (against the `CLAUDE.md` content rule), and is not in her
review list.

**Factual claims she has not made**

| Line | Where | Recommendation |
|---|---|---|
| "more than 100 years of collective industry experience" | Home, `index.astro:60` | Gina confirms, or remove |
| "every fortnight" / "fortnightly" newsletter and notes | Footer, Home, Journal | Gina confirms cadence, or remove the cadence |
| "Five advisors... a remarkably long memory" | About hero | Gina confirms headcount, or remove |
| "Fifteen minutes, no obligation" | Calendly block | Set when Calendly is configured (C8) |

**Voice lines she has not seen as copy**

Home hero ("Your world, beautifully planned"), "Travel has changed. Good service shouldn't.",
carousel captions, "Journeys shaped around you", the Virtuoso band and Gina's short bio; Virtuoso
hero and "The network is global" band; Contact hero and "Come and see us"; About hero; the four
Tailor-made service cards (titles, paragraphs, 16 bullet points).

Recommendation: send these to Gina as one "approve or strike" list. Struck lines are removed, not
rewritten.

## 2.0 Placeholders at launch

Placeholders stay visible on the review build (standing ruling). At launch each one is either
filled or its section is removed. None ships. This matches R15 and applies equally to the
partner row (R19), Luxury theme photos and service card photos.

## 3.0 Addition to the Gina email

The draft email already covers R13 to R19. One item to add under "Wording to check":

> Some short lines on the site were written during design, not taken from your documents: the
> headlines on each page, the four service cards on Tailor-made, and a few phrases such as "100
> years of collective experience", "every fortnight" and "five advisors". I've listed them below.
> Please tick the ones you're happy with; anything you strike comes off.

## 4.0 Housekeeping

1. **Record dates.** Rulings are recorded as 28 September 2026, but both `gina-review` commits are
   timestamped 27 September (AEST). Likely a one-day error in CLAUDE.md, DESIGN.md, the register,
   COPY-MAP and two data files. Karim to confirm before merge.
2. **Hard-coded prose.** Lines in 1.0 live in `.astro` files, so the CMS cannot edit them. Move
   whichever survive Gina's review into `src/data/`.

## 5.0 Superseded

The first version of this file (commit `ad011f7`, built from `main`) recommended restoring
Gina's seven Luxury sections, removing the Journal and Antarctica article, raising the copy-match
note, and correcting the privacy host to Vercel. Those conflicted with standing rulings or with
the register (Cloudflare Pages is the intended launch host) and are withdrawn.
