# Notes on the draft privacy policy

Prepared 25 October 2026 for Travelling Places. These notes sit beside `privacy-policy.md`. This is research and drafting support, not legal advice. A person with authority must approve the policy (CLAUDE.md, WORK-PLAN Q11).

## 1. Is the business legally required to have a privacy policy?

Short answer: it depends on one fact only the owner can supply, the business's annual turnover. On what I could verify, probably not by law, but there are good reasons to publish one anyway.

- The Australian Privacy Principles (APPs) in the Privacy Act 1988 (Cth) require an APP entity to have a clearly expressed, up-to-date privacy policy (APP 1.3), with the contents listed in APP 1.4 (see section 2). The policy should be on the entity's website (OAIC APP guidelines, Chapter 1, para 1.82).
- The APPs do not apply to a "small business operator". The OAIC describes this as a business with annual turnover of $3 million or less. Turnover counts income from all sources and excludes assets, capital gains and proceeds of capital sales. As at October 2026 the threshold is still $3 million.
- The exemption has exceptions that apply whatever the turnover. The OAIC's list: health service providers (that hold health information); businesses that trade in personal information; Commonwealth contracted service providers; related bodies corporate of a covered business; AML/CTF reporting entities (for AML/CTF activities); residential tenancy database operators; credit reporting bodies; and a few others. Opting in under s 6EA also brings a business under the Act.
- Travel agents: neither the OAIC small business page nor the legislation lists travel agents as an exception. I found no source saying otherwise. Points a lawyer should still check:
  - Trading in personal information (s 6D(4)). Disclosing personal information to suppliers (cruise lines, hotels, airlines) to make a booking is normally with the customer's consent, and s 6D(8) removes consent-based and legally authorised cases from the exception. Paying or being paid for customer details (for example a commission for passing on a mailing list) would be different. The owner should confirm that never happens.
  - Health information. A travel agent is not a health service provider, so the health exception should not apply. Travellers do give dietary, mobility and medical details though, so this deserves a line from an adviser. This site's forms do not ask for health details, and the policy asks visitors not to put them in the form.
  - Related bodies corporate. If the business is part of a group whose combined position is above the threshold, the exemption can be lost.
  - AML/CTF "tranche 2" started on 1 July 2026 and brings in lawyers, accountants, real estate and similar sectors. I did not find travel agents among them, but I did not check the AUSTRAC list itself.
- Other obligations that apply regardless of the small business exemption:
  - Spam Act 2003. The newsletter and magazine opt-in involve marketing messages. ACMA says the Act applies to businesses of all sizes: you need consent, the sender must be identified, and each message needs a working unsubscribe that is actioned within 5 working days. This is the strongest legal reason the newsletter needs care, whatever the Privacy Act position.
  - Australian Consumer Law, and any membership terms (Virtuoso, ATIA/ATAS, CLIA). I could not confirm whether any of these require a published privacy policy. The ATAS Code of Conduct v9 PDF came up in search but I could not read its contents. Someone should check.
- Practical reasons to publish one regardless: clients expect it where a site collects names, emails and postal addresses; the site loads third-party services (Calendly, Google Fonts, form and newsletter tools) that handle visitors' data; Calendly's own cookie banner is suppressed on the embed (`hide_gdpr_banner=1`, INTEGRATIONS.md), so the policy is where visitors learn about its cookies; and WORK-PLAN already records a policy as expected by clients and the services used. I did not verify that any particular third-party service contractually requires its customers to publish a policy.
- Reform status. The Attorney-General's Department opened consultation on an exposure draft Privacy Amendment (Personal Data Protection) Bill 2026 and a consultation paper on 31 August 2026. Submissions closed 18 September 2026. The AGD page says the bill "remains subject to further consideration by government" and gives no commencement date. Law-firm commentary (Brightlaw, September 2026; others in search results) says the draft does not remove the small business exemption. I could not open the draft bill or paper text (the PDF would not extract, and one law-firm page returned 403), so the point rests on secondary commentary. The earlier 2023 government in-principle agreement to remove the exemption is policy, not law. Treat the exemption as continuing for now, and re-check before launch.
- Because the owner has asked for a policy, one decision is worth making deliberately: the draft says "We aim to handle personal information in line with the Australian Privacy Principles." If the business is exempt, that is a voluntary commitment (opting in formally is a separate step, s 6EA, and is not recommended or assumed here). The scaffold page currently says the APPs "apply"; I did not copy that, because it depends on the turnover answer.

## 2. What the policy must contain (APP 1.4) and where the draft covers it

| Requirement | Draft section |
|---|---|
| (a) kinds of information collected and held | Information we collect |
| (b) how it is collected and held | Information we collect; Keeping it secure |
| (c) purposes of collecting, holding, using, disclosing | How we use it; Who we share it with |
| (d) access and correction procedure | Access and correction |
| (e) complaints procedure | Complaints |
| (f) whether disclosed overseas | Overseas disclosure |
| (g) countries, if practicable | Overseas disclosure |

OAIC guidance says an access/correction section should give a contact person's position title, telephone, postal address and email. That is why the privacy contact is a placeholder. Sending data through an overseas server only in transit is generally a use, not a disclosure (guideline para 1.31). The draft lists the countries anyway, because the services store data there.

## 3. Where each service stores data

| Service | What I found | Confidence |
|---|---|---|
| Web3Forms | Hosted on Amazon Web Services, encrypted at rest. No country or region found. Retention is unclear: its homepage says 30 days (free) or 1 year (Pro); a third-party review says its privacy policy (updated 13 July 2026) allows up to 3 years; an older docs FAQ says it stores no submissions and clears server logs every two months. INTEGRATIONS.md records 30 days. | Low. Web3Forms pages returned 403 to me, so this is from search snippets and a review site. Placeholder left in the policy. |
| Calendly | Own notice: data "may be processed and stored in the United States or in other countries where we or our Service Providers have operations". Relies on DPF and standard contractual clauses for EEA/UK transfers. Acts as processor for customer data under its Data Processing Addendum. Retention: "as long as reasonably necessary", no fixed period. | Good for the US statement. Sub-processor list URL returned 404, so other countries are not confirmed. |
| Genesys Marketing | Not confirmed. INTEGRATIONS.md names genesysmarketing.com.au as an Australian travel-agent email platform. I could not reach the site (proxy blocked the connection) and found no privacy policy. A Travel Daily item mentions "Genesys Creative Systems", a travel advisor content-marketing platform, which may or may not be the same company. It is not the US contact-centre company Genesys (genesys.com). | Unconfirmed. The company's legal name and data location are placeholders. Ask Genesys support (INTEGRATIONS.md already lists the questions). |
| Cloudflare (Pages hosting, optional Web Analytics) | Privacy policy: "We primarily store your information in the United States and the European Economic Area" and may access it from around the world. Processes visitor IP addresses as a processor for customers. Web Analytics page: "does not use any client-side state, such as cookies or localStorage" and does not fingerprint via IP or user agent. I did not confirm Pages itself sets no cookies. | Good |
| Vercel (current review host) | Privacy notice: processing "in the United States and other jurisdictions in which we operate"; collects visitor IP address and city/country as a processor. | Good |
| Google Fonts | Google FAQ (via search result): the Fonts API does not set or log cookies, but requests carry IP address, URL and headers (user agent, referer) and are logged. Served from Google's global network. Self-hosting the fonts would avoid sending visitors' data to Google. The fonts are loaded from `fonts.googleapis.com` and `fonts.gstatic.com` in `BaseLayout.astro`. | Medium. Google's page redirects and I read it through a search summary. |
| Microsoft 365 (business email) | Not researched. Form emails land in this mailbox (INTEGRATIONS.md). I added it to the policy because it receives the data. | Unknown. Placeholder. |

## 4. What the site actually does (checked in the code)

- No cookies are set by the site's own code, and no `document.cookie`, `localStorage` or `sessionStorage` use in `src/`. `astro.config.mjs` adds no analytics integration. CONTENT-REGISTER confirms "No analytics script is present".
- `src/layouts/BaseLayout.astro` loads fonts from Google on every page.
- `EnquiryForm.astro` fields: name (required), email (required), phone, timing, party, journey (required), plus a hidden spam honeypot `botcheck`.
- `NewsletterDialog.astro` fields: name (required), email (required), address (free text, described in the register as the postal address), phone, magazine opt-in tick box ("Opt in for our luxury travel magazine"), plus the honeypot.
- `site.js`: with `PUBLIC_WEB3FORMS_KEY` set, the form posts to `https://api.web3forms.com/submit`. Without it, a `mailto:` draft opens in the visitor's own email app and nothing is sent by the site. Karim (5 October 2026) accepted the mail-draft route for launch (register C6/R10), so the mail-draft paragraph is the likely launch state.
- `CalendlyEmbed.astro`: when `PUBLIC_CALENDLY_URL` is set, loads `assets.calendly.com/assets/external/widget.js` and passes `hide_gdpr_banner=1`. Not live yet.
- Outbound links found in `src/`: Instagram, Facebook, Virtuoso, ATIA, CLIA, Google Maps, tmnews.com.au, escapetotamborinemountain.com.au. The policy names the first six from the brief; the last two are also in the code and could be added.
- The CMS at `/admin/` loads from unpkg.com and uses a staff GitHub login. It is for staff, not visitors, so it is left out of the policy.

## 5. Placeholders: what each needs and who should supply it

| Placeholder in the policy | Needs | From |
|---|---|---|
| Legal name of the operating business, ABN | Exact entity and ABN (site.json already has ABN as a TODO) | Gina |
| Privacy contact position title and address | Who handles requests; whether to use travel@ or a dedicated address | Gina |
| Link to office/phone privacy notice | Whether one exists | Gina or her adviser |
| Commitment to follow the APPs | Decision, tied to the turnover answer | Gina, with adviser |
| Magazine details | What it is, posted or emailed, who publishes and sends it, whether sign-up details go to the publisher | Gina |
| Legal obligations line | Whether to keep it | Adviser |
| "We do not sell" and "no one else without consent" statements, supplier disclosure | Confirm true for the business; whether enquiries are passed to suppliers | Gina |
| Web3Forms country and retention; keep or delete the two form paragraphs | Plan and key status at launch; Web3Forms confirmation | Karim |
| Microsoft 365 data location | Tenant data location | Karim (admin centre) |
| Calendly paragraphs | Keep only once the account exists | Gina or Karim |
| Genesys name, location, unsubscribe | Company and answers to INTEGRATIONS.md questions | Karim with Genesys support |
| Cloudflare / Vercel lines | Which host is live at launch | Karim |
| Security safeguards | What is really in place (two-factor sign-in, access) | Karim |
| Retention periods (enquiries, newsletter, bookings) and deletion method | Business decision | Gina |
| Analytics choice | Decision on Cloudflare Web Analytics or none | Gina and Karim |
| Reply times (access, complaints) | Business decision; 30 days is the OAIC's own "reasonable" benchmark for complaints | Gina |
| Date approved | Date and name of the approver | Gina or her adviser |

## 6. Statements in the draft that depend on an unconfirmed fact

- "This website does not set cookies itself." True of the code today. Must be re-checked if analytics, a chat widget or another embed is added, and Cloudflare Pages' own behaviour was not confirmed.
- "Our website is served over an encrypted connection (HTTPS)." True of Cloudflare Pages and Vercel by default, but check the live domain after cutover.
- The Cloudflare Web Analytics wording is conditional and must only be used if it is installed.
- Cloudflare, Calendly and Vercel storage statements quote the providers' own current notices. Providers change them. Re-check before publishing.
- "Google says the Fonts service does not set cookies" comes from Google's FAQ as summarised in search, not a direct read.
- The form paragraph assumes the Web3Forms route emails the submission to the office. Retention at Web3Forms is conflicting between sources.
- The newsletter section assumes sign-ups are added by hand until Genesys is connected (from the newsletter dialog's own TODO note and register C19).
- Overseas countries: the United States is well supported (Calendly, Cloudflare, Vercel, Google). Web3Forms, Genesys and Microsoft 365 countries are unknown.
- The OAIC phone number and the 30-day complaint guidance come from oaic.gov.au pages. The OAIC says phone hours are Monday to Thursday, 10 am to 4 pm; the policy gives the number only.
- Suggested additions I left out: a separate unsubscribe sentence for the newsletter (add when Genesys is connected, to match Spam Act obligations), and any mention of visitors outside Australia (for example GDPR). The latter was not in scope and needs an adviser if the audience includes EU or UK residents.

## 7. What the owner needs to give to finalise it

1. Turnover answer (is annual turnover $3 million or less, and has it ever been over) and whether the business is part of a larger group. This decides whether the APPs bind the business or the policy is voluntary.
2. A decision on whether the business wants to commit to the APPs publicly.
3. Legal name and ABN, and who the privacy contact is.
4. Retention periods and how data is deleted.
5. Which services are live on launch day (form key, Calendly, Genesys, host, analytics), so unused paragraphs can be deleted.
6. Details of the luxury travel magazine and any disclosure of customer details to suppliers or the publisher.
7. The confirmed facts from Web3Forms, Genesys and the Microsoft 365 admin centre (data locations).
8. A named approver and date. After that, a person removes the unapproved marker on the page and in the register (agents must not).
9. Ideally a one-off look from a lawyer or privacy adviser, because the small-business and trading-in-information questions turn on facts about the business.

## 8. Sources

OAIC and legislation
- OAIC, APP Guidelines, Chapter 1 (APP 1): https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-1-app-1-open-and-transparent-management-of-personal-information
- OAIC, Small business: https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/organisations/small-business
- OAIC, Opting in to the Privacy Act: https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/organisations/opting-in-to-the-privacy-act
- OAIC, APP Guidelines Chapter B (key concepts, exceptions): https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-b-key-concepts
- OAIC, guidance for reporting entities under the AML/CTF Act: https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/organisations/privacy-guidance-for-reporting-entities-under-the-anti-money-laundering-and-counter-terrorism-financing-act
- OAIC, Privacy complaints: https://www.oaic.gov.au/privacy/privacy-complaints and https://www.oaic.gov.au/privacy/privacy-complaints/complain-to-an-organisation-or-agency
- Privacy Act 1988 s 6D (AustLII): http://www.austlii.edu.au/au/legis/cth/consol_act/pa1988108/s6d.html
- ACMA, Avoid sending spam: https://www.acma.gov.au/avoid-sending-spam
- ACMA, SMEs: marketing messages and unsubscribe rules (research report, 2024): https://www.acma.gov.au/sites/default/files/2024-08/SMEs_marketing%20messages%20and%20unsubscribe%20rules_research%20report.pdf

Reform status
- AGD, Privacy Reform consultation (opened 31 Aug 2026, closed 18 Sep 2026): https://consultations.ag.gov.au/rights-and-protections/privacy-reform/
- AGD, exposure draft bill and consultation paper: https://consultations.ag.gov.au/rights-and-protections/privacy-reform/user_uploads/exposure-draft-bill-2026.pdf and https://consultations.ag.gov.au/rights-and-protections/privacy-reform/user_uploads/consultation_paper.pdf (listed; text not extracted)
- Attorney-General media release, 31 Aug 2026: https://ministers.ag.gov.au/media-centre/modernising-australias-privacy-laws-digital-age-31-08-2026 (503 when fetched; known from search)
- Brightlaw, Privacy reform update September 2026: https://www.brightlaw.com.au/privacy-reform-update-september-2026/ ("The small business exemption has not been removed.")
- Other commentary found but not opened: HSF Kramer https://www.hsfkramer.com/insights/2026-09/the-draft-tranche-2-privacy-act-reforms-whats-there-whats-new-and-whats-missing (403), DLA Piper https://privacymatters.dlapiper.com/2026/09/australia-privacy-reform-consultation-draft-outlines-proposed-next-steps/, Sparke Helmore, Johnson Winter Slattery, A&O Shearman (all via search).

Travel-specific
- ATIA ATAS Code of Conduct v9 (not read): https://atia.travel/Portals/0/ATAS%20Accreditation/ATIA_CODE%20OF%20CONDUCT%20V9%2012%20May%202025.pdf
- ALRC Report 108, ch 39 on the small business exemption: https://www.alrc.gov.au/publication/for-your-information-australian-privacy-law-and-practice-alrc-report-108/39-small-business-exemption/introduction-147/

Providers
- Calendly privacy notice: https://calendly.com/privacy (sub-processor page returned 404)
- Web3Forms (403 to my fetches; read through search results): https://web3forms.com/ , https://web3forms.com/privacy , https://docs.web3forms.com/getting-started/faq
- Cloudflare privacy policy: https://www.cloudflare.com/privacypolicy/
- Cloudflare Web Analytics: https://www.cloudflare.com/web-analytics/ and https://developers.cloudflare.com/web-analytics/data-metrics/data-origin-and-collection/
- Vercel privacy notice: https://vercel.com/legal/privacy-policy
- Google Fonts privacy FAQ: https://developers.google.com/fonts/faq/privacy (redirects to https://fonts.google.com/faq#privacy; read via search summary)
- Genesys Marketing: https://genesysmarketing.com.au (unreachable from this environment); Travel Daily item on Genesys Creative Systems https://traveldaily.com.au/?p=372360 (paywalled, undated)

Repo files read: `src/pages/privacy.astro`, `src/data/site.json`, `src/data/top-bar.json`, `src/components/EnquiryForm.astro`, `NewsletterDialog.astro`, `CalendlyEmbed.astro`, `src/scripts/site.js`, `src/layouts/BaseLayout.astro` (fonts only), `astro.config.mjs`, `docs/CONTENT-REGISTER.md`, `docs/INTEGRATIONS.md`, `docs/WORK-PLAN.md`.
