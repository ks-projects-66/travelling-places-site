import { test, expect } from '@playwright/test';
import { FUNCTIONAL } from '../../viewports.js';
import { ARTICLE_ROUTE } from '../../routes.js';
import { settlePage } from '../../lib/settle.js';
import { record } from '../../lib/collect.js';

const viewport = FUNCTIONAL[0];

test.describe('journal', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto('/journal/');
  });

  test('the category filter shows All plus a button per category', async ({ page }) => {
    const filters = page.locator('[data-filter]');
    expect(await filters.count()).toBeGreaterThanOrEqual(2);
    await expect(page.locator('[data-filter="all"]')).toHaveAttribute('aria-pressed', 'true');
    await expect(page.locator('[role="group"][aria-label="Filter articles by category"]')).toBeVisible();
  });

  test('filtering by category hides the other categories', async ({ page }) => {
    const categories = await page.locator('[data-category-item]').evaluateAll((els) => [
      ...new Set(els.map((e) => e.dataset.categoryItem)),
    ]);
    expect(categories.length).toBeGreaterThan(1);

    const target = categories[0];
    await page.locator(`[data-filter="${target}"]`).click();
    await expect(page.locator(`[data-filter="${target}"]`)).toHaveAttribute('aria-pressed', 'true');
    await expect(page.locator('[data-filter="all"]')).toHaveAttribute('aria-pressed', 'false');

    for (const el of await page.locator('[data-category-item]').all()) {
      const category = await el.getAttribute('data-category-item');
      if (category === target) await expect(el).toBeVisible();
      else await expect(el).toBeHidden();
    }
  });

  test('All restores every row on the first page', async ({ page }) => {
    const categories = await page.locator('[data-category-item]').evaluateAll((els) => [
      ...new Set(els.map((e) => e.dataset.categoryItem)),
    ]);
    await page.locator(`[data-filter="${categories[0]}"]`).click();
    await page.locator('[data-filter="all"]').click();
    for (const el of await page.locator('[data-category-item]:not([data-beyond-page])').all()) {
      await expect(el).toBeVisible();
    }
  });

  test('the empty state stays hidden while every category has articles', async ({ page }) => {
    await expect(page.locator('[data-empty-state]')).toBeHidden();
  });

  test('external entries open in a new tab, internal ones do not', async ({ page }) => {
    const links = await page.locator('.journal-feature, .journal-row').all();
    expect(links.length).toBeGreaterThan(1);
    for (const link of links) {
      const href = await link.getAttribute('href');
      if (href.startsWith('http')) {
        await expect(link).toHaveAttribute('target', '_blank');
        await expect(link).toHaveAttribute('rel', /noreferrer/);
      } else {
        expect(await link.getAttribute('target')).toBeNull();
      }
    }
  });

  test('the feature is the newest article, with its title, byline and date', async ({ page }) => {
    const feature = page.locator('.journal-feature');
    await expect(feature.locator('h2')).toBeVisible();
    await expect(feature.locator('.byline')).toHaveText(/^By /);
    await expect(feature.locator('.dateline')).toHaveText(/\d{4}$/);
  });

  test('an internal feature links to a real article page', async ({ page }) => {
    const feature = page.locator('.journal-feature');
    const href = await feature.getAttribute('href');
    test.skip(href.startsWith('http'), 'The newest article is an external archive entry.');
    await feature.click();
    await expect(page.locator('article.article-page')).toBeVisible();
  });
});

test.describe('article page', () => {
  test('carries a back link, meta, heading and body', async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto(ARTICLE_ROUTE);
    await settlePage(page);

    await expect(page.locator('a.back-link')).toHaveAttribute('href', '/journal/');
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('.article-standfirst')).toBeVisible();
    await expect(page.locator('.article-prose')).toBeVisible();
    await expect(page.locator('.article-body aside')).toBeVisible();
  });
});

test.describe('404', () => {
  test('renders its own hero and two escape routes', async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto('/404.html');
    await expect(page.locator('h1')).toContainText('moved on');
    await expect(page.locator('.hero-actions a.button')).toHaveAttribute('href', '/');
    await expect(page.locator('.hero-actions a.text-link')).toHaveAttribute('href', '/contact/');
  });

  test('an unknown path is served the 404 page', async ({ page }) => {
    const res = await page.goto('/this-page-does-not-exist/');
    expect(res.status()).toBe(404);
    await expect(page.locator('h1')).toContainText('moved on');
  });
});

test.describe('enquiry dialog', () => {
  test('opens from the header call to action', async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto('/');

    await expect(page.locator('[data-enquiry-dialog]')).toHaveCount(1);
    const opener = page.locator('[data-open-enquiry]');
    await expect(opener).toHaveCount(1);

    // Progressive enhancement: the opener stays an ordinary link to /contact/, so it still works
    // without JS and on the contact page, where no dialog is rendered.
    await expect(opener).toHaveAttribute('href', '/contact/');

    await opener.click();
    await expect(page.locator('[data-enquiry-dialog]')).toBeVisible();
    await expect(page).toHaveURL('/');
    await expect(page.locator('body')).toHaveClass(/dialog-open/);
  });

  test('returns focus to the opener when dismissed', async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto('/');
    await page.locator('[data-open-enquiry]').click();
    await expect(page.locator('[data-enquiry-dialog]')).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(page.locator('[data-enquiry-dialog]')).toBeHidden();
    await expect(page.locator('[data-open-enquiry]')).toBeFocused();
  });

  test('is not rendered on the contact page, where the form is inline', async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto('/contact/');
    await expect(page.locator('[data-enquiry-dialog]')).toHaveCount(0);
    await expect(page.locator('[data-enquiry-form]')).toHaveCount(1);
  });

  test('closes correctly once opened programmatically', async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto('/');

    const open = async () => {
      await page.evaluate(() => {
        document.querySelector('[data-enquiry-dialog]').showModal();
        document.body.classList.add('dialog-open');
      });
      await expect(page.locator('[data-enquiry-dialog]')).toBeVisible();
    };

    await open();
    await page.locator('[data-close-enquiry]').click();
    await expect(page.locator('[data-enquiry-dialog]')).toBeHidden();
    await expect(page.locator('body')).not.toHaveClass(/dialog-open/);

    // Native <dialog> gives Escape for free, and the close listener clears the body class.
    await open();
    await page.keyboard.press('Escape');
    await expect(page.locator('[data-enquiry-dialog]')).toBeHidden();
    await expect(page.locator('body')).not.toHaveClass(/dialog-open/);
  });
});
