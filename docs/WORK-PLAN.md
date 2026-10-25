# Work plan: to a ready-to-ship site

Drafted 25 October 2026 from the client's change brief of the same date, the critique in
`docs/POLISH-PLAN.md` and the peer set in `docs/REFERENCES.md`. The owner answered every question
in section 9 the same day; the decisions are recorded there and folded into the phases. This file
is the brief for the executing session.

## 1. Outcome and standard

**Outcome.** A site that can go live: every client change applied, no P1 or P2 defect open, all
gates green, and the only placeholders left are ones the business has been asked for by name.

**Standard.** "Belmond and Abercrombie & Kent" is achievable in craft and not in asset volume. Those
sites run on hundreds of photographs and video. This site has 33 licensed photographs and a
stills-only decision. What transfers is the discipline: one display voice, three or four close
background tones, text beneath images, one primary action, quiet trust signals, generous and uneven
rhythm (`docs/REFERENCES.md`, section 3). The plan buys that discipline; it cannot buy photographs.

**Definition of done**

| Gate | Target |
|---|---|
| Impeccable critique, all routes | 28/32 or better, no P1 or P2 open |
| `pnpm test:qa` | All suites green on Ubuntu; visual baselines regenerated and approved by a person |
| `pnpm qa:lighthouse` | Accessibility 100, performance 90 or better on mobile, every route |
| `pnpm check:placeholders` | Only items listed in `docs/CONTENT-REGISTER.md` as awaited |
| `pnpm check:licensing`, `pnpm brand:check` | Pass |
| Live render | Checked at 1440, 834 (tablet) and 390 by a person |
| Integrations | Owner's call (Q12): Web3Forms, Genesys and Calendly stay in place and wait for their accounts. Nothing is removed. "Ready to ship" means the site is finished and each awaited key is a named row in `docs/CONTENT-REGISTER.md` |

## 2. What the brief settles

The brief closes several items the critique had held for decision.

| Client change | Backlog items closed | Note |
|---|---|---|
| 1. Remove the ribbon above the nav | B4, D2, half of B5 | The Zoom link and the second newsletter button go with it |
| 2. Drop Virtuoso from the nav, fold into Luxury | D4 | `/virtuoso/` becomes a 301 to `/luxury/`; Gina's Virtuoso copy moves into the Luxury page |
| 3. Carousel becomes the hero; team photo to About | | Settles the hero in a different direction from `DESIGN.md`'s table. Record the change there |
| 4. Services section becomes two image cards | B12 | Cruising and Luxury travel, using the feature photographs |
| 5. Journal section rewritten and tightened | B11 (partly) | The "fortnightly" claim still needs Gina (Q7) |
| 6. Why book rebalanced, hairline lists replaced | | The copy is Gina's; the presentation is open |
| 7. Memberships renamed, partners removed, newsletter once | B3 (partly), D1, D5 | Hierarchy proposed in section 3 |
| 8. Privacy policy drafted with placeholders | | Overrides `CLAUDE.md`'s "never draft" rule; the rule is rewritten in Phase 0 once confirmed (Q11) |

Still open from the critique and carried into this plan: the mobile menu trap (B1), hero lede
contrast (B2), one label for the main action (B5, now simpler), type roles (B6, B7), image repeats
(B8), About grid (B9), stragglers (B13), 404 buttons (B14), hard-coded prose (B15).

## 3. Third parties: what each is, and where it belongs

Researched 25 October 2026. Sources in section 10.

| Name | What it is | Who it serves | Where it belongs on the site |
|---|---|---|---|
| **ATIA Accredited (ATAS)** | The Australian Travel Industry Association's accreditation scheme. Independent assessment against a charter: consumer-law compliance, insurance checks, annual financial review, a complaints and dispute pathway. Voluntary. ATIA states it is **not** an insurance or compensation scheme and gives no solvency guarantee | The client, as protection | Tier 1. The quiet trust strip, the footer, beside the enquiry form. ATIA publishes rules for displaying the mark; confirm compliance (noted in `memberships.json`) |
| **CLIA** | Cruise Lines International Association. Industry body; member agents complete cruise-line training and ship inspections. Australasian certification tiers are Accredited, Ambassador, Master | The client, as expertise | Tier 2. Trust strip and footer; named in About copy |
| **Virtuoso** | Invitation-only network of luxury travel agencies and about 2,200 preferred suppliers. Member agencies book clients into amenities (breakfast, credits, upgrades, onboard credit) at Virtuoso hotels and cruise lines | The client, as tangible benefit | Tier 3. It is a **membership network, not an accreditation**. It belongs inside Luxury as the mechanism behind the privileges, and in the footer strip as "Virtuoso member". It does not belong in the first screen or the nav |
| **Alatus** | Invitation-only buying group of about 30 premium independent Australian agencies, backed by Express Travel Group. Shared supplier deals, services and events | The trade. No client-facing benefit found | Tier 4. Footer text at most, or omit. Its URL is unconfirmed. Recommendation: omit (Q9) |
| **IATA TIDS** | IATA's Travel Industry Designator Service: a code that lets a non-IATA agency be recognised by suppliers | The trade | Tier 4. Keep in About copy where Gina wrote it; never a badge |
| **"Global Cruise Icon"** | Not found as a CLIA Australasia designation. CLIA's tiers are Accredited, Ambassador and Master. The awarding body needs confirming before this is lifted out of body copy | | Ask Gina (Q10) |

**Two claims to check before launch.** `why-book.json` says "Full financial security: ATIA
protected". ATIA's own charter says accreditation is not insurance or compensation. This is
Gina's wording and is not changed without her, but it should not go live as written (Q8).
"Global Cruise Icon" is the second (Q10).

**The strip.** Peers keep trust quiet: Black Tomato runs one monochrome row above the footer; A&K
keeps a guest-protection link and a registration number in the footer; Belmond shows nothing.
Proposed: one hairline row above the footer, three marks (ATIA, CLIA, Virtuoso), one sentence
rather than a heading, repeated beside the enquiry form on Contact. No "Accredited and connected",
no "Travel partners", no second newsletter prompt.

## 4. Phases

Each phase ends with the gates in section 6. Nothing ships from a phase that leaves a gate red.

### Phase 0: Prepare (short)

- Confirm answers to section 9; update this file.
- Rewrite the `CLAUDE.md` privacy rule to: a draft may exist, marked unapproved on the page and in
  the register, and a person approves it before launch.
- Fix the QA runtime: the pinned Playwright expects Chromium 1234 and the container has 1243.
  Install the matching browsers (`pnpm exec playwright install chromium firefox webkit`) or run QA
  in CI, which is canonical for visual baselines anyway.
- The `/virtuoso/` to `/luxury/` redirect (`vercel.json`, plus the Cloudflare `_redirects`
  equivalent noted in `docs/DEPLOY.md`) lands in the same Phase 1 commit that removes the page, so
  the preview never carries a redirect over a live route.

Done in the planning session: the `CLAUDE.md` privacy rule is rewritten; this plan carries the
owner's answers.

### Phase 1: Structure (client changes 1 to 3, plus the menu bug)

**Done 25 October 2026.** All automated QA green; visual baselines not regenerated, by plan, until the end of Phase 4.

| Task | Files | Notes |
|---|---|---|
| Remove the top bar | `TopBar.astro`, `BaseLayout.astro`, `top-bar.json`, `site.css` | Newsletter sign-up keeps one home: the row above the footer. Zoom link goes; Calendly TODO stays on Contact |
| Nav without Virtuoso | `navigation.json` (primary and footer), `SiteHeader.astro`, `SiteFooter.astro` | Four items plus one button |
| Merge Virtuoso into Luxury | `luxury.astro`, `luxury.json`, `virtuoso.json`, delete `virtuoso.astro` | Gina's Virtuoso copy becomes a section of Luxury, with a visible link to the member profile `https://www.virtuoso.com/member/travelli34092` inside that section (Q4). Update `qa/routes.js` REQUIRED, `docs/COPY-MAP.md`, register entries; structured data unchanged |
| Carousel hero | New `HomeHero.astro` from `PageHero.astro` and `Carousel.astro`, `index.astro`, `pages.css` | Full-bleed `min(85vh, 860px)`; stills rotate every 6 seconds; one fixed headline, lede and action over them (Q1); scrim replaced by local text protection (B2). **Previous and next arrow buttons on left and right**, 44px minimum, icon-only as `BRAND.md` allows for carousel navigation, visible focus, keyboard operable; the four existing mitigations stay (pause on hover and focus, stop when the tab is hidden, no auto-advance under reduced motion). `BRAND.md`'s "no visible control" line is superseded and rewritten |
| Team photo to About | `who-we-are.astro`, `DESIGN.md` hero table | Default: `team-outside` becomes the About hero, `team-office` moves to the story section (Q2) |
| Mobile menu | `site.css` lines around 27 and 819 to 841, `SiteHeader.astro`, new spec in `qa/specs/functional/` | Header above the panel, scroll lock that keeps sticky, real Close state, test at `scrollY > 0` |

### Phase 2: Home page sections (client changes 4 to 7)

**Done 25 October 2026** (`b24558c`).

| Task | Notes |
|---|---|
| Two feature cards | Cruising (`features/cruise-river-lyon.jpg` or `ship-at-sunset.jpg`), Luxury travel (`features/luxury-lakeside-villa.jpg`). Text beneath, 4:5 or 3:2 per `DESIGN.md`. Cruising link per Q5; Luxury to `/luxury/` (Q3). Remove the four-row list |
| Journal section | Heading "Journal"; one sentence of plain introduction that makes no promise about frequency (Q7); the latest article as one feature with text beneath (Aman pattern); one link to `/journal/`. Image inside the shell, no float. Remove "fortnightly" from `index.astro`, `journal/index.astro` and the footer |
| Why book | Keep Gina's claims, drop the hairline category lists. Default presentation: one short statement, then three or four proof points as plain prose rows or a restrained three-up, one action. Checked at 390, 834, 1440 (Q8) |
| Trust strip | As section 3, with Alatus kept (Q9): four marks, Alatus unlinked until its URL is confirmed, as `memberships.json` already provides. Delete `partners.json` usage and the heading. One newsletter row only |
| One main action | "Start planning", navigating to `/contact/`, everywhere (Q13). `EnquiryDialog.astro` is retired. Phone number is the only secondary |

### Phase 3: Secondary pages

**Done 25 October 2026** (`b24558c`). The privacy policy is a draft awaiting the owner's facts and a person's approval (`docs/PRIVACY-NOTES.md`).

| Page | Work |
|---|---|
| Luxury | Receives the Virtuoso section; one hero photograph not used elsewhere; Gina's three themes stay pending her sign-off (register C21) |
| About | New hero photograph; four-up team grid (B9); lift Gina's strongest facts out of grey body copy once Q10 is answered |
| Journal index | Plain introduction; feature plus hairline log stays; filter chips removed while there are five posts; dates visible; external posts marked as such |
| Contact | Side rail with phone, hours (when supplied) and the three marks; form first on mobile |
| 404 | Buttons match the copy |
| Privacy | Website-only draft policy with named placeholders for the privacy contact, retention periods and anything business-wide (Q11). Names every third party the site uses, including the awaited ones. Marked unapproved on the page and in the register until a person approves |

### Phase 4: Polish passes (from `docs/POLISH-PLAN.md`)

**Done 25 October 2026** (`a2edc12`, `76fca6d`). Re-critique 22/32 from 20/32; its P1 and P2s are fixed (`docs/POLISH-PLAN.md`, section 5a).

In order: `typeset` (B6, B7: kit roles only, 68-character measure, heading levels), `layout`
(rhythm after the new sections), `polish` for imagery (B8: one use per photograph), stragglers
(B13), hard-coded prose to content (B15). Re-run `/impeccable critique` after the pass.

### Phase 5: Ship

**Status 25 October 2026.** Every automated gate is green here and on Ubuntu CI (run
40181748807) except visual regression, which compares against references of the old design and
fails by construction until a person approves new ones. Lighthouse: 100 on every mobile route,
layout shift 0 everywhere. What stands between this branch and launch:

1. **Owner:** review the `visual-references-for-review` artifact from that run against the Vercel
   preview; if they are right, commit them with `node qa/visual/approve.mjs --i-have-reviewed-the-diffs`
   (`qa/README.md`). Never by an agent.
2. **Gina:** the content register rows still open (C11 to C16, C18 to C24) and the privacy facts
   in `docs/PRIVACY-NOTES.md`; a person then approves the policy.
3. **Accounts, when ready (Q12):** Web3Forms key, Genesys, Calendly. The site works without them.
4. **Launch:** host per `docs/DEPLOY.md`, DNS per `docs/DNS-CUTOVER.md`, by a person.


- `pnpm test:qa` green; regenerate visual references in CI and have a person approve the diffs.
- `pnpm qa:lighthouse` meets the table in section 1.
- `docs/CONTENT-REGISTER.md` current: every placeholder on the site has a row and an owner.
- Integrations (Q12): nothing removed; the form, newsletter and Calendly each have a register row naming the key or account awaited and who supplies it. The site is otherwise complete.
- Launch host per `docs/DEPLOY.md`; DNS per `docs/DNS-CUTOVER.md`, by a person.

## 5. Sequence and effort

| Phase | Depends on | Agent effort |
|---|---|---|
| 0 Prepare | Answers to Q11, Q12 | Under an hour |
| 1 Structure | Q1 to Q4 | One session |
| 2 Home sections | Q5, Q7, Q8, Q13 | One to two sessions |
| 3 Secondary pages | Q9, Q10, Q11 | One session |
| 4 Polish | Phases 1 to 3 | One session |
| 5 Ship | Everything, plus human approvals | One session plus the human steps |

Phases 1 and 2 can overlap once the hero is in, because the sections below it are independent.

## 6. Gates after every phase

```bash
pnpm build
pnpm test:qa
pnpm brand:check
pnpm check:placeholders
pnpm check:licensing
.claude/skills/impeccable/scripts/impeccable detect --json dist/   # browser engine findings only; see POLISH-PLAN section 3
```

Then look at 1440, 834 and 390. Mobile centring has regressed on this kind of work before.

## 7. Working method and model allocation

The executing session runs on Opus 5.5 as orchestrator. It keeps its own context small by never
viewing full-page screenshots itself and by delegating anything that reads many files.

| Work | Who | Why |
|---|---|---|
| Design judgement: hero composition, journal and why-book presentation, trust strip | Orchestrator (Opus), with `/impeccable` pass commands | Taste calls need the full brief in context |
| Visual verification at three widths after each task | Sonnet subagent | Captures, crops, reports geometry and defects; returns a short list, not images |
| Mechanical sweeps: route and link checks, register updates, grep for removed references, JSON edits | Haiku subagent | Cheap and exact |
| Privacy policy research and first draft | Sonnet subagent | Research-heavy, pattern-bound; the orchestrator edits for voice and placeholders |
| Finish review before each phase closes | `impeccable-finish-reviewer` agent | An unanchored second read |
| Anything needing this conversation's history | `fork` subagent | Inherits context; runs on the parent model |

Rules that hold throughout: `CLAUDE.md` (no invented content, visible placeholders, no DNS),
`brand-kit/AGENT-BRIEF.md`, the settled decisions in `DESIGN.md`, and section 1 of
`docs/POLISH-PLAN.md` (every change cites its rule).

## 8. Risks

| Risk | Handling |
|---|---|
| A hero carousel is the one pattern every peer avoids, and the client has asked for it | Build it as a slow still sequence with a fixed headline, not a slideshow with per-slide messages. One image at a time, no dots, no text that changes under the reader |
| Photograph supply: 33 licensed images for a site that now wants image-led cards and heroes | One use per photograph is the rule; the gaps become a named imagery brief for Gina (`docs/IMAGERY-BRIEF.md`) |
| Claims that do not hold ("ATIA protected", "Global Cruise Icon", "fortnightly") | Not changed silently and not shipped unverified; each is a question below |
| Visual baselines invalidated by a structural redesign | Expected. Regenerate in CI, approve by eye, once, at the end of Phase 4 |
| Integrations not configured | Shipping is gated on Q12; a `mailto` form is a draft state |
| Privacy policy drafted by an agent | Marked unapproved on the page; a person approves; the `CLAUDE.md` rule says so |

## 9. Questions and the owner's answers

Answered 25 October 2026. Where the answer differs from the default, the answer governs.

| # | Question | Default | Answer |
|---|---|---|---|
| Q1 | Hero: one fixed headline ("Your world, beautifully planned.") and one button over slowly rotating photographs, or a different headline per slide as the carousel has now? Which photographs: the current three, or add `japan-temple`, `spain-village`, `ship-at-sunset`? | Fixed headline and lede, one action, four photographs, 7-second advance | One fixed headline. Arrow buttons left and right; 6-second auto-advance (owner revised from 3 seconds on 25 October 2026); the arrows let a visitor step through |
| Q2 | Team photo on About: replace the About hero (currently the office photo), or sit in the body? | It becomes the About hero; the office photo moves into the story | Becomes the About hero |
| Q3 | "Luxury travel" card: link to our `/luxury/` page (with Virtuoso folded in) or to the external virtuoso.com member profile? | `/luxury/` | The Luxury page |
| Q4 | Confirm `/virtuoso/` is retired with a redirect and Gina's Virtuoso copy becomes a section of Luxury | Yes | Yes. The virtuoso.com member profile link sits in the Virtuoso section of Luxury |
| Q5 | Cruising card until the link arrives: an unlinked card with a visible TODO, or link to `/expertise/#cruising` and swap later? | Link to the existing cruising section now, register the swap | Link now, register the swap |
| Q6 | Expertise ("Tailor-made") keeps all four services, including Expeditions and Tailor-made, even though home shows two? | Yes | Yes |
| Q7 | Journal cadence: the newest post is 2 October 2025 and four of five link off-site. Is "fortnightly" a promise Gina will keep, or should the introduction drop the cadence? | Drop the cadence; "stories and advice from Gina and the team" | Drop the cadence. It is a journal; no promise about how often it updates |
| Q8 | Why book: may the two list headings go and the claims be re-presented, keeping Gina's words? And "Full financial security: ATIA protected" conflicts with ATIA's own charter; who confirms the replacement wording? | Re-present; hold the ATIA line for Gina | Re-present; hold the ATIA line for Gina |
| Q9 | Trust strip: ATIA, CLIA, Virtuoso. Include Alatus (trade group, no client benefit, no URL)? | Omit Alatus | Keep Alatus |
| Q10 | "Global Cruise Icon": which body awards it? Needed before it is given prominence on About | Stays in body copy until confirmed | Stays in body copy until confirmed |
| Q11 | Privacy: website-only policy or whole-business (passport and payment details handled offline)? Privacy contact email? Which services will be live at launch (Web3Forms, Calendly, Genesys, host)? And confirm the `CLAUDE.md` rule changes to "draft, marked unapproved, approved by a person" | Website-only, placeholders for the rest | Website only, placeholders for the rest |
| Q12 | Ship scope: must the enquiry form deliver by email service at launch (needs a Web3Forms key), and are newsletter and Calendly in or out? Launch host Cloudflare Pages or Vercel? | Form live, newsletter row live via Genesys or removed, Calendly out until the account exists | Wait for the external services to be set up. Remove nothing |
| Q13 | One label for the main action everywhere: "Start planning" (goes to the Contact form) or "Plan a journey" (opens the dialog)? | "Start planning", navigates to `/contact/`; retire the dialog | "Start planning"; retire the dialog |
| Q14 | Who approves the regenerated visual baselines and the live-render check at the end? | The owner, from the CI artifact and the Vercel preview | The owner, from the CI artifact and the Vercel preview |

## 10. Sources for section 3

- ATIA accreditation and charter: atia.travel/about-atas, atia.travel/Accreditation, ATAS Charter Rev 9 (2026).
- CLIA Australasia certification levels: cruising.org.au/Accreditation/Certification-Levels.
- Virtuoso network scale and amenities: Virtuoso press releases via PR Newswire, TravelPulse and Travel Daily News (2014 to 2026).
- Alatus: Latte Luxury News, "ETG launches Alatus" (2020) and later Travel Daily coverage of membership and cap.
- Privacy Act small-business exemption: the $3 million threshold stands as at October 2026; a second tranche of reforms proposing its removal has no timetable. A sub-threshold agency has no statutory obligation to publish a policy, but one is expected by clients and by the third-party services the site uses. Verify against OAIC before launch.
