# Brand system QA

Validated on 29 August 2026.

| Check | Result | Evidence |
|---|---|---|
| Brand rules | Pass | No prohibited patterns or approved-pair contrast failures |
| Production build | Pass | Vite generated all website pages and the brand-kit page |
| Desktop browser | Pass | 1440px rendering, assets, carousel, pause control, and form validation |
| Mobile browser | Pass | 375px rendering, responsive table, menu, Escape key, footer icons, and form validation |
| Runtime health | Pass | No console errors, page errors, failed requests, broken images, or horizontal overflow |

Screenshots are saved as `qa/desktop.png` and `qa/mobile.png`.

## Existing website migration report

The current first-draft website was deliberately left unchanged. `pnpm brand:report:site` reports 51 known migration items. They consist of long dash characters, diagonal arrow characters, italic elements, eyebrow styling, decorative numbering, pill controls, and one CSS comment containing a long dash character.

These findings do not affect the v2 kit pass. They define the next website migration scope.
