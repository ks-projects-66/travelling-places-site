# Copy deck, round 3, with the final fixes applied by Claude

A proposal for Karim's approval, 1 November 2026. Nothing here is applied to the site until he
approves it. It follows `docs/copy-review/BRIEF.md`: structure unchanged, Gina's words first, new
copy pared back, "relationships" never "connections", one main action ("Start planning"), and the
ATIA protection wording flagged rather than changed.

Sources are named per entry. "Gina verbatim" and "Gina, trimmed" name the file in
`docs/source/gina-2026-09/`. "Gina verbatim" allows the corrections the site's source notes
already record: obvious typos ("complementary" to "complimentary", "you holiday" to "your
holiday"), capitals lowered to sentence case, and dashes turned into colons or full stops.
"Gina, trimmed" means words were deleted from her sentence and none added, apart from punctuation.
"Gina, lightly edited" means one or two of her words were changed, and the entry names them.

**Gaps.** `[NEEDS GINA: ...]` is a note to Gina and never renders. Where a field must show the
gap on the page, the entry says "Renders as TODO pill:" and gives the pill's text, which uses the
site's existing red placeholder.

**Action labels.** Every main action reads Start planning. Secondary and form controls ("Explore
tailor-made travel", "More about Virtuoso", "Prepare my enquiry", "Send an enquiry instead") are
not main actions and stay as they are. "New" means written for this deck; every fact in a new line is
named beside it. "Unchanged" means today's text is not Gina's and stays as it is.

Fields that exist in the data but render nowhere today are listed at the end of each page, kept
as they are. Word counts are counted by hand, against today's text.

Rule for choosing among Gina's lines (from round 2, kept): each of her sentences appears once on
the site, so a field that would repeat another page gets a different line or new copy. Where a new
choice had to be made, a line of hers that does not match wexas.com was preferred wherever one fits
the field and is not already used elsewhere. Two fields have no such line and use a matched one:
services.luxury body (first sentence) and luxury.themes[0].body. Both are named in their entries
and in the Wexas check at the end. Fields that already carry her words keep them, as the brief says.

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
Proposed: Plan with people who have travelled widely and will give you an honest opinion.
Source: New. "All of our advisors have travelled extensively" and "give you honest opinions" are Gina's (about-travelling-places.md, "Talk to the experts" and the CLIA paragraph). 14 words against today's 12. Her nearest line, "It's hard to overstate the benefit of talking to an expert when it comes to planning your holiday.", runs to 18 words in a short display slot and matches wexas.com word for word; Karim may prefer it regardless.

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
Proposed: Whether you would rather be on the water or ashore, we start with how you like to travel.
Source: New. Names what the two cards below offer (a cruise, or a luxury stay ashore) and faces the reader under a heading about the reader. Claims nothing. Replaces Gina's "We pool our resources..." from round 2, which read as agency language in this slot. 18 words, the same as today.

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
Proposed: Honest opinions on the ships we sail on and inspect.
Source: New, from Gina's "We sail on and inspect ships regularly to ensure we can give you honest opinions" (about-travelling-places.md), which stays whole on About. It claims opinions on the ships the team has sailed or inspected, not on every ship. 10 words, the same as today.

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
Proposed: Hotels and private guides, hand-selected by your specialist.
Source: New, from Gina's "a specialist who knows your destination... They'll then hand-select accommodations, sights, cruises, excursions and private guides" (tailor.md). Leaves Virtuoso to the band below, so the home page names Virtuoso extras once. Removes "thoughtful privileges". 8 words against today's 7.

### home.virtuoso.heading  (src/data/home.json)
Current: More doors open with the right connections.
Proposed: What Virtuoso can add to your journey.
Source: New. Removes "connections" and the boast about access (decision 5). "Can" keeps the benefits conditional.

### home.virtuoso.body  (src/data/home.json)
Current: Our Virtuoso membership connects you with leading hotels, cruise lines, destination specialists and tour partners around the world.
Proposed: Travelling Places is a Virtuoso member. At participating hotels and cruise lines, our clients may receive extras like these.
Source: New. Virtuoso membership: luxury-travel-with-travelling-places.md and about-travelling-places.md. One hedge, at the point of the benefit ("participating... may"); "these" points to her two benefits, which sit beside it in this band. Her closing Virtuoso line stays out, as the owner decided on 25 October (CO11). 19 words against today's 18.

### home.virtuoso.button  (src/data/home.json)
Current: Why Virtuoso matters
Proposed: More about Virtuoso
Source: New. Plainer, and it says where the button goes.

### virtuoso.benefits, shown in the home band  (src/data/virtuoso.json)
Current: The two benefits, "At your hotel" and "On your cruise". See the Luxury page entries.
Proposed: Keep
Source: Gina verbatim; titles unchanged

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
Source: New, from facts she supplied. Over 30 years: about-travelling-places.md and why-book-with-travelling-places.md. Travel advisor: her approved role (src/content/team/gina-storey.md). Tamborine Mountain: about-travelling-places.md. Drops "privately owned, family business", which the Wexas check found on wexas.com; it remains in her About paragraph (about.story[1]) and in the About meta description (src/pages/who-we-are.astro), both pending Karim's Wexas decision. Replaces "the way she intended", which no source records. 20 words against today's 32.

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
Proposed: Travel notes and practical advice from the team.
Source: New. Drops the list of three, and "Gina", since no article carries her byline (four are bylined Travelling Places, one is Sienna's).

### home.journal.allLink  (src/data/home.json)
Current: Read the journal
Proposed: Keep
Source: Unchanged

### why-book.heading, home band  (src/data/why-book.json)
Current: Why book with Travelling Places?
Proposed: Keep
Source: Gina verbatim (why-book-with-travelling-places.md)

### why-book.intro  (src/data/why-book.json)
Current: At Travelling Places, we specialise in bespoke travel experiences. Our itineraries are just samples of what we can arrange, and can be changed depending on your precise needs, finances and ideas by our experienced destination advisors.
Proposed: Keep
Source: Gina verbatim (why-book-with-travelling-places.md)

### why-book.contactLead and contactMiddle  (src/data/why-book.json)
Current: Contact one of our consultants on [phone] to discuss how we can tailor your holiday. Or email [email]
Proposed: Keep
Source: Gina verbatim (why-book-with-travelling-places.md)

### why-book.cta  (src/data/why-book.json)
Current: Start planning
Proposed: Keep
Source: Unchanged (WORK-PLAN Q13)

### why-book.promises[0].title  (src/data/why-book.json)
Current: Talk to the experts
Proposed: Keep
Source: Gina verbatim (about-travelling-places.md)

### why-book.promises[0].body  (src/data/why-book.json)
Current: Our advisors have travelled widely and keep travelling and training, so what they share is first-hand and impartial. We pool what we know across the team, and every itinerary is shaped around your needs and your budget.
Proposed: All of our advisors have travelled extensively and are delighted to share this first-hand knowledge and experience with you. We undertake constant training and travel regularly so that you can be assured of up-to-date knowledge of your travel destination.
Source: Gina verbatim (about-travelling-places.md), two of her sentences in place of a paraphrase; only the hyphen in "first-hand" added. 39 words; her opening sentence would take it past 40. Neither sentence matches wexas.com (see the check at the end).

### why-book.promises[1].title  (src/data/why-book.json)
Current: Personal service
Proposed: Keep
Source: Gina verbatim (about-travelling-places.md)

### why-book.promises[1].body  (src/data/why-book.json)
Current: We treat our clients as we would wish to be treated. Before we suggest anything, we take the time to understand how you like to travel, so the holiday we plan together is one you will love.
Proposed: We like to treat our clients as we like to be treated ourselves. Our advisors will do more than just organise your holiday logistics. Instead they'll take time to get to know you as a traveller.
Source: Gina, trimmed (about-travelling-places.md; "pride themselves on their level of personal service and" cut from the second sentence). 36 words.

### why-book.promises[2].title  (src/data/why-book.json)
Current: Honest pricing
Proposed: Keep
Source: Gina verbatim (about-travelling-places.md)

### why-book.promises[2].body  (src/data/why-book.json)
Current: We do not quote low-season "from" prices for dates you may never travel. We price your own itinerary for the dates you have in mind, so the price we give you is accurate from the start.
Proposed: We believe it's unfair to show "from" prices that relate to the low season, when you may not want to travel. That's why we assess your itinerary for the dates you want, so we can give you an accurate price.
Source: Gina, trimmed (about-travelling-places.md; "that", "just", "you", "take the time to", "personal", "to travel", "that" and "for your holiday" cut). Her reason, "when you may not want to travel", is restored. "We believe" stays, so the criticism of "from" pricing reads as her view. 40 words.

### why-book.promises[3].title  (src/data/why-book.json)
Current: Financial security
Proposed: Keep [FLAG: Gina to confirm] This title presents ATIA accreditation as financial protection; ATIA says accreditation is not a compensation scheme (WORK-PLAN Q8, register C20).
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

### tailor-made.heading, page title  (src/data/tailor-made.json)
Current: Tailor-made and luxury holidays
Proposed: Keep
Source: Gina verbatim (tailor.md)

### Meta description  (src/pages/expertise.astro)
Current: Tell us what you're looking for and speak to a specialist who knows your destination. Tailor-made holidays, cruising, expeditions and luxury travel from Tamborine Mountain.
Proposed: Keep
Source: Unchanged (today's text: the first sentence trims tailor.md, the second adds the site's own service list, so the whole is not a trim)

### tailor-made.heroLead  (src/data/tailor-made.json)
Current: Tailor-made and
Proposed: Keep
Source: Gina verbatim (tailor.md)

### tailor-made.heroAccent  (src/data/tailor-made.json)
Current: luxury holidays.
Proposed: Keep
Source: Gina verbatim (tailor.md)

### tailor-made.intro  (src/data/tailor-made.json)
Current: Tell us what you're looking for, and we'll make sure you speak to a specialist who knows your destination better than anyone else. They'll then hand-select accommodations, sights, cruises, excursions and private guides, as well as arrange transfers, visas, flights and all other travel requirements. They'll also customise the pace of your holiday, so that it suits your individual needs, creating a never-before-seen tour you're sure to love. The aim is simple: to help you create your ideal holiday, and to organise it flawlessly.
Proposed: Keep
Source: Gina verbatim (tailor.md)

### services.cruising.label  (src/content/services/cruising.md)
Current: Ocean & river cruising
Proposed: Keep
Source: Unchanged

### services.cruising body  (src/content/services/cruising.md)
Current: Whether you're drawn to a small luxury vessel, a river through Europe or a grand ocean voyage, we help you weigh what matters: atmosphere, cabin, dining, shore time and pace.
Proposed: Ocean, river or expedition, we advise on ships, cabins and itineraries, and arrange the flights and hotels on either side of your cruise, with up-to-date knowledge from our CLIA training.
Source: New. CLIA membership, training on cruise lines and "up to date knowledge": about-travelling-places.md. Ocean, river and expedition vessels: same file. Cabin and itinerary guidance, pre- and post-cruise arrangements: the card's own list (cruising.md `points`). Flights and hotels: tailor.md. Replaces "we help you weigh", and Gina's own cruise sentence stays on About only. 30 words.

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
Proposed: From Antarctica and the Arctic to the Kimberley, we match you with an experienced operator and the right departure, whether for wildlife or photography, and help you prepare before you go.
Source: New, every fact from the card's own list (expeditions.md `points`): "Antarctica and the Arctic", "The Kimberley and remote islands", "Wildlife, photography and specialist departures", "preparation guidance". Matching to "an experienced operator" is today's claim, kept. Insurance is left out: it is on the register C20 list awaiting Gina. 31 words.

### services.luxury.label  (src/content/services/luxury.md)
Current: Luxury travel
Proposed: Keep
Source: Unchanged

### services.luxury body  (src/content/services/luxury.md)
Current: The most memorable luxury is personal: a genuine welcome, a room chosen well, and experiences that bring you closer to a place. Our Virtuoso connections add recognition and value where available.
Proposed: Luxury is having a travel specialist who knows the region you're visiting. Through Virtuoso, you may be offered breakfast or a room upgrade at participating hotels when you check in.
Source: First sentence Gina, lightly edited (luxury-travel-with-travelling-places.md): her "an expert travel consultant" becomes "a travel specialist", her own word from the section heading "Your own personal travel specialist", so the page uses one role noun. It matches wexas.com; the rest of that section of hers either also matches or is used elsewhere, so no unmatched line fits (see the rule at the top). Second sentence New, hedged ("participating", "may"); breakfast, the room upgrade and checking in are Gina's (same file, "Imagine checking into your hotel..."). Removes "connections" and the word "extras", and keeps one person ("you") throughout. 30 words.

### services.tailor-made.label  (src/content/services/tailor-made.md)
Current: Tailor-made journeys
Proposed: Keep
Source: Unchanged

### services.tailor-made body  (src/content/services/tailor-made.md)
Current: Complex itineraries become simple when one team sees the whole picture. We coordinate flights, rail, touring, stays and transfers around the way you prefer to travel, so every connection fits.
Proposed: A trip can mean flights, rail, visas, several hotels and an excursion with a private guide. We arrange it as one itinerary, paced the way you like to travel.
Source: New. Flights, visas, accommodation, excursions and private guides: tailor.md. Rail: the card's own list (tailor-made.md `points`). Pace set around the traveller: "customise the pace of you holiday" (tailor.md). Drops round 2's "with your specialist on hand throughout", which sections[1] on the same page already says in Gina's words. 29 words.

### tailor-made.sections[0].heading  (src/data/tailor-made.json)
Current: What is tailor-made travel?
Proposed: Keep
Source: Gina verbatim (tailor.md)

### tailor-made.sections[0].paragraphs[0]  (src/data/tailor-made.json)
Current: It's easy to sell a package holiday off the shelf. But, to create a trip that's truly bespoke takes skill, knowledge and a genuine passion for travel. And, that's where we come in. Our experts have been where you're going, trying out the accommodation and experiences we recommend, so they can create a holiday experience that's unique to you.
Proposed: Keep
Source: Gina verbatim (tailor.md)

### tailor-made.sections[0].paragraphs[1]  (src/data/tailor-made.json)
Current: The holiday ideas we offer have been crafted with local knowledge and insight, to inspire curious travellers to look beyond what they would be able to book independently. We go above and beyond the role of traditional travel consultant.
Proposed: Keep
Source: Gina verbatim (tailor.md)

### tailor-made.sections[0].paragraphs[2]  (src/data/tailor-made.json)
Current: Then, we add in the final ingredient: you. We want to know what you want from your trip, whether that's some time to relax, a taste of adventure or a combination of the two. Every holiday can be personalised to include activities you want to try, regions you want to explore, sites you don't want to miss, and much more besides.
Proposed: Keep
Source: Gina verbatim (tailor.md)

### tailor-made.sections[1].heading  (src/data/tailor-made.json)
Current: Why book a tailor-made holiday?
Proposed: Keep
Source: Gina verbatim (tailor.md)

### tailor-made.sections[1].paragraphs[0]  (src/data/tailor-made.json)
Current: We want you to have a holiday to remember, a trip you'll talk about with friends and family, an experience you'll treasure forever. To do that, your holiday has to be as unique as you are. That's why we'll take the time to find out what you like, what you don't like, the kind of things you enjoy doing or would like to do but haven't tried yet. Then, we'll tailor your holiday around those requirements.
Proposed: Keep
Source: Gina, trimmed (tailor.md; "find out about you. We'll take the time to" cut from her third sentence, which removes her repeated "take the time to find out")

### tailor-made.sections[1].paragraphs[1]  (src/data/tailor-made.json)
Current: And that's not all. Right up to the day you depart, and even during your trip, your specialist will be on hand to answer any further questions you may have, and to make changes so your journey is as smooth as it should be, wherever it takes you.
Proposed: And that's not all. Right up to the day you depart, and even during your trip, your specialist will be on hand to answer any further questions you may have. Should you wish to make changes, they'll be on hand to make your journey as smooth as it should be, wherever it takes you.
Source: Gina verbatim (tailor.md), her two sentences exactly. Today's text rewords them into one, adding words. Round 2 cut her second "be on hand to", which turned an offer to be available into a promise of a smooth journey; it is restored, and her repeated "on hand" stays as hers.

### Closing band  (src/components/WhyBook.astro, short)
Current: Gina's contact line and Start planning. See Shared footer.
Proposed: Keep
Source: Gina verbatim for the contact line (why-book-with-travelling-places.md); Unchanged for the Start planning button, which shortens her "Start planning your holiday" (WORK-PLAN Q13)

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
Proposed: Keep
Source: Unchanged (today's text, not Gina's). The opening phrase is Gina's; the list after the colon is built from her section headings with words added ("Virtuoso benefits", "support while you travel"), so it is not a trim. It names ATIA accreditation without presenting it as protection.

### luxury.heroLead  (src/data/luxury.json)
Current: Luxury travel with
Proposed: Keep
Source: Gina verbatim

### luxury.heroAccent  (src/data/luxury.json)
Current: Travelling Places.
Proposed: Keep
Source: Gina verbatim

### luxury.heroLede  (src/data/luxury.json)
Current: Bespoke journeys crafted with care.
Proposed: Keep
Source: Gina verbatim (luxury-travel-with-travelling-places.md)

### luxury.intro.heading  (src/data/luxury.json)
Current: More than just a holiday
Proposed: Keep
Source: Gina verbatim

### luxury.intro.paragraphs[0]  (src/data/luxury.json)
Current: Travelling Places offers extraordinary tailor-made journeys to the world's finest destinations. But real luxury travel is about far more than just five-star hotels; here are some of the ways that we provide a truly luxurious experience on every step of your journey:
Proposed: Keep
Source: Gina verbatim

### luxury.themes[0].title  (src/data/luxury.json)
Current: Your specialist
Proposed: Keep
Source: Unchanged (editorial, from Gina's "Your own personal travel specialist")

### luxury.themes[0].body  (src/data/luxury.json)
Current: One expert who knows the region first-hand, plans every detail around you, and stays on hand while you travel.
Proposed: Your travel specialist will be on hand while you are on the road, to step in if plans need changing.
Source: Gina, trimmed (luxury-travel-with-travelling-places.md, "Full support while travelling"; "not only before your departure, but also" and "or you need some unforeseen support" cut). It matches wexas.com, and it is her only line on support while travelling, so no unmatched line fits (see the rule at the top). 20 words against today's 19.

### luxury.themes[0].link.label  (src/data/luxury.json)
Current: Meet our team
Proposed: Keep
Source: Gina verbatim

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
Proposed: Virtuoso benefits at participating hotels and cruise lines, and in-house events and invitations for our clients. [NEEDS GINA: do the in-house events and invitations still happen? If not, the body ends after "cruise lines". (registers C20, C21)]
Source: New. Events and invitations: Gina's "A community of travellers" (luxury-travel-with-travelling-places.md); "regular" is left out until she confirms. "Benefits" is her word ("There are lots of benefits for our clients through the Virtuoso affiliation", same file), hedged by "participating"; the examples sit in the Virtuoso band lower on this page, so they are not repeated here. 16 words against today's 15.

### luxury.themes[2].title  (src/data/luxury.json)
Current: Peace of mind
Proposed: Keep [FLAG: Gina to confirm] Paired with the ATIA line below, this title presents accreditation as protection (WORK-PLAN Q8, register C20).
Source: Unchanged (draft copy, register C21)

### luxury.themes[2].body  (src/data/luxury.json)
Current: An independent, ATIA-accredited company with long-standing partners, and comprehensive travel insurance on offer.
Proposed: Keep [FLAG: Gina to confirm] ATIA accreditation offered as peace of mind, from her "Complete protection" section; ATIA says accreditation is not a compensation scheme (WORK-PLAN Q8, register C20). Insurance "on offer" also awaits her confirmation (register C21, R3).
Source: Unchanged (draft copy, register C21)

### virtuoso.intro.heading  (src/data/virtuoso.json)
Current: Virtuoso membership
Proposed: Keep
Source: Gina verbatim

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
Source: Gina verbatim

### virtuoso.benefits[1].title  (src/data/virtuoso.json)
Current: On your cruise
Proposed: Keep
Source: Unchanged (editorial)

### virtuoso.benefits[1].body  (src/data/virtuoso.json)
Current: Sail on a Virtuoso affiliate cruise line and receive on board credits, an invitation to an exclusive cocktail party or a unique shore excursion.
Proposed: Keep
Source: Gina verbatim

### virtuoso.profile.label  (src/data/virtuoso.json)
Current: View our Virtuoso profile
Proposed: Keep
Source: Unchanged

### virtuoso.whiteLabel.label  (src/data/virtuoso.json)
Current: Some of the wonderful travel opportunities through Virtuoso (not shown; the link is missing, so the page shows "TODO: Virtuoso white-label link not yet supplied")
Proposed: Keep
Source: Gina, trimmed ("Here is a link to" cut); link awaits her (register C18)

### Closing band  (src/components/WhyBook.astro, short)
Current: See Shared footer.
Proposed: Keep
Source: Gina verbatim for the contact line (why-book-with-travelling-places.md); Unchanged for the Start planning button, which shortens her "Start planning your holiday" (WORK-PLAN Q13)

### Image alt text on Luxury  (src/data/luxury.json, src/pages/luxury.astro)
Current: The island hero, the Ravello arch, the Camogli terrace, the stone portico and "Virtuoso member".
Proposed: Keep
Source: Unchanged

## About

### Meta description  (src/pages/who-we-are.astro)
Current: Travelling Places was established by Gina Storey on Tamborine Mountain in 1993. Tailor-made holidays, CLIA cruise expertise and Virtuoso membership, from a privately owned, family business.
Proposed: Keep
Source: Unchanged (today's text; its facts are Gina's, from about-travelling-places.md)

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
Source: Gina verbatim

### about.intro.paragraphs[0]  (src/data/about.json)
Current: At Travelling Places our aim is simple: to help you create your perfect tailor-made holiday, and to organise it flawlessly. It's something we've been doing successfully now for over 30 years. So, whether you're interested in history, wildlife, culture, adventure or relaxation, our destination specialists will help you arrange every element of your holiday, right down to the smallest detail, and all tailored to suit your own, individual requirements. That, after all, is the beauty of tailor-made travel. You decide where you want to go, how long for, what to see and who to see it with. The rest is taken care of by us.
Proposed: Keep
Source: Gina verbatim

### about.story.heading  (src/data/about.json)
Current: On the Mountain since 1993.
Proposed: Keep
Source: Unchanged (editorial, from Gina's facts)

### about.story.paragraphs[0]  (src/data/about.json)
Current: Travelling Places was established by Gina Storey in 1993 on Tamborine Mountain. Gina's experience in the industry began in New Zealand and took her to London for 10 years where she worked as a product development manager for British Airways and marketing manager for Australian company Jetset in the UK and Europe. Relocating to Australia Gina put her extensive industry experience into creating a travel agency with a focus on service and creating wonderful experiences for travellers. Over the years Travelling Places has developed a client base all over Australia who have come to the agency for our focus on service.
Proposed: Keep
Source: Gina verbatim

### about.story.paragraphs[1]  (src/data/about.json)
Current: It's a great source of pride that, to this day, Travelling Places remains a privately owned, family business. It's a fact that enables us to put you, our customer, at the heart of everything we do.
Proposed: Keep
Source: Gina verbatim

### about.cruise.heading  (src/data/about.json)
Current: We sail on the ships we recommend.
Proposed: Cruise advice from people who sail.
Source: New. Today's heading claims every recommended ship has been sailed; Gina says "we sail on and inspect ships regularly" (about-travelling-places.md), which this matches.

### about.cruise.paragraphs[0]  (src/data/about.json)
Current: As a member of Cruise Lines International Association (CLIA) we undertake extensive training of cruise lines globally. We sail on and inspect ships regularly to ensure we can give you honest opinions and share our up to date knowledge. Whether you like an intimate sailing vessel, a luxury cruise ship, an expedition to the far reaches of the globe, or a river vessel we would be delighted to help. Gina is recognised as a Global Cruise Icon. There are under 300 in the world so her knowledge is extensive and she loves finding the right experience for you.
Proposed: Keep [NEEDS GINA: the awarding body for "Global Cruise Icon"; WORK-PLAN Q10 could not find it at CLIA (registers C20, R17)]
Source: Gina verbatim, with the corrections the header allows: "Cruise Line International Association" corrected to the body's name, "Cruise Lines International Association", and her dash clause split into its own sentence. Her words stay, as Karim decided.

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
Source: Gina verbatim

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
Source: Unchanged. Her bio is marked approved, and a career summary here would repeat the story paragraph higher on the same page.

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
Proposed: Keep
Source: Gina verbatim for the contact line (why-book-with-travelling-places.md); Unchanged for the Start planning button, which shortens her "Start planning your holiday" (WORK-PLAN Q13)

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
Proposed: Travel ideas and practical advice from the Travelling Places team on Tamborine Mountain.
Source: New. Drops "Gina", since no article carries her byline.

### journal-page.standfirst  (src/data/journal-page.json)
Current: Stories, practical advice and first-hand discoveries from Gina and the team, for the journey ahead.
Proposed: Travel ideas and practical advice from the Travelling Places team.
Source: New. Drops the list of three, "for the journey ahead", the second "from" and "Gina" (no article carries her byline). 10 words against today's 15.

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
Proposed: Keep
Source: Gina verbatim for the contact line (why-book-with-travelling-places.md); Unchanged for the Start planning button, which shortens her "Start planning your holiday" (WORK-PLAN Q13)

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
Proposed: Keep
Source: Gina verbatim for the contact line (why-book-with-travelling-places.md); Unchanged for the Start planning button, which shortens her "Start planning your holiday" (WORK-PLAN Q13)

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
Source: Gina verbatim

### Sign-up dialog labels  (src/components/NewsletterDialog.astro)
Current: Newsletter / Name * / Email * / Address / Phone / Sign up / TODO: Genesys not connected. Sign-ups reach the office inbox and are added by hand.
Proposed: Keep
Source: Unchanged (the fields follow Gina's list in one-every-page-at-the-top.md; placeholder per register C7)

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
2. Luxury, "Benefits for our clients": whether the in-house events and invitations still happen (registers C20, C21).
10. About cruise paragraph: the awarding body for "Global Cruise Icon" (registers C20, R17; WORK-PLAN Q10).
3. Contact form note: who replies to an enquiry, and how soon (register C24).
4. Contact, visiting the office: walk in, or call ahead for an appointment (with trading hours, register C15).
5. Calendly line: how long the call is, whether by phone or Zoom, and whether to say "no obligation" (register C8).
6. Antarctica article: Sienna's job title; the article shows "Travel advisor" while her team card holds it as unconfirmed (register C11).
7. Renee's bio: two sentences, including whether the Covid detail and "longstanding" hold (register C12).
8. Sienna's bio: two sentences, including whether she wrote the Uniworld piece, which the journal credits to Travelling Places (register C12).
9. Jodie's bio: two sentences (register C12).

**[FLAG: Gina to confirm]**
1. Home band, "Financial security" title and body: ATIA licence and record scrutiny read as protection for client money (WORK-PLAN Q8, register C20).
2. Luxury, "Peace of mind" title and body: ATIA accreditation offered as peace of mind; insurance "on offer" also needs her yes (registers C20, C21, R3).
3. `why-book.json` `proof[1]` and the Financial security `paragraphs`, unused: "Full financial security: ATIA protected" and the trust-account sentence.

**For Karim, not Gina**
1. `looking-south-to-antarctica.md` still carries a stale comment calling the body mock-up text and "not Sienna's work". Register C10 settles that it is hers; delete the comment.
2. Gina's existing bio stays as approved.
3. The Imagine Holidays piece links to tmnews.com.au/imagine-holidays/ and the journal credits it to Travelling Places. A web check during round 2 suggested the published headline is "Imagine Holidays" and the byline "Supplied content", but that check is not recorded in the register or anywhere else in the repo. A person should open the page and confirm the headline and byline by eye before the title change is approved or the byline is defended.
4. The About hero lines are typed into src/pages/who-we-are.astro rather than held in content, against the repo's content rule. Moving them is a code change and a separate decision, not part of this copy approval.

**Wexas check (register C20), run 1 November 2026**

Run through a summarising page fetch of three wexas.com pages (why-wexas, why-wexas/tailor-made-travel, why-wexas/luxury-travel-with-wexas). Confirmed by Claude on 1 November 2026 by an exact-phrase search of the raw text of the same three live pages: "hard to overstate the benefit of talking to an expert", "unfair to just show you", "privately owned, family business", "organise it flawlessly", "treat our clients as we like to be treated", "easy to sell a package holiday off the shelf", "never-before-seen tour", "Luxury is having an expert travel consultant", "regular in-house events" and "five-star hotels" all appear word for word. It changes the weight of decision 2, so it is Karim's call, not the deck's.

Match or near match on wexas.com, and in this deck:
- tailor.md, all of it: tailor-made.intro, sections[0] (three paragraphs), sections[1] (two paragraphs).
- about-travelling-places.md: the About introduction ("our aim is simple", "You decide where you want to go..."), "It's a great source of pride... privately owned, family business" (about.story[1]), "It's hard to overstate..." (not used), "We like to treat our clients...", "pride themselves on their level of personal service" and "Instead they'll take time to get to know you" (promises[1] body), "We believe that it's unfair to just show you 'from' prices" (promises[2] body), "They have an unbiased, informed approach" (not used), "Every itinerary is designed around your individual needs and budget" (not used).
- why-book-with-travelling-places.md: "we specialise in bespoke travel experiences. Our itineraries are just samples of what we can arrange" (why-book.intro).
- luxury-travel-with-travelling-places.md: "extraordinary tailor-made journeys to the world's finest destinations" and "real luxury travel is about far more than just five-star hotels" (luxury.intro, and the Luxury meta description), "Bespoke journeys, crafted with care" (luxury.heroLede), "Luxury is having an expert travel consultant who knows the region you're visiting" (services.luxury body), "Your travel specialist will be on hand not only before your departure..." (luxury.themes[0].body), "We offer regular in-house events and exclusive invitations" (behind luxury.themes[1]), "Whether we're helping you choose that perfect hotel...", "We also offer comprehensive travel insurance" (behind luxury.themes[2]), and "an independent tour company with long-standing worldwide partners" (near match, behind luxury.themes[2]).

No match found: "All of our advisors have travelled extensively..." and "We undertake constant training and travel regularly..." (promises[0] body), "We pool our resources..." (home.journeys.intro), "We sail on and inspect ships regularly", "a client base all over Australia", and the Virtuoso lines (top 1%, the hotel and cruise benefits, "There are lots of benefits...").

Not checked: Gina's Global Cruise Icon and CLIA sentences, her founding story, and her Why book lists, beyond the phrases above.

Two consequences beyond wording. First, some matched sentences carry claims that were Wexas's own before they were Gina's: the privately owned, family business (now only in Gina's own About paragraph; round 3 took it out of the new home founder body), the unbiased approach, the comprehensive insurance and the in-house events. Each needs Gina to confirm it holds for Travelling Places, not only that the words are hers. Second, the brief's "Gina's language first" assumed the words are hers. Where they are copied, Karim may want new copy in those fields instead; this deck has not made that switch, because the brief does not allow it without his decision.
