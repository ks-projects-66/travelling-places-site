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

Licensed 30 August 2026. Every file below is Unsplash License: free commercial use, no attribution
required. The full register, with creator, source URL and release position per file, is
`imagery-delivery/LICENSING.md`. These replaced nine files saved from virtuoso.com that held no
licence at all.

| File | Subject | Source | Status | Approved by | Used on |
|---|---|---|---|---|---|
| `destinations/mediterranean-coast.jpg` | Sunset over a calm sea and silhouetted coastline | Unsplash, Ruben Aster | owned | Unsplash License | Home carousel |
| `destinations/antarctica-ice.jpg` | Ice formation across a polar landscape | Unsplash, Torsten Dederichs | owned | Unsplash License | Home carousel, Journal |
| `destinations/cruise-dining.jpg` | Dining table with a wide ocean view | Unsplash, Jiayu Chan | owned | Unsplash License | Home carousel |
| `destinations/japan-temple.jpg` | Japanese temple architecture among bare trees | Unsplash, Rudityas W Anggoro | owned | Unsplash License | Journal archive |
| `destinations/spain-village.jpg` | Whitewashed Spanish hill village | Unsplash, inma santiago | owned | Unsplash License | Journal archive |

## Page heroes

| File | Subject | Source | Status | Approved by | Used on |
|---|---|---|---|---|---|
| `hero/expertise-mountain-lake.jpg` | Mountains reflected in a still lake at golden hour | Unsplash, Oskar Kadaksoo | owned | Unsplash License | Expertise hero |
| `hero/virtuoso-island.jpg` | Aerial view of a small island ringed by reef | Unsplash, Nathan Feyssat | owned | Unsplash License | Virtuoso hero |
| `hero/contact-lookout.jpg` | Wide view over forested hills and farmland to distant peaks | Unsplash, Hayden | owned | Unsplash License | Contact hero |

**Location claim not verified.** `hero/contact-lookout.jpg` was delivered named for Tamborine
Mountain, but its Unsplash title is generic ("a view of a valley and mountains from the top of a
hill") and the source page names no location. The file is named and described here for what is
visible, not for where it might be. Do not caption it as Tamborine Mountain, or as the view from
the office, without confirming with the photographer or replacing it with the team's own photograph.

## Journal

| File | Subject | Source | Status | Approved by | Used on |
|---|---|---|---|---|---|
| `journal/amsterdam-canals.jpg` | Amsterdam canal houses above the water | Unsplash, Frans Ruiter | owned | Unsplash License | Journal archive |
| `journal/european-rail.jpg` | Railway viaduct curving through an autumn mountain landscape | Unsplash, Victor Suárez | owned | Unsplash License | Journal archive, Virtuoso |

## Brand kit reference imagery

`brand-kit/` vendors three photographs to demonstrate its carousel. These are now the same
licensed files as the site carousel, re-encoded to WebP at 1600px for the reference page.

| File | Subject | Source | Status | Approved by | Used on |
|---|---|---|---|---|---|
| `brand-kit/assets/images/mediterranean.webp` | Sunset over a calm sea | Unsplash, Ruben Aster | owned | Unsplash License | Brand kit carousel demo |
| `brand-kit/assets/images/antarctica.webp` | Ice formation across a polar landscape | Unsplash, Torsten Dederichs | owned | Unsplash License | Brand kit carousel demo |
| `brand-kit/assets/images/cruise.webp` | Dining table with a wide ocean view | Unsplash, Jiayu Chan | owned | Unsplash License | Brand kit carousel demo |

## Releases still open

The Unsplash License covers copyright. It does not grant model, property or trademark rights, and
Unsplash says so. Five files show identifiable places whose source pages record no property
release: `cruise-dining` (a ship interior), `japan-temple` (Kiyomizudera), `spain-village`
(Olvera), `amsterdam-canals`, and `european-rail` (Glenfinnan Viaduct). None shows a name, logo,
artwork or competitor branding, and all are used as editorial context rather than to imply a
partnership. That is the position taken; it has not been reviewed by a solicitor.

## Partners

| File | Subject | Source | Status | Approved by | Used on |
|---|---|---|---|---|---|
| _none yet_ | Cruise line and partner logos | Not supplied | placeholder | none | Footer partner wall |

Four marked placeholders render in the footer. Each partner logo needs both the artwork and
written permission before it goes in, tracked in the go-live workbook under workstream G.

## The unlicensed set, resolved

Closed 30 August 2026. Nine files saved from virtuoso.com were deleted and replaced with ten
Unsplash-licensed photographs. `france.webp` and `new-zealand.webp` were deleted without
replacement, as neither was referenced.

Stock was route three of three. Routes one and two remain better and are still open: asking
Virtuoso whether member agencies may use their asset library, and using the team's own travel
photography, which would be more distinctive than any stock library.

## Adding an image

1. Export a derivative: longest edge 3200px, quality around 82, sRGB, EXIF stripped. The 3200px
   figure replaced 2400px on 30 August 2026: the full-bleed hero serves up to 2560px, so a 2400px
   master was being upscaled.
2. Keep the master in the OneDrive folder. Do not commit it. Cloudflare Pages refuses any asset
   over 25 MiB, and git keeps every version of a binary forever.
3. Drop it in the right category folder.
4. Add a row here before referencing it.
