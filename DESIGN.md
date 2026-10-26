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
- Card grids are allowed where they are restrained: square photography, no shadows, every card in
  a group built the same way. Approved by Karim on 27 September 2026; the earlier refusal and its
  reasoning are kept below. Equal promises with no photograph sit on white square cards on mist
  (About, since 25 October 2026). A large white panel holding a logo or a list on a coloured ground
  is not a card and is not used.
- **Page openings** (since 25 October 2026, owner callouts CO8 and CO12): a page that opens with a
  statement under its hero centres it, `OpeningStatement.astro`. One serif line leads (the heading,
  or the first sentence of Gina's paragraph when there is no heading) and the rest follows at the lead
  size as a centred block of left-aligned text about 38rem wide (since 26 October 2026: six centred
  lines made every line start somewhere new). Home, Tailor-made, Luxury and About open this way.
- **Long copy beside its heading** (CO10): `split-section`, heading in a lead column of five parts,
  paragraphs in a second column of six, every paragraph at the lead size and one measure (about 60
  characters). Measured against Belmond and A&K, who both pin copy to one side and leave the rest
  open. Since 26 October 2026 the lead column holds as the text scrolls and carries a pull line
  lifted verbatim from the section (`pull` in the data, hidden from assistive technology as a
  repeat), and a second text section in a row mirrors the first (`split-section--reverse`).
- **Benefit lists** (inclusions on service cards, Gina's reasons to book): one column of phrases in
  regular-weight ink, each after a small tick in the brand blue (since 26 October 2026). History:
  hairline rows read as a form (CO9); navy phrases at weight 500 then read as links, the same colour
  and weight as every link on the site, and phones invited taps that went nowhere. Credentials
  ("proof") stay separate from services, as short serif lines (CO6). About's financial security is
  the fourth card of the promise set, running full width, its statements as body text.
- Images beside text sit inside the shell at their own aspect ratio, so they scale as one piece and
  their crop never changes with the screen width (CO2). Nothing bleeds to the viewport edge except
  heroes.
- No eyebrow headings, no decorative numbering, no diagonal arrows. Section openings are the
  heading itself.

## Imagery

Use the supplied team and founder photography as the primary visual story. Keep crops natural and human. The illustrated aircraft mark is a light brand signature, not a repeated decoration.

## Motion

Use one restrained first-load sequence and tactile hover/focus feedback. Respect `prefers-reduced-motion` and never hide content behind animation.

Pages cross-fade into each other at `--tp-motion-standard` (220ms) on `--tp-ease`, added 25 October
2026. It is the browser's native cross-document view transition, declared in `site.css`, not
Astro's client router, so every page is still an ordinary load. It is off under reduced motion and
absent in browsers without support, where navigation is the plain cut it was before.

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
| Panoramic | Retired 25 October 2026 with the mid-page carousel band. The home sequence uses the hero height |
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

**Revised 27 September 2026.** The Claude Design review argued with it and Karim approved card
grids "if tasteful". What was adopted is narrower than Belmond's tile grid: three to five cards
per group, each carrying the advisor's own words rather than a product to compare. Luxury groups
Gina's seven sections under three themes, Expertise shows its four services as two-by-two cards,
and About shows the team as one uniform grid. The Journal is a latest feature plus a hairline log,
not a grid. The anti-reference above still stands: nothing on the site asks a visitor to compare
dozens of products.

The same review proposed eyebrow labels over section headings and "01, 02, 03" step numbering.
Both were refused on 27 September 2026 and the rules above stand. It also proposed replacing
Gina's copy with shorter drafts on four pages; Karim kept her copy, presented more compactly.

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
Sienna article rather than mock-up copy, and confirmed it again on 28 September 2026; `CLAUDE.md`
and register C10 now say so.


## Hero tones, and which pages are waiting on photography

Added 30 August 2026, when the full-bleed hero was finally built.

`PageHero.astro` has two tones. `photo` is the intended state: one photograph, edge to edge, title
over it under a two-stop scrim. `navy` is the same opening on `--tp-navy` with no image.

The navy tone is not a placeholder. It is a finished design that a photograph replaces by passing
one prop, which is exactly what happened on three pages when the licensed set arrived.

Updated 30 August 2026, when the licensed imagery landed, and 25 October 2026, when the client
moved the carousel into the home hero, the team photograph to About and Virtuoso into Luxury
(`docs/WORK-PLAN.md`, changes 2 and 3).

| Page | Tone | Photograph | `object-position` |
|---|---|---|---|
| Home | photo, sequence, full | `destinations/positano-golden-hour.jpg`, `varenna-loggia-lake-como.jpg`, `lake-como-sunset.jpg` since 25 October 2026 (CO1: coast, a place to stay, water at dusk), cross-fading every 6s under one fixed title. Since 26 October 2026 previous, a mark per photograph and next sit together bottom right, level with the actions; on phones they follow the actions in the flow. Positano has its own phone crop (`mobilePosition`) so the town, not the cliff, fills the frame. Lowest title contrast: 3.63:1 on slide 1 at 390px (large text, AA 3:1) | `28% 78%` (phone `74% 70%`), `center 58%`, `35% 50%` |
| Who we are | split | `team/team-outside.jpg`, owned, beside the title on the page ground since 26 October 2026, running to the right edge. The office photograph is the story row (and the home founder section); Gina's headshot appears once, in the advisor grid | `center 22%` |
| Tailor-made (`/expertise/`) | photo, short | `hero/expertise-mountain-lake.jpg`, about 60% of the screen so the opening statement arrives in the first screen | `center 38%` |
| Luxury | photo, full | `hero/luxury-infinity-pool-dusk.jpg` since 26 October 2026: a quiet terrace plane lower left for the title. The reef island's texture ran under the title | `center 62%` |
| Contact | none | No photograph since 26 October 2026: the title and its line head the page and the form starts in the first screen at every width | n/a |
| Journal | none | No hero since 27 September 2026: the newest article's photograph opens the page as a 540px feature | n/a |
| Privacy, 404 | plain | none wanted. A cinematic opening on a policy or error page is noise | n/a |

Crops are set per page with `object-position`, because both team photographs place faces near the
top of the frame and an 85vh crop decapitates them at the default `center`. Who we are sits at
`center 22%`. The team photograph is 1037px wide, so at 1440px it is upscaled and slightly soft; a
larger original is on the content list. Any replacement photograph needs its own value checked at
1440px **and** 390px, since the crop ratio runs from about 0.54:1 to 2.98:1.

## Home page, from 25 October 2026

The client's brief (`docs/WORK-PLAN.md`, changes 4 to 7) set the home page as: the photograph
sequence; Gina's line as the introduction's heading, in one column; two journeys (Cruising and
Luxury travel) as image cards with text beneath, 3:2 because both photographs are landscape
originals; the Virtuoso band; the founder; the journal as one story beside its photograph; Gina's
reasons to book on a white panel with no rules or markers; and in the footer one row of the four
marks on white, then a single newsletter row. Copy for all of it lives in `src/data/home.json`.

Gina's full "Why book" band ends the home page only. Every other page closes on a short row: her
contact line and Start planning (`WhyBook variant="short"`). The full band at the end of six pages
read as the same checklist everywhere and repeated whole sections on Expertise and About.

Start planning goes to `/contact/#enquiry`, the form, not the top of Contact. The four marks appear
once per page, in the footer row (the copy beside the Contact form was removed on 26 October 2026,
owner's instruction). Their heights are evened per mark (`stripHeight` in `memberships.json`); the
artwork is never altered.

## Section rhythm

Every section shared one padding value until 30 August 2026, which is what made the page read as a
metronome. Three bands now:

| Band | Value at 1440px | Used by |
|---|---|---|
| Tight | 72px | `team-roster`, `featured-article` |
| Standard | 120px | prose sections, and the default for anything unlisted |
| Open | 160px | `closing-cta`, `value-band`, `team-values` |

One image leaves the 1200px shell and runs to the viewport edge: the founder portrait breaks left.
The journal teaser used to break right; since 25 October 2026 it sits inside the shell beside its
text, because the client found the floating arrangement loose (`docs/WORK-PLAN.md`, change 5).
`html { overflow-x: clip }` guarantees the negative margin cannot produce a horizontal scrollbar.


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

## Callout round, 25 October 2026

The owner reviewed the preview and raised fourteen callouts (`docs/CALLOUTS-2026-10-25.md`). Under
the lead-and-lag rule in `CLAUDE.md` the site changed first and this file records it. Beyond the
rules rewritten above:

- **Founder section, home:** the team photograph in the Main Street office, at its own ratio, with a
  quiet caption beneath, replaces Gina's portrait, which zoomed to a close-up on wide screens.
- **Virtuoso:** one component, `VirtuosoBenefits.astro`, for home and Luxury. The supplied mark is a
  transparent derivative; on navy it takes a small white plate. On About its row carries a
  photograph, and the mark sits small above the heading.
- **Footer:** night, the darkest surface on the site, with an inline email field that opens the
  sign-up dialog for Gina's other fields, and the street address beside phone and email.
- **Journal:** the rubric is the category alone, sentence case and muted; the date moves to the
  byline. Home's teaser carries no rubric, no date and no "Read the story": the headline and the
  photograph are the link.
- **Hover:** linked headlines take a hairline in their own colour; story photographs scale by 1.5
  per cent inside their frame.

## Design review round, 26 October 2026

A design review of the draft (`docs/REVIEW-2026-10-26.md`) was approved by the owner finding by
finding. What changed, beyond the rules rewritten above:

- **Openings vary by purpose** (`PageHero.astro`): `size="full"` (Home, Luxury), `size="short"`
  (Tailor-made), `layout="split"` (About), none (Contact). Five pages had opened on one template.
- **Virtuoso:** the official vectors from Virtuoso's member logo guidelines (supplied by the owner),
  `VirtuosoMark.astro`: full colour on light grounds, colour reverse on navy, 150px wide (above the
  126px minimum), always above the section heading. No white plate: the guidelines forbid a box
  around the mark.
- **Closing band** (every page but Home): Gina's contact sentence set in the display face, centred,
  with Start planning beneath. On one row with the button 600px away it read as small print.
- **Home:** the introduction is an opening statement; the journey cards carry their own pair of
  photographs in one golden light (the Tailor-made photographs no longer repeat); the journal
  teaser shows the lead story with the two newest others as hairline rows beside it.
- **About:** the advisor cards become rows on phones (portrait 6.5rem beside name and bio), so
  missing portraits no longer stack as 440px boxes; Gina's founder paragraph breaks at "Relocating
  to Australia", words unchanged.
- **Contact:** every form field keeps the error line's height, so the form has one vertical beat.
- **Header:** the lockup is 172px on phones, the kit minimum (it was 137px).
- **Tailor-made:** the title is "Tailor-made holidays." (Gina's words, "and luxury" dropped at the
  owner's instruction) so it no longer claims the Luxury page's subject.
