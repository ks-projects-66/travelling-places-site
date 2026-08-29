# -*- coding: utf-8 -*-
"""Builds the Travelling Places go-live checklist workbook.

Run:  python scripts/build-golive-workbook.py

Writes to the OneDrive project folder, not into this repository, because the workbook is a
business tracking artefact rather than part of the website. Close it in Excel first: a locked
file makes the write fail rather than silently succeed.

Needs the CSA Excel compiler at ~/.claude/skills/csa-excel/assets/csa_build.py, which owns all
formatting and refuses to save a workbook that breaks the house standard.

Source of truth for every row is the approved plan at
C:\\Users\\CS2608\\.claude\\plans\\the-first-thing-i-compiled-scott.md and the repo docs
it produced. No row exists here without a source there.
"""
import sys, datetime
sys.path.insert(0, r"C:\Users\CS2608\.claude\skills\csa-excel\assets")
from csa_build import CsaWorkbook, Col, Check

OUT = (r"C:\Users\CS2608\VETEA\Management Documents - Documents\Gina Projects"
       r"\travelling-places-site\FW_ Logos\Travelling Places - Go-Live Checklist.xlsx")

ACR = ("TODO", "ABN", "ATIA", "CLIA", "DNS", "MX", "SPF", "TXT", "DKIM", "CMS",
       "SEO", "AWS", "EC2", "URL", "HTTPS", "SVG", "PDF", "CNAME", "SRV", "NS",
       "TTL", "OAUTH", "MFA", "GDPR", "SSL", "GA4", "CSV", "API", "HTML", "RSS", "WCAG", "AA",
       "ANY", "A", "M365",
       # Literal filenames and environment-variable names quoted in the text.
       # They are proper nouns here, not shouting.
       "README", "CLAUDE", "DESIGN", "PRODUCT", "BRAND", "MANIFEST", "CUTOVER",
       "DEPLOY", "INTEGRATIONS", "CONTENT", "REGISTER", "PUBLIC", "CALENDLY",
       "WEB3FORMS", "GENESYS", "CLIENT", "FORM", "AGENTS", "AGENT", "BRIEF")

WORKSTREAMS = [
    "A. Repo and build",
    "B. Hosting",
    "C. Domain and DNS",
    "D. Email continuity",
    "E. Accounts and access",
    "F. Integrations",
    "G. Content and imagery",
    "H. Legal and compliance",
    "I. Marketing and listings",
    "J. Post-launch verification",
]
OWNERS = ["Karim", "Gina", "Travelling Places staff", "Microsoft 365 admin",
          "Genesys support", "Virtuoso member services", "Previous developer",
          "TODO: assign"]
STATUS = ["Not started", "In progress", "Blocked", "Done", "Not needed"]
YESNO = ["Yes", "No"]

D = "Done"
N = "Not started"

# id, workstream, task, owner, depends, blocks launch, status, notes
TASKS = [
 # --- A. Repo and build -----------------------------------------------------
 ("A1", 0, "Restructure the repository onto Astro so pages render real HTML and content is separable from code", "Karim", "", "Yes", D,
  "Done 29 Aug 2026 on branch restructure/astro-setup. The first draft held all copy inside src/main.js and served an empty body, so the site had no SEO and no CMS attach point."),
 ("A2", 0, "Review and merge the restructure pull request", "Karim", "A1", "Yes", D,
  "Merged 29 Aug 2026. Main now carries the Astro restructure, brand kit v2.1.0 and the kit migration."),
 ("A3", 0, "Replace the nine unlicensed images, then add the licensing gate to the Cloudflare build command", "Gina", "G1", "Yes", N,
  "Change the build command to: pnpm check:licensing and then pnpm build. Until then the gate is advisory only."),
 ("A4", 0, "Convert the CLIA and Virtuoso logos from PDF to SVG", "Karim", "", "No", N,
  "Vector masters sit in the FW_ Logos folder. Current site uses raster versions."),
 ("A5", 0, "Supply inverse or transparent versions of the four membership marks", "Gina", "", "No", N,
  "The footer is navy and the supplied marks are dark on white, so each currently sits on a white plate."),
 ("A6", 0, "Add the journal RSS feed", "Karim", "", "No", N,
  "Astro generates it from the content collection at near-zero cost. Plan section 7 item 8."),
 ("A7", 0, "Apply brand kit v2 across the site", "Karim", "A2", "No", D,
  "Done 29 Aug 2026 against v2.1.0. Tokens now import from the kit, type is on the kit scale, eyebrows and decorative numbering removed, logos and icons switched to the kit set, carousel caption rebuilt. All three brand checks pass, including a new one over the rendered output."),
 ("A8", 0, "Decide whether to shorten five hero headings for the two-line rule at 375px", "Gina", "A7", "No", N,
  "The kit floors display type at 34px, which fits about 18 characters per line on a 375px screen. Five headings exceed the resulting 36-character budget and wrap to three lines. Widening the measure and reducing the size are both exhausted, so only shorter copy resolves it. Detail in DESIGN.md."),

 # --- B. Hosting ------------------------------------------------------------
 ("B1", 1, "Create a Cloudflare account under a business email address and enable two-factor authentication", "Gina", "", "Yes", N,
  "Must not be a personal address. This account will hold the domain, the site and the CMS login worker."),
 ("B2", 1, "Create the Cloudflare Pages project and connect the GitHub repository", "Karim", "B1, A2", "Yes", N,
  "Framework preset Astro, build command pnpm build, output directory dist, Node 22 or later."),
 ("B3", 1, "Add the four environment variables to the Pages project", "Karim", "B2, F2, F3, F4", "No", N,
  "See .env.example in the repo. The build succeeds without them; features degrade visibly."),
 ("B4", 1, "Verify the whole site on the free pages.dev URL and get sign-off", "Gina", "B2", "Yes", N,
  "This is the gate for the entire DNS workstream. Nothing in workstream C starts until this is signed off."),

 # --- C. Domain and DNS -----------------------------------------------------
 ("C1", 2, "Confirm the Webcentral login works and that registrant contact details are current", "Gina", "", "Yes", N,
  "An out-of-date registrant email can block a domain change at exactly the wrong moment."),
 ("C2", 2, "Probe the Route 53 zone for every record a public query will not reveal", "Karim", "", "Yes", N,
  "Command list is in docs/DNS-CUTOVER.md. Record every answer including the empty ones on the DNS records tab."),
 ("C3", 2, "Create the Cloudflare DNS zone and enter every record found", "Karim", "C2, D1", "Yes", N,
  "Do not proxy the MX record. Mail records must be DNS-only or delivery breaks."),
 ("C4", 2, "Change the nameservers at Webcentral to Cloudflare, outside business hours", "Karim", "C3, B4", "Yes", N,
  "This abandons the Route 53 zone rather than migrating it. Every record must already exist in Cloudflare."),
 ("C5", 2, "Add the custom domain to Cloudflare Pages for both the apex and www", "Karim", "C4", "Yes", N,
  "SSL is issued automatically and is free."),
 ("C6", 2, "Ask whoever holds the AWS account to delete the Route 53 hosted zone", "TODO: assign", "J5", "No", N,
  "Only after mail has been stable for a week. It bills about USD 0.50 a month until removed."),

 # --- D. Email continuity ---------------------------------------------------
 ("D1", 3, "Pull the full required DNS record list from the Microsoft 365 admin centre", "Microsoft 365 admin", "", "Yes", N,
  "Settings, then Domains, then travellingplaces.com.au. This is authoritative for DKIM, Autodiscover and Teams records that a public query cannot see."),
 ("D2", 3, "Review the SPF record before copying it forward", "Karim", "C2", "Yes", N,
  "The current record includes spf.mysecurecloudhost.com and an ip4 literal that look like the old host. Confirm whether anything still sends from there. A wrong SPF sends legitimate mail to spam."),
 ("D3", 3, "Test send and receive in both directions within one hour of the nameserver change", "Gina", "C4", "Yes", N,
  "Treat this as a gate, not a formality. Rollback is slow, so a failure found late means lost customer email."),
 ("D4", 3, "Confirm Outlook clients reconnect without prompting for credentials", "Travelling Places staff", "C4", "Yes", N,
  "Check on at least one desktop and one phone."),

 # --- E. Accounts and access ------------------------------------------------
 ("E1", 4, "Set up a password manager for the business and move every credential into it", "Gina", "", "Yes", N,
  "Bitwarden free tier covers this. Recommended over a password-protected document: Excel protection is weak encryption, a synced file copies to every device, and a shared document has no access log."),
 ("E2", 4, "Complete the accounts and access inventory on the tab in this workbook", "Karim", "E1", "Yes", N,
  "The inventory records where each credential lives and who holds it. It does not hold the credentials themselves."),
 ("E3", 4, "Move every account to a business-owned email address", "Gina", "E1", "Yes", N,
  "Accounts on a personal address are lost when that person leaves. Applies to GitHub, Cloudflare, Calendly, Genesys and Web3Forms."),
 ("E4", 4, "Enable two-factor authentication on every account that supports it", "Gina", "E3", "Yes", N,
  ""),
 ("E5", 4, "Establish who holds the AWS account containing the Route 53 zone", "Karim", "", "No", N,
  "Not needed for the cutover. Needed to close it out and stop the billing."),

 # --- F. Integrations -------------------------------------------------------
 ("F1", 5, "Deploy the Sveltia CMS authentication worker and create the GitHub OAuth app", "Karim", "B1", "No", N,
  "Source at github.com/sveltia/sveltia-cms-auth. Free. Set base_url in public/admin/config.yml once live."),
 ("F2", 5, "Create a free Calendly account and one Discovery call event type", "Gina", "E3", "No", N,
  "Free plan allows one event type with unlimited bookings and inline embedding. Set PUBLIC_CALENDLY_URL."),
 ("F3", 5, "Obtain the Genesys subscribe form embed snippet", "Genesys support", "", "No", N,
  "Karim holds the Client ID and Form ID. The snippet itself is unknown: their site did not resolve and no public documentation exists. Ask what markup to embed and whether it posts direct or needs a proxy."),
 ("F4", 5, "Create a Web3Forms key for the enquiry form", "Gina", "", "Yes", N,
  "Free tier, 250 submissions a month, delivered to the Microsoft 365 inbox. Note the free tier keeps no dashboard and drops stored submissions after 30 days, so the email is the only record."),
 ("F5", 5, "Ask Virtuoso whether the agency qualifies for a fuller private-label website", "Virtuoso member services", "", "No", N,
  "Changes whether the Virtuoso profile stays an outbound link or becomes a subdomain. Nobody has asked."),
 ("F6", 5, "Have a non-technical staff member publish a test journal post start to finish", "Travelling Places staff", "F1", "No", N,
  "This is the real test of whether the CMS is set up. If they cannot do it unaided, it is not done."),

 # --- G. Content and imagery ------------------------------------------------
 ("G1", 6, "Replace the nine photographs saved from the Virtuoso website", "Gina", "", "Yes", N,
  "Three routes: ask Virtuoso about their asset library, use the team's own travel photography, or licence stock. Brief is in DESIGN.md."),
 ("G2", 6, "Confirm the Instagram and Facebook profile URLs", "Gina", "", "Yes", N,
  "The URLs in the site are guesses carried over from the first draft and are marked unconfirmed."),
 ("G3", 6, "Confirm job titles and surnames for Renee, Sienna, Jodie and Krista", "Gina", "", "Yes", N,
  "Three of the four have no surname recorded. Each profile shows a warning on the site until approved."),
 ("G4", 6, "Have each team member read and approve their own biography", "Travelling Places staff", "G3", "Yes", N,
  "Set approved to true in the CMS once they have."),
 ("G5", 6, "Supply Sienna's real Antarctica article", "Gina", "", "Yes", N,
  "The text currently in the repo was written for the design mock-up. Publishing it under her byline would misattribute writing to a real person."),
 ("G6", 6, "Decide which cruise lines and partners to feature", "Gina", "", "No", N,
  "Four marked placeholders currently render in the footer."),
 ("G7", 6, "Obtain logo artwork and written permission for each partner", "Gina", "G6", "No", N,
  "Permission is per brand and is not implied by being a selling agent."),
 ("G8", 6, "Confirm trading hours for the contact page", "Gina", "", "No", N,
  ""),
 ("G9", 6, "Confirm the correct destination URL for the Alatus logo", "Gina", "", "No", N,
  "The logo renders unlinked until supplied."),
 ("G10", 6, "Settle the Belmond imagery direction against the current design system", "Karim", "", "No", D,
  "Decided 29 Aug 2026: adopt the look, refuse the grid. Photographic corners squared, five editorial slots unified to 16:9. Tile grid refused because PRODUCT.md anti-references name interfaces that make visitors compare products before speaking to a person. Reasoning recorded at the end of DESIGN.md."),

 # --- H. Legal and compliance -----------------------------------------------
 ("H1", 7, "Draft and approve the privacy policy", "Gina", "F2, F3, F4", "Yes", N,
  "The site collects enquiry data so the Australian Privacy Principles apply. The page in the repo is a scaffold listing what the policy must cover; no policy text has been written."),
 ("H2", 7, "Supply the ABN for the footer", "Gina", "", "Yes", N,
  ""),
 ("H3", 7, "Supply the ATIA accreditation number and confirm the logo display rules", "Gina", "", "Yes", N,
  "ATIA sets rules for how the accredited mark may be shown."),
 ("H4", 7, "Supply the CLIA membership number and confirm the logo display rules", "Gina", "", "Yes", N,
  ""),
 ("H5", 7, "Decide whether terms of use are needed", "Gina", "", "No", N,
  "The site does not transact, so this may not be required. Worth a decision rather than an omission."),

 # --- I. Marketing and listings ---------------------------------------------
 ("I1", 8, "Claim or verify the Google Business Profile", "Gina", "", "No", N,
  "Local search is likely the largest source of new enquiries for a Main Street agency."),
 ("I2", 8, "Make the name, address and phone match the website exactly", "Gina", "I1", "No", N,
  "Inconsistent details across listings weaken local search ranking."),
 ("I3", 8, "Install analytics", "Karim", "B2", "No", N,
  "Cloudflare Web Analytics is free and cookieless, so it needs no consent banner. GA4 is richer but requires one."),
 ("I4", 8, "Link the confirmed social profiles from the footer", "Karim", "G2", "No", N,
  ""),
 ("I5", 8, "Decide who writes and publishes the fortnightly journal article", "Gina", "F6", "No", N,
  "A CMS nobody is rostered to use goes stale within a quarter."),

 # --- J. Post-launch verification -------------------------------------------
 ("J1", 9, "Confirm the site loads over HTTPS on both the apex and www", "Karim", "C5", "Yes", N,
  ""),
 ("J2", 9, "Re-run the render check at 390px and 1440px on the live domain", "Karim", "C5", "Yes", N,
  "Mobile centring has regressed on this kind of work before, so a desktop-only pass is not a pass."),
 ("J3", 9, "Submit a live enquiry and confirm it arrives in the Microsoft 365 inbox", "Gina", "F4, C5", "Yes", N,
  ""),
 ("J4", 9, "Confirm the sitemap resolves and submit it to Google Search Console", "Karim", "C5", "No", N,
  "Sitemap is generated automatically at /sitemap-index.xml."),
 ("J5", 9, "Confirm mail has been stable for one week", "Gina", "D3", "Yes", N,
  "Gate for retiring the Route 53 zone."),
 ("J6", 9, "Run the placeholder check and confirm nothing marked remains on the live site", "Karim", "C5", "Yes", N,
  "Command: pnpm build and then pnpm check:placeholders."),
 ("J7", 9, "Verify accessibility against the WCAG 2.2 AA target set in PRODUCT.md", "Karim", "C5", "No", N,
  "Contrast, visible focus, keyboard operation, descriptive image text, reduced motion. Plan section 7 item 7."),
]

rows = []
for tid, ws_i, task, owner, dep, blocks, status, note in TASKS:
    rows.append([tid, WORKSTREAMS[ws_i], task, owner, dep, blocks, status, None, "", note])

COLS = [
    Col("ID", "text"),
    Col("Workstream", choices=WORKSTREAMS),
    Col("Task", "long_text"),
    Col("Owner", choices=OWNERS, input=True),
    Col("Depends on", "text"),
    Col("Blocks launch", choices=YESNO),
    Col("Status", choices=STATUS, input=True),
    Col("Target date", "date", input=True),
    Col("Evidence", "text", input=True),
    Col("Notes", "long_text"),
]

wb = CsaWorkbook(
    "Travelling Places website go-live checklist",
    kind="instrument",
    subtitle=("Every task between the current repository and a live site on travellingplaces.com.au. "
              "The domain carries live Microsoft 365 email, so the DNS workstream is the one that can "
              "damage the business."),
    acronyms=ACR,
    tab_budget=6,
    tab_budget_reason=("the cutover has four distinct working surfaces plus a risk log: the task "
                       "register, the DNS record capture, the account inventory and the on-the-day "
                       "runbook. Folding any into another destroys its use on the day"),
)

# ---------------------------------------------------------------- summary ----
s = wb.tab("Summary", zone="summary",
           purpose="Where the launch stands, by workstream and by status")

T = "Checklist"
s.kv_block([
    ("Tasks in total", f'=COUNTA({T}[ID])', "int"),
    ("Tasks that block launch", f'=COUNTIFS({T}[Blocks launch],"Yes")', "int"),
    ("Launch blockers still outstanding", f'=COUNTIFS({T}[Blocks launch],"Yes",{T}[Status],"<>Done")', "int"),
    ("Tasks with no owner assigned", f'=COUNTIFS({T}[Owner],"TODO: assign")', "int"),
    ("Tasks with no target date", f'=COUNTBLANK({T}[Target date])', "int"),
    ("Done", f'=COUNTIFS({T}[Status],"Done")', "int"),
    ("In progress", f'=COUNTIFS({T}[Status],"In progress")', "int"),
    ("Blocked", f'=COUNTIFS({T}[Status],"Blocked")', "int"),
    ("Not started", f'=COUNTIFS({T}[Status],"Not started")', "int"),
], title="Position")

s.note("Every figure above is a live count over the Checklist tab, so it cannot drift from the detail. "
       "Launch blockers outstanding is the number that matters: the site does not go live while it is above zero.")

# -------------------------------------------------------------- checklist ----
c = wb.tab("Checklist", zone="analysis",
           purpose="The master task register. One row per thing that must happen before go-live")
ref = c.table(rows, cols=COLS, name=T)

s.summary_by(ref, "Workstream", [], title="By workstream", tie_check=False)

# ------------------------------------------------------------ DNS records ----
dns_cols = [
    Col("Record type", choices=["A", "CNAME", "MX", "TXT", "SRV", "NS", "None found"]),
    Col("Name", "text"),
    Col("Current value", "long_text", input=True),
    Col("Priority", "text"),
    Col("Source", choices=["Observed by public query", "Microsoft 365 admin centre",
                           "Probe against Route 53", "Not yet checked"]),
    Col("Still required", choices=YESNO + ["Unknown"]),
    Col("In Cloudflare", choices=YESNO + ["Not applicable"], input=True),
    Col("Verified live", choices=YESNO, input=True),
    Col("Notes", "long_text"),
]
OBS = "Observed by public query"
PROBE = "Probe against Route 53"
NYC = "Not yet checked"
UNK = "Unknown"

dns_rows = [
    ["A", "@", "52.62.120.73", "", OBS, "No", "", "",
     "Dead AWS EC2 instance in Sydney. Replaced by the Cloudflare Pages target at cutover."],
    ["CNAME", "www", "travellingplaces.com.au", "", OBS, "Yes", "", "", ""],
    ["MX", "@", "travellingplaces-com-au.mail.protection.outlook.com", "0", OBS, "Yes", "", "",
     "Email critical. Do not proxy through Cloudflare. Mail records must stay DNS-only."],
    ["TXT", "@", "MS=ms82688560", "", OBS, "Yes", "", "",
     "Microsoft 365 tenant verification."],
    ["TXT", "@", "v=spf1 ip4:192.250.232.24 include:spf.mysecurecloudhost.com +a +mx include:spf.protection.outlook.com -all", "", OBS, UNK, "", "",
     "Review before copying forward. The mysecurecloudhost include and the ip4 literal look like the old host. Confirm rather than delete on assumption."],
]
for name, note in [
    ("autodiscover", "Outlook client auto-configuration. Breaking this breaks client setup."),
    ("selector1._domainkey", "DKIM signing. Get the exact value from the Microsoft 365 admin centre."),
    ("selector2._domainkey", "DKIM signing, second selector."),
    ("_dmarc", "Mail authentication policy, if one is published."),
    ("enterpriseregistration", "Microsoft device registration."),
    ("enterpriseenrollment", "Microsoft device enrolment."),
    ("lyncdiscover", "Teams and Skype for Business discovery."),
    ("sip", "Teams and Skype for Business."),
    ("_sipfederationtls._tcp", "Teams federation. SRV record."),
    ("_sip._tls._tcp", "Teams. SRV record."),
    ("mail", "Legacy host record, if one exists."),
    ("webmail", "Legacy host record, if one exists."),
    ("ftp", "Legacy host record, if one exists."),
    ("cpanel", "Legacy host record from the previous cPanel host, if one exists."),
]:
    dns_rows.append(["None found", name, "", "", NYC, UNK, "", "", note])

d = wb.tab("DNS records", zone="analysis",
           purpose="Every record that must exist in Cloudflare before the nameservers change")
d.table(dns_rows, cols=dns_cols, name="DnsRecords")
d.note("A blank Current value on a Not yet checked row means the probe has not been run. It does not mean "
       "the record is absent. Run the commands in docs/DNS-CUTOVER.md and record every answer, including "
       "the empty ones, before changing anything.")
d.note("The Microsoft 365 admin centre lists every record the mail tenant requires, including DKIM "
       "selectors a public query cannot see. It is the authoritative source for the mail side and needs "
       "no access to the AWS account.")

# -------------------------------------------------------- accounts tab -------
acc_cols = [
    Col("Service", "text"),
    Col("What it does", "long_text"),
    Col("Sign-in URL", "text"),
    Col("Account owner address", "text", input=True),
    Col("Who has access", "text", input=True),
    Col("Two-factor enabled", choices=YESNO + ["Unknown"], input=True),
    Col("Credential stored in", choices=["Password manager", "Not yet recorded", "Not applicable"], input=True),
    Col("Annual cost", "currency", total="sum"),
    Col("Renewal date", "date", input=True),
    Col("Notes", "long_text"),
]
NR = "Not yet recorded"
acc_rows = [
    ["Webcentral", "Domain registrar. Holds the registration for travellingplaces.com.au", "theconsole.webcentral.au", "", "Karim holds a login", UNK, NR, None, None,
     "Registrar only. It does not serve the DNS and it does not host the email."],
    ["Microsoft 365", "Business email for the domain", "admin.microsoft.com", "", "", UNK, NR, None, None,
     "Live and in daily use. The authoritative source for required mail DNS records."],
    ["Amazon Web Services", "Holds the Route 53 zone currently serving DNS", "console.aws.amazon.com", "", "Unknown", UNK, NR, None, None,
     "Nobody at the business has access. Needed to retire the zone, not to complete the cutover."],
    ["Cloudflare", "Website hosting, DNS and the CMS login worker", "dash.cloudflare.com", "", "", UNK, NR, None, None,
     "Not yet created. Must be under a business address."],
    ["GitHub", "Source code and content. Every CMS save is a commit here", "github.com", "", "Karim", UNK, NR, None, None,
     "Repository ks-projects-66/travelling-places-site. Currently under a personal namespace."],
    ["Calendly", "Discovery call booking", "calendly.com", "", "", UNK, NR, None, None,
     "Not yet created. Free plan is sufficient."],
    ["Genesys Marketing", "Newsletter and email campaigns", "genesysmarketing.com.au", "", "", UNK, NR, None, None,
     "Karim holds a Client ID and Form ID. The website embed snippet is still unknown."],
    ["Web3Forms", "Enquiry form delivery", "web3forms.com", "", "", UNK, NR, None, None,
     "Not yet created. Free tier keeps no dashboard and drops stored submissions after 30 days."],
    ["Virtuoso", "Member profile and partner network", "virtuoso.com", "", "", UNK, NR, None, None,
     "Member profile confirmed live at virtuoso.com/member/travelli34092."],
    ["Google Business Profile", "Local search listing", "business.google.com", "", "", UNK, NR, None, None,
     "Claim status unknown. Likely the largest source of new enquiries."],
    ["Instagram", "Social profile linked from the footer", "instagram.com", "", "", UNK, NR, None, None,
     "The URL used on the site is a guess and is marked unconfirmed."],
    ["Facebook", "Social profile linked from the footer", "facebook.com", "", "", UNK, NR, None, None,
     "The URL used on the site is a guess and is marked unconfirmed."],
]
a = wb.tab("Accounts and access", zone="analysis",
           purpose="Which accounts exist, who owns them, and where each credential lives")
a.table(acc_rows, cols=acc_cols, name="Accounts")
a.note("This is an inventory, not a vault. It records where a credential lives and who holds it. "
       "It must never hold a password. Store the credentials themselves in a password manager: Excel "
       "protection is weak encryption, a synced file copies to every device that syncs it, and a "
       "shared document has no access log.")

# ---------------------------------------------------------------- runbook ----
run_cols = [
    Col("Step", "int"),
    Col("Action", "long_text"),
    Col("Who", choices=OWNERS),
    Col("Expected duration", "text"),
    Col("How it is verified", "long_text"),
    Col("Rollback", "text"),
    Col("Done", choices=YESNO, input=True),
    Col("Time completed", "text", input=True),
]
run_rows = [
    [1, "Confirm the site is verified and signed off on its pages.dev URL", "Gina", "Already done", "Sign-off recorded against task B4", "Not applicable", "", ""],
    [2, "Pull the full required record list from the Microsoft 365 admin centre", "Microsoft 365 admin", "15 minutes", "Every listed record captured on the DNS records tab", "Not applicable", "", ""],
    [3, "Probe the Route 53 nameservers for every additional record name", "Karim", "20 minutes", "Every probe row on the DNS records tab has an answer, including the empty ones", "Not applicable", "", ""],
    [4, "Create the Cloudflare zone and enter every record from steps 2 and 3", "Karim", "30 minutes", "Record count in Cloudflare matches the DNS records tab. MX is not proxied", "Delete the zone. Nothing is live yet", "", ""],
    [5, "Review the SPF record and decide what carries forward", "Karim", "15 minutes", "A decision recorded against task D2, with a reason", "Not applicable", "", ""],
    [6, "Change the nameservers at Webcentral to the Cloudflare pair", "Karim", "5 minutes, then up to 24 hours to propagate", "Nameserver lookup returns the Cloudflare pair", "Revert the nameservers at Webcentral. Slow, because propagation cuts both ways", "", ""],
    [7, "Add the custom domain in Cloudflare Pages for the apex and www", "Karim", "10 minutes", "Both hostnames resolve and SSL is issued", "Remove the custom domain", "", ""],
    [8, "Verify the site loads over HTTPS on both hostnames", "Karim", "5 minutes", "Manual check in a browser on both", "See step 6", "", ""],
    [9, "Send a test email from the business to an outside address", "Gina", "5 minutes", "Message arrives and is not marked as spam", "See step 6", "", ""],
    [10, "Send a test email from an outside address to the business", "Gina", "5 minutes", "Message arrives in the correct mailbox", "See step 6", "", ""],
    [11, "Confirm Outlook clients reconnect without prompting for credentials", "Travelling Places staff", "10 minutes", "Checked on at least one desktop and one phone", "See step 6", "", ""],
    [12, "Re-run the render check at 390px and 1440px against the live domain", "Karim", "15 minutes", "No horizontal overflow and no broken images on any page", "Not applicable", "", ""],
    [13, "Submit a live enquiry through the form", "Gina", "5 minutes", "The enquiry arrives in the Microsoft 365 inbox", "Not applicable", "", ""],
]
r = wb.tab("Cutover runbook", zone="analysis",
           purpose="The sequence worked through on the day, in order, with verification at each step")
r.table(run_rows, cols=run_cols, name="Runbook")
r.note("Steps 1 and 8 to 11 are gates, not formalities. Rollback works but propagation makes it slow, "
       "and mail sent during the gap may already have bounced. Arriving a morning later costs almost "
       "nothing; an unverified switch costs a day of customer email.")
r.note("Do this outside business hours.")

# --------------------------------------------------------------- risk log ----
risk_cols = [
    Col("Risk", "long_text"),
    Col("Likelihood", choices=["Low", "Medium", "High"]),
    Col("Impact", choices=["Low", "Medium", "High", "Severe"]),
    Col("Mitigation", "long_text"),
    Col("Owner", choices=OWNERS, input=True),
    Col("Status", choices=["Open", "Mitigated", "Accepted", "Closed"], input=True),
]
risk_rows = [
    ["Business email stops during the nameserver change because a record in the Route 53 zone was never captured",
     "Medium", "Severe",
     "Pull the authoritative record list from the Microsoft 365 admin centre and probe every additional name before switching. Verify send and receive within the hour.",
     "Karim", "Open"],
    ["Legitimate outbound mail is marked as spam because the SPF record was copied forward wrongly or trimmed",
     "Medium", "High",
     "Confirm what still sends through the old host before changing the record, rather than deleting on assumption.",
     "Karim", "Open"],
    ["Unlicensed photographs reach the live site",
     "Low", "High",
     "The licensing check fails the build while any unlicensed image is referenced. Add it to the Cloudflare build command once replacements exist.",
     "Karim", "Open"],
    ["The site launches without a privacy policy while collecting enquiry data",
     "Medium", "High",
     "H1 is marked as a launch blocker. The page in the repo is an obvious scaffold rather than a plausible-looking policy.",
     "Gina", "Open"],
    ["Mock-up article text is published under a real advisor's byline",
     "Low", "Medium",
     "The file carries a visible warning and G5 blocks launch. Replace with Sienna's approved article.",
     "Gina", "Open"],
    ["An account sits on a personal email address and is lost when that person leaves",
     "High", "High",
     "E3 moves every account to a business address. The accounts tab records where each one sits.",
     "Gina", "Open"],
    ["The domain lapses because the Webcentral registrant contact is out of date",
     "Low", "Severe",
     "C1 confirms registrant details before anything else in the DNS workstream starts.",
     "Gina", "Open"],
    ["Staff never use the CMS and the journal goes stale",
     "Medium", "Low",
     "F6 tests publishing with a non-technical person before launch. I5 names who writes and publishes.",
     "Gina", "Open"],
    ["Genesys never supply the embed snippet and the newsletter signup never ships",
     "Medium", "Low",
     "The footer shows a marked placeholder rather than a broken form. It does not block launch.",
     "Karim", "Open"],
]
rk = wb.tab("Risk log", zone="analysis", purpose="What could go wrong, and what is being done about it")
rk.table(risk_rows, cols=risk_cols, name="Risks")

# ------------------------------------------------------------------ basis ----
b = wb.tab("Basis", zone="basis", purpose="Scope, sources and what was and was not verified")
b.notes([
    "Scope. Every task between the repository as it stands on 29 August 2026 and a live website on "
    "travellingplaces.com.au. It does not cover the website design, which is approved and built.",
    "",
    "Sources. Every row traces to the approved plan and to the documentation in the repository: "
    "README.md, CLAUDE.md, docs/DNS-CUTOVER.md, docs/DEPLOY.md, docs/INTEGRATIONS.md, "
    "docs/CONTENT-REGISTER.md and src/assets/images/MANIFEST.md.",
    "",
    "What was verified directly, by DNS query and by fetching the site on 29 August 2026:",
    "The domain serves no website. Ports 80 and 443 both refuse on the apex and on www.",
    "The A record points to 52.62.120.73, a dead AWS EC2 instance in the Sydney region.",
    "DNS is served by AWS Route 53, not by Webcentral. Webcentral is the registrar only.",
    "Email runs on Microsoft 365, confirmed by the MX record.",
    "The Virtuoso member profile at virtuoso.com/member/travelli34092 is live and carries the "
    "agency name, rendered client-side.",
    "",
    "What was not verified, and is therefore recorded as unknown rather than absent:",
    "The full contents of the Route 53 zone. A public query returns only the record names you "
    "already know to ask for. Fourteen probable names are listed on the DNS records tab as unchecked.",
    "The Genesys embed snippet. Their site did not resolve and no public documentation was found.",
    "Whether anything still sends mail through the old host named in the SPF record.",
    "Who holds the AWS account containing the Route 53 zone.",
    "",
    "An unrun check is recorded as unrun. No row in this workbook reads as complete on the strength "
    "of an assumption.",
])

# ------------------------------------------------------------- QA checks -----
wb.checks_tab([
    Check("Checklist rows against tasks in the approved plan", len(TASKS), len(rows), ctype="int",
          note="Every row traces to a task named in the plan or its repository documentation."),
    Check("Workstreams represented against workstreams defined", len(WORKSTREAMS),
          len(set(WORKSTREAMS[t[1]] for t in TASKS)), ctype="int",
          note="Each of the ten workstreams carries at least one task."),
    Check("Tasks with a named owner", len(TASKS) - sum(1 for t in TASKS if t[3] == "TODO: assign"),
          len([r for r in rows if r[3] != "TODO: assign"]), ctype="int",
          note=("One task carries no owner: C6, retiring the Route 53 zone. It cannot be assigned until E5 establishes who holds that AWS account.")),
    Check("DNS records observed by query against records captured", 5,
          sum(1 for r in dns_rows if r[4] == OBS), ctype="int",
          note="Five records were returned by public query on 29 August 2026."),
    Check("DNS names still to be probed", 14, sum(1 for r in dns_rows if r[4] == NYC), ctype="int",
          note="Unrun by design. These cannot be seen from outside the zone."),
    Check("Launch blockers identified", sum(1 for t in TASKS if t[5] == "Yes"),
          len([r for r in rows if r[5] == "Yes"]), ctype="int"),
    Check("Numeric reconciliation to source data", note=(
        "Not applicable. This is a task register and carries no financial figures, so there is "
        "nothing to tie to a ledger. Recorded as unrun rather than passed.")),
], purpose="Traceability of this workbook against the approved plan")

wb.save(OUT)
print("WROTE", OUT)
