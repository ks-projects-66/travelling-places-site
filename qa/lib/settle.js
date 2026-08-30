/**
 * Bring a page to a state where measurements mean something.
 *
 * Three things make a naive audit lie on this site:
 *
 *  - Images below the fold are loading="lazy" and never load at all until scrolled into view,
 *    so an audit run at the top of the page reports them as broken.
 *  - site.js is a module script and therefore deferred. There is a window after paint where the
 *    menu toggle and carousel are inert. Slide 0 gaining an explicit aria-hidden="false" is the
 *    only signal the script has run, because the server-rendered markup omits the attribute.
 *  - Webfonts arrive after first paint, so text metrics taken too early are fallback metrics.
 */

export async function settlePage(page) {
  // Walk the full height so every lazy image enters the viewport. Each stop dwells briefly:
  // scrolling straight through in animation frames moves faster than the lazy-load trigger and
  // leaves footer images permanently unstarted, which reads as a broken image rather than as the
  // timing artefact it is.
  await page.evaluate(async () => {
    const step = Math.round(window.innerHeight * 0.8);
    const total = document.body.scrollHeight;
    for (let y = 0; y < total; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 60));
    }
    window.scrollTo(0, total);
  });

  // Resolve every image while still at the bottom, before scrolling back. An image that is still
  // incomplete after this is genuinely failing, not merely unstarted.
  await page
    .waitForFunction(() => [...document.images].every((img) => img.complete), undefined, {
      timeout: 20_000,
    })
    .catch(() => {});

  await page.evaluate(() => window.scrollTo(0, 0));
  await page.evaluate(() => document.fonts.ready);

  // Bounded deliberately. waitForLoadState('networkidle') inherits the 30s navigation timeout, and
  // with the failure swallowed a page that never reaches idle costs 30 silent seconds on every
  // test. Across ~250 tests that is the difference between a suite you run and one you avoid.
  await page.waitForLoadState('networkidle', { timeout: 3000 }).catch(() => {});
}

/** Wait for site.js to have booted, using the one state only it produces. */
export async function waitForScript(page) {
  const carousel = await page.locator('[data-carousel]').count();
  if (carousel === 0) return;
  await page
    .waitForFunction(
      () => document.querySelector('[data-slide]')?.getAttribute('aria-hidden') === 'false',
      undefined,
      { timeout: 10_000 },
    )
    .catch(() => {});
}
