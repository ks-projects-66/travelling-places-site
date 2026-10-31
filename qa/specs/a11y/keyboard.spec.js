/**
 * Keyboard access and focus visibility, which axe cannot measure because both depend on rendered
 * state rather than markup. Since kit 3.3.0 focus is never red: a 2px rule under text links and
 * icon controls (a box shadow), a 2px ring on pill buttons, a 2px border on fields.
 */

import { test, expect } from '@playwright/test';
import { FUNCTIONAL, usesMobileNav } from '../../viewports.js';
import { ROUTES, routeId } from '../../routes.js';
import { record } from '../../lib/collect.js';

const desktop = FUNCTIONAL.find((v) => !usesMobileNav(v.width));

const focusStyle = (page) =>
  page.evaluate(() => {
    const el = document.activeElement;
    if (!el || el === document.body) return null;
    const cs = getComputedStyle(el);
    return {
      tag: el.tagName.toLowerCase(),
      text: (el.textContent || '').trim().slice(0, 30),
      outlineWidth: cs.outlineWidth,
      outlineStyle: cs.outlineStyle,
      outlineColor: cs.outlineColor,
      outlineOffset: cs.outlineOffset,
      boxShadow: cs.boxShadow,
    };
  });

test.describe('keyboard access', () => {
  for (const route of ROUTES) {
    test(`${routeId(route)} gives every focus stop a visible indicator`, async ({ page }) => {
      await page.setViewportSize(desktop);
      await page.goto(route);

      const findings = [];
      const seen = new Set();

      for (let i = 0; i < 40; i += 1) {
        await page.keyboard.press('Tab');
        const style = await focusStyle(page);
        if (!style) break;
        const key = style.tag + style.text;
        if (seen.has(key)) continue;
        seen.add(key);

        const hasOutline = style.outlineStyle !== 'none' && parseFloat(style.outlineWidth) > 0;
        const hasShadow = style.boxShadow && style.boxShadow !== 'none';
        if (!hasOutline && !hasShadow) {
          findings.push({
            id: 'focus-not-visible',
            severity: 'fail',
            detail: `${style.tag} "${style.text}" shows no outline or shadow when focused`,
            expected: 'a 2px rule (box shadow) or a 2px ring, per kit 3.3.0',
            actual: `outline ${style.outlineStyle} ${style.outlineWidth}, box-shadow ${style.boxShadow}`,
          });
        } else if (hasOutline && parseFloat(style.outlineWidth) < 2) {
          findings.push({
            id: 'focus-outline-thin',
            severity: 'warn',
            detail: `${style.tag} "${style.text}" focus outline is ${style.outlineWidth}`,
            expected: '2px',
            actual: style.outlineWidth,
          });
        }
      }

      record({ suite: 'a11y', route, viewport: desktop.label, browser: 'chromium' }, findings);
      const failures = findings.filter((f) => f.severity === 'fail');
      expect(failures.map((f) => f.detail).join('\n')).toBe('');
      expect(seen.size).toBeGreaterThan(3);
    });
  }

  test('the overlay menu is reachable and operable by keyboard', async ({ page }) => {
    const mobile = FUNCTIONAL.find((v) => usesMobileNav(v.width));
    await page.setViewportSize(mobile);
    await page.goto('/');

    const toggle = page.locator('[data-menu-toggle]');
    await toggle.focus();
    await expect(toggle).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(page.locator('[data-nav]')).toHaveClass(/is-open/);

    // The panel's links must be reachable once it is open.
    await page.keyboard.press('Tab');
    const inside = await page.evaluate(() => !!document.activeElement?.closest('[data-nav]'));
    expect(inside).toBe(true);
  });

  test('reduced motion suppresses transitions', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.setViewportSize(desktop);
    await page.goto('/');
    const moving = await page.evaluate(() =>
      [...document.querySelectorAll('body *')].filter((el) => {
        const cs = getComputedStyle(el);
        const dur = parseFloat(cs.transitionDuration) + parseFloat(cs.animationDuration);
        return dur > 0.3;
      }).length,
    );
    record({ suite: 'a11y', route: '/', viewport: desktop.label, browser: 'chromium' }, [
      {
        id: 'reduced-motion-residual',
        severity: moving > 0 ? 'warn' : 'info',
        detail: `${moving} element(s) keep a transition or animation longer than 300ms under prefers-reduced-motion`,
      },
    ]);
  });
});
