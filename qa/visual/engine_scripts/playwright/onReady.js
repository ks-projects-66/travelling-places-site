/**
 * Runs after navigation, before capture.
 *
 * Order matters: scroll first so lazy images start, then wait for them while still at the bottom,
 * then kill animation, then wait for fonts. Scrolling back to the top before images resolve leaves
 * footer marks unloaded and produces a baseline of empty boxes.
 *
 * Nothing here masks content. Placeholders are real, tracked content and are captured as they are.
 */
module.exports = async (page, scenario) => {
  await page.evaluate(async () => {
    const step = Math.round(window.innerHeight * 0.8);
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 60));
    }
    window.scrollTo(0, document.body.scrollHeight);
  });

  await page
    .waitForFunction(() => [...document.images].every((i) => i.complete), null, { timeout: 20000 })
    .catch(() => {});

  await page.addStyleTag({
    content: `*, *::before, *::after {
      animation-duration: 0s !important;
      animation-delay: 0s !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0s !important;
      transition-delay: 0s !important;
      caret-color: transparent !important;
    }
    html { scroll-behavior: auto !important; }`,
  });

  // Pin the carousel to its first slide so a capture never lands mid-crossfade.
  await page.evaluate(() => {
    const slides = [...document.querySelectorAll('[data-slide]')];
    slides.forEach((s, i) => {
      s.classList.toggle('is-active', i === 0);
      s.setAttribute('aria-hidden', String(i !== 0));
    });
  });

  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise((r) => setTimeout(r, 250));
};
