# Brand

**The canonical brand system is [`brand-kit/BRAND.md`](brand-kit/BRAND.md).**

This file previously held a brand reference exported from an earlier kit. Keeping two brand
documents in one repository is how they drift apart, so it is now a pointer rather than a
second source.

| Looking for | Read |
|---|---|
| Colour, type, logo rules, component libraries | `brand-kit/BRAND.md` |
| Instructions for an agent doing interface work | `brand-kit/AGENT-BRIEF.md` and `AGENTS.md` |
| Design tokens as data | `brand-kit/brand.tokens.json` |
| Built components to reuse | `brand-kit/components/` |
| Layout, imagery direction and the Belmond decision | `DESIGN.md` |
| Purpose, audience, voice, accessibility target | `PRODUCT.md` |

Where the kit and `DESIGN.md` disagree: the kit governs tokens and components, `DESIGN.md`
governs layout and imagery.

The visual reference renders at `/brand-kit/` in development and is published with the site.
Check work against it with `pnpm brand:check`.
