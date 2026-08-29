# Travelling Places website

First-draft multi-page website for Travelling Places, Tamborine Mountain.

## Local development

```bash
pnpm install
pnpm dev
```

## Production build

```bash
pnpm build
```

The production build is published from the `gh-pages` branch.

## Brand system

The agent-ready v2 brand system is in `brand-kit-v2/`. Open `/brand-kit-v2/` through the development server for the visual reference. Coding agents should start with `brand-kit-v2/BRAND.md` and `brand-kit-v2/AGENT-BRIEF.md`.

```bash
pnpm brand:check
pnpm brand:report:site
```
