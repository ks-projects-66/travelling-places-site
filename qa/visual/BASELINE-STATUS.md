# Visual baseline status

## AWAITING HUMAN VISUAL APPROVAL

**No person has looked at these images and agreed the design is correct.**

They were generated on 2026-08-30 on win32 and they record what the site
rendered that day. That is all they record. A first baseline cannot validate a design: it captures
whatever was there, defects included, and every later run is measured against it. If something was
wrong when these were taken, the suite now treats that wrongness as correct and stays silent.

## What is captured, and why not more

47 images, 11.7 MB.

- **Components at three viewports.** Header, navigation, both menu states, footer, both hero tones,
  carousel, journal cards, team cards, contact form, and buttons in normal, hover, focus, active and
  disabled states. This is where a pixel diff is precise and worth storing.
- **Each page above the fold at 390px only.** Mobile, because CLAUDE.md records mobile centring as a
  repeat regression on this kind of work.

Full-page captures across the viewport matrix were measured and rejected on cost: this site is
photography-led, so a full-document PNG runs 2.4MB at 1440 and 4.6MB at 2560, and the full set came
to roughly 130MB of committed binaries on a public repository, growing by that again on every
regeneration. Page-level geometry is covered instead by the responsive suite, which audits nine
routes across all nineteen viewports and stores no pixels at all.

## Two reasons these will go stale

- They capture **placeholder mode**. `PUBLIC_WEB3FORMS_KEY`, the Genesys pair and
  `PUBLIC_CALENDLY_URL` are unset, so the enquiry form, newsletter and Calendly render as
  placeholders. When those land the DOM changes and these references no longer apply.
- They were generated on Windows. CI generates its own on Ubuntu, which is canonical, because text
  rendering differs and a cross-platform comparison diffs on font hinting alone.

## To approve

    pnpm test:visual                 # writes qa/visual/report/index.html
    # open that report and look at every image
    node qa/visual/approve.mjs --i-have-reviewed-the-diffs

There is no script that approves without that flag, deliberately.

## Manifest

| Reference | Size | sha256 (first 16) |
|---|---:|---|
| `component-button-active_0_hero-actions_0_desktop-1440.png` | 56 KB | `78d6c39c694fc707` |
| `component-button-disabled_0_newsletter-form_0_desktop-1440.png` | 9 KB | `190c9a1cdedddd69` |
| `component-button-disabled_0_newsletter-form_1_ipad-portrait.png` | 9 KB | `c7ffa70542eb5bde` |
| `component-button-disabled_0_newsletter-form_2_mobile-390.png` | 9 KB | `1b1e162bf6fe25a0` |
| `component-button-focus_0_hero-actions_0_desktop-1440.png` | 56 KB | `78d6c39c694fc707` |
| `component-button-hover_0_hero-actions_0_desktop-1440.png` | 56 KB | `78d6c39c694fc707` |
| `component-button-normal_0_hero-actions_0_desktop-1440.png` | 56 KB | `78d6c39c694fc707` |
| `component-button-normal_0_hero-actions_1_ipad-portrait.png` | 26 KB | `3eb0b2b9365c00e9` |
| `component-button-normal_0_hero-actions_2_mobile-390.png` | 33 KB | `710783c407eceadd` |
| `component-carousel_0_data-carousel_0_desktop-1440.png` | 759 KB | `82e524e1269df2c9` |
| `component-carousel_0_data-carousel_1_ipad-portrait.png` | 300 KB | `9bb292a45ad16151` |
| `component-carousel_0_data-carousel_2_mobile-390.png` | 223 KB | `d678c2508a8f2463` |
| `component-contact-form_0_enquiry-form_0_desktop-1440.png` | 31 KB | `6e3193dcb90fbfbe` |
| `component-contact-form_0_enquiry-form_1_ipad-portrait.png` | 31 KB | `2bb3312f1c12eec1` |
| `component-contact-form_0_enquiry-form_2_mobile-390.png` | 31 KB | `25d4f4c3f660d8dc` |
| `component-footer_0_site-footer_0_desktop-1440.png` | 95 KB | `895b0d7d98145b9c` |
| `component-footer_0_site-footer_1_ipad-portrait.png` | 87 KB | `37610fb854178645` |
| `component-footer_0_site-footer_2_mobile-390.png` | 79 KB | `0152eab5a4ca73cf` |
| `component-header_0_data-header_0_desktop-1440.png` | 13 KB | `76482b16df390649` |
| `component-header_0_data-header_1_ipad-portrait.png` | 7 KB | `d5110d32dc08b583` |
| `component-header_0_data-header_2_mobile-390.png` | 5 KB | `4a6519213ecc6d72` |
| `component-hero-navy_0_page-hero_0_desktop-1440.png` | 33 KB | `3bb5de07b0555644` |
| `component-hero-navy_0_page-hero_1_ipad-portrait.png` | 22 KB | `6a75791afd657883` |
| `component-hero-navy_0_page-hero_2_mobile-390.png` | 21 KB | `a58157ab1d041fd5` |
| `component-hero-photo_0_page-hero_0_desktop-1440.png` | 1616 KB | `ef237ccd43d40d58` |
| `component-hero-photo_0_page-hero_1_ipad-portrait.png` | 858 KB | `7b96cbe76db4a6aa` |
| `component-hero-photo_0_page-hero_2_mobile-390.png` | 322 KB | `6098f40860005476` |
| `component-journal-cards_0_article-list_0_desktop-1440.png` | 762 KB | `ee38759be203c228` |
| `component-journal-cards_0_article-list_1_ipad-portrait.png` | 332 KB | `479800b2f47c3071` |
| `component-journal-cards_0_article-list_2_mobile-390.png` | 583 KB | `80c315ea00d51972` |
| `component-menu-closed_0_data-header_0_ipad-portrait.png` | 7 KB | `d5110d32dc08b583` |
| `component-menu-closed_0_data-header_1_mobile-390.png` | 5 KB | `4a6519213ecc6d72` |
| `component-menu-open_0_data-nav_0_ipad-portrait.png` | 2275 KB | `0b8c125ae88ba6c4` |
| `component-menu-open_0_data-nav_1_mobile-390.png` | 1170 KB | `fb6881c516ad8f09` |
| `component-nav-desktop_0_data-nav_0_desktop-1440.png` | 6 KB | `9b767b9b4faea971` |
| `component-team-cards_0_roster-list_0_desktop-1440.png` | 80 KB | `0a4ced1477bde7a7` |
| `component-team-cards_0_roster-list_1_ipad-portrait.png` | 82 KB | `6faf470a55816a3a` |
| `component-team-cards_0_roster-list_2_mobile-390.png` | 72 KB | `2c3682168a3816bc` |
| `page-404_0_viewport_0_mobile-390.png` | 46 KB | `8266614744f5f1d8` |
| `page-contact_0_viewport_0_mobile-390.png` | 191 KB | `766cde43e4e0dcbe` |
| `page-expertise_0_viewport_0_mobile-390.png` | 276 KB | `a172bb78bfc0652c` |
| `page-home_0_viewport_0_mobile-390.png` | 345 KB | `aec3dcbb03d1b533` |
| `page-journal-looking-south-to-antarctica_0_viewport_0_mobile-390.png` | 178 KB | `826dcb3db6dd4c7c` |
| `page-journal_0_viewport_0_mobile-390.png` | 117 KB | `d8ce4f102fe6872d` |
| `page-privacy_0_viewport_0_mobile-390.png` | 55 KB | `f15ad2ac32942a08` |
| `page-virtuoso_0_viewport_0_mobile-390.png` | 329 KB | `6e52c1d67b57f6b0` |
| `page-who-we-are_0_viewport_0_mobile-390.png` | 252 KB | `8e0ee7f7716362a7` |
