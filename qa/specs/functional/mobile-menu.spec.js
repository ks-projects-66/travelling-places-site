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

    test('closes on Escape', async ({ page }) => {
      const toggle = page.locator('[data-menu-toggle]');
      await toggle.click();
      await expect(toggle).toHaveAttribute('aria-expanded', 'true');

      await page.keyboard.press('Escape');

      record({ suite: 'functional', viewport: viewport.label, browser: 'chromium' }, [
        {
          id: 'menu-no-escape-close',
          severity: 'fail',
          detail: 'The overlay menu has no keydown handler, so Escape does not close it.',
          expected: 'aria-expanded="false" after Escape',
          source: 'src/scripts/site.js',
        },
      ]);
      await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    });

    test('closes on a click outside the panel', async ({ page }) => {
      const toggle = page.locator('[data-menu-toggle]');
      await toggle.click();
      await page.mouse.click(viewport.width - 8, viewport.height - 8);

      record({ suite: 'functional', viewport: viewport.label, browser: 'chromium' }, [
        {
          id: 'menu-no-outside-click-close',
          severity: 'fail',
          detail: 'Only the toggle and the nav links close the menu. A click outside does nothing.',
          expected: 'aria-expanded="false" after an outside click',
          source: 'src/scripts/site.js',
        },
      ]);
      await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    });

    test('traps focus inside the open panel', async ({ page }) => {
      await page.locator('[data-menu-toggle]').click();
      // Tab past every link in the panel; focus should cycle back inside, not escape to the page.
      const linkCount = await page.locator('[data-nav] a').count();
      for (let i = 0; i < linkCount + 2; i += 1) await page.keyboard.press('Tab');

      const focusInsideNav = await page.evaluate(
        () => !!document.activeElement?.closest('[data-nav]'),
      );

      record({ suite: 'functional', viewport: viewport.label, browser: 'chromium' }, [
        {
          id: 'menu-no-focus-trap',
          severity: 'fail',
          detail: 'Focus leaves the full-screen overlay into the page behind it, which is still present in the tab order.',
          expected: 'focus cycles within [data-nav] while open',
          source: 'src/scripts/site.js',
        },
      ]);
      expect(focusInsideNav).toBe(true);
    });

    // There is deliberately no separate "restores focus to the toggle" test. Closing by clicking
    // the toggle focuses it natively, so such a test can never fail and would assert nothing. The
    // real focus-restore concern only arises when closing by Escape or by an outside click, and
    // both of those are covered above as the failures they currently are.

    test('moves focus into the panel when opened', async ({ page }) => {
      const toggle = page.locator('[data-menu-toggle]');
      await toggle.click();
      const landed = await page.evaluate(() => !!document.activeElement?.closest('[data-nav]'));

      record({ suite: 'functional', viewport: viewport.label, browser: 'chromium' }, [
        {
          id: 'menu-no-initial-focus-move',
          severity: 'warn',
          detail: 'Opening the overlay leaves focus on the toggle rather than moving it into the panel, so a screen-reader user must tab past the header to reach the menu.',
          expected: 'focus inside [data-nav] after open',
          actual: landed ? 'inside' : 'still on the toggle',
          source: 'src/scripts/site.js',
        },
      ]);
    });

    test('releases the scroll lock when widened past the breakpoint', async ({ page }) => {
      await page.locator('[data-menu-toggle]').click();
      await expect(page.locator('body')).toHaveClass(/menu-open/);

      await page.setViewportSize({ width: 1200, height: viewport.height });

      record({ suite: 'functional', viewport: viewport.label, browser: 'chromium' }, [
        {
          id: 'menu-no-resize-handling',
          severity: 'fail',
          detail: 'Opening the menu below 940px then widening past it leaves body.menu-open set, so the page renders a desktop nav with scrolling still locked.',
          expected: 'body.menu-open cleared once the desktop nav applies',
          source: 'src/scripts/site.js',
        },
      ]);
      await expect(page.locator('body')).not.toHaveClass(/menu-open/);
    });
  });
}
