# Agent brief

This file is a compact enforcement layer. `BRAND.md` contains the full reasoning and specifications.

## Required

- Use Libre Baskerville Regular for display and headings.
- Use IBM Plex Sans for copy and interface text.
- Use only approved colour, type, spacing, shape, and motion tokens.
- Keep display text at or below 56px and hero headings to one or two lines.
- Keep most surfaces white.
- Use the supplied SVG logos without cropping or recolouring.
- Use complete button variants for calls to action.
- Keep controls at least 44px.
- Preserve visible focus, keyboard access, reduced motion, and AA contrast.

## Prohibited

- Eyebrow headings.
- Decorative section numbering.
- Italic type.
- Em dash and en dash characters.
- Diagonal arrow glyphs or icons.
- Underlined calls to action.
- Blue text on navy.
- Red text on navy.
- Red background sections.
- Default styling from third-party component libraries.
- Display type above 56px.
- Invented claims, awards, partnerships, or destinations.

## Implementation order

Use existing content and factual claims. Apply tokens. Reuse included components. Check contrast. Test keyboard behaviour. Confirm hero headings remain within two lines at 375px, 768px, 1280px, and 1440px. Run `pnpm brand:check` and `pnpm build`.
