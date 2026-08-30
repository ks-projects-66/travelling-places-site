/**
 * The home carousel.
 *
 * It has no dots, no arrows and no pause button; commit 0449fdd removed the control bar by
 * request, and brand kit v3 records that as approved. So these tests assert the four mitigations
 * that stand in place of a pause control, and report the residual WCAG 2.2.2 gap as an accepted
 * risk rather than asserting a control that is not meant to exist.
 *
 * Timing: SLIDE_MS is 3000 and the crossfade is 680ms, so waits allow for both.
 */

import { test, expect } from '@playwright/test';
import { FUNCTIONAL } from '../../viewports.js';
import { waitForScript } from '../../lib/settle.js';
import { record } from '../../lib/collect.js';

const SLIDE_MS = 3000;
const SETTLE_MS = 900;
const viewport = FUNCTIONAL[0];

const activeIndex = (page) =>
  page.evaluate(() => [...document.querySelectorAll('[data-slide]')].findIndex((s) => s.classList.contains('is-active')));

test.describe('carousel', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto('/');
    await waitForScript(page);
  });

  test('has three slides and starts on the first', async ({ page }) => {
    await expect(page.locator('[data-slide]')).toHaveCount(3);
    expect(await activeIndex(page)).toBe(0);
    // showSlide(0) sets this explicitly; the server-rendered markup omits the attribute.
    await expect(page.locator('[data-slide]').first()).toHaveAttribute('aria-hidden', 'false');
    await expect(page.locator('[data-slide]').nth(1)).toHaveAttribute('aria-hidden', 'true');
  });

  test('advances on its own', async ({ page }) => {
    expect(await activeIndex(page)).toBe(0);
    await page.waitForTimeout(SLIDE_MS + SETTLE_MS);
    expect(await activeIndex(page)).toBe(1);
  });

  test('pauses while the pointer is over it', async ({ page }) => {
    await page.locator('[data-carousel]').hover();
    const before = await activeIndex(page);
    await page.waitForTimeout(SLIDE_MS + SETTLE_MS);
    expect(await activeIndex(page)).toBe(before);
  });

  test('pauses while something inside it holds focus', async ({ page }) => {
    await page.locator('[data-carousel]').evaluate((el) => {
      el.setAttribute('tabindex', '-1');
      el.focus();
      el.dispatchEvent(new FocusEvent('focusin', { bubbles: true }));
    });
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

  test('never auto-advances under reduced motion', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.reload();
    await waitForScript(page);
    const before = await activeIndex(page);
    await page.waitForTimeout(SLIDE_MS * 2);
    expect(await activeIndex(page)).toBe(before);
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
    const controls = await page
      .locator('[data-carousel] button, [data-carousel] [data-carousel-pause], [data-carousel] [data-carousel-dot]')
      .count();

    record({ suite: 'functional', viewport: viewport.label, browser: 'chromium' }, [
      {
        id: 'carousel-no-pause-control',
        severity: 'info',
        detail:
          'The carousel advances every 3s with no visible pause control. Approved in brand kit v3 with four mitigations in place; the residual WCAG 2.2.2 gap is a recorded accepted risk, not a new finding.',
        expected: 'a visible pause control, per WCAG 2.2.2',
        actual: `${controls} controls present`,
        source: 'brand-kit/BRAND.md, carousel section',
      },
    ]);

    // Asserting the approved state, not the WCAG ideal. If a control is added, v3 needs updating.
    expect(controls).toBe(0);
  });

  test('slides carry meaningful alt text', async ({ page }) => {
    const alts = await page.locator('[data-slide] img').evaluateAll((imgs) => imgs.map((i) => i.getAttribute('alt')));
    expect(alts).toHaveLength(3);
    for (const alt of alts) expect((alt || '').length).toBeGreaterThan(10);
  });
});
