# Travelling Places brand system v2

This folder is the canonical brand and interface reference for Travelling Places.

## Start here

- People: open `index.html` through the project development server.
- Coding agents: read `BRAND.md`, then `AGENT-BRIEF.md`, then `brand.tokens.json`.
- Component implementation: use the files in `components/` with `styles/components.css`.
- Logo exports: use `assets/logos/`.
- Typography: the kit self-hosts the files in `fonts/` through `styles/fonts.css`. The website loads the same two faces from Google Fonts. Both routes are approved; see BRAND.md.

## Commands

```sh
pnpm dev
pnpm brand:build
pnpm brand:check
pnpm brand:qa
pnpm brand:report:site
```

Open `/brand-kit/` while the development server is running. `brand:qa` expects the default Vite address on port 5173. Pass a different URL after the command when another port is used.

The logo builder requires Python with the packages listed in `scripts/requirements.txt`. Generated logo and font assets are committed, so ordinary website builds do not require Python.

`brand:check` validates the kit. `brand:report:site` reports migration work in the existing website without failing the command.

## Source limitation

The illustrated aircraft mark was reconstructed from the supplied raster artwork because no original illustrator vector was available. It is a production SVG and remains faithful at normal use sizes. If the original AI, EPS, or PDF artwork becomes available, replace only the mark paths and retain the v2 dimensions, filenames, clear-space rules, and colour variants.
