/**
 * The overlay menu.
 *
 * Several tests here are expected to fail against the current site, and that is the point. The
 * brief asks for Escape closing, outside-click closing and focus trapping; src/scripts/site.js
 * implements none of them. They are written as real assertions rather than skipped, so the gap
 * appears in the report with a reproduction rather than living only in a comment.
 *
 * The state surface is exactly three things: [data-menu-toggle][aria-expanded],
 * [data-nav].is-open, and body.menu-open.
 */

import { test, expect } from '@playwright/test';
import { FUNCTIONAL, usesMobileNav } from '../../viewports.js';
import { record } from '../../lib/collect.js';

const overlayViewports = FUNCTIONAL.filter((v) => usesMobileNav(v.width));

for (const viewport of overlayViewports) {
  test.describe(`overlay menu at ${viewport.label}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize(viewport);
      await page.goto('/');
    });

    test('opens and closes from the toggle', async ({ page }) => {
      const toggle = page.locator('[data-menu-toggle]');
      const nav = page.locator('[data-nav]');

      await expect(toggle).toBeVisible();
      await expect(toggle).toHaveAttribute('aria-expanded', 'false');

      await toggle.click();
      await expect(toggle).toHaveAttribute('aria-expanded', 'true');
      await expect(nav).toHaveClass(/is-open/);
      await expect(page.locator('body')).toHaveClass(/menu-open/);

      await toggle.click();
      await expect(toggle).toHaveAttribute('aria-expanded', 'false');
      await expect(nav).not.toHaveClass(/is-open/);
      await expect(page.locator('body')).not.toHaveClass(/menu-open/);
    });

    test('closes when a destination is chosen', async ({ page }) => {
      await page.locator('[data-menu-toggle]').click();
      await page.locator('[data-nav] > a', { hasText: 'Expertise' }).click();
      await expect(page).toHaveURL(/\/expertise\/$/);
      await expect(page.locator('body')).not.toHaveClass(/menu-open/);
    });

    test('the open menu stays inside the viewport', async ({ page }) => {
      await page.locator('[data-menu-toggle]').click();
      const box = await page.locator('[data-nav]').boundingBox();
      expect(box.x).toBeGreaterThanOrEqual(-1);
      expect(box.x + box.width).toBeLessThanOrEqual(viewport.width + 1);
    });

    test('scroll is locked while the menu is open', async ({ page }) => {
      await page.locator('[data-menu-toggle]').click();
      await expect(page.locator('body')).toHaveCSS('overflow', 'hidden');
    });

    // --- Behaviours the brief requires that the site does not implement ---

    test('closes on Escape and returns focus to the toggle', async ({ page }) => {
      const toggle = page.locator('[data-menu-toggle]');
      await toggle.click();
      await expect(toggle).toHaveAttribute('aria-expanded', 'true');

      await page.keyboard.press('Escape');
      await expect(toggle).toHaveAttribute('aria-expanded', 'false');
      await expect(page.locator('body')).not.toHaveClass(/menu-open/);
      await expect(toggle).toBeFocused();
    });

    test('closes on a click away from the links', async ({ page }) => {
      // The panel is fixed at inset: 0, so it covers the viewport and there is no literal outside
      // to click. Dispatching on the nav element itself is the real gesture: a click landing on
      // the panel background rather than on one of its links.
      const toggle = page.locator('[data-menu-toggle]');
      await toggle.click();
      await expect(page.locator('[data-nav]')).toHaveClass(/is-open/);

      await page.locator('[data-nav]').dispatchEvent('click');
      await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    });

    test('traps focus inside the open panel', async ({ page }) => {
      await page.locator('[data-menu-toggle]').click();
      // Tab past every link in the panel. Focus should cycle back inside rather than escaping to
      // the page behind, which is still in the tab order under a fixed overlay.
      const linkCount = await page.locator('[data-nav] a').count();
      for (let i = 0; i < linkCount + 3; i += 1) {
        await page.keyboard.press('Tab');
        const inside = await page.evaluate(() => !!document.activeElement?.closest('[data-nav]'));
        expect(inside, `focus escaped the panel after ${i + 1} tab(s)`).toBe(true);
      }
    });

    test('cycles backwards without escaping', async ({ page }) => {
      await page.locator('[data-menu-toggle]').click();
      for (let i = 0; i < 3; i += 1) await page.keyboard.press('Shift+Tab');
      const inside = await page.evaluate(() => !!document.activeElement?.closest('[data-nav]'));
      expect(inside).toBe(true);
    });

    // There is deliberately no separate "restores focus to the toggle" test. Closing by clicking
    // the toggle focuses it natively, so such a test can never fail and would assert nothing. The
    // real focus-restore concern only arises when closing by Escape or by an outside click, and
    // both of those are covered above as the failures they currently are.

    test('moves focus into the panel when opened', async ({ page }) => {
      await page.locator('[data-menu-toggle]').click();
      const landed = await page.evaluate(() => !!document.activeElement?.closest('[data-nav]'));
      expect(landed).toBe(true);
    });

    test('releases the scroll lock when widened past the breakpoint', async ({ page }) => {
      await page.locator('[data-menu-toggle]').click();
      await expect(page.locator('body')).toHaveClass(/menu-open/);

      await page.setViewportSize({ width: 1200, height: viewport.height });
      await expect(page.locator('body')).not.toHaveClass(/menu-open/);
      await expect(page.locator('body')).toHaveCSS('overflow', 'visible');
    });
  });
}
