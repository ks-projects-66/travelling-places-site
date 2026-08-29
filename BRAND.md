# Travelling Places — Brand Kit

Canonical brand reference for agent-first development. Pair with `DESIGN.md` in the site repo (ks-projects-66/travelling-places-site). Less is more: white space carries the page, navy provides structure, red appears in small decisive accents.

## Logo

All logo files are true vector SVG, traced from the original artwork.

| File | Use |
|---|---|
| `assets/logo-full.svg` | Primary lockup (mark + blue wordmark) on white/light surfaces. Header. |
| `assets/logo-full-inverse.svg` | Inverse lockup (white wordmark) on navy surfaces. Footer navigation. |
| `assets/logo-mark.svg` | Illustrated mark alone. Light signature use only — never a repeated decoration. |
| `assets/wordmark-blue.svg` | Wordmark alone, brand blue, on white. |
| `assets/wordmark-black.svg` | Wordmark alone, black on white. Mono contexts. |
| `assets/wordmark-white.svg` | Wordmark alone, white on navy. |

Rules: never recolour the mark, never stretch, keep clear space ≥ the cap-height of the wordmark. Minimum lockup width 160px; below that use the wordmark alone.

## Colour

Hierarchy: white predominant → navy as hero/structural colour → blue for interaction → red as a small accent. Nothing else.

| Token (CSS var) | Value | Role |
|---|---|---|
| `--white` | `oklch(100% 0 0)` / `#FFFFFF` | Predominant surface |
| `--mist` | `oklch(96.5% 0.008 264)` ≈ `#F1F2F6` | Quiet secondary surface |
| `--blue-deep` (navy) | `oklch(31% 0.10 264)` ≈ `#25335F` | Hero colour: dark sections, footer, headlines |
| `--blue` | `oklch(48% 0.14 264)` ≈ `#3E55A0` | Interactive: buttons, links, labels |
| `--red` | `oklch(62% 0.22 23)` ≈ `#D7333F` | Accent only: underlines, markers, numbers. Never a surface |
| `--ink` | `oklch(25% 0.025 264)` | Body text |
| `--ink-muted` | `oklch(46% 0.025 264)` | Secondary text |
| `--line` | `oklch(88% 0.012 264)` | Hairline rules and borders |

Logo artwork colours (fixed, do not theme): blue `#3E559C`, red `#D7333F`, grey `#A6A8A7`, outline `#221F20`.

## Typography

| Family | Role | Weights |
|---|---|---|
| Libre Baskerville (fallback Baskerville, Georgia, serif) | Display + headings. Matches the serif wordmark. Weight 400, tight leading (1.08), letter-spacing -0.025em | 400 |
| IBM Plex Sans (fallback Segoe UI, Arial, sans-serif) | Body, UI, navigation, forms | 400, 500, 600 |

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=Libre+Baskerville&display=swap" rel="stylesheet">
```

Headings are never bold serif; weight comes from size, not thickness.

## Layout & shape

- Content shell 1200px; gutters clamp(20px, 4vw, 48px); section rhythm 80–144px.
- Images: 12px corners. Buttons: full pill (999px), min-height 52px.
- No card grids; organise with open columns and hairline-ruled lists.

## Component libraries

- lucide-icons/lucide — UI icons: menu, close, arrows, phone, email, location, carousel controls. Stroke-width 1.75, sized 18–22px, coloured with currentColor.
- simple-icons/simple-icons — brand icons only (Instagram, Facebook).
- nolimits4web/swiper — homepage destination carousel (touch, keyboard, autoplay, pagination, a11y).
- shoelace-style/webawesome — dialogs, selects, date fields, dropdowns, form controls; restyle with the tokens above.
- floating-ui/floating-ui — positioning for dropdowns, tooltips, anchored menus.

## Voice for agents

Sophisticated and restrained. Prefer removing an element over decorating it. Red is earned, not sprinkled. Respect `prefers-reduced-motion`.
