# DNS cutover

**Read this before changing anything.** The website side is empty and low-risk. The email side is
live and high-risk.

## What is actually true

Verified by DNS query on 29 August 2026, not assumed:

| Fact | Detail |
|---|---|
| The domain serves no website | Ports 80 and 443 both refuse on the apex and on `www` |
| The A record points at a dead box | `52.62.120.73`, reverses to `ec2-52-62-120-73.ap-southeast-2.compute.amazonaws.com` |
| DNS is served by AWS Route 53 | `ns-370.awsdns-46.com`, `ns-693.awsdns-22.net`, `ns-1351.awsdns-40.org`, `ns-1861.awsdns-40.co.uk` |
| Webcentral is the registrar only | Nameservers are delegated away from it |
| Email is on Microsoft 365 | `MX` points to `travellingplaces-com-au.mail.protection.outlook.com` |
| Nobody has Route 53 access | Only the Webcentral registrar login is available |

A common assumption is that the email lives at Webcentral. It does not. That matters, because it
changes what can break and where the recovery lever is.

## The hazard

Changing nameservers at Webcentral does not migrate the Route 53 zone. It abandons it. Every
record in that zone stops resolving the moment the new nameservers take effect, including records
nobody has enumerated. If the Microsoft 365 records are not recreated first and exactly, mail
stops.

## Records observed from outside

This is what a public query returns. It is not the zone contents, and it is incomplete by
construction. Treat it as a starting point, never as the list.

| Type | Name | Value |
|---|---|---|
| A | `@` | `52.62.120.73` — dead, replace with the Cloudflare Pages target |
| CNAME | `www` | `travellingplaces.com.au` |
| MX | `@` | `travellingplaces-com-au.mail.protection.outlook.com`, priority 0 |
| TXT | `@` | `MS=ms82688560` |
| TXT | `@` | `v=spf1 ip4:192.250.232.24 include:spf.mysecurecloudhost.com +a +mx include:spf.protection.outlook.com -all` |

## Closing the gap

**The Microsoft 365 admin centre is authoritative for the mail records.** Settings, then Domains,
then `travellingplaces.com.au`. It lists every DNS record the tenant requires, including the DKIM
selectors, Autodiscover and Teams SRV records that a public query will not reveal. This removes
the guesswork from the mail side entirely, without needing Route 53 access.

For everything else, probe each name directly against the Route 53 nameservers before switching.
A blank answer is a recorded blank, not an unrun check:

```bash
NS=ns-370.awsdns-46.com
for n in autodiscover selector1._domainkey selector2._domainkey _dmarc \
         enterpriseregistration enterpriseenrollment lyncdiscover sip \
         mail webmail ftp cpanel; do
  echo "== $n"; nslookup -type=ANY "$n.travellingplaces.com.au" "$NS"
done
nslookup -type=SRV _sipfederationtls._tcp.travellingplaces.com.au "$NS"
nslookup -type=SRV _sip._tls._tcp.travellingplaces.com.au "$NS"
```

Record every answer in the DNS tab of the go-live workbook.

## Sequence

1. **Gate.** The site is verified and signed off on its `pages.dev` URL. Nothing below starts
   until that is true.
2. Pull the full required-record list from the Microsoft 365 admin centre.
3. Run the probes above. Record every answer, including the empty ones.
4. Create the zone in Cloudflare. Enter every record from steps 2 and 3. **Do not proxy the MX
   record.** Mail records must be DNS-only.
5. Review the SPF record before copying it forward. `include:spf.mysecurecloudhost.com` and the
   `ip4:192.250.232.24` literal look like the old cPanel host. They may be stale, or something may
   still send through them. Confirm which, rather than deleting on assumption. A wrong SPF sends
   legitimate mail to spam.
6. Change the nameservers at Webcentral to the Cloudflare pair. Do this outside business hours.
7. Add the custom domain in Cloudflare Pages for both the apex and `www`.
8. **Verify within the hour**, and treat this as a gate rather than a formality:
   - Site loads over HTTPS on both hostnames.
   - A test email sends from the business to an outside address.
   - A test email is received from an outside address.
   - Outlook clients reconnect without prompting for credentials.
9. After mail has been stable for a week, ask whoever holds the AWS account to delete the Route 53
   hosted zone. It bills around USD 0.50 a month until removed.

## Rollback

Revert the nameservers at Webcentral. It works, but propagation makes it slow, and mail sent
during the gap may already have bounced. That is why step 8 is a gate and step 1 is a gate. The
cost of arriving a morning later is close to zero. The cost of an unverified switch is a day of
lost customer email.

## Before the day

- Confirm who at the business can log into the Microsoft 365 admin centre.
- Confirm the Webcentral login works, and that registrant contact details are current. An expired
  registrant email can block a domain change at exactly the wrong moment.
- Find out who holds the AWS account. Not required for the cutover, but required to close it out.
