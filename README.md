# Travelling Places website

Multi-page website for Travelling Places, a travel agency on Tamborine Mountain trading since
1993. Built with Astro, edited through Sveltia CMS, deployed to Cloudflare Pages.

**Not live yet.** `travellingplaces.com.au` currently serves nothing. Before it does, work
through `docs/DNS-CUTOVER.md`. The domain carries the business's Microsoft 365 email, and a
careless nameserver change breaks it.

## Local development

```bash
pnpm install
pnpm dev          # http://127.0.0.1:4321
```

`pnpm` is not on PATH on the build machine. Use `corepack pnpm` if the bare command fails.

## Commands

| Command | Does |
|---|---|
| `pnpm dev` | Dev server with hot reload |
| `pnpm build` | Static build into `dist/` |
| `pnpm preview` | Serve the built site |
| `pnpm check` | Astro type and content-schema check |
| `pnpm check:licensing` | Fails if unlicensed imagery is still referenced |
| `pnpm check:placeholders` | Lists placeholders remaining in the built site |
| `pnpm test:qa` | The whole QA suite, then writes the report |
| `pnpm test:ui` | Functional behaviour in Chromium |
| `pnpm test:responsive` | Layout audit, 9 routes across 19 viewports |
| `pnpm test:a11y` | axe-core, plus keyboard and focus checks |
| `pnpm test:brand` | Stylelint, css-analyzer and computed-style brand checks |
| `pnpm test:crossbrowser` | Firefox and WebKit smoke at three viewports |
| `pnpm test:visual` | Compare against the visual reference images |
| `pnpm lint:css` | Stylelint on its own |

`pnpm check:licensing` **now passes.** It fails by design whenever an unlicensed image is
referenced, and it did so for as long as the nine unlicensed virtuoso.com photographs were in use.
Licensed replacements landed in `cc194c7`, so the manifest now holds 30 images with none
unlicensed. See `src/assets/images/MANIFEST.md`.

The QA suite has its own documentation in [`qa/README.md`](qa/README.md), including how visual
baselines are approved and why the current ones are not. `docs/QA.md` is the manual record from the
first draft, kept as history; the automated suite supersedes it.

## Where things live

| What | Where | Who edits it |
|---|---|---|
| Journal articles | `src/content/journal/*.md` | Staff, via `/admin/` |
| Team profiles | `src/content/team/*.md` | Staff, via `/admin/` |
| Service descriptions | `src/content/services/*.md` | Staff, via `/admin/` |
| Contact details, ABN, socials | `src/data/site.json` | Staff, via `/admin/` |
| Memberships, partners, navigation | `src/data/*.json` | Developer |
| Imagery | `src/assets/images/` | Developer, with a `MANIFEST.md` row |
| Logos | `public/images/brand/` | Developer |
| Page structure | `src/pages/*.astro` | Developer |
| Styling | `src/styles/*.css` | Developer |

Nothing on a page is hard-coded prose any more. The first draft kept every word of copy inside
`src/main.js` as template literals and injected it with `innerHTML`, which meant search engines
received an empty page and no CMS could attach. That file is gone.

## Brand system

The canonical brand system is `brand-kit/`. Coding agents start with
`brand-kit/BRAND.md` and `brand-kit/AGENT-BRIEF.md`. The visual reference is served at
`/brand-kit/` in development and is published with the site.

```bash
pnpm brand:check
pnpm brand:report:site
```

## Documentation

| File | Covers |
|---|---|
| `brand-kit/` | Canonical brand system: tokens, logos, fonts, components |
| `BRAND.md` | Superseded by `brand-kit/BRAND.md`; kept as a pointer |
| `DESIGN.md` | Design system, plus the Belmond imagery direction |
| `PRODUCT.md` | Purpose, audience, voice, accessibility target |
| `docs/CONTENT-REGISTER.md` | Every placeholder, who supplies it, what it blocks |
| `docs/INTEGRATIONS.md` | Virtuoso, Calendly, Genesys, enquiry form |
| `docs/DEPLOY.md` | Cloudflare Pages and CMS setup |
| `docs/DNS-CUTOVER.md` | Domain migration, and how not to break email |
| `docs/IMAGE-LICENSING.md` | Pointer to the imagery manifest |
| `docs/QA.md` | QA record from the first draft, kept as history |

The go-live checklist workbook lives outside the repo, in the OneDrive project folder under
`FW_ Logos`. It tracks owners, dates and status across every launch workstream.

## Environment

Copy `.env.example` to `.env`. All four values are still outstanding. The site degrades visibly
rather than silently when they are missing, so it runs fine without them.
