# Polish plan

How the site gets from approved design to launch-ready without guessing. Baseline set 25 October
2026 by an Impeccable critique of all ten routes: **20/32 on the applicable Nielsen heuristics
(Acceptable)**. The full critique is archived under `.impeccable/critique/`.

## 1. Rules of the work

1. **One pass at a time, across the whole site.** Not one page at a time. A type fix made on one
   page and not the others is new inconsistency.
2. **Every change cites its rule.** A line in `DESIGN.md`, `brand-kit/BRAND.md`, `PRODUCT.md`,
   `docs/REFERENCES.md`, a Nielsen heuristic or an Impeccable reference. No rule, no change.
3. **Decisions are not defects.** Anything that reverses a settled decision in `DESIGN.md` goes to
   the decisions list (section 6) for Karim, not into code.
4. **Never invent content.** Gaps go to the content list (section 7) and stay visible on the page.
5. **Look at 1440px and 390px** after each pass, then run the gates in section 3.
6. **Score, fix lowest first.** Re-run `/impeccable critique` after each pass so the score moves on
   evidence.

## 2. The passes

| Pass | Question | Impeccable command | Rule sources |
|---|---|---|---|
| 1. Hardening | Does anything break, trap or fail AA? | `harden`, `audit` | `PRODUCT.md` accessibility, WCAG 2.2 AA |
| 2. Content | Does each section earn its place, once? | `distill`, `clarify` | `PRODUCT.md` principles, `docs/REFERENCES.md` |
| 3. Hierarchy | One focal point and one primary action per section? | `critique` | `brand-kit/BRAND.md` buttons, references principle 4 |
| 4. Layout and rhythm | Consistent spacing, shared edges, no dead space? | `layout` | `DESIGN.md` layout and section rhythm |
| 5. Typography | Kit roles only, 68-character measure, no stragglers? | `typeset` | `brand-kit/BRAND.md` typography |
| 6. Imagery | Ratios, grading, crop, no repeats? | `polish` | `DESIGN.md` imagery direction |
| 7. Final | Everything green, nothing drifted? | `audit`, `polish` | Section 3 gates |

## 3. Gates, after every pass

```bash
pnpm build
pnpm test:qa                 # read qa/reports/QA-REPORT.md, not the exit code
pnpm qa:lighthouse           # qa/reports/LIGHTHOUSE.md, report-only
pnpm brand:check
.claude/skills/impeccable/scripts/impeccable detect --json dist/
```

**Detector triage, so nobody fixes a false positive.** The file engine reports 63 findings on
`dist/`. Of those, 52 are false positives and 10 are intentional:

| Rule | Verdict | Why |
|---|---|---|
| `cramped-padding` (38) | False positive | Inset comes from the `.shell` gutter and `clamp()` padding the file engine cannot see. The browser engine reports none |
| `tight-leading` (6) | False positive, detector bug | It converts body's unitless `line-height: 1.65` to a fixed pixel value before the child's size applies. Chromium computes 1.65 |
| `low-contrast`, file engine (8) | False positive as reported | It compares against the body colour and ignores the hero photograph. The real issue is B2 below |
| `repeating-stripes-gradient` (10) | Intentional | The marked placeholder blocks `CLAUDE.md` requires |

The browser engine (`detect --viewport`, needs Chromium) is the trustworthy one.

**Lighthouse baseline, 25 October 2026** (`qa/reports/LIGHTHOUSE.md`). Desktop: 100 across the
board, except accessibility 98 on `/expertise/` (the h1 to h3 skip, B7). Mobile: performance 97,
but **CLS 0.108 on every route**, just over the 0.1 "good" line, and the same value everywhere, so
the shift comes from a shared element (header, top bar or font swap), not page content. `/404.html`
is the outlier at CLS 0.238 and performance 88. Added as B16 below.

## 4. Scorecard

Baseline from the critique, 1 to 5. Re-score after each pass.

| Route | Content | Hierarchy | Layout | Type | Imagery |
|---|---|---|---|---|---|
| `/` | 3 | 3 | 3 | 4 | 3 |
| `/expertise/` | 2 | 2 | 3 | 2 | 4 |
| `/luxury/` | 2 | 3 | 4 | 4 | 3 |
| `/virtuoso/` | 3 | 3 | 2 | 3 | 2 |
| `/who-we-are/` | 3 | 3 | 2 | 3 | 2 |
| `/contact/` | 4 | 3 | 3 | 4 | 3 |
| `/journal/` | 2 | 4 | 3 | 3 | 3 |
| Article | 3 | 4 | 4 | 4 | 3 |
| `/privacy/` | 3 | 4 | 4 | 4 | n/a |
| `/404.html` | 2 | 4 | 3 | 4 | n/a |

## 5. Backlog, ranked

**Blocked by** names a decision (D) or content item (C) that must land first.

| ID | Sev | Pass | Finding | Fix | Command | Blocked by |
|---|---|---|---|---|---|---|
| B1 | P1 | 1 | **Fixed 25 October 2026.** Mobile menu opened after scrolling has no visible close: `body.menu-open { overflow: hidden }` breaks the sticky header and the toggle leaves the viewport behind the fixed panel. Toggle never shows a Close state | Keep the toggle above the panel, lock scroll without breaking sticky, real Close state, regression test at `scrollY > 0` | `harden` | |
| B2 | P1 | 1 | **Fixed 25 October 2026**: corner-weighted protection on wider screens, fuller protection on phones, measured on every hero and slide at 1440, 834 and 390. Hero lede failed AA over photographs: `/virtuoso/` 3.6:1 at 390px, 4.2:1 at 1440px; `/who-we-are/` 4.46:1 | Local text-protection gradient behind the text block. Do not darken the whole image: the navy scrim already cools the grading `DESIGN.md` asks for | `audit` | |
| B3 | P1 | 2 | Closing stack ("Why book", logo wall, partner tiles, newsletter strip) repeats on eight routes: 41 to 47 per cent of Luxury, Virtuoso and Journal at desktop | "Why book" on home and Expertise only; logos in the footer only; newsletter once per page; other pages end on one invitation | `distill` | D1 |
| B4 | P1 | 2 | **Closed 25 October 2026**: the top bar was removed at the client's request. Mobile top bar took 24 per cent of the first phone screen; hero buttons fall below 680px | One line under 680px: phone, optionally hours | `distill`, `adapt` | D2 |
| B5 | P1 | 3 | The main action has seven labels and two behaviours; the Zoom link on every page reaches a TODO | One label, one behaviour, phone as the only secondary | `clarify` | D3 |
| B6 | P2 | 5 | Type roles drift: Expertise intro 28px over ten lines; Gina's best line set as a 13px kicker; home service-row titles 16px, same as their descriptions; article body and Journal lede in Libre Baskerville, which `BRAND.md` reserves for headings | Map every text role to a kit role | `typeset` | |
| B7 | P2 | 5 | `/expertise/` jumps h1 to h3; `.long-copy` runs 89 to 94 characters, `/privacy/` about 92, against the kit's 68 | Promote card titles to h2; constrain the measure | `typeset` | |
| B8 | P2 | 6 | Antarctic photograph used four times; `team-outside`, `cruise-dining` and `european-rail` each twice; Virtuoso mark used as a picture on three pages | One use per photograph; marks only as marks | `polish` | C1 |
| B9 | P2 | 4 | `/who-we-are/` grid orphans one card at 1440px; three of four portraits are placeholders | Four-up grid | `layout` | C2 for photographs |
| B10 | P2 | 2 | `/luxury/` is thin, about 245 words, with the shared stack nearly half the page | Merge into Expertise, or carry Gina's seven sections in full | `distill` | D4 |
| B11 | P2 | 2 | The Journal promises "fortnightly"; the newest post is October 2025 and four of five entries link off-site | Do not invent posts or a cadence | `clarify` | C3 |
| B12 | P2 | 3 | Home services are four 16px sans rows, the weakest block on the page, while Expertise has the approved cards | Give them the approved card or heading treatment | `layout` | |
| B13 | P3 | 5 | One-word last lines in list items on seven routes: `text-wrap: pretty` is set on `p` only | Extend to `li` | `polish` | |
| B14 | P3 | 3 | 404 copy names the journal and expertise; its buttons go home and to contact | Match the buttons to the copy | `clarify` | |
| B15 | P3 | 2 | Some prose is hard-coded in `index.astro`, against `CLAUDE.md` | Move to `src/content/` or `src/data/` | | |
| B16 | P2 | 1 | **Mostly fixed 25 October 2026**: the shared shift was the top bar, removed in Phase 1; mobile CLS is now 0 to 0.023 on every route except `/404.html` at 0.179. Was: mobile CLS 0.108 on every route from a shared element; `/404.html` 0.238 | Find the shifting element with the Lighthouse trace (`qa/reports/lighthouse/mobile/`), reserve its space | `optimize` | |

**Not actions.** The carousel's missing position indicator is a settled `BRAND.md` decision (no
visible control, four mitigations). The underlined hero text link needs checking against the
`BRAND.md` distinction between text links and calls to action before anything changes.

## 6. Decisions needed (Karim)

| ID | Question | Recommendation |
|---|---|---|
| D1 | Keep "Why book", the logo wall and the newsletter strip on every page? | Home and Expertise only; one invitation elsewhere |
| D2 | Gina asked for the top bar. Keep it in full on phones? | Full on desktop, one line under 680px |
| D3 | One label for the main action, and should a link to a not-yet-existing Calendly appear on every page? `CLAUDE.md` says gaps stay visible; a dead end in the header is a different thing from a marked gap | Pick one label. Keep the Calendly TODO on `/contact/`, drop the header link until it exists |
| D4 | Is Luxury a page or a section of Expertise? | Decide on Gina's content, not on layout |
| D5 | The partner row is four TODO tiles on every page. Show the row until partners arrive, or hold it back? | Show it on one page only, marked |

## 7. Content needed (Gina)

Recorded in `docs/CONTENT-REGISTER.md`. The items this plan is waiting on:

- **C1** More licensed photography so no image appears twice.
- **C2** Portraits for the three team members still shown as placeholders.
- **C3** The Journal's real cadence, or new posts.
- Trading hours (for the top bar and enquiry rail), cruise partners, Calendly account.

## 8. Client review loop

Feedback goes on the page, not in screenshots by email.

1. Every push to a branch gets a Vercel preview at its own URL. The project has no password or SSO
   protection, so the link opens for anyone.
2. Commenting needs a free Vercel account. Invite Gina and Karim from the toolbar's **Share** menu
   on a preview; they click any element and leave a comment pinned to it.
3. Comments are read back with the Vercel MCP (`list_toolbar_threads`) or `vercel comments`, turned
   into backlog rows here, and resolved on the thread with the commit that fixed them.
4. Taste calls ("does this feel elegant?") come back to section 6 as decisions, not straight into
   code.

## 9. Toolkit reference

| Tool | Where | Use |
|---|---|---|
| Impeccable 4.7.0 | `.claude/skills/impeccable/` | `/impeccable critique`, `audit`, `polish` and the pass commands in section 2 |
| Unlighthouse | `pnpm qa:lighthouse` | Lighthouse on every route, mobile and desktop |
| QA suite | `pnpm test:qa` | Functional, responsive, accessibility, cross-browser, brand, visual |
| Peer references | `docs/REFERENCES.md` | Jacada, Scott Dunn, Black Tomato, Aman, section by section |
| View transitions | `src/styles/site.css` | 220ms page cross-fade, off under reduced motion |
