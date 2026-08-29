# Integrations

Four third-party services touch this site. Three of them handle customer data, so each is
described with what it costs, what it sees, and what is still outstanding.

None of these accounts have been created. Creating accounts in the business's name is the
owner's call, not a developer's.

## Virtuoso

**Status: confirmed and working.**

The agency holds a co-branded Virtuoso member profile at
`https://www.virtuoso.com/member/travelli34092`. The page renders its content client-side, so
fetching the HTML directly returns Virtuoso's generic markup. The agency name is present once
JavaScript runs, which is how it was verified.

It is linked from the footer and the Virtuoso page, opening in a new tab. It is deliberately not
iframed: Virtuoso set their own frame policy, and an embed would break without notice.

**Worth asking them.** Virtuoso run a website programme offering fuller private-label sites to
member agencies. Whether Travelling Places is entitled to one changes whether this stays an
outbound link or becomes a subdomain. Nobody has asked.

## Calendly

**Status: not set up. Renders a marked placeholder.**

Free plan: one active event type, unlimited bookings, inline embedding included. Styling control
is limited on free, which is acceptable for a single discovery-call booker.

To wire up:

1. Create a Calendly account under a business address, not a personal one.
2. Add one event type named "Discovery call". Fifteen minutes is the assumption in the copy.
3. Set `PUBLIC_CALENDLY_URL` in `.env` to the full scheduling URL.

The embed loads `assets.calendly.com/assets/external/widget.js` and passes
`hide_gdpr_banner=1`, which suppresses Calendly's own cookie notice. That makes naming Calendly
in the privacy policy a requirement rather than a nicety.

Cost: nil.

## Genesys Marketing

**Status: blocked. Renders a marked placeholder.**

Genesys Marketing (genesysmarketing.com.au) is an Australian email marketing platform built for
travel agencies. Karim holds a Client ID and a Form ID for the subscribe form.

What is missing is the embed snippet itself. Their site did not resolve during research and they
publish no public documentation for how those two values are used. Guessing at a form action URL
would produce a subscribe box that silently fails, which is worse than an honest placeholder.

**What to ask Genesys support:**

1. The exact HTML or JavaScript snippet for embedding the subscribe form on an external website.
2. Whether the Client ID and Form ID go in a form action, a script tag, or a data attribute.
3. Whether the form posts directly to them or needs a server-side proxy.
4. What their form does with the submitted address, for the privacy policy.

The alternative source is the previous website's page source, if anyone can retrieve it. The old
site is offline, so that would need a copy from the previous developer or the Wayback Machine.

Once known: set `PUBLIC_GENESYS_CLIENT_ID` and `PUBLIC_GENESYS_FORM_ID`, then replace the
placeholder branch in `src/components/NewsletterForm.astro`.

## Enquiry form

**Status: falls back to a mail draft until a key is set.**

Web3Forms is the chosen endpoint. Free tier, 250 submissions a month, no account required beyond
verifying the destination inbox. Submissions are delivered straight to the Microsoft 365 mailbox.

Two caveats that belong on the record:

- The free tier has no dashboard, and stored submissions are dropped after 30 days. The delivered
  email is the only durable record. If that is not good enough, the upgrade is a Cloudflare
  Worker calling Resend, whose free tier covers 3,000 emails a month.
- MailChannels withdrew free Cloudflare Workers access in June 2024, so the old "free email
  straight from a Worker" route no longer exists. Any Worker-based approach needs a mail
  provider behind it.

Without `PUBLIC_WEB3FORMS_KEY` the form opens a pre-filled mail draft, which is what the first
draft did. It is a working fallback, not a silent failure, and the page says so.

A honeypot field named `botcheck` is included and visually hidden. Web3Forms treats it as spam
protection.

## Analytics

**Status: not installed.**

Recommendation is Cloudflare Web Analytics: free, cookieless, and it avoids a consent banner
entirely. GA4 is the alternative if richer reporting matters more than the banner. Nothing has
been added, because that is a decision about tracking customers.
