import { test, expect } from '@playwright/test';
import { FUNCTIONAL } from '../../viewports.js';
import { ARTICLE_ROUTE, ROUTES } from '../../routes.js';
import { settlePage } from '../../lib/settle.js';
import { record } from '../../lib/collect.js';

const viewport = FUNCTIONAL[0];

test.describe('journal', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto('/journal/');
  });

  // The category filter was removed on 25 October 2026 (docs/WORK-PLAN.md, change 5): five chips
  // for five articles. If one returns, it needs tests of its own again.
  test('there is no category filter', async ({ page }) => {
    await expect(page.locator('[data-filter]')).toHaveCount(0);
  });

  test('makes no promise about how often it is updated', async ({ page }) => {
    // The owner's decision (docs/WORK-PLAN.md, Q7). The footer is included: it said "every
    // fortnight" until the same day.
    await expect(page.locator('body')).not.toContainText(/fortnight|weekly|monthly/i);
  });

  test('external entries open in a new tab and say so, internal ones do not', async ({ page }) => {
    const links = await page.locator('.journal-lead h2 a, .journal-row').all();
    expect(links.length).toBeGreaterThan(1);
    for (const link of links) {
      const href = await link.getAttribute('href');
      if (href.startsWith('http')) {
        await expect(link).toHaveAttribute('target', '_blank');
        await expect(link).toHaveAttribute('rel', /noreferrer/);
        await expect(link).toContainText('new tab');
      } else {
        expect(await link.getAttribute('target')).toBeNull();
      }
    }
  });

  test('the feature is the newest article, its text beneath its photograph', async ({ page }) => {
    const feature = page.locator('.journal-lead');
    await expect(feature.locator('h2')).toBeVisible();
    await expect(feature.locator('.byline')).toHaveText(/^By /);
    await expect(feature.locator('.story-meta time')).toHaveText(/\d{4}$/);
    const image = await feature.locator('.journal-lead-image').boundingBox();
    const text = await feature.locator('.journal-lead-text').boundingBox();
    expect(text.y).toBeGreaterThanOrEqual(image.y + image.height - 1);
  });

  test('an internal feature links to a real article page', async ({ page }) => {
    const link = page.locator('.journal-lead h2 a');
    const href = await link.getAttribute('href');
    test.skip(href.startsWith('http'), 'The newest article is an external archive entry.');
    await link.click();
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
  // The actions match the sentence above them: it names the expertise and the journal (B14).
  test('renders its own hero and the routes its copy names', async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto('/404.html');
    await expect(page.locator('h1')).toContainText('moved on');
    await expect(page.locator('.hero-actions a.button')).toHaveAttribute('href', '/expertise/');
    const links = await page.locator('.hero-actions a.text-link').evaluateAll((els) => els.map((e) => e.getAttribute('href')));
    expect(links).toEqual(['/journal/']);
  });

  test('an unknown path is served the 404 page', async ({ page }) => {
    const res = await page.goto('/this-page-does-not-exist/');
    expect(res.status()).toBe(404);
    await expect(page.locator('h1')).toContainText('moved on');
  });
});

// The enquiry dialog was retired on 25 October 2026: the main action is "Start planning",
// everywhere, and it goes to the Contact page (docs/WORK-PLAN.md, Q13). The newsletter dialog,
// which shares the dialog styling, is covered in enquiry-form.spec.js.
test.describe('main action', () => {
  // It lands on the form itself, not on Contact's opening photograph: the form started 1,154px
  // down a 1440x900 screen when the action went to the top of the page (re-critique, P2).
  test('the header call to action is Start planning, and it lands on the form', async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto('/');
    const cta = page.locator('[data-nav] a.button');
    await expect(cta).toHaveText('Start planning');
    await expect(cta).toHaveAttribute('href', '/contact/#enquiry');
    await cta.click();
    await expect(page).toHaveURL(/\/contact\/#enquiry$/);
    const form = page.locator('[data-enquiry-form]');
    await expect(form).toHaveCount(1);
    await expect(form).toBeInViewport();
  });

  test('no page renders the retired enquiry dialog', async ({ page }) => {
    await page.setViewportSize(viewport);
    for (const route of ROUTES) {
      await page.goto(route);
      await expect(page.locator('[data-enquiry-dialog], [data-open-enquiry]')).toHaveCount(0);
    }
  });

  // Buttons that take a visitor to Contact from another page. On Contact itself, the Calendly
  // placeholder's "Send an enquiry instead" jumps down the same page to the form; it is an
  // in-page alternative to booking a call, not the site's main action, so it is not held to it.
  test('every button to Contact carries the one label', async ({ page }) => {
    await page.setViewportSize(viewport);
    for (const route of ROUTES.filter((r) => r !== '/contact/')) {
      await page.goto(route);
      const labels = await page
        .locator('a.button[href^="/contact/"]')
        .evaluateAll((els) => els.map((el) => el.textContent.trim()));
      for (const label of labels) expect(label, `on ${route}`).toBe('Start planning');
    }
  });
});
