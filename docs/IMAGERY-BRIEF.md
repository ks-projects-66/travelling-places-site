# Imagery research brief

For an external research agent. Prepared 5 October 2026. The agent finds and documents
candidates only; nothing is downloaded into the site until Karim approves each one and it has a
row in `src/assets/images/MANIFEST.md`.

---

## Brief (paste from here)

**Role.** You are a photo researcher for a luxury travel agency website. Find licence-free
photographs for eight image slots, verify each licence, and return a shortlist I can approve.
Do not invent sources or licence terms. If you can't verify something, say so.

**The business.** Travelling Places, an independent travel agency on Tamborine Mountain,
Queensland, established in 1993. It's a Virtuoso member specialising in tailor-made holidays,
luxury travel and ocean, river and expedition cruising. The voice is warm, assured and
well-travelled: an experienced adviser in a calm local office, not a glossy tour operator.

**Visual standard.** The reference is belmond.com: quiet, editorial luxury.
- Warm, saturated grading, jewel tones, natural light.
- The subject sits off-centre, with room to breathe.
- Real places and moments, not staged stock. No posed models smiling at the camera, no
  champagne-toast clichés, no heavy filters, HDR or drone-postcard saturation.
- It must sit comfortably beside the existing set: a golden-hour Mediterranean coastline,
  Antarctic ice and mountains, a dining table aboard ship looking out to sea, a Japanese temple
  in winter, a whitewashed Spanish village, Amsterdam canals, a rail viaduct in autumn, a
  mountain lake at golden hour, and an aerial view of a tropical island.

**Licence rules (hard requirements).**
1. Unsplash only (the current set is all Unsplash). Pexels is acceptable only if no
   Unsplash candidate fits, and you must say so.
2. The source page must show "Free to use under the Unsplash License". Reject anything marked
   Unsplash+, premium, editorial-only, or "not for commercial use".
3. No identifiable faces. Back views, silhouettes and hands are fine.
4. No visible brand names, logos, ship names, hotel signage or recognisable private property
   interiors.
5. No AI-generated images.

**Slots.**

| # | Page and slot | Ratio | What it must convey |
|---|---|---|---|
| 1 | Luxury: "Your specialist" | 4:5 portrait | Personal expertise and planning: a traveller's hands with a map, a notebook, or a quiet arrival moment |
| 2 | Luxury: "Privileged access" | 4:5 portrait | Recognition at a fine hotel or on a cruise: a turned-down suite, a terrace breakfast, an intimate evening on deck |
| 3 | Luxury: "Peace of mind" | 4:5 portrait | Calm and being looked after: an unhurried view, a still pool, a lounge chair facing the sea |
| 4 | Tailor-made: Ocean and river cruising | 3:2 landscape | A small luxury ship or a river vessel in its landscape, no visible branding |
| 5 | Tailor-made: Expedition journeys | 3:2 landscape | Polar, Kimberley or remote-island expedition: a zodiac landing, wildlife, a small expedition ship |
| 6 | Tailor-made: Luxury travel | 3:2 landscape | A refined stay: a villa, a lodge or a boutique hotel at dusk |
| 7 | Tailor-made: Tailor-made journeys | 3:2 landscape | Connected travel: a scenic rail journey, a winding road or a multi-stop itinerary feel |
| 8 | About: "We sail on the ships we recommend" | 16:9 landscape | A ship at sea or in port, with no people and no branding (optional: Gina may supply a real team photo instead) |

Don't propose images for the team portraits or the "On the Mountain since 1993" row. Those
must be real photos of the team.

**Return, for each slot:** three ranked candidates, each with:
- Unsplash page URL and photographer name
- A one-line description of the image
- Native orientation and resolution, and whether the required ratio crops cleanly
- Licence evidence: quote the licence line exactly as it appears on the page
- People or property: confirm there are no identifiable faces, brands or private interiors
- One sentence on why it fits alongside the existing set

Then give one overall recommendation per slot, and flag any slot where nothing met the
standard rather than lowering the bar.

---

## After approval (for the build session)

For each approved image, record a `MANIFEST.md` row and an `imagery-delivery/LICENSING.md`
entry in the existing format (source, creator, licence, commercial use, attribution, model
release, property release, cost), then run `pnpm check:licensing`.
