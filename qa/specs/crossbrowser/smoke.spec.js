/**
 * Representative cross-browser coverage, run under Firefox and WebKit at the three specified
 * viewports: 1440x900, 1024x1366 and 390x844.
 *
 * Deliberately a smoke, not a repeat of the whole functional suite. It covers the behaviours most
 * likely to diverge between engines: layout overflow, the overlay menu, the carousel timer, form
 * validation, and webfont loading.
 */

import { test, expect } from '@playwright/test';
import { CROSS_BROWSER, usesMobileNav } from '../../viewports.js';
import { auditPage } from '../../lib/page-audit.js';
import { settlePage, waitForScript } from '../../lib/settle.js';
import { record, failuresOf, summarise } from '../../lib/collect.js';

for (const viewport of CROSS_BROWSER) {
  test.describe(`${viewport.label}`, () => {
    test('home renders without layout failures', async ({ page, browserName }) => {
      await page.setViewportSize(viewport);
      await page.goto('/');
      await waitForScript(page);
      await settlePage(page);

      const result = await auditPage(page);
      record({ suite: 'crossbrowser', route: '/', viewport: viewport.label, browser: browserName }, result.findings);

      const failures = failuresOf(result.findings);
      expect(summarise(failures), `${browserName} at ${viewport.label}`).toBe('');
    });

    test('both webfonts load', async ({ page, browserName }) => {
      await page.setViewportSize(viewport);
      await page.goto('/');
      await settlePage(page);

      const loaded = await page.evaluate(() => ({
        display: document.fonts.check('400 24px "Libre Baskerville"'),
        body: document.fonts.check('400 16px "IBM Plex Sans"'),
      }));

      const findings = [];
      if (!loaded.display) findings.push({ id: 'font-not-loaded', severity: 'fail', detail: `Libre Baskerville did not load in ${browserName}` });
      if (!loaded.body) findings.push({ id: 'font-not-loaded', severity: 'fail', detail: `IBM Plex Sans did not load in ${browserName}` });
      record({ suite: 'crossbrowser', route: '/', viewport: viewport.label, browser: browserName }, findings);

      expect(loaded.display && loaded.body).toBe(true);
    });

    test('navigation works for this viewport class', async ({ page }) => {
      await page.setViewportSize(viewport);
      await page.goto('/');

      if (usesMobileNav(viewport.width)) {
        const toggle = page.locator('[data-menu-toggle]');
        await expect(toggle).toBeVisible();
        await toggle.click();
        await expect(page.locator('[data-nav]')).toHaveClass(/is-open/);
        await toggle.click();
        await expect(page.locator('[data-nav]')).not.toHaveClass(/is-open/);
      } else {
        await expect(page.locator('[data-menu-toggle]')).toBeHidden();
        await expect(page.locator('[data-nav] > a').first()).toBeVisible();
      }
    });

    test('the carousel advances', async ({ page }) => {
      await page.setViewportSize(viewport);
      await page.goto('/');
      await waitForScript(page);
      const index = () => page.evaluate(() => [...document.querySelectorAll('[data-slide]')].findIndex((s) => s.classList.contains('is-active')));
      expect(await index()).toBe(0);
      await page.waitForTimeout(3900);
      expect(await index()).toBe(1);
    });

    test('form validation reports in the same words', async ({ page }) => {
      await page.setViewportSize(viewport);
      await page.goto('/contact/');
      await page.locator('[data-enquiry-form] button[type="submit"]').click();
      await expect(page.locator('#contact-name-error')).toHaveText('Please complete this field.');
    });
  });
}
