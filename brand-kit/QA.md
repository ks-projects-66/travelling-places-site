# Brand system QA

Validated on 29 August 2026.

| Check | Result | Evidence |
|---|---|---|
| Brand rules | Pass | No prohibited patterns or approved-pair contrast failures |
| Production build | Pass | Vite generated all website pages and the brand-kit page |
| Desktop browser | Pass | 1440px rendering, assets, carousel, pause control, and form validation |
| Mobile browser | Pass | 375px rendering, responsive table, menu, Escape key, footer icons, and form validation |
| Runtime health | Pass | No console errors, page errors, failed requests, broken images, or horizontal overflow |
| Taste refinements | Pass | Hero uses no more than two lines, carousel text is white, text buttons are pills, disabled border is ink, and text buttons contain no icons |
| Icon rendering | Pass | Generated sprite preserves transparent paths and contains no solid 24px background paths |

Screenshots are saved as `qa/desktop.png` and `qa/mobile.png`.

## Existing website migration report

The current Astro website was deliberately left unchanged. `pnpm brand:report:site` reports 22 known migration items. They consist of diagonal arrow characters, italic elements, and one eyebrow heading class.

These findings do not affect the v2 kit pass. They define the next website migration scope.
