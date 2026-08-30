import { test, expect } from '@playwright/test';
import { FUNCTIONAL, usesMobileNav } from '../../viewports.js';
import { ROUTES, routeId, ARTICLE_ROUTE } from '../../routes.js';
import { settlePage } from '../../lib/settle.js';
import { record } from '../../lib/collect.js';

const desktop = FUNCTIONAL.find((v) => !usesMobileNav(v.width));

test.describe('navigation', () => {
  test('desktop nav exposes five destinations plus the CTA', async ({ page }) => {
    await page.setViewportSize(desktop);
    await page.goto('/');
    const nav = page.locator('[data-nav]');
    await expect(nav).toBeVisible();

    const links = nav.locator('> a:not(.button)');
    await expect(links).toHaveText(['Home', 'Expertise', 'Virtuoso', 'Who we are', 'Journal']);

    // BRAND.md: "Primary navigation contains no more than five destinations plus the
    // Plan a journey action."
    expect(await links.count()).toBeLessThanOrEqual(5);
    await expect(nav.locator('a.button')).toHaveText('Plan a journey');
  });

  test('the menu toggle is hidden above the 940px breakpoint', async ({ page }) => {
    await page.setViewportSize(desktop);
    await page.goto('/');
    await expect(page.locator('[data-menu-toggle]')).toBeHidden();
  });

  test('aria-current marks the open page, and an article marks Journal', async ({ page }) => {
    await page.setViewportSize(desktop);

    await page.goto('/expertise/');
    await expect(page.locator('[data-nav] > a[aria-current="page"]')).toHaveText('Expertise');

    await page.goto(ARTICLE_ROUTE);
    await expect(page.locator('[data-nav] > a[aria-current="page"]')).toHaveText('Journal');
  });

  test('the skip link is the first tab stop and moves focus to main', async ({ page }) => {
    await page.setViewportSize(desktop);
    await page.goto('/');
    await page.keyboard.press('Tab');
    const skip = page.locator('.skip-link');
    await expect(skip).toBeFocused();
    await expect(skip).toHaveAttribute('href', '#main');
    await skip.press('Enter');
    await expect(page.locator('#main')).toBeVisible();
  });

  test('every internal link on every page resolves', async ({ page, request }) => {
    test.slow();
    await page.setViewportSize(desktop);
    const checked = new Map();
    const findings = [];

    for (const route of ROUTES) {
      await page.goto(route);
      const hrefs = await page.locator('a[href]').evaluateAll((els) =>
        els.map((a) => a.getAttribute('href')).filter((h) => h && h.startsWith('/')),
      );
      for (const href of new Set(hrefs)) {
        const target = href.split('#')[0] || '/';
        if (checked.has(target)) continue;
        const res = await request.get(target, { maxRedirects: 5 });
        checked.set(target, res.status());
        if (res.status() >= 400) {
          findings.push({
            id: 'broken-internal-link',
            severity: 'fail',
            detail: `${target} returned ${res.status()}, linked from ${route}`,
          });
        }
      }
    }

    record({ suite: 'functional', browser: 'chromium' }, findings);
    expect(findings.map((f) => f.detail).join('\n')).toBe('');
    expect(checked.size).toBeGreaterThan(5);
  });

  test('social links open externally and are safely rel-tagged', async ({ page }) => {
    await page.setViewportSize(desktop);
    await page.goto('/');
    const social = page.locator('nav.social-links a');
    await expect(social).toHaveCount(2);
    for (const link of await social.all()) {
      await expect(link).toHaveAttribute('target', '_blank');
      await expect(link).toHaveAttribute('rel', /noreferrer/);
      expect(await link.getAttribute('href')).toMatch(/^https?:\/\//);
    }
  });

  test('the footer carries both navigation landmarks with distinct labels', async ({ page }) => {
    await page.setViewportSize(desktop);
    await page.goto('/');
    await expect(page.locator('nav[aria-label="Footer navigation"]')).toBeVisible();
    await expect(page.locator('nav[aria-label="Social media"]')).toBeVisible();
    // Three nav landmarks per page, so every one needs its own accessible name.
    const labels = await page.locator('nav').evaluateAll((ns) => ns.map((n) => n.getAttribute('aria-label')));
    expect(new Set(labels).size).toBe(labels.length);
  });

  for (const route of ROUTES) {
    test(`${routeId(route)} renders a single h1 and a main landmark`, async ({ page }) => {
      await page.setViewportSize(desktop);
      await page.goto(route);
      await settlePage(page);
      await expect(page.locator('#main')).toHaveCount(1);
      await expect(page.locator('h1')).toHaveCount(1);
    });
  }
});
