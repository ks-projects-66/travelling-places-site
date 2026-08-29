# Imagery manifest

Every image in `src/assets/images/` has a row here. No row, no use. This exists because the
first draft shipped nine photographs saved from Virtuoso's website with no record beyond one
line in `docs/QA.md`, and nobody downstream could tell which files were safe.

`pnpm check:licensing` parses the tables below. Any file with status `unlicensed` that is still
referenced from `src/` fails the check. Run it before any production deploy.

## Status values

| Status | Meaning |
|---|---|
| `owned` | The business owns it or commissioned it. Safe to publish. |
| `supplied` | Provided by the named body for member use. Safe within their brand rules. |
| `unlicensed` | No licence or permission held. Must not be published. Blocks launch. |
| `placeholder` | No file yet. A marked stand-in renders in its place. |

## Brand

Logos live in `public/images/brand/`, not here, because SVGs need no processing.

| File | Subject | Source | Status | Approved by | Used on |
|---|---|---|---|---|---|
| `hero/woman-on-plane.jpg` | Illustrated woman-on-plane brand artwork | Travelling Places brand kit | owned | Gina Storey | Home, intro mark |

## Team

| File | Subject | Source | Status | Approved by | Used on |
|---|---|---|---|---|---|
| `team/gina-storey.jpg` | Gina Storey portrait | `FW_ Logos/Gina Headshot 2025.jpg` | owned | Gina Storey | Not currently referenced |
| `team/gina-storey.webp` | Gina Storey portrait, web derivative | Same original | owned | Gina Storey | Home, Who we are |
| `team/team-office.jpg` | Team inside the Main Street office | `FW_ Logos/Edited Inside Staff Photo Office 2025 [4}.jpg` | owned | Gina Storey | Who we are |
| `team/team-outside.jpg` | Team outdoors on Tamborine Mountain | `FW_ Logos/Edited Staff Photo Outside 2025 [4].jpg` | owned | Gina Storey | Home hero, Contact |

## Memberships and accreditation

Supplied marks. Each body sets its own rules for how its logo may be displayed, and ATIA's in
particular need checking before launch.

| File | Subject | Source | Status | Approved by | Used on |
|---|---|---|---|---|---|
| `memberships/virtuoso-member.png` | Virtuoso member mark | Virtuoso | supplied | Virtuoso member terms | Footer, Home, Virtuoso |
| `memberships/atia.jpg` | ATIA accredited mark | ATIA | supplied | TODO: confirm ATIA logo usage rules | Footer |
| `memberships/clia.png` | CLIA member mark | CLIA | supplied | TODO: confirm CLIA logo usage rules | Footer |
| `memberships/alatus.jpg` | Alatus mark | Alatus | supplied | TODO: confirm | Footer |

Vector masters exist as PDF in `FW_ Logos` for CLIA and Virtuoso. Convert to SVG before launch.

## Destinations

**Every file below is unlicensed.** `docs/QA.md` records that these were saved from pages on
Virtuoso for a private first draft. They are kept so the layout can be reviewed during
development, and they are blocked from production by `pnpm check:licensing`.

| File | Subject | Source | Status | Approved by | Used on |
|---|---|---|---|---|---|
| `destinations/mediterranean.webp` | Mediterranean coastline at golden hour | Saved from virtuoso.com | unlicensed | none | Home carousel |
| `destinations/antarctica.webp` | Antarctic ice and mountains | Saved from virtuoso.com | unlicensed | none | Home carousel, Journal |
| `destinations/cruise.webp` | Chef aboard a cruise ship | Saved from virtuoso.com | unlicensed | none | Home carousel |
| `destinations/japan.webp` | Traditional Japanese landscape | Saved from virtuoso.com | unlicensed | none | Journal archive |
| `destinations/spain.webp` | Whitewashed Spanish town | Saved from virtuoso.com | unlicensed | none | Journal archive |
| `destinations/france.webp` | French scene | Saved from virtuoso.com | unlicensed | none | Not referenced |
| `destinations/new-zealand.webp` | New Zealand landscape | Saved from virtuoso.com | unlicensed | none | Not referenced |

## Journal

| File | Subject | Source | Status | Approved by | Used on |
|---|---|---|---|---|---|
| `journal/amsterdam.webp` | Amsterdam canal houses | Saved from virtuoso.com | unlicensed | none | Journal archive |
| `journal/orient-express.webp` | European rail journey | Saved from virtuoso.com | unlicensed | none | Journal archive, Virtuoso |

## Partners

| File | Subject | Source | Status | Approved by | Used on |
|---|---|---|---|---|---|
| _none yet_ | Cruise line and partner logos | Not supplied | placeholder | none | Footer partner wall |

Four marked placeholders render in the footer. Each partner logo needs both the artwork and
written permission before it goes in, tracked in the go-live workbook under workstream G.

## Replacing the unlicensed set

Three routes, cheapest first:

1. Ask Virtuoso member services whether member agencies may use their marketing asset library.
   That is a question, not an assumption, and nobody has asked it yet.
2. The team's own travel photography. They travel constantly and it would be more distinctive
   than stock.
3. Licensed stock. Belmond's imagery direction in `DESIGN.md` sets the brief: 4:5 portrait for
   cards, 16:9 for context, warm saturated grading, natural light, subject placed prominently.

## Adding an image

1. Export a derivative: longest edge 2400px, quality around 78, sRGB, EXIF stripped.
2. Keep the master in the OneDrive folder. Do not commit it. Cloudflare Pages refuses any asset
   over 25 MiB, and git keeps every version of a binary forever.
3. Drop it in the right category folder.
4. Add a row here before referencing it.
