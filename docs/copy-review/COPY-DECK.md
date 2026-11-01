# Copy deck, round 4: Wexas-matched lines rewritten, judge's fixes applied

A proposal for Karim's approval, 1 November 2026. Nothing here is applied to the site until he
approves it. It follows `docs/copy-review/BRIEF.md`: structure unchanged, Gina's words first, new
copy pared back, "relationships" never "connections", one main action ("Start planning"), and the
ATIA protection wording flagged rather than changed.

**Round 4 (Karim, 1 November 2026: "Yes, rewrite them").** Every line of Gina's that appears word
for word on wexas.com is replaced with new wording that keeps her facts. Her lines with no match
stay exactly as she wrote them. The phrase-by-phrase check is at the end. Where a matched sentence
carried a claim that was Wexas's before it was hers (the family business, the in-house events,
the unbiased approach, experts who have been where you are going), the claim is left out and
asked of Gina rather than restated in new words.

Sources are named per entry, always with the file in `docs/source/gina-2026-09/` where Gina is
the source. Four tags:
- "Gina verbatim (file)": her words, with only the corrections the site's source notes already
  record: obvious typos ("complementary" to "complimentary"), capitals lowered to sentence case,
  and dashes turned into colons or full stops.
- "Gina, trimmed (file)": words deleted from her sentence and none added, apart from punctuation.
- "New": written for this deck. Every fact in it is named beside it, with its file.
- "Unchanged": today's text is not Gina's and stays as it is. Never used for her words.

**Gaps.** `[NEEDS GINA: ...]` is a note to Gina and never renders. Where a field must show the
gap on the page, the entry says "Renders as TODO pill:" and gives the pill's text, which uses the
site's existing red placeholder.

**Action labels.** Every main action reads Start planning. Secondary and form controls ("Explore
tailor-made travel", "Why Virtuoso matters", "Prepare my enquiry", "Send an enquiry instead") are
not main actions and stay as they are.

Fields that exist in the data but render nowhere today are listed at the end of each page, kept
as they are. Word counts are counted by hand, against today's text.

Rule for choosing among Gina's lines: each of her sentences appears once on the site, so a field
that would repeat another page gets a different line or new copy. Only her lines with no match on
wexas.com are used.

## Home

### home.hero.lead  (src/data/home.json)
Current: Your world,
Proposed: Keep
Source: Unchanged

### home.hero.accent  (src/data/home.json)
Current: beautifully planned.
Proposed: Keep
Source: Unchanged

### home.hero.lede  (src/data/home.json)
Current: Thoughtful journeys, rare experiences and every detail looked after by people who know travel, and take the time to know you.
Proposed: Tailor-made holidays from Tamborine Mountain, arranged with you by Gina Storey and her team.
Source: New. Tamborine Mountain and Gina as founder: about-travelling-places.md. Gina's role as a travel advisor: src/content/team/gina-storey.md. "Arranged with you" follows her "as you work together to plan" (about-travelling-places.md), and avoids repeating "planned" from the accent line above. 14 words against today's 21.

### home.hero.primary  (src/data/home.json)
Current: Start planning
Proposed: Keep
Source: Unchanged (WORK-PLAN Q13)

### home.hero.secondary  (src/data/home.json)
Current: Explore tailor-made travel
Proposed: Keep
Source: Unchanged

### home.intro.heading  (src/data/home.json)
Current: Travel has changed. Good service shouldn't.
Proposed: Keep
Source: Unchanged

### home.intro.lead  (src/data/home.json)
Current: Personal, professional advice is still the best way to see the world.
Proposed: Talk it through with an advisor who has travelled widely.
Source: New. Advisors who have travelled extensively: about-travelling-places.md ("Talk to the experts"). Claims nothing more; round 3's "honest opinion" went beyond its source, which is about ships only. 10 words against today's 12. Her nearest line, "It's hard to overstate the benefit of talking to an expert...", matches wexas.com.

### home.intro.detail  (src/data/home.json)
Current: From a quick escape to a three-month journey, Travelling Places brings together more than 100 years of collective industry experience to get the details right.
Proposed: Travelling Places has clients all over Australia, and looks after them from the Main Street office on Tamborine Mountain.
Source: New. "A client base all over Australia": about-travelling-places.md. 19 words against today's 25. The Main Street office on Tamborine Mountain: site.json (address) and home.founder.caption. The line does not say how long the office has been on Main Street, which no source records. 1993 is left to the founder lead below, so it appears once on the page. Replaces "more than 100 years of collective industry experience" and "three-month journey", which no source holds.

### home.intro.link  (src/data/home.json)
Current: Meet Gina and the team
Proposed: Keep
Source: Unchanged

### home.journeys.heading  (src/data/home.json)
Current: Journeys shaped around you.
Proposed: Keep
Source: Unchanged

### home.journeys.intro  (src/data/home.json)
Current: Every traveller is different. We bring first-hand knowledge and careful judgement to the way you want to explore.
Proposed: Whether it is a cruise or a stay ashore, we start with how you like to travel.
Source: New. "A cruise or a stay ashore" names the two cards below: Cruising (src/content/services/cruising.md) and Luxury travel (src/content/services/luxury.md). Starting from how the client travels follows Gina's "take time to get to know you as a traveller" (about-travelling-places.md), as a fact, not her wording. Claims nothing else. 17 words against today's 18.

### home.journeys.cards[0].label  (src/data/home.json)
Current: Cruising
Proposed: Keep
Source: Unchanged

### home.journeys.cards[0].link  (src/data/home.json)
Current: Explore cruising
Proposed: Keep
Source: Unchanged

### services.cruising.summary, shown on the home Cruising card  (src/content/services/cruising.md)
Current: From intimate luxury vessels to the world's great river routes.
Proposed: Advice on the ships we sail on and inspect.
Source: New, from Gina's "We sail on and inspect ships regularly" (about-travelling-places.md), which stays whole on About. It claims advice on the ships the team has sailed or inspected, not on every ship. "Honest" is left to her About paragraph, so the word appears once on the site. 9 words against today's 10.

### home.journeys.cards[1].label  (src/data/home.json)
Current: Luxury travel
Proposed: Keep
Source: Unchanged

### home.journeys.cards[1].link  (src/data/home.json)
Current: Explore luxury travel
Proposed: Keep
Source: Unchanged

### services.luxury.summary, shown on the home Luxury travel card  (src/content/services/luxury.md)
Current: Exceptional stays and thoughtful privileges through Virtuoso.
Proposed: Hotels and private guides, chosen by your advisor.
Source: New. The facts (an advisor who chooses the accommodation and private guides) are from tailor.md; its wording ("hand-select") matches wexas.com and is not used. Leaves Virtuoso to the band below, so the home page names Virtuoso extras once. Removes "thoughtful privileges". 8 words against today's 7.

### home.virtuoso.heading  (src/data/home.json)
Current: More doors open with the right connections.
Proposed: What Virtuoso can add to your journey.
Source: New. Removes "connections" and the boast about access (decision 5). "Can" keeps the benefits conditional.

### home.virtuoso.body  (src/data/home.json)
Current: Our Virtuoso membership connects you with leading hotels, cruise lines, destination specialists and tour partners around the world.
Proposed: Travelling Places is a Virtuoso member, so at participating hotels and cruise lines you receive extras like these.
Source: New. Virtuoso membership: luxury-travel-with-travelling-places.md and about-travelling-places.md. One limit, "participating", and no modal on top of it; one person, "you", as in her two benefits, which sit beside it in this band and carry her own "perhaps". Her closing Virtuoso line stays out, as the owner decided on 25 October (CO11). 18 words, the same as today.

### home.virtuoso.button  (src/data/home.json)
Current: Why Virtuoso matters
Proposed: Keep
Source: Unchanged. One label fewer to change; it is a secondary link, not the main action.

### virtuoso.benefits, shown in the home band  (src/data/virtuoso.json)
Current: The two benefits, "At your hotel" and "On your cruise". See the Luxury page entries.
Proposed: Keep
Source: Gina verbatim (luxury-travel-with-travelling-places.md); titles unchanged

### home.founder.heading  (src/data/home.json)
Current: A travel company built on curiosity and care.
Proposed: From London to Tamborine Mountain.
Source: New, from Gina's facts: ten years in London, then Travelling Places established on Tamborine Mountain (about-travelling-places.md)

### home.founder.lead  (src/data/home.json)
Current: Gina Storey founded Travelling Places on Tamborine Mountain in 1993, after a decade in London with British Airways and Jetset.
Proposed: Keep
Source: Unchanged (restates about-travelling-places.md; register C26)

### home.founder.body  (src/data/home.json)
Current: More than thirty years on, it is still a privately owned, family business, and the team still works the way she intended: listen carefully, give honest advice and look after every detail.
Proposed: More than 30 years on, Gina still works with clients as a travel advisor, on the Mountain where she started.
Source: New, from facts she supplied. Over 30 years: about-travelling-places.md and why-book-with-travelling-places.md. Travel advisor: her approved role (src/content/team/gina-storey.md). Tamborine Mountain: about-travelling-places.md. Drops "privately owned, family business", which matches wexas.com; round 4 takes it out of About too and asks Gina whether it holds. Replaces "the way she intended", which no source records. 20 words against today's 32.

### home.founder.quote  (src/data/home.json)
Current: Our focus is on you, ensuring we offer the very best arrangements to fulfil your travel dreams.
Proposed: Renders as TODO pill: "A line from Gina, in her own words" [NEEDS GINA: one sentence of her own for the quotation in the founder band, or confirm "Our focus is on you..." is hers]
Source: Today's line has no recorded source (register C26), so it comes off the page until she confirms it or supplies her own. The page sets this field as a quotation beside Gina's story, so a reader takes it as hers. None of her five documents holds a first-person line that fits, and the round 1 choice was general copy from tailor.md that matches wexas.com and already appears on Tailor-made.

### home.founder.link  (src/data/home.json)
Current: Meet the whole team
Proposed: Keep
Source: Unchanged

### home.founder.caption  (src/data/home.json)
Current: The team in the Main Street office, Tamborine Mountain.
Proposed: Keep
Source: Unchanged

### home.journal.heading  (src/data/home.json)
Current: Journal
Proposed: Keep
Source: Unchanged

### home.journal.intro  (src/data/home.json)
Current: Stories, practical advice and first-hand discoveries from Gina and the team.
Proposed: Notes from the office for the trip you are planning.
Source: New. Drops the list of three, and "Gina", since no article carries her byline (four are bylined Travelling Places, one is Sienna's). Worded apart from the journal page and newsletter lines, which round 3 had made near-identical. 10 words against today's 12.

### home.journal.allLink  (src/data/home.json)
Current: Read the journal
Proposed: Keep
Source: Unchanged

### why-book.heading, home band  (src/data/why-book.json)
Current: Why book with Travelling Places?
Proposed: What you can expect from us.
Source: New. Gina's heading follows wexas.com's "Why book with Wexas?" word for word but for the name. The new heading introduces the four promises beside it and claims nothing.

### why-book.intro  (src/data/why-book.json)
Current: At Travelling Places, we specialise in bespoke travel experiences. Our itineraries are just samples of what we can arrange, and can be changed depending on your precise needs, finances and ideas by our experienced destination advisors.
Proposed: Every trip starts from your own ideas, and your advisor shapes it around your needs and your budget.
Source: New. The facts are Gina's (why-book-with-travelling-places.md): advisors shape each trip to the client's needs, finances and ideas. Her sentences match wexas.com, and the site has no sample itineraries for her "just samples" to point to. 18 words against today's 37.

### why-book.contactLead and contactMiddle  (src/data/why-book.json)
Current: Contact one of our consultants on [phone] to discuss how we can tailor your holiday. Or email [email]
Proposed: contactLead "Call us on", contactMiddle "or email". Renders: Call us on 07 5545 1600 or email travel@travellingplaces.com.au
Source: New. Phone and email: site.json. Gina's sentence matches wexas.com. The same two fields drive the closing band on every other page, so this one change covers them all.

### why-book.cta  (src/data/why-book.json)
Current: Start planning
Proposed: Keep
Source: Unchanged (WORK-PLAN Q13)

### why-book.promises[0].title  (src/data/why-book.json)
Current: Talk to the experts
Proposed: Advisors who travel
Source: New, from the body below. Gina's title matches wexas.com.

### why-book.promises[0].body  (src/data/why-book.json)
Current: Our advisors have travelled widely and keep travelling and training, so what they share is first-hand and impartial. We pool what we know across the team, and every itinerary is shaped around your needs and your budget.
Proposed: All of our advisors have travelled extensively and are delighted to share this first-hand knowledge and experience with you. We undertake constant training and travel regularly so that you can be assured of up-to-date knowledge of your travel destination.
Source: Gina verbatim (about-travelling-places.md), two of her sentences in place of a paraphrase; only the hyphen in "first-hand" added. Neither sentence matches wexas.com. Today's body drops out because "impartial" restates her "unbiased, informed approach" and "designed around your individual needs and budget", both of which match. 39 words.

### why-book.promises[1].title  (src/data/why-book.json)
Current: Personal service
Proposed: Getting to know you
Source: New, from the body below. Gina's title matches wexas.com.

### why-book.promises[1].body  (src/data/why-book.json)
Current: We treat our clients as we would wish to be treated. Before we suggest anything, we take the time to understand how you like to travel, so the holiday we plan together is one you will love.
Proposed: Before we suggest anything, we ask what you enjoy, what you would rather skip and how quickly you like to move. The ideas we bring you come from that conversation, and we build the plan with you.
Source: New. The facts are Gina's: advisors get to know the client as a traveller and plan the holiday together with them (about-travelling-places.md), and the pace is set around the client (tailor.md). Her sentences, and today's "treat our clients as we would wish to be treated", match wexas.com. 37 words.

### why-book.promises[2].title  (src/data/why-book.json)
Current: Honest pricing
Proposed: A price for your dates
Source: New, from the body below. Gina's title matches wexas.com.

### why-book.promises[2].body  (src/data/why-book.json)
Current: We do not quote low-season "from" prices for dates you may never travel. We price your own itinerary for the dates you have in mind, so the price we give you is accurate from the start.
Proposed: Keep
Source: Unchanged (register C27: today's text, rewritten from Gina's facts in about-travelling-places.md; her own sentence opens with "unfair to just show you", which matches wexas.com). 36 words.

### why-book.promises[3].title  (src/data/why-book.json)
Current: Financial security
Proposed: Keep [FLAG: Gina to confirm] This title presents ATIA accreditation as financial protection; ATIA says accreditation is not a compensation scheme (WORK-PLAN Q8, register C20). It also matches wexas.com; her answer on the flag decides the new title.
Source: Gina verbatim (about-travelling-places.md, "Financial security")

### why-book.promises[3].body  (src/data/why-book.json)
Current: Travelling Places holds a licence from the Australian Travel Industry Association, and our financial records are scrutinised as a condition of membership. We are an affiliate TIDS member of IATA, and client funds are held in a separate trust account.
Proposed: Keep [FLAG: Gina to confirm] Read under "Financial security", the ATIA licence and the scrutiny of records stand as protection for client money (WORK-PLAN Q8, register C20). Gina's copy also calls it a "Licence"; ATIA's own term is accreditation.
Source: Unchanged (register C27, rewritten from her four sentences)

### why-book ATIA number note  (src/components/WhyBook.astro)
Current: TODO: ATIA number (Gina's copy reads "??????")
Proposed: Keep
Source: Unchanged placeholder (register C4)

### Image alt text on Home  (src/data/home.json, src/pages/index.astro, service files)
Current: The three hero slide descriptions; "The Travelling Places team together in the Main Street office"; the Cruising and Luxury card photographs; "Virtuoso member".
Proposed: Keep
Source: Unchanged

### home.journeys.cards[].hrefNote and the JSON `source` notes
Not shown to visitors. Not part of the deck.

## Tailor-made (Expertise)

Every Gina line on this page is from tailor.md, and all of tailor.md matches wexas.com, headings
included. The page keeps its structure and her facts; the wording is new throughout.

### tailor-made.heading, page title  (src/data/tailor-made.json)
Current: Tailor-made and luxury holidays
Proposed: Tailor-made travel
Source: New. Gina's title matches wexas.com. The new one is the navigation label, Tailor-made (navigation.json), with its noun. Used in the browser tab.

### Meta description  (src/pages/expertise.astro)
Current: Tell us what you're looking for and speak to a specialist who knows your destination. Tailor-made holidays, cruising, expeditions and luxury travel from Tamborine Mountain.
Proposed: Tailor-made holidays, cruises, expeditions and luxury travel, planned with an advisor from the Main Street office on Tamborine Mountain.
Source: New. The four services: the four cards on the page (src/content/services/). Main Street, Tamborine Mountain: site.json. Drops today's first sentence, a trim of tailor.md that matches wexas.com.

### tailor-made.heroLead  (src/data/tailor-made.json)
Current: Tailor-made and
Proposed: Travel, made
Source: New. Gina's hero is her title, which matches wexas.com.

### tailor-made.heroAccent  (src/data/tailor-made.json)
Current: luxury holidays.
Proposed: to measure.
Source: New. "Made to measure" is what tailor-made means, set in the hero's two-line pattern. Claims nothing.

### tailor-made.intro  (src/data/tailor-made.json)
Current: Tell us what you're looking for, and we'll make sure you speak to a specialist who knows your destination better than anyone else. They'll then hand-select accommodations, sights, cruises, excursions and private guides, as well as arrange transfers, visas, flights and all other travel requirements. They'll also customise the pace of your holiday, so that it suits your individual needs, creating a never-before-seen tour you're sure to love. The aim is simple: to help you create your ideal holiday, and to organise it flawlessly.
Proposed: Tell us where you would like to go and how you like to travel. Your advisor then chooses the hotels, sightseeing, cruises and private guides, and arranges the flights, transfers and visas around them. The pace is yours to set.
Source: New. Every fact is from tailor.md: accommodation, sights, cruises, excursions and private guides chosen for you; transfers, visas and flights arranged; the pace customised. Support during the trip is left to sections[1] below. Drops her "better than anyone else", "never-before-seen tour" and "organise it flawlessly", which are wexas.com's claims as well as its words, and her "specialist who knows your destination", which waits with [NEEDS GINA] 11. 39 words against today's 86.

### services.cruising.label  (src/content/services/cruising.md)
Current: Ocean & river cruising
Proposed: Keep
Source: Unchanged

### services.cruising body  (src/content/services/cruising.md)
Current: Whether you're drawn to a small luxury vessel, a river through Europe or a grand ocean voyage, we help you weigh what matters: atmosphere, cabin, dining, shore time and pace.
Proposed: We advise on river, ocean and expedition cruises, from the ship to the cabin, and arrange the flights and hotels either side. As CLIA members, we train with cruise lines worldwide.
Source: New. Ocean, river and expedition vessels: about-travelling-places.md. Cabin guidance and pre- and post-cruise arrangements: the card's own list (cruising.md `points`). Flights and hotels: tailor.md. CLIA membership and "extensive training of cruise lines globally": about-travelling-places.md, stated as a fact beside the advice, not as its cause. Opens on its subject, replacing round 3's dangling "Ocean, river or expedition,". 31 words.

### services.cruising.link.label  (src/content/services/cruising.md)
Current: Search cruises and current offers
Proposed: Keep
Source: Unchanged (written for the site; register C23 asks for Gina's read-through)

### services.expeditions.label  (src/content/services/expeditions.md)
Current: Expedition journeys
Proposed: Keep
Source: Unchanged

### services.expeditions body  (src/content/services/expeditions.md)
Current: Remote journeys reward careful choices. We match your interests, comfort and sense of adventure with an experienced operator and the vessel best suited to where you are going.
Proposed: From Antarctica and the Arctic to the Kimberley, we match you with an experienced operator and the right departure for wildlife or photography, and help you prepare.
Source: New, every fact from the card's own list (expeditions.md `points`): "Antarctica and the Arctic", "The Kimberley and remote islands", "Wildlife, photography and specialist departures", "preparation guidance". Matching to "an experienced operator" is today's claim, kept. Insurance is left out: it is on the register C20 list awaiting Gina. 26 words, trimmed when applied so the card runs five lines on a phone like the others.

### services.luxury.label  (src/content/services/luxury.md)
Current: Luxury travel
Proposed: Keep
Source: Unchanged

### services.luxury body  (src/content/services/luxury.md)
Current: The most memorable luxury is personal: a genuine welcome, a room chosen well, and experiences that bring you closer to a place. Our Virtuoso connections add recognition and value where available.
Proposed: For us, luxury starts with good advice from someone who has travelled widely. Through Virtuoso, participating hotels can add breakfast or a room upgrade when you check in.
Source: New. Advisors who have travelled extensively: about-travelling-places.md (no match). Her luxury sentence ("Luxury is having an expert travel consultant who knows the region...") matches wexas.com, and its claim waits with [NEEDS GINA] 11. Breakfast, the room upgrade and checking in: same file, "Imagine checking into your hotel..." (no match). One limit ("participating") and one modal ("can"). Removes "connections". 28 words.

### services.tailor-made.label  (src/content/services/tailor-made.md)
Current: Tailor-made journeys
Proposed: Keep
Source: Unchanged

### services.tailor-made body  (src/content/services/tailor-made.md)
Current: Complex itineraries become simple when one team sees the whole picture. We coordinate flights, rail, touring, stays and transfers around the way you prefer to travel, so every connection fits.
Proposed: A trip can mean flights, rail, visas, hotels and an excursion with a private guide. We arrange it as one itinerary, paced the way you like to travel.
Source: New. Flights, visas, accommodation, excursions and private guides: tailor.md (facts only). Rail: the card's own list (tailor-made.md `points`). Pace set around the traveller: tailor.md. Round 3's "several hotels" is cut back to "hotels", since no source gives a number. 28 words.

### tailor-made.sections[0].heading  (src/data/tailor-made.json)
Current: What is tailor-made travel?
Proposed: How a tailor-made trip comes together
Source: New. Gina's heading matches wexas.com.

### tailor-made.sections[0].paragraphs[0]  (src/data/tailor-made.json)
Current: It's easy to sell a package holiday off the shelf. But, to create a trip that's truly bespoke takes skill, knowledge and a genuine passion for travel. And, that's where we come in. Our experts have been where you're going, trying out the accommodation and experiences we recommend, so they can create a holiday experience that's unique to you.
Proposed: A package holiday is the same trip for everyone who books it. A tailor-made one starts with a conversation, and is built for you by advisors who have travelled widely and still travel regularly.
Source: New. Advisors who have travelled extensively and travel regularly: about-travelling-places.md, "Talk to the experts" (no match). Drops "Our experts have been where you're going, trying out the accommodation and experiences we recommend", which is wexas.com's claim as well as its words; see [NEEDS GINA] 11. 35 words against today's 60.

### tailor-made.sections[0].paragraphs[1]  (src/data/tailor-made.json)
Current: The holiday ideas we offer have been crafted with local knowledge and insight, to inspire curious travellers to look beyond what they would be able to book independently. We go above and beyond the role of traditional travel consultant.
Proposed: The ideas on this site and in our brochures are where that conversation can begin. None of them is fixed.
Source: New. The brochures: luxury-travel-with-travelling-places.md ("on our website and in our brochures"). The ideas are samples that can be changed: why-book-with-travelling-places.md. Both sentences of Gina's match wexas.com, and "above and beyond the role of traditional travel consultant" is a claim this deck does not restate. 20 words against today's 39.

### tailor-made.sections[0].paragraphs[2]  (src/data/tailor-made.json)
Current: Then, we add in the final ingredient: you. We want to know what you want from your trip, whether that's some time to relax, a taste of adventure or a combination of the two. Every holiday can be personalised to include activities you want to try, regions you want to explore, sites you don't want to miss, and much more besides.
Proposed: After that, the trip follows what you tell us. You might want rest, or adventure, or some of each, and there may be one region you have always meant to see, or something you have never tried.
Source: New. Relaxation and adventure, regions to explore and things not yet tried: tailor.md (facts only; the sentences match wexas.com). 37 words against today's 60.

### tailor-made.sections[1].heading  (src/data/tailor-made.json)
Current: Why book a tailor-made holiday?
Proposed: Why plan it this way?
Source: New. Gina's heading matches wexas.com.

### tailor-made.sections[1].paragraphs[0]  (src/data/tailor-made.json)
Current: We want you to have a holiday to remember, a trip you'll talk about with friends and family, an experience you'll treasure forever. To do that, your holiday has to be as unique as you are. That's why we'll take the time to find out what you like, what you don't like, the kind of things you enjoy doing or would like to do but haven't tried yet. Then, we'll tailor your holiday around those requirements.
Proposed: Because a holiday works best when it fits you. We find out what you like and what you don't, and the itinerary is planned around the answers.
Source: New. Finding out likes and dislikes, then planning around them: tailor.md (facts only; the sentences match wexas.com). 27 words against today's 77.

### tailor-made.sections[1].paragraphs[1]  (src/data/tailor-made.json)
Current: And that's not all. Right up to the day you depart, and even during your trip, your specialist will be on hand to answer any further questions you may have, and to make changes so your journey is as smooth as it should be, wherever it takes you.
Proposed: Your advisor is still there after you book. Up to the day you leave, and while you are away, they answer your questions and make changes if your plans shift.
Source: New. Support before departure and during the trip, including changes: tailor.md (facts only; the sentences match wexas.com). Promises availability, not a smooth journey. 30 words against today's 49.

### Closing band  (src/components/WhyBook.astro, short)
Current: Gina's contact line and Start planning. See Shared footer.
Proposed: The new contact line (see why-book.contactLead on Home) and Start planning.
Source: New for the contact line; Unchanged for the Start planning button (WORK-PLAN Q13)

### Image alt text on Tailor-made  (src/pages/expertise.astro, service files)
Current: The hero lake and the four card photographs (Lyon river ship, Antarctic penguins, Lake Como villa, Nine Arch Bridge).
Proposed: Keep
Source: Unchanged

### Held but not rendered
`title`, `summary` (expeditions, tailor-made) and `points` in the four service files are not shown on any page. Keep. "One journey. Every detail connected." (tailor-made.md `title`) would need rewording if it is ever shown again.

## Luxury

### luxury.title  (src/data/luxury.json)
Current: Luxury Travel with Travelling Places
Proposed: Luxury travel with Travelling Places
Source: Gina verbatim (luxury-travel-with-travelling-places.md), set in sentence case like every other heading. Used in the browser tab only.

### Meta description  (src/pages/luxury.astro)
Current: Extraordinary tailor-made journeys to the world's finest destinations: your own travel specialist, Virtuoso benefits, ATIA accreditation and support while you travel.
Proposed: Luxury travel planned from Tamborine Mountain: your own advisor, Virtuoso benefits, ATIA accreditation and support while you travel.
Source: New. Today's opening phrase, "Extraordinary tailor-made journeys to the world's finest destinations", matches wexas.com and is replaced; the list after the colon is today's, with "travel specialist" changed to "advisor", the page's role noun. Tamborine Mountain: site.json. It names ATIA accreditation without presenting it as protection.

### luxury.heroLead  (src/data/luxury.json)
Current: Luxury travel with
Proposed: Keep
Source: Gina verbatim (luxury-travel-with-travelling-places.md). Shares only "luxury travel with" with wexas.com's page name: the plain descriptive name of the page, kept

### luxury.heroAccent  (src/data/luxury.json)
Current: Travelling Places.
Proposed: Keep
Source: Gina verbatim (luxury-travel-with-travelling-places.md)

### luxury.heroLede  (src/data/luxury.json)
Current: Bespoke journeys crafted with care.
Proposed: Luxury, planned with you.
Source: New. Gina's line matches wexas.com ("Bespoke journeys, crafted with care"). Claims nothing beyond planning with the client (about-travelling-places.md, "as you work together to plan"). 4 words against today's 5.

### luxury.intro.heading  (src/data/luxury.json)
Current: More than just a holiday
Proposed: What luxury means to us
Source: New. Gina's heading matches wexas.com.

### luxury.intro.paragraphs[0]  (src/data/luxury.json)
Current: Travelling Places offers extraordinary tailor-made journeys to the world's finest destinations. But real luxury travel is about far more than just five-star hotels; here are some of the ways that we provide a truly luxurious experience on every step of your journey:
Proposed: A fine hotel is only part of a luxury trip. The rest is the advisor behind it and the extras that come through Virtuoso. Here is how we look after each part.
Source: New. Points to the themes below: your advisor and Virtuoso benefits (luxury-travel-with-travelling-places.md, facts only); Peace of mind follows as the third. Gina's paragraph matches wexas.com throughout. 33 words against today's 43.

### luxury.themes[0].title  (src/data/luxury.json)
Current: Your specialist
Proposed: Your advisor
Source: New. "Advisor" is the role noun used across this deck and on Gina's approved team card (src/content/team/gina-storey.md). Today's title shortens her "Your own personal travel specialist", which matches wexas.com.

### luxury.themes[0].body  (src/data/luxury.json)
Current: One expert who knows the region first-hand, plans every detail around you, and stays on hand while you travel.
Proposed: One person plans the trip with you, and you can reach them while you travel if anything needs to change.
Source: New. Support while travelling, including changed plans: luxury-travel-with-travelling-places.md, "Full support while travelling" (facts only; her sentence matches wexas.com). Opens on "One person" so it does not repeat the title. 21 words against today's 19.

### luxury.themes[0].link.label  (src/data/luxury.json)
Current: Meet our team
Proposed: Keep
Source: Gina verbatim (luxury-travel-with-travelling-places.md). Three plain words, also on wexas.com; kept as a link label, not copy.

### luxury.themes[1].title  (src/data/luxury.json)
Current: Privileged access
Proposed: Benefits for our clients
Source: Gina, trimmed ("There are lots of benefits for our clients through the Virtuoso affiliation", luxury-travel-with-travelling-places.md). Removes the boast about access (decision 5), and holds true whether or not the in-house events continue.

### luxury.themes[1].photo  (src/data/luxury.json)
Current: TODO: photo for Privileged access
Proposed: TODO: photo for Benefits for our clients
Source: New, following the title. Shown only if the photograph goes missing.

### luxury.themes[1].body  (src/data/luxury.json)
Current: Virtuoso benefits at hotels and on cruises, plus in-house events and invitations for our clients.
Proposed: Through Virtuoso, our clients receive benefits at participating hotels and on affiliate cruise lines. [NEEDS GINA: do you hold events or send invitations for clients? If so, one sentence in your own words to follow this one (registers C20, C21)]
Source: New. "Benefits for our clients through the Virtuoso affiliation": luxury-travel-with-travelling-places.md (no match). "Affiliate cruise line": same file, the cruise benefit. Limited by "participating". A complete sentence on its own, so the page reads correctly before Gina answers. The events line ("We offer regular in-house events and exclusive invitations") matches wexas.com and is a claim Wexas makes about itself, so it waits for her. 14 words against today's 15.

### luxury.themes[2].title  (src/data/luxury.json)
Current: Peace of mind
Proposed: Keep [FLAG: Gina to confirm] Paired with the ATIA line below, this title presents accreditation as protection (WORK-PLAN Q8, register C20). "Peace of mind" also appears on wexas.com; her answer on the flag decides the new title.
Source: Gina, trimmed (luxury-travel-with-travelling-places.md, "your peace of mind"); a draft title, register C21

### luxury.themes[2].body  (src/data/luxury.json)
Current: An independent, ATIA-accredited company with long-standing partners, and comprehensive travel insurance on offer.
Proposed: An independent, ATIA-accredited agency, with travel insurance available on request. [FLAG: Gina to confirm] Under "Peace of mind", ATIA accreditation still reads as protection; ATIA says accreditation is not a compensation scheme (WORK-PLAN Q8, register C20). Whether insurance is offered also awaits her (registers C21, R3).
Source: New wording, same claims. "Long-standing partners" and "comprehensive travel insurance" match wexas.com and are cut; independence, ATIA accreditation and insurance stay, from luxury-travel-with-travelling-places.md. The flag stays on the claim. 11 words against today's 14.

### virtuoso.intro.heading  (src/data/virtuoso.json)
Current: Virtuoso membership
Proposed: Keep
Source: Gina verbatim (luxury-travel-with-travelling-places.md)

### virtuoso.intro.paragraphs[0]  (src/data/virtuoso.json)
Current: Travelling Places is proud to be associated with the invitation only Virtuoso global travel group. Recognised as the top 1% of agencies worldwide, Travelling Places benefits from networking with industry leaders globally and securing exclusive opportunities for our clients to benefit from.
Proposed: Keep
Source: Gina verbatim (luxury-travel-with-travelling-places.md). "Top 1%" stays as hers (decision 3; register C20).

### virtuoso.benefits[0].title  (src/data/virtuoso.json)
Current: At your hotel
Proposed: Keep
Source: Unchanged (editorial)

### virtuoso.benefits[0].body  (src/data/virtuoso.json)
Current: Imagine checking into your hotel and being recognised with complimentary breakfast, a food and beverage credit to use at the hotel and perhaps a room upgrade.
Proposed: Keep
Source: Gina verbatim (luxury-travel-with-travelling-places.md)

### virtuoso.benefits[1].title  (src/data/virtuoso.json)
Current: On your cruise
Proposed: Keep
Source: Unchanged (editorial)

### virtuoso.benefits[1].body  (src/data/virtuoso.json)
Current: Sail on a Virtuoso affiliate cruise line and receive on board credits, an invitation to an exclusive cocktail party or a unique shore excursion.
Proposed: Keep
Source: Gina verbatim (luxury-travel-with-travelling-places.md)

### virtuoso.profile.label  (src/data/virtuoso.json)
Current: View our Virtuoso profile
Proposed: Keep
Source: Unchanged

### virtuoso.whiteLabel.label  (src/data/virtuoso.json)
Current: Some of the wonderful travel opportunities through Virtuoso (not shown; the link is missing, so the page shows "TODO: Virtuoso white-label link not yet supplied")
Proposed: Keep
Source: Gina, trimmed (luxury-travel-with-travelling-places.md; "Here is a link to" cut; no match on wexas.com); link awaits her (register C18)

### Closing band  (src/components/WhyBook.astro, short)
Current: See Shared footer.
Proposed: The new contact line (see why-book.contactLead on Home) and Start planning.
Source: New for the contact line; Unchanged for the Start planning button (WORK-PLAN Q13)

### Image alt text on Luxury  (src/data/luxury.json, src/pages/luxury.astro)
Current: The island hero, the Ravello arch, the Camogli terrace, the stone portico and "Virtuoso member".
Proposed: Keep
Source: Unchanged

## About

### Meta description  (src/pages/who-we-are.astro)
Current: Travelling Places was established by Gina Storey on Tamborine Mountain in 1993. Tailor-made holidays, CLIA cruise expertise and Virtuoso membership, from a privately owned, family business.
Proposed: Travelling Places was established by Gina Storey on Tamborine Mountain in 1993. Tailor-made holidays, CLIA cruise expertise and Virtuoso membership.
Source: New, today's text with "from a privately owned, family business" cut: the phrase matches wexas.com and waits for Gina ([NEEDS GINA] 12). The facts are Gina's, from about-travelling-places.md.

### About hero lead  (src/pages/who-we-are.astro)
Current: People who know travel,
Proposed: Keep
Source: Unchanged

### About hero accent  (src/pages/who-we-are.astro)
Current: and you.
Proposed: Keep
Source: Unchanged

### About hero lede  (src/pages/who-we-are.astro)
Current: Advisors with a shared curiosity about the world, and a remarkably long memory for the details our clients care about.
Proposed: We have all travelled widely, and would love to hear where you want to go next.
Source: New, from Gina's "All of our advisors have travelled extensively and are delighted to share this first-hand knowledge and experience with you" (about-travelling-places.md), turned toward the reader without repeating that sentence, which runs whole in the home promises. It answers the hero's "and you." Replaces "a shared curiosity about the world" and "a remarkably long memory for the details", which no source holds. 16 words against today's 20. The words change in place in src/pages/who-we-are.astro; nothing moves.

### about.intro.heading  (src/data/about.json)
Current: About Travelling Places
Proposed: Keep
Source: Gina verbatim (about-travelling-places.md), a plain page title

### about.intro.paragraphs[0]  (src/data/about.json)
Current: At Travelling Places our aim is simple: to help you create your perfect tailor-made holiday, and to organise it flawlessly. It's something we've been doing successfully now for over 30 years. So, whether you're interested in history, wildlife, culture, adventure or relaxation, our destination specialists will help you arrange every element of your holiday, right down to the smallest detail, and all tailored to suit your own, individual requirements. That, after all, is the beauty of tailor-made travel. You decide where you want to go, how long for, what to see and who to see it with. The rest is taken care of by us.
Proposed: For more than 30 years, Travelling Places has planned holidays around the people taking them. Your interest might be history, wildlife, culture, adventure or relaxation. You choose where to go, for how long and with whom, and your advisor arranges the rest, from the flights to the last transfer.
Source: New, keeping Gina's facts (about-travelling-places.md): over 30 years, holidays tailored to the client, the client choosing destination, length and company, the specialists arranging everything else. Her list "history, wildlife, culture, adventure or relaxation" has no match on wexas.com and is kept; the rest of her paragraph matches ("our aim is simple", "organise it flawlessly", "right down to the smallest detail", "the beauty of tailor-made travel", "You decide where you want to go", "The rest is taken care of by us"). 49 words against today's 108. Shorter than today's because most of her paragraph matches; the prose section holds the shorter text without a layout change.

### about.story.heading  (src/data/about.json)
Current: On the Mountain since 1993.
Proposed: Keep
Source: Unchanged (editorial, from Gina's facts)

### about.story.paragraphs[0]  (src/data/about.json)
Current: Travelling Places was established by Gina Storey in 1993 on Tamborine Mountain. Gina's experience in the industry began in New Zealand and took her to London for 10 years where she worked as a product development manager for British Airways and marketing manager for Australian company Jetset in the UK and Europe. Relocating to Australia Gina put her extensive industry experience into creating a travel agency with a focus on service and creating wonderful experiences for travellers. Over the years Travelling Places has developed a client base all over Australia who have come to the agency for our focus on service.
Proposed: Keep
Source: Gina verbatim (about-travelling-places.md). No match on wexas.com.

### about.story.paragraphs[1]  (src/data/about.json)
Current: It's a great source of pride that, to this day, Travelling Places remains a privately owned, family business. It's a fact that enables us to put you, our customer, at the heart of everything we do.
Proposed: Travelling Places is still an independent agency. [NEEDS GINA: is Travelling Places family-owned? If so, say so in a sentence of your own (register C20)]
Source: New. Independent: luxury-travel-with-travelling-places.md ("an independent tour company", no match). Both of Gina's sentences match wexas.com ("great source of pride", "privately owned, family business", "heart of everything we do"), and the family business is Wexas's claim about Wexas, so it waits for her. The Mountain is left to the home founder line, so it is not said twice. 7 words against today's 37.

### about.cruise.heading  (src/data/about.json)
Current: We sail on the ships we recommend.
Proposed: Cruise advice, first-hand.
Source: New. Today's heading claims every recommended ship has been sailed; Gina says "we sail on and inspect ships regularly" (about-travelling-places.md), which this matches without overstating. Avoids a third "people who" on the site (the About hero keeps the one).

### about.cruise.paragraphs[0]  (src/data/about.json)
Current: As a member of Cruise Lines International Association (CLIA) we undertake extensive training of cruise lines globally. We sail on and inspect ships regularly to ensure we can give you honest opinions and share our up to date knowledge. Whether you like an intimate sailing vessel, a luxury cruise ship, an expedition to the far reaches of the globe, or a river vessel we would be delighted to help. Gina is recognised as a Global Cruise Icon. There are under 300 in the world so her knowledge is extensive and she loves finding the right experience for you.
Proposed: Keep [NEEDS GINA: the awarding body for "Global Cruise Icon"; WORK-PLAN Q10 could not find it at CLIA (registers C20, R17)]
Source: Gina verbatim (about-travelling-places.md), with the corrections the header allows: "Cruise Line International Association" corrected to the body's name, "Cruise Lines International Association", and her dash clause split into its own sentence. No match on wexas.com.

### about.cruise.link.label  (src/data/about.json)
Current: Explore cruising
Proposed: Keep
Source: Unchanged

### about.virtuoso.heading  (src/data/about.json)
Current: Part of Virtuoso.
Proposed: Keep
Source: Unchanged (editorial)

### about.virtuoso.paragraphs[0]  (src/data/about.json)
Current: Invited to join the global network Virtuoso, Travelling Places is recognised as a member of this exclusive club (the top 1% of agencies globally) and is able to share the benefits of this affiliation with their clients.
Proposed: Keep
Source: Gina verbatim (about-travelling-places.md). No match on wexas.com.

### about.virtuoso.link.label  (src/data/about.json)
Current: What Virtuoso means for you
Proposed: Keep
Source: Unchanged

### Team heading  (src/pages/who-we-are.astro)
Current: Meet your advisors
Proposed: Keep
Source: Unchanged

### team.gina-storey.role  (src/content/team/gina-storey.md)
Current: Founder & travel advisor
Proposed: Keep
Source: Unchanged (approved)

### team.gina-storey bio  (src/content/team/gina-storey.md)
Current: Gina's decades in travel shape the agency's calm, personal approach. She established Travelling Places in 1993 and remains its curious traveller, trusted advisor and guiding hand.
Proposed: Keep
Source: Unchanged. Her bio is marked approved, and a career summary here would repeat the story paragraph higher on the same page. The bio is general ("calm, personal approach", "guiding hand") and names nothing a reader could check; Karim may want to offer Gina the founding facts for it (For Karim, item 5).

### team.renee.role  (src/content/team/renee.md)
Current: TODO: confirm preferred job title
Proposed: Keep
Source: Unchanged placeholder (register C11)

### team.renee bio  (src/content/team/renee.md)
Current: A longstanding member of the team known for steady care and follow-through. Renee worked alongside Gina through the disruptions of Covid, helping clients patiently rearrange long-held plans.
Proposed: TODO: bio not yet supplied [NEEDS GINA: two sentences on Renee, from Renee or Gina, including whether the Covid detail and "longstanding" hold]
Source: New (placeholder, per the brief: bios stay as placeholders unless a source gives them). No source holds "longstanding", "steady care and follow-through" or the Covid detail. Today's draft can go to Renee as a starting point; it does not render meanwhile.

### team.sienna-gardner.role  (src/content/team/sienna-gardner.md)
Current: TODO: confirm preferred job title
Proposed: Keep
Source: Unchanged placeholder (register C11)

### team.sienna-gardner bio  (src/content/team/sienna-gardner.md)
Current: Sienna brings fresh first-hand perspective to expedition and river journeys. Her writing follows new discoveries, from Uniworld river cruising to preparing for Antarctica.
Proposed: TODO: bio not yet supplied [NEEDS GINA: two sentences on Sienna, from Sienna or Gina, including whether she wrote the Uniworld piece, which the journal credits to Travelling Places]
Source: New (placeholder, per the brief). No source holds "fresh first-hand perspective to expedition and river journeys". Her Antarctica article is confirmed as hers (register C10), so a bio may cite it. Today's draft can go to Sienna as a starting point.

### team.jodie.role  (src/content/team/jodie.md)
Current: TODO: confirm preferred job title
Proposed: Keep
Source: Unchanged placeholder (register C11)

### team.jodie bio  (src/content/team/jodie.md)
Current: Jodie helps turn early ideas into organised, considered itineraries, working closely with the wider team and Travelling Places' trusted partners.
Proposed: TODO: bio not yet supplied [NEEDS GINA: two sentences on Jodie, from Jodie or Gina]
Source: New (placeholder, per the brief). No source holds the current line. Today's draft can go to Jodie as a starting point.

### Team approval note  (src/pages/who-we-are.astro)
Current: TODO: title and bio not yet approved
Proposed: Keep
Source: Unchanged placeholder

### Closing band  (src/components/WhyBook.astro, short)
Current: See Shared footer.
Proposed: The new contact line (see why-book.contactLead on Home) and Start planning.
Source: New for the contact line; Unchanged for the Start planning button (WORK-PLAN Q13)

### Image alt text on About  (src/data/about.json, src/pages/who-we-are.astro, team files)
Current: The team outside on Tamborine Mountain, "Gina Storey, founder of Travelling Places", the ship at sunset, the Greek sea-view room and "Virtuoso member".
Proposed: Keep
Source: Unchanged

## Journal

### journal-page.heading  (src/data/journal-page.json)
Current: Journal
Proposed: Keep
Source: Unchanged

### Meta description  (src/pages/journal/index.astro)
Current: Stories, practical advice and first-hand discoveries from Gina and the Travelling Places team.
Proposed: The Travelling Places journal: travel notes from Tamborine Mountain, from Antarctica to river cruising.
Source: New. Antarctica and river cruising: the articles looking-south-to-antarctica.md and uniworld-river-journeys.md. Drops "Gina", since no article carries her byline.

### journal-page.standfirst  (src/data/journal-page.json)
Current: Stories, practical advice and first-hand discoveries from Gina and the team, for the journey ahead.
Proposed: Practical advice and travel notes, from Antarctica to river cruising.
Source: New. Antarctica and river cruising: the articles looking-south-to-antarctica.md and uniworld-river-journeys.md. Drops the list of three, "for the journey ahead" and "Gina" (no article carries her byline). Worded apart from the home journal line and the newsletter line. Says "from the team" nowhere, since the Imagine Holidays piece may be supplied content (For Karim, item 2). 10 words against today's 15.

### journal-page.logHeading  (src/data/journal-page.json)
Current: More from the journal
Proposed: Keep
Source: Unchanged

### journal-page.byPrefix, externalPrefix, externalNote  (src/data/journal-page.json)
Current: By / Published on / opens in a new tab
Proposed: Keep
Source: Unchanged

### journal-page.loadMore  (src/data/journal-page.json)
Current: Load more articles
Proposed: Keep
Source: Unchanged (shown only past ten articles)

### journal.looking-south-to-antarctica title, standfirst, category  (src/content/journal/looking-south-to-antarctica.md)
Current: Travelling with Sienna: looking south to Antarctica / The far south has a way of occupying the imagination long before the ship leaves port. / Expedition travel
Proposed: Keep
Source: Unchanged (Sienna's article, register C10)

### journal.looking-south-to-antarctica authorRole  (src/content/journal/looking-south-to-antarctica.md)
Current: Travel advisor
Proposed: [NEEDS GINA: Sienna's job title] Until then, show the same TODO as her team card.
Source: New (placeholder). The team page holds her title as unconfirmed (register C11); this field gives her one.

### journal.looking-south-to-antarctica body  (src/content/journal/looking-south-to-antarctica.md)
Current: The article, from "Antarctica is one of those places" to "the right version of the journey is personal."
Proposed: Keep
Source: Unchanged. A bylined article is not rewritten here. Register C10 settles that the article is Sienna's ("the earlier record that it was mock-up copy is superseded"); the file's comment calling it "not Sienna's work" is stale and should be deleted.

### journal.why-the-human-detail-matters standfirst and body  (src/content/journal/why-the-human-detail-matters.md)
Current: On personal advice, trusted connections and planning journeys around real people.
Proposed: On personal advice, trusted relationships and planning journeys around real people.
Source: New: today's line with "connections" changed to "relationships" (decision 5); nothing else changes

### journal.why-the-human-detail-matters title, category  (src/content/journal/why-the-human-detail-matters.md)
Current: Travelling Places: why the human detail matters / Travel planning
Proposed: Keep
Source: Unchanged

### journal.imagine-holidays-touring title  (src/content/journal/imagine-holidays-touring.md)
Current: Imagine Holidays: travel with the details connected
Proposed: Imagine Holidays
Source: New. Drops the subtitle "travel with the details connected", which uses "connected" as a selling word (decision 5), and keeps the name the piece is about. The file links to tmnews.com.au/imagine-holidays/ (externalUrl) and is dated 2025-05-21. The published headline has not been checked against any recorded source; see "For Karim" item 3.

### journal.imagine-holidays-touring standfirst, category  (src/content/journal/imagine-holidays-touring.md)
Current: A look at event-led touring and the value of bringing different parts of a holiday together. / Touring
Proposed: Keep
Source: Unchanged

### journal.uniworld-river-journeys title, standfirst, category  (src/content/journal/uniworld-river-journeys.md)
Current: Uniworld cruises: a closer look at river journeys / What sets a river itinerary apart, and how to find a sailing that matches your pace. / River cruising
Proposed: Keep
Source: Unchanged

### journal.main-street-to-the-wider-world title, standfirst, category  (src/content/journal/main-street-to-the-wider-world.md)
Current: From Main Street to the wider world / How a Tamborine Mountain travel agency keeps global journeys personal. / Our story
Proposed: Keep
Source: Unchanged

### Article page labels  (src/pages/journal/[...slug].astro)
Current: ← Back to the journal / Written by
Proposed: Keep
Source: Unchanged

### Closing band  (src/components/WhyBook.astro, short)
Current: See Shared footer.
Proposed: The new contact line (see why-book.contactLead on Home) and Start planning.
Source: New for the contact line; Unchanged for the Start planning button (WORK-PLAN Q13)

### Image alt text on Journal  (journal files)
Current: The cover descriptions for the five articles.
Proposed: Keep
Source: Unchanged

## Contact

### Meta description  (src/pages/contact.astro)
Current: Visit us on Main Street, Tamborine Mountain, call 07 5545 1600, or send an enquiry and we will be in touch.
Proposed: Visit us on Main Street, Tamborine Mountain, call 07 5545 1600, or send an enquiry.
Source: New, trimmed from today's text; address and phone from site.json. "And we will be in touch" is cut until Gina says who replies and how soon (register C24, the form note below).

### contact.hero.lead  (src/data/contact.json)
Current: Where is your
Proposed: Keep
Source: Unchanged

### contact.hero.accent  (src/data/contact.json)
Current: imagination going?
Proposed: Keep
Source: Unchanged

### contact.hero.lede  (src/data/contact.json)
Current: You don't need to have every detail. A place, a date, or a feeling is enough to begin.
Proposed: You don't need to have every detail. A place or a date is enough to begin.
Source: New, trimmed from today's text. "Or a feeling" cut, which breaks the list of three. 16 words against today's 18.

### contact.details.heading  (src/data/contact.json)
Current: We're here on the Mountain.
Proposed: Keep
Source: Unchanged

### Trading hours  (src/data/site.json → openingHours)
Current: TODO: trading hours not yet confirmed
Proposed: Keep
Source: Unchanged placeholder (register C15)

### contact.details.visit  (src/data/contact.json)
Current: We welcome appointments at our Main Street office. Call ahead and we'll make time to sit down with your ideas.
Proposed: Call or email the office, or send an enquiry with a few lines about your trip. [NEEDS GINA: can visitors walk in, or should they call ahead for an appointment? (with the trading hours, register C15)]
Source: New. Phone, email and the enquiry form: site.json and the form beside it. "A few lines" follows the hero's "You don't need to have every detail". Claims nothing about visiting until Gina answers; no source mentions appointments or calling ahead. Replaces round 2's "Visit our office today.", which read as a sales line on a page with no trading hours. 16 words against today's 20.

### contact.details.follow  (src/data/contact.json)
Current: Follow the journey
Proposed: Keep
Source: Unchanged

### contact.form.heading  (src/data/contact.json)
Current: Start with the essentials.
Proposed: Keep
Source: Unchanged

### contact.form.note  (src/data/contact.json)
Current: Required fields are marked with an asterisk.
Proposed: Required fields are marked with an asterisk. [NEEDS GINA: one sentence on what happens after an enquiry: who replies, and how soon (register C24)]
Source: Unchanged first sentence. The second is a service promise only Gina can make.

### Enquiry form labels and placeholders  (src/components/EnquiryForm.astro)
Current: Your name * / Email * / Phone / When are you thinking? (For example, September 2027) / Who is travelling? (Number of adults and children, if relevant) / Tell us about the journey * (Destinations, style of travel, celebrations, must-sees or anything else that matters to you…) / Prepare my enquiry, or Send my enquiry once the form key is set
Proposed: Keep
Source: Unchanged

### Calendly heading  (src/components/CalendlyEmbed.astro)
Current: Book a discovery call.
Proposed: Book a time to talk.
Source: New. Plainer than "discovery call". Gina's top-of-page copy asks about setting up a Zoom meeting (one-every-page-at-the-top.md).

### Calendly line  (src/components/CalendlyEmbed.astro)
Current: Fifteen minutes, no obligation. Pick a time that suits you.
Proposed: Pick a time that suits you. [NEEDS GINA: how long the call is, whether by phone or Zoom, and whether to say "no obligation"]
Source: New (today's second sentence kept, the first cut). "Fifteen minutes" and "no obligation" have no source, and no Calendly event exists yet (register C8). The rest is unchanged.

### Calendly placeholder  (src/components/CalendlyEmbed.astro)
Current: TODO: Calendly account not yet created / Send an enquiry instead
Proposed: Keep
Source: Unchanged placeholder (register C8)

### Image alt text on Contact  (src/pages/contact.astro, memberships.json)
Current: The lookout hero and the four membership marks.
Proposed: Keep
Source: Unchanged

## Shared footer

### Closing band on every page but Home  (src/data/why-book.json via WhyBook.astro, short)
Current: Contact one of our consultants on 07 5545 1600 to discuss how we can tailor your holiday. Or email travel@travellingplaces.com.au / Start planning
Proposed: Call us on 07 5545 1600 or email travel@travellingplaces.com.au / Start planning
Source: New for the contact line (why-book.contactLead and contactMiddle; see Home), since Gina's matches wexas.com. Unchanged for the Start planning button (WORK-PLAN Q13)

### Header navigation and button  (src/data/navigation.json, src/components/SiteHeader.astro)
Current: Tailor-made / Luxury / About us / Journal / Start planning / Menu / Close
Proposed: Keep
Source: Unchanged

### Accreditation marks  (src/data/memberships.json)
Current: ATIA accredited / CLIA member / Virtuoso member / Alatus
Proposed: Keep
Source: Unchanged (alt text only; no visible heading)

### top-bar.newsletter.heading  (src/data/top-bar.json)
Current: Sign up for our newsletter
Proposed: Keep
Source: Gina verbatim (one-every-page-at-the-top.md)

### top-bar.newsletter.footerLine  (src/data/top-bar.json)
Current: News and travel ideas from Gina and the team.
Proposed: News and travel ideas from the Travelling Places team.
Source: New. No source says Gina writes the newsletter, and sign-ups are not yet connected (registers C7, C19). Matches the journal fields, which also dropped her name for want of a byline.

### top-bar.newsletter.footerButton  (src/data/top-bar.json)
Current: Sign up
Proposed: Keep
Source: Unchanged

### Footer email field placeholder  (src/components/SiteFooter.astro)
Current: Your email address
Proposed: Keep
Source: Unchanged

### top-bar.newsletter.magazineLabel, sign-up dialog  (src/data/top-bar.json)
Current: Opt in for our luxury travel magazine
Proposed: Keep
Source: Gina verbatim (one-every-page-at-the-top.md)

### Sign-up dialog labels  (src/components/NewsletterDialog.astro)
Current: Newsletter / Name * / Email * / Address / Phone / Sign up / TODO: Genesys not connected. Sign-ups reach the office inbox and are added by hand.
Proposed: Keep
Source: Gina verbatim (one-every-page-at-the-top.md) for the field names; Unchanged for "Newsletter", "Sign up" and the placeholder (register C7)

### Footer brand line  (src/components/SiteFooter.astro)
Current: Personal travel planning from Tamborine Mountain.
Proposed: Keep
Source: Unchanged (the language guide's direction)

### Footer column headings  (src/components/SiteFooter.astro)
Current: Visit or call / Explore / Follow
Proposed: Keep
Source: Unchanged

### Footer address, phone, email  (src/data/site.json)
Current: 24 Main Street, Tamborine Mountain QLD 4272 / 07 5545 1600 / travel@travellingplaces.com.au
Proposed: Keep
Source: Unchanged (site.json, matching one-every-page-at-the-top.md)

### Footer navigation  (src/data/navigation.json)
Current: Tailor-made / Luxury / About us / Journal / Contact
Proposed: Keep
Source: Unchanged

### Footer legal line  (src/components/SiteFooter.astro)
Current: © [year] Travelling Places / TODO: ABN, ATIA and CLIA numbers / Privacy
Proposed: Keep
Source: Unchanged placeholder (register C3 to C5)

### Site tagline and description  (src/data/site.json)
Current: Personal travel, beautifully planned / Personal travel planning from Tamborine Mountain. Cruises, expeditions and tailor-made journeys by Travelling Places.
Proposed: Keep
Source: Unchanged (browser tab and search results)

### Held but not rendered  (src/data/why-book.json)
`services.points`, `proof` and each promise's `paragraphs` are kept unused. Keep. Two unused items are marked [FLAG: Gina to confirm] in case they are ever shown again (WORK-PLAN Q8, register C20): "Full financial security: ATIA protected" (`proof[1]`), and the Financial security `paragraphs` ("To be a member of ATIA our financial records are scrutinised", "We operate a separate client trust account to ensure security of your funds").

## Outside the brief's page list

The 404 page (src/data/not-found.json: "That page has / moved on.", its sentence and two links) is
kept as it is. The privacy policy is a legal draft under its own approval marker (register C2)
and is not part of this deck.

## Items for Gina and Karim

**[NEEDS GINA]**
1. Home founder quotation: one sentence of her own, or confirmation that "Our focus is on you..." is hers. A TODO pill shows until then (register C26).
2. Luxury, "Benefits for our clients": whether she holds events or sends invitations for clients, and if so one sentence in her own words (registers C20, C21).
3. About cruise paragraph: the awarding body for "Global Cruise Icon" (registers C20, R17; WORK-PLAN Q10).
4. Contact form note: who replies to an enquiry, and how soon (register C24).
5. Contact, visiting the office: walk in, or call ahead for an appointment (with trading hours, register C15).
6. Calendly line: how long the call is, whether by phone or Zoom, and whether to say "no obligation" (register C8).
7. Antarctica article: Sienna's job title; the article shows "Travel advisor" while her team card holds it as unconfirmed (register C11).
8. Renee's bio: two sentences, including whether the Covid detail and "longstanding" hold (register C12).
9. Sienna's bio: two sentences, including whether she wrote the Uniworld piece, which the journal credits to Travelling Places (register C12).
10. Jodie's bio: two sentences (register C12).
11. Tailor-made and Luxury: whether each client is matched with an advisor who knows that destination, and whether the advisors have been to the places they recommend and tried the hotels. Her copy says both in wording that matches wexas.com, so the deck leaves the claims out until she confirms them for Travelling Places.
12. About: whether Travelling Places is family-owned. Her "privately owned, family business" matches wexas.com word for word (register C20).
13. The copy she supplied: where the matched text came from. Her five documents share long passages with wexas.com; she may have started from it, or both may share a source. Either way the new wording replaces it, and she should see why.

**[FLAG: Gina to confirm]**
1. Home band, "Financial security" title and body: ATIA licence and record scrutiny read as protection for client money (WORK-PLAN Q8, register C20). The title also matches wexas.com.
2. Luxury, "Peace of mind" title and body: ATIA accreditation offered as peace of mind; whether insurance is offered also needs her yes (registers C20, C21, R3).
3. `why-book.json` `proof[1]` and the Financial security `paragraphs`, unused: "Full financial security: ATIA protected" and the trust-account sentence.

**For Karim, not Gina**
1. `looking-south-to-antarctica.md` still carries a stale comment calling the body mock-up text and "not Sienna's work". Register C10 settles that it is hers; delete the comment.
2. The Imagine Holidays piece links to tmnews.com.au/imagine-holidays/ and the journal credits it to Travelling Places. A web check during round 2 suggested the published headline is "Imagine Holidays" and the byline "Supplied content", but that check is not recorded in the register or anywhere else in the repo. A person should open the page and confirm the headline and byline by eye before the title change is approved or the byline is defended.
3. The About hero lines are typed into src/pages/who-we-are.astro rather than held in content, against the repo's content rule. Moving them is a code change and a separate decision, not part of this copy approval.
4. When the deck is applied, each JSON `paragraphs` field or `source` note that holds Gina's matched text should say it is kept for the record and not shown, so nobody restores it from the CMS.
5. Gina's approved bio is general. If she wants it to carry facts, the founding story (British Airways, Jetset, 1993) is hers and unmatched.

**Wexas check (register C20), run 1 November 2026**

Method: the raw HTML of three live wexas.com pages (why-wexas, why-wexas/tailor-made-travel,
why-wexas/luxury-travel-with-wexas) was fetched, tags stripped, and each phrase below searched for
exactly, ignoring case. Run by Claude on 1 November 2026, before and after the round 4 rewrite.
Only these three pages were searched; a phrase marked "no match" may still appear elsewhere on
wexas.com or on another site.

Matched, so replaced in this deck (fields in brackets):
- tailor.md: every heading and paragraph, including "Tailor-made and luxury holidays", "What is tailor-made travel", "Why book a tailor-made holiday", "hand-select", "better than anyone else", "customise the pace", "never-before-seen tour", "organise it flawlessly", "truly bespoke takes skill", "crafted with local knowledge and insight", "above and beyond the role of traditional travel consultant", "the final ingredient", "a taste of adventure", "sites you don't want to miss", "holiday to remember", "treasure forever", "Right up to the day you depart" (Tailor-made page, its meta description, the home Luxury card).
- about-travelling-places.md: "our aim is simple", "right down to the smallest detail", "beauty of tailor-made travel", "You decide where you want to go", "The rest is taken care of by us" (about.intro); "great source of pride", "privately owned, family business", "heart of everything we do" (about.story[1], About meta); "Talk to the experts", "unbiased, informed approach", "designed around your individual needs and budget" (promises[0]); "Personal service", "pride themselves on their level of personal service", "holiday logistics", "take time to get to know you as a traveller", "treat our clients as we like to be treated" (promises[1]); "Honest pricing", "unfair to just show you" (promises[2]); "Financial security" (promises[3] title, flagged).
- why-book-with-travelling-places.md: "Why book with", "specialise in bespoke travel experiences", "itineraries are just samples", "Contact one of our consultants", "to discuss how we can tailor your holiday", "Start planning your holiday", and the unused list ("Every step of the way", "Expert advice & support", "Inspirational ideas based on experience", "Personalised quotes and documentation", "Dedicated personal consultants", "Care and guidance pre, post and during").
- luxury-travel-with-travelling-places.md: "Bespoke journeys", "crafted with care" (heroLede); "More than just a holiday", "extraordinary tailor-made journeys", "world's finest destinations", "five-star hotels", "truly luxurious experience", "every step of your journey" (luxury.intro, Luxury meta); "Your own personal travel specialist", "Luxury is having an expert travel consultant", "personalise your itinerary", "offer suggestions based on first-hand knowledge", "Meet our team" (themes[0], services.luxury); "on hand not only before your departure", "while you are on the road", "step in if plans need changing", "Full support while travelling" (themes[0]); "A community of travellers", "exclusive invitations", "community of explorers", "Visit our office today" (themes[1]); "long-standing worldwide partners", "comprehensive travel insurance", "peace of mind", "looking after your money", "An independent company with high standards", "unmatched in the industry", "Truly tailor-made travel", "plenty of travel inspiration", "choose that perfect hotel", "Learn more about tailor-made travel" (themes[2] and unused).

No match, so kept as Gina wrote it: "All of our advisors have travelled extensively", "delighted to share this first-hand knowledge", "undertake constant training and travel regularly", "assured of up-to-date knowledge", "pool our resources", "collective knowledge", "sail on and inspect ships", "Cruise Line International Association", "Global Cruise Icon", "client base all over Australia", "established by Gina", "focus on service", "history, wildlife, culture, adventure or relaxation", "independent tour company", "fully accredited", "Established for over 30 years", "top 1%", "invitation only", "Imagine checking into your hotel", "food and beverage credit", "on board credits", "cocktail party", "lots of benefits for our clients", "Sign up for our newsletter", "luxury travel magazine".

**Round 4 result.** Every Proposed line, and the Current text of every field marked Keep, was
split into runs of six words and each run searched for in the same three pages. None appears there.
The one overlap found on the first run ("ocean, river and expedition cruises from", in the cruising
card) was reordered. Six words is the test, so a shared phrase of five words or fewer can remain.
