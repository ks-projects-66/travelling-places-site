# Component implementation

The visual reference is `index.html`. The reusable styles are in `styles/components.css`. Copy the matching partial from `components/`, then preserve its class names, semantic elements, labels, and states.

## Buttons

- `tp-button-primary`: white text on blue.
- `tp-button-secondary`: navy text and border on white.
- `tp-button-on-dark`: navy text on white.
- `tp-button-outline-on-dark`: white text and border on navy.
- Disabled controls use a white surface, muted ink, and a distinct ink border.

Do not place the secondary light-surface button on navy. Use an on-dark variant instead.

Text buttons use a 50px pill shape with 28px horizontal padding. Do not place icons inside ordinary text buttons.

## Navigation

The desktop navigation uses familiar text links and one primary action. The mobile menu opens below the header. Preserve `aria-expanded`, `aria-controls`, visible focus, and Escape-to-close behaviour.

## Footer

Use the dark lockup. Keep navigation, contact, and social destinations in distinct groups. Social icons have visible text labels.

## Enquiry form

Use explicit labels and field-level errors. Never rely on placeholder text as the only label. The supplied example is front-end validation only. Connect it to an approved form service or server endpoint before production use.

## Carousel

Use the supplied control arrangement and state attributes. Carousel images should be full width with a balanced height. Captions are white, sit over the supplied gradient, and remain within two lines. Do not place decorative numbers or labels over the image. The kit component autoplays at six seconds and is pausable. The website ships a reduced variant: three seconds, no visible control, relying on pointer, focus, hidden-tab and reduced-motion mitigations. That divergence is deliberate and its residual WCAG 2.2.2 gap is recorded in BRAND.md.

## Icons

Reference the local sprite:

```html
<svg aria-hidden="true">
  <use href="/brand-kit/assets/icons/ui-icons.svg#icon-pause"></use>
</svg>
```

The approved interface set is menu, close, chevron left, chevron right, play, pause, phone, email, and location. Instagram and Facebook are the only approved social icons. Icons belong in icon-only utility controls or next to contact and social labels, not inside text buttons.
