# Travelling Places brand system

Version 3.0.0 is the canonical source for website and marketing production.

Travelling Places should feel established, personal, and quietly confident. Belmond is a reference for restraint, image priority, and typographic balance. Do not reproduce Belmond layouts, wording, assets, or proprietary typefaces.

## Logo

Use the supplied SVG files. Do not recreate the wordmark with a different typeface.

| Asset | Use |
|---|---|
| `assets/logos/lockup-primary.svg` | Primary logo on white and mist |
| `assets/logos/lockup-dark.svg` | Primary logo on navy or dark photography |
| `assets/logos/wordmark-blue.svg` | Compact horizontal use on white and mist |
| `assets/logos/wordmark-white.svg` | Compact horizontal use on navy or dark photography |
| `assets/logos/wordmark-black.svg` | Monochrome production |
| `assets/logos/mark-light.svg` | Standalone illustration on white and mist |
| `assets/logos/mark-dark.svg` | Standalone illustration on navy or dark photography |

The official wordmark is Libre Baskerville Regular converted to SVG outlines. The letterforms include internal SVG safety space, so the first and last letters must not be cropped through CSS or export tools.

Clear space for a lockup or wordmark is one capital T height on every side. Clear space for the standalone mark is one eighth of its height.

Minimum digital sizes are 172px wide for the combined lockup, 120px wide for the wordmark, and 48px high for the mark. Minimum print sizes are 58mm, 32mm, and 14mm respectively.

Do not stretch, rotate, recolour, add shadows, place in a container shape, repeat as decoration, or separate the lockup elements and recombine them at a new proportion.

## Colour

Use only tokens from `brand.tokens.json` or `styles/tokens.css`.

Ground, a warm off-white, is the primary page surface and should occupy most of each page. White is reserved for panels and for text on brand colours. Navy provides structure. Blue identifies actions. Red is limited to focus, validation, and small accents. Red is never a large background.

Brand red is not used for text below 24px on a light surface. It measures 4.13 to 1 on mist and fails AA at small sizes, so small red text uses the separate red text token.

Approved button and text pairs:

| Foreground | Background | Contrast | Use |
|---|---|---:|---|
| White | Blue | 6.97 to 1 | Primary action |
| White | Navy | 12.23 to 1 | Text and controls on dark sections |
| Navy | White | 12.23 to 1 | Headings and secondary action |
| Ink | White | 14.10 to 1 | Body copy |
| Muted | White | 6.08 to 1 | Supporting copy |
| Red | White | 4.74 to 1 | Large accent marks and focus |
| Red text | White | 4.71 to 1 | Small red text: meta labels, field errors, placeholder notes |

Never use blue text on navy or red text on navy.

## Typography

Libre Baskerville Regular is used for display, page headings, section headings, subsection headings, and menu headings. It is always weight 400 and always upright.

IBM Plex Sans is used for body copy, navigation, buttons, forms, captions, and fine print. Use weights 400, 500, and 600 only.

Delivery differs by surface, and both are approved. The kit self-hosts woff2 from `fonts/` through `styles/fonts.css`, so the reference page stands alone. The website loads both faces from Google Fonts. Whichever route is used, request weight 400 for Libre Baskerville only; the kit permits no other weight of the display face.

| Role | Size | Line height | Maximum line width |
|---|---|---:|---|
| Hero display | 34px to 56px | 1.08 | 24ch |
| Page heading | 36px to 48px | 1.12 | 22ch |
| Section heading | 30px to 40px | 1.16 | 24ch |
| Subsection heading | 22px to 28px | 1.25 | 30ch |
| Menu heading | 26px to 30px | 1.2 | Contextual |
| Lead copy | 18px to 19px | 1.55 | 58ch |
| Body copy | 16px | 1.65 | 68ch |
| Navigation | 14px | 1.4 | Contextual |
| Buttons | 16px | 1.4 | Contextual |
| Fine print | 13px | 1.5 | 72ch |
| Meta label | 12.5px | 1.4 | Contextual |

The meta label is the one approved uppercase treatment: 12.5px, weight 600, 0.06em tracking, uppercase, in the body sans. It carries story meta, role labels and roster roles. It is not a heading and never uses a heading element.

Headings use size and spacing for hierarchy, not bold weight. Keep sentence case. Do not use italics, all-caps headings, eyebrow headings, or decorative section numbering. The meta label sits outside this rule by name, because it is not a heading.

Journal article titles are editorial headlines rather than display copy, and may run to three lines. The two-line rule governs marketing heroes.

Below 375px a hero may also take a third line. A 320px screen leaves a 280px measure, and a single long word cannot share a line at any size the scale permits, so the rule stops being achievable rather than being broken. Display type steps to 29px below 375px to hold two lines wherever it still can. From 375px up, every hero on every route holds two lines.

Hero headings are an editorial and layout constraint, not a text-clamping effect. They must remain on one or two lines at approved breakpoints. Shorten the copy, widen the measure, or reduce the size within the token range if a third line appears.

## Spacing and layout

Use the spacing tokens. Do not invent nearby values.

The content shell is 1200px maximum with responsive gutters from 20px to 48px. Reading copy is limited to 720px or 68 characters. Section spacing ranges from 72px to 120px, with a documented 64px floor below 680px, where the standard band would otherwise squeeze the mobile rhythm to a 40px spread. Use 24px between a heading and lead copy, 16px between a heading and ordinary body copy, and 16px between paragraphs.

Images and fields are normally square-cornered. Text buttons use the full pill radius. Avoid floating cards and repeated boxed content where an open layout or ruled list will work.

## Buttons and links

Use the included button variants. A section has one primary action and no more than one secondary action.

Button labels are direct and sentence case. Text buttons are 50px high with 28px horizontal padding and do not contain decorative icons. Use icon-only controls for established utility actions such as carousel navigation. Do not use diagonal arrows. Do not underline calls to action. Ordinary navigation links are unboxed, while promotional and in-content sitelinks use buttons.

Disabled buttons retain a white background and a clear ink border. Their label uses muted ink, and their cursor communicates that the control is unavailable. Do not fade the entire control with opacity.

Interactive targets meet WCAG 2.5.8 (Minimum, AA): at least 24 by 24 CSS pixels, with the inline and spacing exceptions the standard allows. 44px stays the preferred size for a standalone control and is what `--tp-control-min` carries, but it is the AAA figure from 2.5.5 and is held as a target rather than a conformance floor. Focus uses the 3px brand red outline with a 3px offset.

## Navigation and footer

Primary navigation contains no more than five destinations plus the Plan a journey action. Use familiar labels. The mobile menu uses a standard menu icon, visible text alternatives, Escape-to-close behaviour, and preserved keyboard focus.

The footer uses the dark lockup, a short navigation list, contact details, and the official Instagram and Facebook icons. Do not use external-link arrow glyphs.

## Forms

Labels remain visible above fields. Required status is communicated in text and validation, not colour alone. Errors appear next to the relevant field and receive screen-reader announcements.

Input text is 16px minimum. Fields are 48px high minimum. Use a single-column form on narrow screens and no more than two columns on wide screens.

## Carousel

The kit component supports previous, next, pause, dots, arrow keys, and swipe when integrated with a touch handler.

The website carousel advances every three seconds and carries no visible control, which was a deliberate design decision. Four mitigations stand in place of a pause button: it stops while the pointer is over it, it stops while anything inside it has keyboard focus, it does not run while the tab is hidden, and it never auto-advances under reduced motion. Arrow keys still step through slides.

This leaves a known residual gap against WCAG 2.2.2, which asks for a way to pause content moving for more than five seconds. It is recorded here as an accepted risk rather than an oversight. If it becomes a problem the fix is to restore a visible control, not to lengthen the interval.

Captions use white direct headings over a controlled dark gradient. Keep captions to two lines and use no eyebrow, numbering, decorative line markers, or opaque text boxes.

## Imagery

Use natural, human, destination-led photography. Give images room to carry a section. Avoid collage treatments, excessive gradients, synthetic people, heavy filters, and generic card grids.

## Language rules

Use plain punctuation. Do not use em dash or en dash characters. Use commas, full stops, colons, or parentheses instead.

Do not use numbering as decoration. Numbers remain appropriate for real dates, prices, quantities, ordered instructions, and pagination.

## Accessibility and motion

Meet WCAG 2.2 AA. Normal text requires at least 4.5 to 1 contrast. Large text requires at least 3 to 1. Do not use colour as the only signal.

Respect `prefers-reduced-motion`. Keep ordinary interface transitions between 160ms and 220ms. Every control must work with keyboard input and have a visible focus state.

## Agent workflow

Before changing interface code:

1. Read this file and `AGENT-BRIEF.md`.
2. Use `brand.tokens.json` instead of inventing values.
3. Reuse or adapt the included components.
4. Run `pnpm brand:check`.
5. Run the normal build and responsive QA.
