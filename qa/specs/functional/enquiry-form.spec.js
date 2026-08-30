/**
 * The enquiry form.
 *
 * The markup is env-dependent: PUBLIC_WEB3FORMS_KEY switches data-mode between "web3forms" and
 * "mailto", changes the submit label, adds two hidden inputs and removes a TODO note. Rather than
 * inject a fake key, every test branches on [data-mode] so it is honest about which build it ran
 * against.
 *
 * Labels are implicit: the input is wrapped in the label, with no for/id pair, and the asterisk is
 * part of the label text.
 */

import { test, expect } from '@playwright/test';
import { FUNCTIONAL } from '../../viewports.js';
import { record } from '../../lib/collect.js';

const viewport = FUNCTIONAL[0];
const form = '[data-enquiry-form]';

test.describe('enquiry form', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto('/contact/');
  });

  test('renders exactly one form on the contact page', async ({ page }) => {
    // The dialog copy of the form is not rendered on /contact/, so there is no ambiguity here.
    await expect(page.locator(form)).toHaveCount(1);
  });

  test('exposes every field with an accessible name', async ({ page }) => {
    for (const name of ['Your name *', 'Email *', 'Phone', 'When are you thinking?', 'Who is travelling?', 'Tell us about the journey *']) {
      await expect(page.locator(form).getByLabel(name)).toBeVisible();
    }
  });

  test('marks the three required fields', async ({ page }) => {
    await expect(page.locator(`${form} [required]`)).toHaveCount(3);
  });

  test('keeps the honeypot hidden and unchecked', async ({ page }) => {
    const bot = page.locator(`${form} input[name="botcheck"]`);
    await expect(bot).toHaveAttribute('aria-hidden', 'true');
    await expect(bot).toHaveAttribute('tabindex', '-1');
    expect(await bot.isChecked()).toBe(false);
  });

  test('validates a required field on blur', async ({ page }) => {
    const name = page.locator(form).getByLabel('Your name *');
    await name.click();
    await name.blur();
    await expect(page.locator('#contact-name-error')).toHaveText('Please complete this field.');
    await expect(name).toHaveAttribute('aria-invalid', 'true');
  });

  test('rejects a malformed email with the typed message', async ({ page }) => {
    const email = page.locator(form).getByLabel('Email *');
    await email.fill('not-an-address');
    await email.blur();
    await expect(page.locator('#contact-email-error')).toHaveText('Please enter a valid email address.');
  });

  test('blocks submission and focuses the first invalid field', async ({ page }) => {
    await page.locator(`${form} button[type="submit"]`).click();
    await expect(page.locator('#contact-name-error')).toHaveText('Please complete this field.');
    await expect(page.locator(form).getByLabel('Your name *')).toBeFocused();
  });

  test('clears the error once the field is corrected', async ({ page }) => {
    const name = page.locator(form).getByLabel('Your name *');
    await name.click();
    await name.blur();
    await expect(name).toHaveAttribute('aria-invalid', 'true');
    await name.fill('Karim');
    await name.blur();
    await expect(name).toHaveAttribute('aria-invalid', 'false');
    await expect(page.locator('#contact-name-error')).toHaveText('');
  });

  test('submits through the configured transport', async ({ page }) => {
    const mode = await page.locator(form).getAttribute('data-mode');

    await page.locator(form).getByLabel('Your name *').fill('Karim Sokarno');
    await page.locator(form).getByLabel('Email *').fill('karim@example.com');
    await page.locator(form).getByLabel('Tell us about the journey *').fill('Antarctica, February 2027, two adults.');

    if (mode === 'web3forms') {
      await page.route('https://api.web3forms.com/submit', (route) =>
        route.fulfill({ status: 200, contentType: 'application/json', body: '{"success":true}' }),
      );
      await page.locator(`${form} button[type="submit"]`).click();
      await expect(page.locator('.form-status')).toHaveText('Thank you. We have your enquiry and will be in touch.');
    } else {
      // mailto mode navigates the window; intercept rather than let the OS handler fire.
      await page.route('**/*', (route) => route.continue());
      await page.locator(`${form} button[type="submit"]`).click();
      await expect(page.locator('.form-status')).toHaveText('Your email is ready to review in your mail app.');

      record({ suite: 'functional', route: '/contact/', browser: 'chromium' }, [
        {
          id: 'enquiry-form-not-delivering',
          severity: 'info',
          detail: 'PUBLIC_WEB3FORMS_KEY is unset, so the form opens a mail draft instead of delivering. Tracked as a placeholder in docs/CONTENT-REGISTER.md.',
          source: 'src/components/EnquiryForm.astro',
        },
      ]);
    }
  });

  test('reports a transport failure to the user', async ({ page }) => {
    const mode = await page.locator(form).getAttribute('data-mode');
    test.skip(mode !== 'web3forms', 'Only reachable when a Web3Forms key is configured.');

    await page.route('https://api.web3forms.com/submit', (route) => route.fulfill({ status: 500, body: '' }));
    await page.locator(form).getByLabel('Your name *').fill('Karim');
    await page.locator(form).getByLabel('Email *').fill('karim@example.com');
    await page.locator(form).getByLabel('Tell us about the journey *').fill('Test');
    await page.locator(`${form} button[type="submit"]`).click();
    await expect(page.locator('.form-status')).toContainText('Sorry, that did not send');
    await expect(page.locator(`${form} button[type="submit"]`)).toBeEnabled();
  });

  test('the newsletter form states its disabled condition', async ({ page }) => {
    await page.goto('/');
    const newsletter = page.locator('.newsletter-form');
    await expect(newsletter).toBeVisible();
    if (await newsletter.evaluate((el) => el.classList.contains('is-placeholder'))) {
      await expect(newsletter.locator('input')).toBeDisabled();
      await expect(newsletter.locator('button')).toBeDisabled();
    }
  });
});
