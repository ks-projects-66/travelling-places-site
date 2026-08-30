/**
 * The responsive layout sweep: every route at every one of the nineteen viewports.
 *
 * Viewports are driven with setViewportSize inside one browser context rather than through
 * nineteen Playwright projects. Same coverage, a fraction of the browser launches.
 */

import { test, expect } from '@playwright/test';
import { ALL, usesMobileNav } from '../../viewports.js';
import { ROUTES, routeId } from '../../routes.js';
import { auditPage, auditOpenMenu } from '../../lib/page-audit.js';
import { settlePage, waitForScript } from '../../lib/settle.js';
import { record, failuresOf, summarise } from '../../lib/collect.js';

test.describe('responsive layout', () => {
  for (const viewport of ALL) {
    test.describe(viewport.label, () => {
      for (const route of ROUTES) {
        test(`${routeId(route)} at ${viewport.width}x${viewport.height}`, async ({ page }) => {
          await page.setViewportSize({ width: viewport.width, height: viewport.height });
          await page.goto(route, { waitUntil: 'load' });

          await waitForScript(page);
          await settlePage(page);

          const result = await auditPage(page);
          const findings = [...result.findings];

          // The overlay menu only exists below 940px. Auditing it above that tests nothing.
          if (usesMobileNav(viewport.width)) {
            const toggle = page.locator('[data-menu-toggle]');
            if (await toggle.isVisible()) {
              await toggle.click();
              await expect(page.locator('[data-nav]')).toHaveClass(/is-open/);
              const menu = await auditOpenMenu(page);
              findings.push(...menu.findings);
              await toggle.click();
            }
          }

          record(
            { suite: 'responsive', route, viewport: viewport.label, browser: 'chromium' },
            findings,
          );

          const failures = failuresOf(findings);
          expect(summarise(failures), `${failures.length} layout failure(s) on ${route} at ${viewport.label}`).toBe('');
        });
      }
    });
  }
});
