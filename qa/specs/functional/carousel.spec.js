/**
 * The home hero carousel.
 *
 * Since 25 October 2026 the photographs advance every 6 seconds beneath one fixed title, with
 * previous and next buttons at either side (docs/WORK-PLAN.md, Q1, the owner's decision). There
 * is still no pause button, so these tests assert the arrows and the mitigations that stand in for
 * one, and report the residual WCAG 2.2.2 gap as an accepted risk rather than asserting a control
 * that is not meant to exist.
 *
 * Hover holds the sequence only over the title block and the arrows ([data-carousel-hold]). The
 * hero fills most of the first screen, so a whole-hero hover hold would stop it for anyone whose
 * pointer rested on the photograph.
 *
 * Timing: SLIDE_MS is 6000 and the cross-fade is 900ms, so waits allow for both.
 */

import { test, expect } from '@playwright/test';
import { FUNCTIONAL } from '../../viewports.js';
import { waitForScript } from '../../lib/settle.js';
import { record } from '../../lib/collect.js';

const SLIDE_MS = 6000;
const SETTLE_MS = 1200;
const viewport = FUNCTIONAL[0];

const activeIndex = (page) =>
  page.evaluate(() => [...document.querySelectorAll('[data-slide]')].findIndex((s) => s.classList.contains('is-active')));

test.describe('hero carousel', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto('/');
    await waitForScript(page);
  });

  test('is the home hero, with three slides, starting on the first', async ({ page }) => {
    await expect(page.locator('#main > .page-hero[data-carousel]')).toHaveCount(1);
    await expect(page.locator('[data-carousel] h1')).toHaveCount(1);
    await expect(page.locator('[data-slide]')).toHaveCount(3);
    expect(await activeIndex(page)).toBe(0);
    // showSlide(0) sets this explicitly; the server-rendered markup omits the attribute.
    await expect(page.locator('[data-slide]').first()).toHaveAttribute('aria-hidden', 'false');
    await expect(page.locator('[data-slide]').nth(1)).toHaveAttribute('aria-hidden', 'true');
  });

  test('advances on its own, and not before 6 seconds', async ({ page }) => {
    // Park the pointer away from the title and arrows so nothing holds the sequence.
    await page.mouse.move(viewport.width / 2, 200);
    await page.waitForTimeout(SLIDE_MS - 1500);
    expect(await activeIndex(page)).toBe(0);
    await page.waitForTimeout(1500 + SETTLE_MS);
    expect(await activeIndex(page)).toBe(1);
  });

  test('the title stays fixed while the photographs change', async ({ page }) => {
    const title = await page.locator('[data-carousel] h1').textContent();
    await page.locator('[data-carousel-next]').click();
    await expect(page.locator('[data-carousel] h1')).toHaveText(title);
  });

  test('previous and next buttons step through the photographs', async ({ page }) => {
    const next = page.locator('[data-carousel-next]');
    const previous = page.locator('[data-carousel-previous]');
    await expect(next).toHaveAccessibleName('Next photograph');
    await expect(previous).toHaveAccessibleName('Previous photograph');

    await next.click();
    expect(await activeIndex(page)).toBe(1);
    await previous.click();
    expect(await activeIndex(page)).toBe(0);
    await previous.click();
    expect(await activeIndex(page)).toBe(2);
  });

  test('the arrows are at least 44px and sit at either side', async ({ page }) => {
    const prev = await page.locator('[data-carousel-previous]').boundingBox();
    const next = await page.locator('[data-carousel-next]').boundingBox();
    for (const box of [prev, next]) {
      expect(box.width).toBeGreaterThanOrEqual(44);
      expect(box.height).toBeGreaterThanOrEqual(44);
    }
    expect(prev.x).toBeLessThan(viewport.width / 4);
    expect(next.x + next.width).toBeGreaterThan((viewport.width * 3) / 4);
  });

  test('holds while the pointer is over the title', async ({ page }) => {
    await page.locator('[data-carousel] h1').hover();
    const before = await activeIndex(page);
    await page.waitForTimeout(SLIDE_MS + SETTLE_MS);
    expect(await activeIndex(page)).toBe(before);
  });

  test('holds while something inside it has focus', async ({ page }) => {
    await page.locator('[data-carousel] .hero-actions a').first().focus();
    const before = await activeIndex(page);
    await page.waitForTimeout(SLIDE_MS + SETTLE_MS);
    expect(await activeIndex(page)).toBe(before);
  });

  test('does not advance while the tab is hidden', async ({ page }) => {
    await page.evaluate(() => {
      Object.defineProperty(document, 'hidden', { value: true, configurable: true });
      document.dispatchEvent(new Event('visibilitychange'));
    });
    const before = await activeIndex(page);
    await page.waitForTimeout(SLIDE_MS + SETTLE_MS);
    expect(await activeIndex(page)).toBe(before);
  });

  test('never auto-advances under reduced motion, and the arrows still work', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.reload();
    await waitForScript(page);
    const before = await activeIndex(page);
    await page.waitForTimeout(SLIDE_MS + SETTLE_MS);
    expect(await activeIndex(page)).toBe(before);
    await page.locator('[data-carousel-next]').click();
    expect(await activeIndex(page)).toBe((before + 1) % 3);
  });

  test('arrow keys step through slides', async ({ page }) => {
    await page.locator('[data-carousel]').evaluate((el) => {
      el.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }));
    });
    expect(await activeIndex(page)).toBe(1);
    await page.locator('[data-carousel]').evaluate((el) => {
      el.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true }));
    });
    expect(await activeIndex(page)).toBe(0);
  });

  test('records the absent pause control as an accepted risk', async ({ page }) => {
    const pause = await page.locator('[data-carousel] [data-carousel-pause]').count();

    record({ suite: 'functional', viewport: viewport.label, browser: 'chromium' }, [
      {
        id: 'carousel-no-pause-control',
        severity: 'info',
        detail:
          'The hero advances every 6s with previous and next buttons but no pause button. Hover on the title or arrows, focus, a hidden tab and reduced motion all hold it; the residual WCAG 2.2.2 gap is a recorded accepted risk (brand-kit/BRAND.md, carousel).',
        expected: 'a visible pause control, per WCAG 2.2.2',
        actual: `${pause} pause controls; previous and next present`,
        source: 'brand-kit/BRAND.md, carousel section; docs/WORK-PLAN.md Q1',
      },
    ]);

    // Asserting the approved state. If a pause button is added, BRAND.md needs updating with it.
    expect(pause).toBe(0);
    await expect(page.locator('[data-carousel-previous], [data-carousel-next]')).toHaveCount(2);
  });

  test('slides carry meaningful alt text', async ({ page }) => {
    const alts = await page.locator('[data-slide] img').evaluateAll((imgs) => imgs.map((i) => i.getAttribute('alt')));
    expect(alts).toHaveLength(3);
    for (const alt of alts) expect((alt || '').length).toBeGreaterThan(10);
  });
});
