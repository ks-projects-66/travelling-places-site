# Visual baseline status

## AWAITING HUMAN VISUAL APPROVAL

**No person has looked at these images and said the design is correct.**

They were generated on 2026-08-30 on win32 and they record what the site rendered on that day. That is all they record. A first baseline
cannot validate a design: it captures whatever was there, defects included, and every later run
is measured against it. If something was wrong when these were taken, the suite will now treat
that wrongness as correct and stay silent about it.

Two known reasons not to trust them yet:

- They were taken **after** the brand kit v3 type-scale restore, so headings render at the v3
  sizes. They do not match the build Gina reviewed.
- They capture **placeholder mode**. PUBLIC_WEB3FORMS_KEY, the Genesys pair and
  PUBLIC_CALENDLY_URL are all unset, so the enquiry form, newsletter and Calendly render as
  placeholders. When those keys land the DOM changes and these references go stale.

They were generated on Windows. CI generates its own on Ubuntu, which is canonical, because text
rendering differs between the two and a cross-platform comparison diffs on font hinting alone.

## To approve

    pnpm test:visual                 # produces qa/visual/report/index.html
    # open that report and look at every image
    node qa/visual/approve.mjs --i-have-reviewed-the-diffs

There is no script that approves without that flag, on purpose.

## Manifest

92 images, 1650 KB total.

| Reference | Size | sha256 (first 16) |
|---|---:|---|
| `component-button-active_0_hero-actions_0_desktop-1440.png` | 18 KB | `a5bb737a97ad71eb` |
| `component-button-disabled_0_newsletter-form_0_desktop-1440.png` | 18 KB | `a5bb737a97ad71eb` |
| `component-button-disabled_0_newsletter-form_1_ipad-portrait.png` | 18 KB | `a5bb737a97ad71eb` |
| `component-button-disabled_0_newsletter-form_2_mobile-390.png` | 18 KB | `a5bb737a97ad71eb` |
| `component-button-focus_0_hero-actions_0_desktop-1440.png` | 18 KB | `a5bb737a97ad71eb` |
| `component-button-hover_0_hero-actions_0_desktop-1440.png` | 18 KB | `a5bb737a97ad71eb` |
| `component-button-normal_0_hero-actions_0_desktop-1440.png` | 18 KB | `a5bb737a97ad71eb` |
| `component-button-normal_0_hero-actions_1_ipad-portrait.png` | 18 KB | `a5bb737a97ad71eb` |
| `component-button-normal_0_hero-actions_2_mobile-390.png` | 18 KB | `a5bb737a97ad71eb` |
| `component-carousel_0_data-carousel_0_desktop-1440.png` | 18 KB | `a5bb737a97ad71eb` |
| `component-carousel_0_data-carousel_1_ipad-portrait.png` | 18 KB | `a5bb737a97ad71eb` |
| `component-carousel_0_data-carousel_2_mobile-390.png` | 18 KB | `a5bb737a97ad71eb` |
| `component-contact-form_0_enquiry-form_0_desktop-1440.png` | 18 KB | `a5bb737a97ad71eb` |
| `component-contact-form_0_enquiry-form_1_ipad-portrait.png` | 18 KB | `a5bb737a97ad71eb` |
| `component-contact-form_0_enquiry-form_2_mobile-390.png` | 18 KB | `a5bb737a97ad71eb` |
| `component-footer_0_site-footer_0_desktop-1440.png` | 18 KB | `a5bb737a97ad71eb` |
| `component-footer_0_site-footer_1_ipad-portrait.png` | 18 KB | `a5bb737a97ad71eb` |
| `component-footer_0_site-footer_2_mobile-390.png` | 18 KB | `a5bb737a97ad71eb` |
| `component-header_0_data-header_0_desktop-1440.png` | 18 KB | `a5bb737a97ad71eb` |
| `component-header_0_data-header_1_ipad-portrait.png` | 18 KB | `a5bb737a97ad71eb` |
| `component-header_0_data-header_2_mobile-390.png` | 18 KB | `a5bb737a97ad71eb` |
| `component-hero-navy_0_page-hero_0_desktop-1440.png` | 18 KB | `a5bb737a97ad71eb` |
| `component-hero-navy_0_page-hero_1_ipad-portrait.png` | 18 KB | `a5bb737a97ad71eb` |
| `component-hero-navy_0_page-hero_2_mobile-390.png` | 18 KB | `a5bb737a97ad71eb` |
| `component-hero-photo_0_page-hero_0_desktop-1440.png` | 18 KB | `a5bb737a97ad71eb` |
| `component-hero-photo_0_page-hero_1_ipad-portrait.png` | 18 KB | `a5bb737a97ad71eb` |
| `component-hero-photo_0_page-hero_2_mobile-390.png` | 18 KB | `a5bb737a97ad71eb` |
| `component-journal-cards_0_article-list_0_desktop-1440.png` | 18 KB | `a5bb737a97ad71eb` |
| `component-journal-cards_0_article-list_1_ipad-portrait.png` | 18 KB | `a5bb737a97ad71eb` |
| `component-journal-cards_0_article-list_2_mobile-390.png` | 18 KB | `a5bb737a97ad71eb` |
| `component-menu-closed_0_data-header_0_ipad-portrait.png` | 18 KB | `a5bb737a97ad71eb` |
| `component-menu-closed_0_data-header_1_mobile-390.png` | 18 KB | `a5bb737a97ad71eb` |
| `component-menu-open_0_data-nav_0_ipad-portrait.png` | 18 KB | `a5bb737a97ad71eb` |
| `component-menu-open_0_data-nav_1_mobile-390.png` | 18 KB | `a5bb737a97ad71eb` |
| `component-nav-desktop_0_data-nav_0_desktop-1440.png` | 18 KB | `a5bb737a97ad71eb` |
| `component-team-cards_0_roster-list_0_desktop-1440.png` | 18 KB | `a5bb737a97ad71eb` |
| `component-team-cards_0_roster-list_1_ipad-portrait.png` | 18 KB | `a5bb737a97ad71eb` |
| `component-team-cards_0_roster-list_2_mobile-390.png` | 18 KB | `a5bb737a97ad71eb` |
| `page-404_0__0_desktop-2560.png` | 18 KB | `a5bb737a97ad71eb` |
| `page-404_0__1_desktop-1440.png` | 18 KB | `a5bb737a97ad71eb` |
| `page-404_0__2_desktop-1366.png` | 18 KB | `a5bb737a97ad71eb` |
| `page-404_0__3_ipad-pro-portrait.png` | 18 KB | `a5bb737a97ad71eb` |
| `page-404_0__4_ipad-portrait.png` | 18 KB | `a5bb737a97ad71eb` |
| `page-404_0__5_mobile-390.png` | 18 KB | `a5bb737a97ad71eb` |
| `page-contact_0__0_desktop-2560.png` | 18 KB | `a5bb737a97ad71eb` |
| `page-contact_0__1_desktop-1440.png` | 18 KB | `a5bb737a97ad71eb` |
| `page-contact_0__2_desktop-1366.png` | 18 KB | `a5bb737a97ad71eb` |
| `page-contact_0__3_ipad-pro-portrait.png` | 18 KB | `a5bb737a97ad71eb` |
| `page-contact_0__4_ipad-portrait.png` | 18 KB | `a5bb737a97ad71eb` |
| `page-contact_0__5_mobile-390.png` | 18 KB | `a5bb737a97ad71eb` |
| `page-expertise_0__0_desktop-2560.png` | 18 KB | `a5bb737a97ad71eb` |
| `page-expertise_0__1_desktop-1440.png` | 18 KB | `a5bb737a97ad71eb` |
| `page-expertise_0__2_desktop-1366.png` | 18 KB | `a5bb737a97ad71eb` |
| `page-expertise_0__3_ipad-pro-portrait.png` | 18 KB | `a5bb737a97ad71eb` |
| `page-expertise_0__4_ipad-portrait.png` | 18 KB | `a5bb737a97ad71eb` |
| `page-expertise_0__5_mobile-390.png` | 18 KB | `a5bb737a97ad71eb` |
| `page-home_0__0_desktop-2560.png` | 18 KB | `a5bb737a97ad71eb` |
| `page-home_0__1_desktop-1440.png` | 18 KB | `a5bb737a97ad71eb` |
| `page-home_0__2_desktop-1366.png` | 18 KB | `a5bb737a97ad71eb` |
| `page-home_0__3_ipad-pro-portrait.png` | 18 KB | `a5bb737a97ad71eb` |
| `page-home_0__4_ipad-portrait.png` | 18 KB | `a5bb737a97ad71eb` |
| `page-home_0__5_mobile-390.png` | 18 KB | `a5bb737a97ad71eb` |
| `page-journal-looking-south-to-antarctica_0__0_desktop-2560.png` | 18 KB | `a5bb737a97ad71eb` |
| `page-journal-looking-south-to-antarctica_0__1_desktop-1440.png` | 18 KB | `a5bb737a97ad71eb` |
| `page-journal-looking-south-to-antarctica_0__2_desktop-1366.png` | 18 KB | `a5bb737a97ad71eb` |
| `page-journal-looking-south-to-antarctica_0__3_ipad-pro-portrait.png` | 18 KB | `a5bb737a97ad71eb` |
| `page-journal-looking-south-to-antarctica_0__4_ipad-portrait.png` | 18 KB | `a5bb737a97ad71eb` |
| `page-journal-looking-south-to-antarctica_0__5_mobile-390.png` | 18 KB | `a5bb737a97ad71eb` |
| `page-journal_0__0_desktop-2560.png` | 18 KB | `a5bb737a97ad71eb` |
| `page-journal_0__1_desktop-1440.png` | 18 KB | `a5bb737a97ad71eb` |
| `page-journal_0__2_desktop-1366.png` | 18 KB | `a5bb737a97ad71eb` |
| `page-journal_0__3_ipad-pro-portrait.png` | 18 KB | `a5bb737a97ad71eb` |
| `page-journal_0__4_ipad-portrait.png` | 18 KB | `a5bb737a97ad71eb` |
| `page-journal_0__5_mobile-390.png` | 18 KB | `a5bb737a97ad71eb` |
| `page-privacy_0__0_desktop-2560.png` | 18 KB | `a5bb737a97ad71eb` |
| `page-privacy_0__1_desktop-1440.png` | 18 KB | `a5bb737a97ad71eb` |
| `page-privacy_0__2_desktop-1366.png` | 18 KB | `a5bb737a97ad71eb` |
| `page-privacy_0__3_ipad-pro-portrait.png` | 18 KB | `a5bb737a97ad71eb` |
| `page-privacy_0__4_ipad-portrait.png` | 18 KB | `a5bb737a97ad71eb` |
| `page-privacy_0__5_mobile-390.png` | 18 KB | `a5bb737a97ad71eb` |
| `page-virtuoso_0__0_desktop-2560.png` | 18 KB | `a5bb737a97ad71eb` |
| `page-virtuoso_0__1_desktop-1440.png` | 18 KB | `a5bb737a97ad71eb` |
| `page-virtuoso_0__2_desktop-1366.png` | 18 KB | `a5bb737a97ad71eb` |
| `page-virtuoso_0__3_ipad-pro-portrait.png` | 18 KB | `a5bb737a97ad71eb` |
| `page-virtuoso_0__4_ipad-portrait.png` | 18 KB | `a5bb737a97ad71eb` |
| `page-virtuoso_0__5_mobile-390.png` | 18 KB | `a5bb737a97ad71eb` |
| `page-who-we-are_0__0_desktop-2560.png` | 18 KB | `a5bb737a97ad71eb` |
| `page-who-we-are_0__1_desktop-1440.png` | 18 KB | `a5bb737a97ad71eb` |
| `page-who-we-are_0__2_desktop-1366.png` | 18 KB | `a5bb737a97ad71eb` |
| `page-who-we-are_0__3_ipad-pro-portrait.png` | 18 KB | `a5bb737a97ad71eb` |
| `page-who-we-are_0__4_ipad-portrait.png` | 18 KB | `a5bb737a97ad71eb` |
| `page-who-we-are_0__5_mobile-390.png` | 18 KB | `a5bb737a97ad71eb` |
