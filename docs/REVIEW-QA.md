# Review QA: Gina review candidate

Verification record for the review candidate built under the Codex execution handoff of
27 September 2026. Checked 28 September 2026.

## What was checked

| Item | Value |
|---|---|
| Workspace | `C:\Users\CS2608\dev\travelling-places-site` (not the older OneDrive `travelling-places-site-repo`) |
| Branch | `gina-review`, from `main` at `95b43bf` |
| Review link | https://travelling-places-site-git-gina-review-green-square-ai.vercel.app |
| Link type | Vercel branch preview. Updates on every push to `gina-review`. Opens without a Vercel login (HTTP 200, checked directly). |
| Production | `travelling-places-site.vercel.app` left on `main` (`95b43bf`), untouched by this work |
| Vercel environment variables | None set: Web3Forms, Calendly and Genesys are not configured |

## Automated suites

| Check | Result | Notes |
|---|---|---|
| Build | Pass | |
| Functional | 72/72 | |
| Responsive | 190/190 | Re-run after the carousel heading fix |
| Accessibility (axe, keyboard) | 44/44 | |
| Brand | 53/53 | |
| Cross-browser (Firefox, WebKit) | 30/30 in the fixed runs | The WebKit form-validation test raced the page script and a webfont reflow; after waiting for both it passed 48 of 48. The Firefox carousel test has failed intermittently inside the runner only (see limitations) |
| Licensing | Pass | 31 images in the manifest, 0 unlicensed |
| Placeholders | 106 TODO occurrences across the built pages | Deliberately visible on Karim's instruction; each maps to a register row |
| Visual regression | Fails, expected | Pages changed; baselines await Karim's approval |

## Live preview, checked in a browser

| Check | Result |
|---|---|
| All nine pages at 1440 and 390px | No horizontal overflow; content on the page margins (120px and 20px); one h1 per page; no script errors |
| Images | Every image loads once scrolled into view; all 15 image files on the home page fetch directly |
| Routes | Nine pages 200; unknown path 404; sitemap, robots.txt and sharing image 200 |
| Links | 9 internal and 10 outbound destinations, none failing. Virtuoso member profile returns 200 |
| Mobile menu | Opens; Escape closes it |
| Newsletter | Dialog opens from the top strip and the footer |
| Carousel | Headlines link to their journeys; hidden slides are inert |
| Enquiry form | Empty submit shows "Please complete this field." |
| Journal | Category filter shows only the chosen category |
| Text on phones | No text runs off-screen on any page at 320 or 390px, measured per text line. The sweep was proven against the previous build, where it caught the clipped carousel heading |

## Fixed during verification

- **Carousel heading clipped on phones.** "Where will curiosity take you?" was set to never wrap, so on
  a 390px screen "you?" ran off the edge. It predated this work and was on `main`. It now wraps into
  two balanced lines below 760px. The responsive suite missed it because it measures element boxes,
  and the text escaped its box.

## Limitations: not tested, or cannot be

- **Enquiry and newsletter delivery.** No Web3Forms key exists, so the forms prepare an email in the
  visitor's own mail app and say so. Delivery to an inbox is untested until a key and a test inbox
  exist (register R10, R11).
- **Calendly.** Not connected; the Contact page shows a placeholder and the top-strip Zoom link goes to
  it (R12).
- **Firefox carousel test.** Failed intermittently inside the test runner on the design-review work
  (1 in 21 isolated runs; 0 in 21 on the earlier `main`). It could not be reproduced outside the
  runner in 49 direct probes. Cause not found.
- **Sharing image and canonical links** point at `travellingplaces.com.au`, which serves nothing until
  the domain is connected. Link previews will not show the photo on the review link. Correct at launch.
- **Real devices.** Checked in desktop Chromium, Firefox and WebKit engines at phone and desktop
  widths, not on physical phones.
