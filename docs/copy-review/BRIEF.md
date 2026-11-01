# Copy loop brief, 1 November 2026

Goal: a page-by-page copy deck for the Travelling Places site that scores at least 85/100 on the
rubric below, with every factual claim traced to a source. The deck is a proposal: nothing is
applied to the site until Karim approves it.

## Decisions already made (Karim, 1 November 2026). These override the language guide.

1. **Structure is settled.** Every page and section on the site today stays, as Gina and Karim
   agreed. Change words, not layout. Do not add or remove sections, fields, cards or lists.
2. **Gina's language first.** Her five original documents are in `docs/source/gina-2026-09/`.
   Wherever a field already carries her words, or her documents have a line that fits a field, use
   her words. Where a field's length forces a cut, cut by choosing her sentences, not by
   paraphrasing them.
3. **Keep her words even where they are grand.** "Top 1%" and similar stay when they are hers. The
   scorer does not penalise Gina-verbatim lines for grandness.
3a. **Except where her words are wexas.com's (Karim, 1 November 2026, "Yes, rewrite them").** Much
   of the copy she supplied matches three wexas.com pages word for word (the check is at the end of
   COPY-DECK.md). Those lines get new wording that keeps her facts. A matched claim that was
   Wexas's before it was hers (the family business, in-house events, the unbiased approach, experts
   who have been where you are going) is left out and asked of Gina, not restated. "Organise it
   flawlessly" and "unmatched in the industry" are among the matched lines.
4. **Pare back everything that is not hers:** warm, sophisticated, specific, never boastful. The
   language guide (`docs/copy-review/language-guide-2026-11-01.md`) governs new copy.
5. **"Relationships", never "connections"** (except technical uses such as an encrypted
   connection). No boasting about access, exclusivity or being connected.
6. **One exception stays flagged, not changed:** any line presenting ATIA accreditation as
   financial protection. ATIA says accreditation is not a compensation scheme (WORK-PLAN Q8,
   register C20). Mark it `[FLAG: Gina to confirm]`; do not rewrite or delete it silently.

## Hard rules (the site's own)

- Never invent a fact, name, job title, date, figure, example or quotation. If a good line needs
  a fact no source holds, write `[NEEDS GINA: what is needed]` instead.
- One main action label everywhere: **Start planning** (WORK-PLAN Q13).
- No em dashes, no en dashes as punctuation, sentence case headings, no eyebrows or numbering.
- Lengths stay close to today's so the layout holds: Expertise card paragraphs 28 to 31 words,
  the four home promises 35 to 40 words each, hero lines as short as today's.
- Team bios, titles and surnames stay as placeholders unless a source gives them.

## Sources, in order of authority

1. `docs/source/gina-2026-09/*.md`: Gina's own copy.
2. The current site copy: `src/data/*.json`, `src/content/**/*.md`. The `source` field in each JSON
   file and `docs/CONTENT-REGISTER.md` record provenance and what is awaiting Gina.
3. `docs/copy-review/language-guide-2026-11-01.md`: voice and direction for new copy.
4. `PRODUCT.md`: brand voice. `src/data/site.json`: address, phone, founding year.

## Deck format (`docs/copy-review/COPY-DECK.md`)

One section per page in site order: Home, Tailor-made (Expertise), Luxury, About, Journal,
Contact, shared footer. Under each, one entry per copy field that exists today:

```
### home.hero.lede  (src/data/home.json)
Current: <today's text>
Proposed: <new text, or "Keep">
Source: Gina verbatim (about-travelling-places.md) | Gina, trimmed | New | Unchanged
```

End with a short list of every `[NEEDS GINA]` and `[FLAG]` item.

## Rubric (100 points)

Score the proposed copy as a reader would meet it on the site. Quote the line behind every
deduction. Do not deduct for Gina-verbatim grandness (decision 3).

| Criterion | Points | What earns the points |
|---|---|---|
| Voice and register | 20 | One voice throughout: Gina across the desk, warm, well travelled, quietly knowledgeable; Belmond's concrete detail and A&K's emotional weight, in conversational language. No generic luxury filler |
| Shows, not says | 15 | Personal service is demonstrated through specifics from the sources (ships inspected, British Airways and Jetset, the Main Street office, clients all over Australia), not repeated adjectives ("personal", "thoughtful", "every detail") |
| Local story forward | 10 | Tamborine Mountain, Gina and the team appear early on the home page and read as trust, not limitation |
| Claim discipline | 15 | Every claim traceable; new copy claims nothing grand; Virtuoso benefits hedged where the copy is new; ATIA protection wording flagged |
| Fit to the site | 15 | Structure unchanged; one Start planning label; lengths fit; no em dashes; sentence case; "relationships" not "connections" |
| Writing quality | 15 | Varied rhythm; no stock phrases ("where the landscape does the talking"), stacked hedges, repeated "we'll help", rule-of-three habits or AI tells |
| Readiness | 10 | Gaps are marked visibly and few; nothing is filled with plausible filler |

Calibration: the current site scored 67 (strong design fit and headlines; weak claim discipline
and three alternating voices). An outside proposal scored 68 (strong claim discipline and local
story; it broke the design with lists and second headings, used six button labels and em
dashes, and leaned on "we'll help" and hedges).
