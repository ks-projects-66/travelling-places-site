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
| C2 | Privacy policy | `src/pages/privacy.astro` | Approved policy text | Page is a scaffold listing what the policy must cover. No policy has been drafted. |
| C3 | ABN | `src/data/site.json` → `identifiers.abn` | The registered ABN | Renders as a TODO pill in the footer. |
| C4 | ATIA accreditation number | `src/data/site.json` | The accreditation number | ATIA also sets logo display rules that need checking. |
| C5 | CLIA membership number | `src/data/site.json` | The membership number | |
| C6 | Web3Forms access key | `.env` → `PUBLIC_WEB3FORMS_KEY` | Key from web3forms.com | Without it the form prepares a mail draft instead of delivering. |

## Blocks a feature, not launch

| ID | Placeholder | Where | Replaced by | Notes |
|---|---|---|---|---|
| C7 | Genesys subscribe embed | `src/components/NewsletterDialog.astro` | The real embed snippet | Karim holds a Client ID and Form ID. The snippet itself is unconfirmed. See `INTEGRATIONS.md`. |
| C8 | Calendly URL | `.env` → `PUBLIC_CALENDLY_URL` | Free Calendly discovery-call link | Contact page shows a marked block pointing at the enquiry form instead. |
| C9 | Four partner logos | `src/data/partners.json` | Cruise line artwork plus written permission | Renders as four marked blocks in the footer. |

## Content accuracy

| ID | Placeholder | Where | Replaced by | Notes |
|---|---|---|---|---|
| C10 | Antarctica article byline | `src/content/journal/looking-south-to-antarctica.md` | Resolved | Karim confirmed on 30 August and again on 28 September 2026 that the article is Sienna Gardner's. The earlier record that it was mock-up copy is superseded. |
| C11 | Four job titles | `src/content/team/*.md` | Confirmed titles | `approved: false` renders a warning on the page. |
| C12 | Four surnames and bios | `src/content/team/` | Approved bios | Renee, Jodie and Krista have no surname recorded. |
| C13 | Instagram URL | `src/data/site.json` | Confirmed profile | Marked `unconfirmed`. Carried over as a guess from the first draft. |
| C14 | Facebook URL | `src/data/site.json` | Confirmed profile | Same. |
| C15 | Trading hours | `src/data/site.json` | Confirmed hours | Renders as a TODO pill on the contact page. |
| C16 | Alatus destination URL | `src/data/memberships.json` | The correct URL | Logo renders unlinked until supplied. |
| C18 | Virtuoso white-label link | `src/data/virtuoso.json` → `whiteLabel.url` | The white-label site address from Gina | Her Luxury copy links to it. Renders as a TODO pill on Luxury and Virtuoso. |
| C19 | Newsletter delivery | `src/components/NewsletterDialog.astro` | Genesys embed (C7) | Gina's fields are built. Until Genesys is connected, sign-ups reach the office inbox through the enquiry route and are added by hand. Collecting postal addresses must be covered by the privacy policy (C2). |
| C20 | Claims in Gina's copy | `src/data/*.json` | Her confirmation | Published as supplied on Karim's instruction of 26 September 2026: Global Cruise Icon (under 300 worldwide), Virtuoso top 1%, IATA TIDS affiliate, client trust account, "ATIA protected", in-house events, brochures, travel insurance. Several passages match wexas.com word for word. |
| C21 | Luxury theme copy | `src/data/luxury.json` → `themes` | Gina's sign-off, or her edit | Three short blurbs from the Claude Design review replaced her seven Luxury sections on Karim's instruction of 28 September 2026. They are draft copy, not her words. "Peace of mind" states comprehensive insurance and "Privileged access" states in-house events: both come from her original sections, so confirm they still hold. |

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
| R6 | Footer, Contact | Guessed social links flagged on the page | Done | Gina to confirm handles (C13, C14) | TODO pill beside the links | Required |
| R7 | Journal | Articles published elsewhere say where | Done | - | "Published on tmnews.com.au" | Review |
| R8 | Records | Antarctica authorship corrected | Done | - | `CLAUDE.md`, C10, `DESIGN.md` | Required |
| R9 | Virtuoso | Member profile link verified | Done | - | `virtuoso.com/member/travelli34092` returns 200, 28 Sep 2026 | Required |
| R10 | Enquiry form | Delivery | Blocked | Karim: Web3Forms key and inbox; no key is set locally or in Vercel | Without a key the form prepares an email draft and says so; it never claims delivery | Blocks launch (C6) |
| R11 | Newsletter | Delivery | Blocked | Genesys snippet (C7) | Same route as the enquiry form until then | Blocks the feature (C19) |
| R12 | Calendly, Zoom link | Booking | Blocked | Karim creates the account (C8) | Top-strip Zoom link goes to the Calendly placeholder | Blocks the feature |
| R13 | Team | Titles, surnames, bios, four portraits | Awaiting Gina | Gina and team (C11, C12) | Visible placeholders | Blocks launch |
| R14 | Footer | ABN, ATIA, CLIA numbers; trading hours | Awaiting Gina | C3, C4, C5, C15 | Visible placeholders | Blocks launch |
| R15 | Luxury, Tailor-made, About | Photographs for themes, service cards and two About rows | Awaiting supply | Karim or Gina | Visible placeholders | Review; blocks launch if kept in the layout |
| R16 | Luxury | Three theme blurbs signed off | Awaiting Gina | C21 | Draft copy | Blocks launch |
| R17 | Factual claims | Cruise Icon figure, Virtuoso top 1%, "ATIA protected", trust account | Awaiting Gina | C20; copy map, claims table | Published as supplied | Blocks launch |
| R18 | Privacy | Policy text | Blocked | Gina or her adviser; not drafted by agents (`CLAUDE.md`) | Data-flow inventory below | Blocks launch (C2) |
| R19 | Partners | Cruise partner logos and permission | Awaiting Gina | C9 | Four placeholders | Review |
| R20 | Deployment | Review link | See `docs/REVIEW-QA.md` | - | Branch preview; production alias untouched | Review |
| R21 | Domain | Cutover | Not started, by design | Karim, after Gina's approval | `DNS-CUTOVER.md`; no DNS change under this handoff | Launch |

## Privacy: what the site actually does with data

Inventory for whoever writes the policy (C2). Checked against the built site on 28 September 2026.

| Flow | What is collected | Where it goes | State |
|---|---|---|---|
| Enquiry form | Name, email, phone, timing, party, journey notes | Web3Forms to the office inbox once a key is set; until then, the visitor's own mail app | Not connected |
| Newsletter form | Name, email, postal address, phone, magazine opt-in | Same route as the enquiry form until Genesys is connected | Not connected. Postal address needs covering in the policy |
| Calendly | Name, email, booking details | Calendly (third party, its own cookies) once embedded | Not connected |
| Web fonts | Visitor IP address and browser details | Google Fonts (`fonts.googleapis.com`, `fonts.gstatic.com`) on every page | Live |
| Hosting | Standard request logs | Vercel for review; Cloudflare Pages is the intended launch host | Live |
| Analytics | None | No analytics script is present | Confirmed absent |
| Outbound links | Nothing collected by the site | Instagram, Facebook, Virtuoso, ATIA, CLIA, Google Maps, tmnews.com.au | Live |
| CMS (`/admin/`) | Staff GitHub login | GitHub and Sveltia CMS from unpkg.com, staff only | Auth not deployed (C17) |

