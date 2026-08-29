# Deployment

Cloudflare Pages, free tier. Nothing here has been done, because every step creates an account
or a credential in the business's name.

Do all of it before touching DNS. `docs/DNS-CUTOVER.md` is the last step, not the first.

## 1. Cloudflare Pages

1. Create a Cloudflare account under a business address. Not a personal one. Enable two-factor
   authentication immediately.
2. Workers and Pages, then Create, then Pages, then Connect to Git. Authorise the
   `ks-projects-66/travelling-places-site` repository.
3. Build settings:

   | Setting | Value |
   |---|---|
   | Framework preset | Astro |
   | Build command | `pnpm build` |
   | Output directory | `dist` |
   | Node version | 22 or later |

4. Add the environment variables from `.env.example` under Settings, Environment variables. All
   four are still outstanding; the build succeeds without them.
5. Deploy. Verify on the `pages.dev` URL before going further.

Once replacement imagery exists, change the build command to
`pnpm check:licensing && pnpm build` so unlicensed images can never reach production.

### Limits worth knowing

- 25 MiB maximum per asset.
- 20,000 files per deployment on the free plan. The current build is nowhere near it, but
  Astro generates several derivatives per source image, so it grows faster than the image count
  suggests.
- 500 builds a month. A CMS save triggers a build, so heavy publishing days count.

Bandwidth is unlimited.

## 2. Content management

Sveltia CMS is git-backed: staff edit at `/admin/`, and every save is a commit that triggers a
rebuild. It needs a GitHub OAuth app and a small Cloudflare Worker to complete the login. Both
are free.

1. Deploy the auth worker. Source: `github.com/sveltia/sveltia-cms-auth`. It is not offered as a
   hosted service, so it has to be deployed to the business's own Cloudflare account.
2. Create a GitHub OAuth app at Settings, Developer settings, OAuth Apps:
   - Homepage URL: the site's address.
   - Authorization callback URL: the worker's address plus `/callback`.
3. Put the OAuth app's client ID and secret into the worker's environment variables as
   `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET`. Set `ALLOWED_DOMAINS` to the site's hostname so
   the worker cannot be used to authenticate anything else.
4. Set `base_url` in `public/admin/config.yml` to the worker's address. It is currently
   `https://TODO-auth-worker.workers.dev`.
5. Give each staff member who will publish a GitHub account with write access to the repository.

### The real test

Have someone non-technical publish a journal post start to finish without help. If they cannot,
the CMS has not been set up, whatever the configuration says.

### What staff can and cannot edit

Editable: journal articles, team profiles, service descriptions, and the site settings block
covering contact details, socials and business identifiers.

Not editable: page structure, styling, navigation, membership logos and partner logos. Those
carry licensing and brand-compliance rules that a CMS upload box cannot enforce. Image uploads
from the CMS land in the journal folder only.

## 3. Custom domain

Only after the `pages.dev` site is verified and signed off. Follow `docs/DNS-CUTOVER.md`, which
covers the part that can break the business's email.

## 4. What this costs

| Item | Cost |
|---|---|
| Cloudflare Pages | Nil |
| Cloudflare DNS | Nil |
| Sveltia CMS | Nil |
| Auth worker | Nil, within the free Workers allowance |
| Calendly, free plan | Nil |
| Web3Forms, free plan | Nil |
| Domain registration at Webcentral | Existing annual cost |
| Microsoft 365 | Existing subscription, unchanged |

No separate web hosting is needed. The old AWS EC2 instance the domain still points at is dead
and should be retired by whoever owns that AWS account.
