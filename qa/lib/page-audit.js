/**
 * One in-page audit, run at every viewport on every route.
 *
 * Severity is deliberate. `fail` is a defect the suite should go red on. `warn` is a heuristic
 * that gives useful signal but also produces false positives, so it is reported and never
 * enforced. Softening a `fail` into a `warn` to make a run green is the thing this file exists
 * to prevent.
 */

export const TOUCH_TARGET_MIN = 44;

export async function auditPage(page) {
  return page.evaluate(() => {
    const findings = [];
    const add = (id, severity, detail) => findings.push({ id, severity, detail });

    const de = document.documentElement;
    const vw = de.clientWidth;
    const vh = window.innerHeight;
    const px = (n) => Math.round(n * 10) / 10;

    const visible = (el) => {
      const cs = getComputedStyle(el);
      if (cs.display === 'none' || cs.visibility === 'hidden' || cs.opacity === '0') return false;
      const r = el.getBoundingClientRect();
      return r.width > 0 && r.height > 0;
    };

    const describe = (el) => {
      const raw = typeof el.className === 'string' ? el.className.trim() : '';
      const cls = raw ? '.' + raw.split(/\s+/).slice(0, 2).join('.') : '';
      const id = el.id ? '#' + el.id : '';
      return el.tagName.toLowerCase() + id + cls;
    };

    // 1. Horizontal overflow. The page sets html { overflow-x: clip }, which suppresses the
    //    scrollbar but not the geometry, so scrollWidth remains the honest measure.
    const overflow = de.scrollWidth - de.clientWidth;
    if (overflow > 1) {
      add('horizontal-overflow', 'fail', 'document scrollWidth exceeds viewport by ' + px(overflow) + 'px');
    }

    // 2. Elements past the document width.
    //
    //    DESIGN.md deliberately runs two images to the viewport edge out of the 1200px shell, and
    //    html { overflow-x: clip } is what makes that safe. So an element extending past the
    //    document is only a defect when it also produces real overflow, which check 1 detects.
    //    Without that pairing this rule fires on the intended design at every viewport.
    const docWidth = Math.max(de.scrollWidth, vw);
    const outside = [];
    for (const el of document.querySelectorAll('body *')) {
      if (!visible(el)) continue;
      const r = el.getBoundingClientRect();
      if (r.right > docWidth + 1 || r.left < -1) {
        outside.push(describe(el) + ' spans ' + px(r.left) + ' to ' + px(r.right));
      }
    }
    if (outside.length) {
      add(
        'element-outside-viewport',
        overflow > 1 ? 'fail' : 'info',
        outside.length + ' element(s) past a ' + docWidth + 'px document, first: ' + outside[0] +
          (overflow > 1 ? '' : ' (contained by overflow-x: clip, intended full-bleed)'),
      );
    }

    // 3. Broken images and missing alt.
    for (const img of document.querySelectorAll('img')) {
      if (!img.complete || img.naturalWidth === 0) {
        add('image-failed-to-load', 'fail', img.getAttribute('src') || '(no src)');
      }
      if (!img.hasAttribute('alt')) {
        add('image-missing-alt', 'fail', describe(img) + ' ' + (img.getAttribute('src') || ''));
      }
    }

    // 4. Aspect ratio. Only meaningful where the browser is not deliberately reframing the image,
    //    so object-fit cover and contain are skipped rather than reported as distortion.
    for (const img of document.querySelectorAll('img')) {
      if (!visible(img) || !img.naturalWidth || !img.naturalHeight) continue;
      const fit = getComputedStyle(img).objectFit;
      if (fit === 'cover' || fit === 'contain') continue;
      const r = img.getBoundingClientRect();
      const natural = img.naturalWidth / img.naturalHeight;
      const rendered = r.width / r.height;
      const drift = Math.abs(natural - rendered) / natural;
      if (drift > 0.05) {
        const file = (img.currentSrc || img.src || '').split('/').pop();
        add(
          'image-aspect-distorted',
          'fail',
          file + ' stretched ' + Math.round(drift * 100) + '% (natural ' + natural.toFixed(3) +
            ', rendered ' + rendered.toFixed(3) + ', box ' + Math.round(r.width) + 'x' + Math.round(r.height) +
            ', object-fit ' + fit + ', aspect-ratio ' + getComputedStyle(img).aspectRatio + ')',
        );
      }
    }

    // 5. Container width. Every .shell should agree at a given viewport and none may pass 1200px.
    const shells = [...document.querySelectorAll('.shell')].filter(visible);
    const widths = [...new Set(shells.map((s) => Math.round(s.getBoundingClientRect().width)))];
    if (widths.length > 1) {
      add('container-width-inconsistent', 'warn', '.shell renders at ' + widths.join(', ') + 'px on one page');
    }
    if (widths.some((w) => w > 1200)) {
      add('container-exceeds-max', 'fail', '.shell exceeds the 1200px content max: ' + widths.join(', ') + 'px');
    }

    // 6. Header. It is sticky, so it legitimately passes over content on scroll. What matters is
    //    that it does not cover the first heading at rest.
    const header = document.querySelector('[data-header]');
    const main = document.querySelector('#main');
    if (header && main) {
      const hr = header.getBoundingClientRect();
      const firstHeading = main.querySelector('h1, h2');
      if (firstHeading && visible(firstHeading)) {
        const fr = firstHeading.getBoundingClientRect();
        if (fr.top < hr.bottom - 1 && fr.bottom > hr.top) {
          add('header-covers-heading', 'fail', 'header bottom ' + px(hr.bottom) + ' overlaps first heading top ' + px(fr.top));
        }
      }
    }

    // 7. Navigation labels colliding.
    const navLinks = [...document.querySelectorAll('[data-nav] > a')].filter(visible);
    for (let i = 0; i < navLinks.length - 1; i += 1) {
      const a = navLinks[i].getBoundingClientRect();
      const b = navLinks[i + 1].getBoundingClientRect();
      if (Math.abs(a.top - b.top) < 4 && b.left - a.right < 4) {
        add('nav-labels-collide', 'fail', '"' + navLinks[i].textContent.trim() + '" and "' + navLinks[i + 1].textContent.trim() + '" are ' + px(b.left - a.right) + 'px apart');
      }
    }

    // 8. Buttons wrapping onto extra lines.
    for (const btn of document.querySelectorAll('.button')) {
      if (!visible(btn)) continue;
      const cs = getComputedStyle(btn);
      const lh = parseFloat(cs.lineHeight) || parseFloat(cs.fontSize) * 1.4;
      const inner = btn.getBoundingClientRect().height - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
      if (inner > lh * 1.8) {
        add('button-wraps', 'warn', describe(btn) + ' "' + btn.textContent.trim().slice(0, 30) + '" wraps to ' + Math.round(inner / lh) + ' lines');
      }
    }

    // 9. Form fields escaping their container.
    for (const form of document.querySelectorAll('form, .newsletter-form')) {
      const fr = form.getBoundingClientRect();
      for (const field of form.querySelectorAll('input, textarea, select, button')) {
        if (!visible(field)) continue;
        const r = field.getBoundingClientRect();
        if (r.right > fr.right + 1 || r.left < fr.left - 1) {
          add('field-overflows-form', 'fail', describe(field) + ' extends past its container');
        }
      }
    }

    // 10. Touch targets. The kit sets --tp-control-min to 44px, so this is the kit's own rule.
    const seen = new Set();
    for (const el of document.querySelectorAll('a, button, input:not([type=hidden]), select, textarea, [role=button]')) {
      if (!visible(el)) continue;
      const r = el.getBoundingClientRect();
      if (r.width < 44 || r.height < 44) {
        const key = describe(el) + Math.round(r.width) + 'x' + Math.round(r.height);
        if (seen.has(key)) continue;
        seen.add(key);
        add('touch-target-small', 'warn', describe(el) + ' "' + (el.textContent || '').trim().slice(0, 24) + '" is ' + px(r.width) + 'x' + px(r.height));
      }
    }

    // 11. Hero heading line count, and an orphaned last word measured from real line boxes
    //     rather than guessed from a character count.
    const h1 = document.querySelector('h1');
    if (h1 && visible(h1)) {
      const cs = getComputedStyle(h1);
      const lh = parseFloat(cs.lineHeight) || parseFloat(cs.fontSize) * 1.08;
      const lines = Math.round(h1.getBoundingClientRect().height / lh);
      if (lines > 2) {
        add('hero-heading-lines', 'fail', 'h1 renders ' + lines + ' lines at ' + cs.fontSize + ': "' + h1.textContent.trim().slice(0, 60) + '"');
      }
      const range = document.createRange();
      range.selectNodeContents(h1);
      const rects = [...range.getClientRects()].filter((r) => r.width > 0);
      if (rects.length > 1 && lines > 1) {
        const last = rects[rects.length - 1];
        if (last.width < 90 && h1.textContent.trim().split(/\s+/).length > 2) {
          add('heading-orphan-word', 'warn', 'h1 last line is ' + px(last.width) + 'px wide, likely a single orphaned word');
        }
      }
    }

    // 12. Reading measure. The kit limits body copy to 68ch. Meta labels, placeholder notes and
    //     form hints are short single-line strings whose box width says nothing about measure, so
    //     they are excluded rather than counted as over-long prose.
    const notProse = '.story-meta, .role, .roster-role, .placeholder-note, .field-error, .form-status, .footer-legal';
    for (const p of document.querySelectorAll('.article-prose p, main p')) {
      if (!visible(p) || p.matches(notProse) || p.closest(notProse)) continue;
      if (p.textContent.trim().split(/\s+/).length < 20) continue;
      const cs = getComputedStyle(p);
      const chars = p.getBoundingClientRect().width / (parseFloat(cs.fontSize) * 0.5);
      if (chars > 90) {
        add('line-length-long', 'warn', describe(p) + ' measures about ' + Math.round(chars) + 'ch against a 68ch guide');
        break;
      }
    }

    // 13. Fixed elements sitting over the whole page at rest.
    for (const el of document.querySelectorAll('body *')) {
      if (!visible(el)) continue;
      const cs = getComputedStyle(el);
      if (cs.position !== 'fixed') continue;
      const r = el.getBoundingClientRect();
      if (r.width >= vw * 0.9 && r.height >= vh * 0.9 && cs.pointerEvents !== 'none') {
        add('fixed-element-covers-page', 'fail', describe(el) + ' covers the viewport at rest');
      }
    }

    return { viewport: { width: vw, height: vh }, scrollWidth: de.scrollWidth, findings };
  });
}

/**
 * The overlay menu, audited only where it exists. Above 940px the toggle is display:none and the
 * nav is an ordinary bar, so running these there would test nothing.
 */
export async function auditOpenMenu(page) {
  return page.evaluate(() => {
    const findings = [];
    const nav = document.querySelector('[data-nav]');
    if (!nav) return { findings: [{ id: 'menu-missing', severity: 'fail', detail: 'no [data-nav] present' }] };

    const r = nav.getBoundingClientRect();
    const vw = document.documentElement.clientWidth;
    const vh = window.innerHeight;

    if (r.left < -1 || r.right > vw + 1) {
      findings.push({
        id: 'menu-outside-viewport',
        severity: 'fail',
        detail: 'nav spans ' + Math.round(r.left) + ' to ' + Math.round(r.right) + ' in a ' + vw + 'px viewport',
      });
    }
    if (r.height > vh + 1 && getComputedStyle(nav).overflowY === 'visible') {
      findings.push({
        id: 'menu-taller-than-viewport',
        severity: 'fail',
        detail: 'nav is ' + Math.round(r.height) + 'px tall in a ' + vh + 'px viewport with no scroll',
      });
    }
    return { findings };
  });
}
