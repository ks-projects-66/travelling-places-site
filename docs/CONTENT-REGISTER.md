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
| C1 | Nine unlicensed photographs | `src/assets/images/destinations/`, `journal/` | Licensed or owned imagery | `pnpm check:licensing` fails while any is referenced. See `MANIFEST.md`. |
| C2 | Privacy policy | `src/pages/privacy.astro` | Approved policy text | Page is a scaffold listing what the policy must cover. No policy has been drafted. |
| C3 | ABN | `src/data/site.json` → `identifiers.abn` | The registered ABN | Renders as a TODO pill in the footer. |
| C4 | ATIA accreditation number | `src/data/site.json` | The accreditation number | ATIA also sets logo display rules that need checking. |
| C5 | CLIA membership number | `src/data/site.json` | The membership number | |
| C6 | Web3Forms access key | `.env` → `PUBLIC_WEB3FORMS_KEY` | Key from web3forms.com | Without it the form prepares a mail draft instead of delivering. |

## Blocks a feature, not launch

| ID | Placeholder | Where | Replaced by | Notes |
|---|---|---|---|---|
| C7 | Genesys subscribe embed | `src/components/NewsletterForm.astro` | The real embed snippet | Karim holds a Client ID and Form ID. The snippet itself is unconfirmed. See `INTEGRATIONS.md`. |
| C8 | Calendly URL | `.env` → `PUBLIC_CALENDLY_URL` | Free Calendly discovery-call link | Contact page shows a marked block pointing at the enquiry form instead. |
| C9 | Four partner logos | `src/data/partners.json` | Cruise line artwork plus written permission | Renders as four marked blocks in the footer. |

## Content accuracy

| ID | Placeholder | Where | Replaced by | Notes |
|---|---|---|---|---|
| C10 | Antarctica article body | `src/content/journal/looking-south-to-antarctica.md` | Sienna's approved article | Current text was written for the design mock-up. It is not her work and must not be published under her name. |
| C11 | Four job titles | `src/content/team/*.md` | Confirmed titles | `approved: false` renders a warning on the page. |
| C12 | Four surnames and bios | `src/content/team/` | Approved bios | Renee, Jodie and Krista have no surname recorded. |
| C13 | Instagram URL | `src/data/site.json` | Confirmed profile | Marked `unconfirmed`. Carried over as a guess from the first draft. |
| C14 | Facebook URL | `src/data/site.json` | Confirmed profile | Same. |
| C15 | Trading hours | `src/data/site.json` | Confirmed hours | Renders as a TODO pill on the contact page. |
| C16 | Alatus destination URL | `src/data/memberships.json` | The correct URL | Logo renders unlinked until supplied. |

## Deployment

| ID | Placeholder | Where | Replaced by | Notes |
|---|---|---|---|---|
| C17 | CMS auth worker URL | `public/admin/config.yml` → `base_url` | Deployed worker address | CMS cannot authenticate until this exists. See `DEPLOY.md`. |

## Deliberately not filled in

Three things were left rather than invented, because a plausible guess is worse than a visible
gap:

- **The privacy policy.** A legal document is not drafted on someone's behalf. The page lists
  what it has to cover so the scope is visible.
- **The team's surnames and titles.** Guessing a colleague's job title puts words in their mouth.
- **The Antarctica article.** Publishing mock-up copy under a real advisor's byline would
  misattribute writing to a person who did not write it.
