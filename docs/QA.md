# Travelling Places website — QA record

## Coverage

- Pages: Home, Expertise, Virtuoso, Who We Are, Journal, Article, Contact
- Viewports: 390 × 844, 768 × 1024, and desktop
- Browsers: Chromium via the in-app browser
- Build: Vite production build

## Checks passed

- All seven HTML entry points build successfully.
- No horizontal overflow at phone, tablet, or desktop widths.
- Global navigation has a visible current-page state.
- Mobile menu opens, locks page scrolling, and reports its expanded state.
- Carousel advances automatically, supports dots/previous/next, and has a working pause control.
- Carousel autoplay is disabled when reduced motion is preferred.
- Journal year filters show the correct archive entries.
- Contact form labels, required states, blur validation, error messaging, and focus handling work.
- Images include useful alternative text; decorative imagery is hidden from assistive technology.
- Heading order, skip link, landmarks, focus styles, and minimum mobile target sizing were reviewed.
- All supplied partner logos and the supplied Travelling Places photography resolve locally.

## Content confirmation before launch

- Confirm the official Instagram and Facebook profile URLs. The draft keeps both URLs together at the top of `src/main.js` for a one-line update.
- Confirm Renee, Sienna, Jodie, and Krista’s preferred job titles and final bios.
- Replace the sample article body with the approved original article text.
- Connect the enquiry form to the preferred production form service; this draft prepares a reviewable email in the visitor’s mail app.

## Image sources

The carousel and editorial destination images were saved from pages on Virtuoso, as requested, and are used locally for this private first draft.
