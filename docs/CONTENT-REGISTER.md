# Content register

Every placeholder in the code, what replaces it, and what it blocks. Developer-facing. The
business-facing tracker with owners and dates is the go-live workbook in the OneDrive project
folder.

Regenerate the live list at any time:

```bash
pnpm build && pnpm check:placeholders
```

## How placeholders behave

They are visible, never silent. A missing image renders as a marked block at the correct aspect
ratio; a missing value renders as a red pill reading TODO. The reasoning is simple: a gap you can
see on screen gets fixed, and a gap recorded only in a register gets shipped.

## Blocks launch

| ID | Placeholder | Where | Replaced by | Notes |
|---|---|---|---|---|
| C1 | Photographs | `src/assets/images/` | Resolved | The unlicensed set was replaced; `check:licensing` reports 31 images in the manifest and 0 unlicensed (28 September 2026). |
| C2 | Privacy policy | `src/content/legal/privacy.md` | Approval by a person, after the TODOs are resolved | Drafted 25 October 2026 at the owner's request (website only). The page says it is an unapproved draft until `approved` is set by a person. 26 red TODOs name what the business must supply; `docs/PRIVACY-NOTES.md` lists each, who supplies it, and whether the policy is legally required (it turns on annual turnover). |
| C3 | ABN | `src/data/site.json` → `identifiers.abn` | The registered ABN | Renders as a TODO pill in the footer. |
| C4 | ATIA accreditation number | `src/data/site.json` | The accreditation number | ATIA also sets logo display rules that need checking. |
| C5 | CLIA membership number | `src/data/site.json` | The membership number | |
| C6 | Web3Forms access key | `.env` → `PUBLIC_WEB3FORMS_KEY` | Not required for launch | Karim, 5 October 2026: the form opening the visitor's own email program is acceptable at launch. A key can be added later without design change. |

## Blocks a feature, not launch

| ID | Placeholder | Where | Replaced by | Notes |
|---|---|---|---|---|
| C7 | Genesys subscribe embed | `src/components/NewsletterDialog.astro` | The real embed snippet | Karim holds a Client ID and Form ID. The snippet itself is unconfirmed. See `INTEGRATIONS.md`. |
| C8 | Calendly URL | `.env` → `PUBLIC_CALENDLY_URL` | Free Calendly discovery-call link | Contact page shows a marked block pointing at the enquiry form instead. |
| C9 | Four partner logos | Removed | Not needed | The client removed the travel partners row and its four placeholders on 25 October 2026 (docs/WORK-PLAN.md, change 7). `partners.json` is deleted. |

## Content accuracy

| ID | Placeholder | Where | Replaced by | Notes |
|---|---|---|---|---|
| C10 | Antarctica article byline | `src/content/journal/looking-south-to-antarctica.md` | Resolved | Karim confirmed on 30 August and again on 28 September 2026 that the article is Sienna Gardner's. The earlier record that it was mock-up copy is superseded. |
| C11 | Three job titles | `src/content/team/*.md` | Confirmed titles | `approved: false` renders a warning on the page. |
| C12 | Three surnames and bios | `src/content/team/` | Approved bios | Renee and Jodie have no surname recorded. Krista has left and was removed from the site (Karim, 5 October 2026). |
| C13 | Instagram URL | `src/data/site.json` | Confirmed profile | **Closed 25 October 2026**: @travelling_places_tamborine, confirmed by the owner. |
| C14 | Facebook URL | `src/data/site.json` | Confirmed profile | **Closed 25 October 2026**: facebook.com/travellingplacestravel, confirmed by the owner. |
| C15 | Trading hours | `src/data/site.json` | Confirmed hours | Renders as a TODO pill on the contact page. |
| C16 | Alatus destination URL | `src/data/memberships.json` | The correct URL | Logo renders unlinked until supplied. |
| C18 | Virtuoso white-label link | `src/data/virtuoso.json` → `whiteLabel.url` | The white-label site address from Gina | Her Luxury copy links to it. Renders as a TODO pill in the Virtuoso section of Luxury (the Virtuoso page folded into Luxury on 25 October 2026). |
| C19 | Newsletter delivery | `src/components/NewsletterDialog.astro` | Genesys embed (C7) | Gina's fields are built. Until Genesys is connected, sign-ups reach the office inbox through the enquiry route and are added by hand. Collecting postal addresses must be covered by the privacy policy (C2). |
| C20 | Claims in Gina's copy | `src/data/*.json` | Her confirmation | Published as supplied on Karim's instruction of 26 September 2026: Global Cruise Icon (under 300 worldwide), Virtuoso top 1%, IATA TIDS affiliate, client trust account, "ATIA protected", in-house events, brochures, travel insurance. Several passages match wexas.com word for word. |
| C21 | Luxury theme copy | `src/data/luxury.json` → `themes` | Gina's sign-off, or her edit | Three short blurbs from the Claude Design review replaced her seven Luxury sections on Karim's instruction of 28 September 2026. They are draft copy, not her words. "Peace of mind" states comprehensive insurance and "Privileged access" states in-house events: both come from her original sections, so confirm they still hold. |
| C22 | Larger team photographs | `src/assets/images/team/team-outside.jpg`, `team-office.jpg` | The original files at 2000px or wider | `team-outside` is the About hero: 1037px wide, so upscaled and slightly soft at 1440px. `team-office` (904px) is now the home founder section as well (25 October 2026, CO2), framed at no more than 560px so it holds up, but it is soft on high-density screens. Requested from Karim and Gina. |
| C23 | Cruising card destination | `src/data/home.json` → `journeys.cards[0].href` | Resolved | 31 October 2026, on Karim's instruction: the home Cruising card links to the Creative Cruising / Cruiseco white-label site, https://travellingplaces.cruiseco.com.au/ (set up by David Ninham, emails of 27 to 30 October 2026), opening in a new tab. The same link sits under the Ocean & river cruising card on Tailor-made (`src/content/services/cruising.md` → `link`). Its text, "Search cruises and current offers", was written for the site, not by Gina: include it in her read-through. |
| C25 | Virtuoso member mark, vector or transparent | `src/assets/images/memberships/` | Resolved | **Closed 1 November 2026**: Karim supplied Virtuoso's Member Logo Usage Guidelines (June 2021). The site now uses the official SVGs linked from them, downloaded with his approval: "Color" on light grounds (Luxury, Who we are, footer, contact) and "Reverse, Color" on the navy home band, with no plate, since the guidelines list a box around the logo as a misuse. The logo meets Virtuoso's 126px digital minimum everywhere, including the contact row and the phone footer, which were under it until Karim approved enlarging them on 1 November 2026. |
| C26 | Gina's copy, re-set on 25 October 2026 | `src/data/home.json` → `founder`, `why-book.json`, `virtuoso.json` | Gina's read-through | Owner-approved, no new claims: the home founder lead and text rewritten from facts in her About copy (1993, a decade in London with British Airways and Jetset, privately owned family business); her Why book lists regrouped into five services and two credentials, with one title and the two colon lead-ins dropped; her Virtuoso closing line removed. The founder quotation ("Our focus is on you...") dates from the first draft with no recorded source, so it stands unattributed; Gina to confirm it is hers or replace it. |
| C27 | The four promises, rewritten | `src/data/why-book.json` → `promises[].title`, `body` | Gina's sign-off, or her edit | 1 November 2026, on Karim's instruction: the promises moved from About to the home "Why book" band, and each became a title and one paragraph of 35 to 40 words in the register of Aman, Belmond and A&K. Every claim is from her own paragraphs, kept in `paragraphs`; nothing was added. Financial security reorders her four sentences and drops "to ensure security of your funds"; it still claims no protection beyond her copy, since ATIA accreditation is not a compensation scheme (Q8). The trust account and ATIA wording remain under C20. Replaces the About summaries, labels and points of 31 October, which are removed. |
| C28 | Copy round 4: Wexas-matched lines rewritten | `src/data/*.json`, `src/content/services/`, `src/content/team/`, page meta descriptions | Gina's read-through, and answers to the deck's NEEDS GINA list | 1 November 2026, on Karim's approval ("Apply it"). Gina's lines that match three wexas.com pages word for word were replaced with new wording keeping her facts; her unmatched lines are unchanged. Wexas's own claims (family business, in-house events, unbiased approach, experts who have been where you are going, a specialist who knows your destination) are off the page until she confirms them. New TODO pills: the home founder quotation, three team bios, Sienna's byline title. Full deck, sources and the phrase check: `docs/copy-review/COPY-DECK.md`. |
| C24 | What happens after an enquiry | `src/data/contact.json` | One or two sentences from Gina | The re-critique found nothing on Contact says what happens after "Prepare my enquiry" (who replies, how soon). Not written for her: it is a service promise. |

## Deployment

| ID | Placeholder | Where | Replaced by | Notes |
|---|---|---|---|---|
| C17 | CMS auth worker URL | `public/admin/config.yml` → `base_url` | Deployed worker address | CMS cannot authenticate until this exists. See `DEPLOY.md`. |

## Deliberately not filled in

Two things were left rather than invented, because a plausible guess is worse than a visible
gap:

- **The privacy policy.** A legal document is not drafted on someone's behalf. The page lists
  what it has to cover so the scope is visible.
- **The team's surnames and titles.** Guessing a colleague's job title puts words in their mouth.

## Gina review candidate, 28 September 2026

The completion register for the handoff "execution handoff for Claude Code" (prepared by Codex,
27 September 2026). Built on branch `gina-review` from `main` at `95b43bf`, in
`C:\Users\CS2608\dev\travelling-places-site`. The OneDrive `travelling-places-site-repo` copy the
handoff names is an older checkout (`cc194c7`, no Luxury page) and was not used.

Karim's rulings for this candidate (28 September 2026): placeholders stay visible; Gina's "Why book"
band stays on every page it is on; repetition may be removed from her copy, with every edit in
`docs/COPY-MAP.md`; no eyebrow labels; the Antarctica article is Sienna's (C10).

| ID | Area | Action | Status | Owner or dependency | Evidence | Launch significance |
|---|---|---|---|---|---|---|
| R1 | All pages | Gina's five documents accounted for | Done | - | `docs/COPY-MAP.md`: all 75 paragraphs traced, none unexplained | Required |
| R2 | About, Tailor-made | Repetition removed from her copy | Done | Gina to confirm wording | Four edits listed in the copy map | Review |
| R3 | Luxury | Insurance described as offered, not included | Done | Gina to confirm (C20) | `luxury.json` Peace of mind | Required |
| R4 | Home | Carousel slides link to the journeys they show | Done | - | Tailor-made, cruising, the Antarctica article | Review |
| R5 | Contact | Developer setup instructions removed from the Calendly placeholder | Done | Karim to create Calendly (C8) | Placeholder pill kept | Required before launch |
| R6 | Footer, Contact | Social links | Done | Owner confirmed both handles, 25 October 2026 (C13, C14) | Pill removed; links published in `sameAs` | Required |
| R7 | Journal | Articles published elsewhere say where | Done | - | "Published on tmnews.com.au" | Review |
| R8 | Records | Antarctica authorship corrected | Done | - | `CLAUDE.md`, C10, `DESIGN.md` | Required |
| R9 | Virtuoso | Member profile link verified | Done | - | `virtuoso.com/member/travelli34092` returns 200, 28 Sep 2026 | Required |
| R10 | Enquiry form | Delivery | Decided | Karim, 5 October 2026: launch with the mail-draft route | The form prepares an email draft in the visitor's own program and says so; it never claims delivery. The "Web3Forms key not set" TODO pill still shows and needs replacing with final wording | Does not block launch (C6) |
| R11 | Newsletter | Delivery | Blocked | Genesys snippet (C7); Karim has access and will locate the embed (5 October 2026) | Same route as the enquiry form until then | Blocks the feature (C19) |
| R12 | Calendly, Zoom link | Booking | Blocked | Gina's availability; Gina creates the account, or Karim creates it and transfers ownership (C8) | The top strip and its Zoom link were removed at the client's request on 25 October 2026; the Calendly placeholder remains on Contact | Blocks the feature |
| R13 | Team | Titles, surnames, bios, three portraits | Awaiting Gina | Gina and team (C11, C12) | Visible placeholders | Blocks launch |
| R14 | Footer | ABN, ATIA, CLIA numbers; trading hours | Awaiting Gina | C3, C4, C5, C15 | Visible placeholders | Blocks launch |
| R15 | Luxury, Tailor-made, About | Photographs for themes, service cards and two About rows | Awaiting supply | Karim or Gina | Visible placeholders | Review; blocks launch if kept in the layout |
| R22 | Luxury, Tailor-made, About | Seven approved Unsplash photographs installed (Karim, 5 October 2026); Lake Como crop approved on the preview | Done | Gina to say whether she would rather use her own photographs anywhere on the site, and whether the river ship (Swiss Corona, name removed) should stay | `MANIFEST.md`, `imagery-delivery/LICENSING.md` | Review; Your specialist photo and the 1993 row still open |
| R16 | Luxury | Three theme blurbs signed off | Awaiting Gina | C21 | Draft copy | Blocks launch |
| R17 | Factual claims | Cruise Icon figure, Virtuoso top 1%, "ATIA protected", trust account | Awaiting Gina | C20; copy map, claims table | Published as supplied | Blocks launch |
| R18 | Privacy | Policy text | Blocked | Gina or her adviser; not drafted by agents (`CLAUDE.md`) | Data-flow inventory below | Blocks launch (C2) |
| R19 | Partners | Cruise partner logos and permission | Closed | C9 | Row removed at the client's request, 25 October 2026 | - |
| R20 | Deployment | Review link | See `docs/REVIEW-QA.md` | - | Branch preview; production alias untouched | Review |
| R21 | Domain | Cutover | Not started, by design | Karim, after Gina's approval | `DNS-CUTOVER.md`; no DNS change under this handoff | Launch |

## Privacy: what the site actually does with data

Inventory for whoever writes the policy (C2). Checked against the built site on 28 September 2026.

| Flow | What is collected | Where it goes | State |
|---|---|---|---|
| Enquiry form | Name, email, phone, timing, party, journey notes | Web3Forms to the office inbox once a key is set; until then, the visitor's own mail app | Not connected |
| Newsletter form | Name, email, postal address, phone, magazine opt-in | Same route as the enquiry form until Genesys is connected | Not connected. Postal address needs covering in the policy |
| Calendly | Name, email, booking details | Calendly (third party, its own cookies) once embedded | Not connected |
| Web fonts | Nothing beyond the host | Self-hosted from `/brand-kit/fonts/` since 25 October 2026; Google Fonts removed | Live |
| Hosting | Standard request logs | Vercel for review; Cloudflare Pages is the intended launch host | Live |
| Analytics | None | No analytics script is present | Confirmed absent |
| Outbound links | Nothing collected by the site | Instagram, Facebook, Virtuoso, ATIA, CLIA, Google Maps, tmnews.com.au | Live |
| CMS (`/admin/`) | Staff GitHub login | GitHub and Sveltia CMS from unpkg.com, staff only | Auth not deployed (C17) |

