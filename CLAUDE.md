# Working in this repository

Notes for agents and developers. Read this before making changes.

## What this is

The website for Travelling Places, an operating travel agency on Tamborine Mountain. Astro,
static output, Sveltia CMS, Cloudflare Pages. Not live yet.

## Rules specific to this repo

**Never publish an image without a manifest row.** `src/assets/images/MANIFEST.md` is the
register. Nine photographs currently in the repo were saved from virtuoso.com and hold no
licence. `pnpm check:licensing` fails while any is referenced, and that failure is intended,
not a bug to work around. Do not silence the check, do not delete the images, and do not mark
one licensed without evidence that a licence exists.

**Never invent content.** Four team members have unconfirmed job titles and three have no
surname recorded. The Antarctica article was written for the mock-up and is not Sienna
Gardner's work. Guessing a colleague's job title or publishing draft copy under a real byline
misattributes words to a real person. Leave the placeholder, which is visible and marked.

**Never draft the privacy policy.** `src/pages/privacy.astro` is a scaffold listing what the
policy must cover. It is a legal document. Leave it as a scaffold.

**Placeholders must be visible.** A missing image renders as a marked block at the correct
aspect ratio. A missing value renders as a red TODO pill. Never let a gap fail silently, and
never fill one with plausible-looking filler.

**Never touch DNS from here.** The domain carries the business's live Microsoft 365 email.
`docs/DNS-CUTOVER.md` is the runbook, and it is worked through by a person with the Microsoft
365 admin centre open, not executed by an agent.

## Where content lives

No page contains hard-coded prose. Copy lives in `src/content/` as markdown and `src/data/` as
JSON, both CMS-editable. If a change means typing a sentence into a `.astro` file, it probably
belongs in content instead.

## Design

`PRODUCT.md` and `DESIGN.md` are the brief for the `impeccable` skill, which is what built the
original visual system. Keep both at root; the brand kit's sync map expects `DESIGN.md` there.

The design is approved and built. Use the refinement path, not redesign. The Belmond imagery
reference is settled at the end of `DESIGN.md`: the look was adopted, the tile grid was refused
because it fights the product brief. Do not reintroduce a card grid without arguing with that
reasoning first.

The brand voice is in `PRODUCT.md`: warm, assured, well-travelled, an experienced advisor
welcoming someone into a calm local office. It is the brand's voice, not the repository owner's.

## Before you finish

```bash
pnpm build
pnpm check:placeholders
pnpm check:licensing     # expected to fail until imagery is replaced
```

Verify on a live render at 1440px and 390px. Mobile centring has regressed on this kind of work
before, so a desktop-only pass is not a pass.

## History worth knowing

The first draft kept every word of copy on all seven pages inside `src/main.js` as template
literals, injected with `document.body.innerHTML`. The `.html` files were empty shells. Search
engines received a blank page and no CMS could attach. That file and the seven shells are gone,
along with `vite.config.js` and its hand-written asset-copy plugin. Do not reintroduce
client-side content rendering.
