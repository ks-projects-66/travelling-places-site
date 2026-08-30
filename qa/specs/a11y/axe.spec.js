/**
 * axe-core across every route at three viewports.
 *
 * Serious and critical fail the run. Moderate and minor are recorded in full and reported, never
 * filtered out and never disabled to keep a run green. PRODUCT.md sets the target at WCAG 2.2 AA,
 * which is what the tag list here asks for.
 */

import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { FUNCTIONAL, usesMobileNav } from '../../viewports.js';
import { ROUTES, routeId } from '../../routes.js';
import { settlePage, waitForScript } from '../../lib/settle.js';
import { record } from '../../lib/collect.js';

const TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];
const BLOCKING = new Set(['serious', 'critical']);

const toFindings = (violations, route, viewport) =>
  violations.flatMap((v) =>
    v.nodes.map((n) => ({
      id: `axe-${v.id}`,
      severity: BLOCKING.has(v.impact) ? 'fail' : 'warn',
      detail: `${v.impact}: ${v.help} on ${n.target.join(' ')}`,
      expected: v.description,
      actual: (n.failureSummary || '').split('\n').slice(0, 3).join(' '),
      source: v.helpUrl,
    })),
  );

for (const viewport of FUNCTIONAL) {
  test.describe(`axe at ${viewport.label}`, () => {
    for (const route of ROUTES) {
      test(`${routeId(route)}`, async ({ page }) => {
        await page.setViewportSize(viewport);
        await page.goto(route);
        await waitForScript(page);
        await settlePage(page);

        const results = await new AxeBuilder({ page }).withTags(TAGS).analyze();
        const findings = toFindings(results.violations, route, viewport.label);

        record({ suite: 'a11y', route, viewport: viewport.label, browser: 'chromium' }, findings);

        const blocking = findings.filter((f) => f.severity === 'fail');
        expect(
          blocking.map((f) => `${f.id} ${f.detail}`).join('\n'),
          `${blocking.length} serious/critical violation(s) on ${route} at ${viewport.label}`,
        ).toBe('');
      });
    }
  });
}

test.describe('axe on the open overlay menu', () => {
  const overlay = FUNCTIONAL.filter((v) => usesMobileNav(v.width));
  for (const viewport of overlay) {
    test(`menu open at ${viewport.label}`, async ({ page }) => {
      await page.setViewportSize(viewport);
      await page.goto('/');
      await page.locator('[data-menu-toggle]').click();
      await expect(page.locator('[data-nav]')).toHaveClass(/is-open/);

      const results = await new AxeBuilder({ page }).withTags(TAGS).analyze();
      const findings = toFindings(results.violations, '/', viewport.label);
      record({ suite: 'a11y', route: '/ (menu open)', viewport: viewport.label, browser: 'chromium' }, findings);

      const blocking = findings.filter((f) => f.severity === 'fail');
      expect(blocking.map((f) => `${f.id} ${f.detail}`).join('\n')).toBe('');
    });
  }
});
