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
  //
  // behavior: 'instant' matters. The site sets html { scroll-behavior: smooth }, so a plain
  // scrollTo(0, y) animates rather than jumps, and a 60ms dwell ended each stop mid-animation. In
  // WebKit the walk could finish without the lowest images ever entering the viewport; they stayed
  // unstarted, the wait below timed out silently, and the audit reported whichever footer image was
  // last as image-failed-to-load, a different one each run.
  //
  // Each stop also waits for the images it has brought into view, up to 1.5s, rather than a fixed
  // 60ms. WebKit starts a lazy image on its next rendering update after it intersects, which a
  // 60ms dwell did not always reach: a mid-page image (Gina's portrait, the Virtuoso mark) was
  // passed over, left the viewport unstarted, never loaded, and the audit reported it broken, a
  // different image on different runs.
  await page.evaluate(async () => {
    const inView = () =>
      [...document.images].filter((img) => {
        const r = img.getBoundingClientRect();
        return r.bottom > 0 && r.top < window.innerHeight && r.width > 0;
      });
    const settleStop = async () => {
      const started = Date.now();
      await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
      while (Date.now() - started < 1500 && !inView().every((img) => img.complete)) {
        await new Promise((r) => setTimeout(r, 50));
      }
    };
    const step = Math.round(window.innerHeight * 0.8);
    const total = document.body.scrollHeight;
    for (let y = 0; y < total; y += step) {
      window.scrollTo({ top: y, behavior: 'instant' });
      await settleStop();
    }
    window.scrollTo({ top: total, behavior: 'instant' });
    await settleStop();
  });

  // Resolve every image while still at the bottom, before scrolling back. An image that is still
  // incomplete after this is genuinely failing, not merely unstarted.
  await page
    .waitForFunction(() => [...document.images].every((img) => img.complete), undefined, {
      timeout: 20_000,
    })
    .catch(() => {});

  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
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
