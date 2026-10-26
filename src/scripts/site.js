// Site behaviour. Ported from the first draft's src/main.js, which also carried all the
// page content. Only the interaction code survives here; content now lives in
// src/content and src/data.

const menuToggle = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-nav]');
const siteHeader = document.querySelector('[data-header]');

const menuIsOpen = () => menuToggle?.getAttribute('aria-expanded') === 'true';

const closeMenu = ({ restoreFocus = false } = {}) => {
  const wasOpen = menuIsOpen();
  menuToggle?.setAttribute('aria-expanded', 'false');
  nav?.classList.remove('is-open');
  document.body.classList.remove('menu-open');
  // Focus goes back to the control that opened the panel, but only when the panel was actually
  // open. Otherwise a stray Escape anywhere on the page would steal focus to the header.
  if (wasOpen && restoreFocus) menuToggle?.focus();
};

const openMenu = () => {
  menuToggle?.setAttribute('aria-expanded', 'true');
  nav?.classList.add('is-open');
  document.body.classList.add('menu-open');
  // Move focus into the panel so a keyboard or screen-reader user is not left behind the overlay.
  nav?.querySelector('a')?.focus();
};

menuToggle?.addEventListener('click', () => (menuIsOpen() ? closeMenu() : openMenu()));
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => closeMenu()));

// The panel covers the page, so it needs the three things any overlay owes a keyboard user:
// Escape to leave, a trap so Tab cannot wander behind it, and focus returned on close.
document.addEventListener('keydown', (event) => {
  if (!menuIsOpen()) return;

  if (event.key === 'Escape') {
    closeMenu({ restoreFocus: true });
    return;
  }

  if (event.key !== 'Tab' || !nav) return;

  // The toggle stays visible above the open panel as its Close control, so it is part of the
  // cycle: toggle, then each link in the panel, then back to the toggle.
  const focusable = [menuToggle, ...nav.querySelectorAll('a, button')].filter(
    (el) => el && !el.hasAttribute('disabled') && el.offsetParent !== null,
  );
  if (focusable.length === 0) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  const active = document.activeElement;

  if (event.shiftKey && active === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && active === last) {
    event.preventDefault();
    first.focus();
  } else if (!focusable.includes(active)) {
    // Focus escaped some other way, so bring it back rather than leaving it behind the overlay.
    event.preventDefault();
    focusable[1]?.focus();
  }
});

// Dismiss by clicking away from the links.
//
// The panel is position: fixed with inset: 0, so it covers the viewport and there is no literal
// outside to click. The equivalent gesture is a click landing on the panel's own background rather
// than on one of its children, which is the same test the enquiry dialog uses for its backdrop.
document.addEventListener('click', (event) => {
  if (!menuIsOpen()) return;
  if (menuToggle?.contains(event.target)) return;
  if (event.target === nav || !nav?.contains(event.target)) closeMenu();
});

// Above 940px the toggle is display:none and the nav is an ordinary bar. Without this, opening the
// menu on a narrow window and then widening it left body.menu-open set, so the page kept a desktop
// nav with scrolling still locked and no visible control to release it.
const desktopNav = window.matchMedia('(min-width: 941px)');
const releaseMenuOnDesktop = (event) => {
  if (event.matches) closeMenu();
};
desktopNav.addEventListener('change', releaseMenuOnDesktop);
window.addEventListener('scroll', () => siteHeader?.classList.toggle('is-sticky', window.scrollY > 24), {
  passive: true,
});

// Progressive enhancement. The newsletter opener is an ordinary mailto link, so it works with no
// JS and where <dialog> is unsupported. Where the dialog exists, the click opens it instead. (An
// enquiry dialog used the same wiring until 25 October 2026, when the main action became a plain
// link to Contact.)
const wireDialog = (target, openerSelector) => {
  if (!target) return;
  let opener = null;
  document.querySelectorAll(openerSelector).forEach((el) =>
    el.addEventListener('click', (event) => {
      if (typeof target.showModal !== 'function') return;
      event.preventDefault();
      opener = el;
      closeMenu();
      target.showModal();
      document.body.classList.add('dialog-open');
    }),
  );
  target.querySelectorAll('[data-close-dialog]').forEach((button) =>
    button.addEventListener('click', () => target.close()),
  );
  target.addEventListener('click', (event) => {
    if (event.target === target) target.close();
  });
  target.addEventListener('close', () => {
    document.body.classList.remove('dialog-open');
    // Native Escape also fires this, so focus returns however the dialog was dismissed.
    opener?.focus();
    opener = null;
  });
};
wireDialog(document.querySelector('[data-newsletter-dialog]'), '[data-open-newsletter]');

// --- enquiry form ---

const validateField = (field) => {
  const error = field.parentElement?.querySelector('.field-error');
  if (!error) return field.checkValidity();
  let message = '';
  if (field.validity.valueMissing) message = 'Please complete this field.';
  if (field.validity.typeMismatch) message = 'Please enter a valid email address.';
  error.textContent = message;
  field.setAttribute('aria-invalid', String(Boolean(message)));
  return !message;
};

// The footer's inline sign-up is step one: it takes the email address, then opens the dialog with
// that address filled in for the rest of Gina's fields (CO7). Without <dialog> or without script it
// stays a mailto form, so the address still reaches the office.
const footerSignup = document.querySelector('[data-footer-signup]');
const newsletterDialog = document.querySelector('[data-newsletter-dialog]');
footerSignup?.addEventListener('submit', (event) => {
  const email = footerSignup.querySelector('input[type="email"]');
  if (!validateField(email)) {
    event.preventDefault();
    email.focus();
    return;
  }
  if (!newsletterDialog || typeof newsletterDialog.showModal !== 'function') return;
  event.preventDefault();
  const dialogEmail = newsletterDialog.querySelector('input[name="email"]');
  if (dialogEmail) dialogEmail.value = email.value.trim();
  newsletterDialog.showModal();
  document.body.classList.add('dialog-open');
  newsletterDialog.querySelector('input[name="name"]')?.focus();
  newsletterDialog.addEventListener('close', () => email.focus(), { once: true });
});

const newsletterLines = (value) => [
  'Hello Travelling Places,',
  '',
  'Please add me to your newsletter.',
  '',
  'Name: ' + value('name'),
  'Email: ' + value('email'),
  'Address: ' + (value('address') || 'Not provided'),
  'Phone: ' + (value('phone') || 'Not provided'),
  'Luxury travel magazine: ' + (value('magazine') ? 'Yes, please' : 'No'),
  '',
  'Kind regards,',
  value('name'),
];

const sendViaMailto = (form, data) => {
  const value = (name) => String(data.get(name) || '').trim();
  const name = value('name');
  const newsletter = form.dataset.kind === 'newsletter';
  const subject = encodeURIComponent((newsletter ? 'Newsletter sign-up from ' : 'Travel enquiry from ') + name);
  const lines = newsletter ? newsletterLines(value) : [
    'Hello Travelling Places,',
    '',
    'My name is ' + name + '.',
    'Email: ' + value('email'),
    'Phone: ' + (value('phone') || 'Not provided'),
    'Timing: ' + (value('timing') || 'Flexible / not provided'),
    'Travelling party: ' + (value('party') || 'Not provided'),
    '',
    'Journey ideas:',
    value('journey'),
    '',
    'Kind regards,',
    name,
  ];
  const status = form.querySelector('.form-status');
  if (status) status.textContent = 'Your email is ready to review in your mail app.';
  window.location.href =
    'mailto:' + form.dataset.mailto + '?subject=' + subject + '&body=' + encodeURIComponent(lines.join('\n'));
};

const sendViaWeb3Forms = async (form, data) => {
  const status = form.querySelector('.form-status');
  const submit = form.querySelector('button[type="submit"]');
  if (status) status.textContent = 'Sending…';
  if (submit) submit.disabled = true;
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: data,
    });
    if (!response.ok) throw new Error('Web3Forms responded ' + response.status);
    form.reset();
    if (status) {
      status.textContent =
        form.dataset.kind === 'newsletter'
          ? 'Thank you. You are signed up for our newsletter.'
          : 'Thank you. We have your enquiry and will be in touch.';
    }
  } catch (error) {
    console.error('Enquiry submission failed', error);
    if (status) {
      status.textContent =
        'Sorry, that did not send. Please call us on 07 5545 1600 or email ' + form.dataset.mailto + '.';
    }
  } finally {
    if (submit) submit.disabled = false;
  }
};

// The newsletter sign-up shares the enquiry form's validation and delivery.
document.querySelectorAll('[data-enquiry-form], [data-newsletter-form]').forEach((form) => {
  form.querySelectorAll('[required]').forEach((field) => field.addEventListener('blur', () => validateField(field)));
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const requiredFields = [...form.querySelectorAll('[required]')];
    const valid = requiredFields.map(validateField).every(Boolean);
    if (!valid) {
      form.querySelector('[aria-invalid="true"]')?.focus();
      return;
    }
    const data = new FormData(form);
    if (form.dataset.mode === 'web3forms') sendViaWeb3Forms(form, data);
    else sendViaMailto(form, data);
  });
});

// --- home hero carousel ---

/**
 * The home hero's photographs advance every 6 seconds beneath a fixed title, with previous and
 * next buttons (owner's decision, 25 October 2026: docs/WORK-PLAN.md, Q1). This matches the brand
 * kit's own carousel timing. Since 26 October 2026 the buttons sit together bottom right with a mark
 * per photograph; the active one stands solid, so the visitor can see where they are in the sequence.
 *
 * WCAG 2.2.2 asks for a way to pause content that moves for more than five seconds. The arrows
 * give control but are not a pause, so the mitigations stand alongside them: it holds while the
 * pointer is over the title block or an arrow, holds while anything inside has keyboard focus,
 * does not run while the tab is hidden, and never auto-advances under prefers-reduced-motion.
 *
 * Hover holds only on [data-carousel-hold] (the title, the lede, the actions and the arrows), not
 * the whole hero. The hero fills most of the first screen, so a whole-hero hover hold would stop
 * it for anyone whose pointer happened to rest on the photograph, which is most desktop visitors.
 * Only a mouse holds: a tap fires an emulated hover that never ends, which froze the sequence on
 * phones. Focus holds only when it is keyboard focus (:focus-visible); a mouse click leaves the
 * button focused, and treating that as a hold stopped the photograph the visitor had just chosen
 * from ever timing out.
 */

const SLIDE_MS = 6000;

const carousel = document.querySelector('[data-carousel]');
if (carousel) {
  const slides = [...carousel.querySelectorAll('[data-slide]')];
  const marks = [...carousel.querySelectorAll('[data-progress]')];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let index = 0;
  let timer;
  let held = false;

  const showSlide = (next) => {
    index = (next + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      const active = i === index;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', String(!active));
    });
    marks.forEach((mark, i) => mark.classList.toggle('is-active', i === index));
  };

  const stop = () => window.clearInterval(timer);
  const start = () => {
    stop();
    const focused = carousel.matches(':has(:focus-visible)');
    if (!held && !focused && !reduceMotion.matches && !document.hidden) {
      timer = window.setInterval(() => showSlide(index + 1), SLIDE_MS);
    }
  };

  // A step by the visitor restarts the interval, so the photograph they chose gets its full time.
  const step = (by) => {
    showSlide(index + by);
    start();
  };

  carousel.querySelector('[data-carousel-previous]')?.addEventListener('click', () => step(-1));
  carousel.querySelector('[data-carousel-next]')?.addEventListener('click', () => step(1));

  carousel.querySelectorAll('[data-carousel-hold]').forEach((el) => {
    el.addEventListener('pointerenter', (event) => {
      if (event.pointerType !== 'mouse') return;
      held = true;
      stop();
    });
    el.addEventListener('pointerleave', (event) => {
      if (event.pointerType !== 'mouse') return;
      held = false;
      start();
    });
  });

  carousel.addEventListener('focusin', () => {
    if (carousel.matches(':has(:focus-visible)')) stop();
  });
  // focusout fires before focus lands on the next element, so wait a frame to see where it went.
  carousel.addEventListener('focusout', () => window.requestAnimationFrame(start));
  carousel.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') step(-1);
    if (event.key === 'ArrowRight') step(1);
  });
  document.addEventListener('visibilitychange', start);
  reduceMotion.addEventListener('change', start);

  showSlide(0);
  start();
}

// --- journal "Load more" ---
//
// Rows past the first page are server-rendered with `hidden` and marked data-beyond-page. The
// button reveals them all. (A category filter lived here until 25 October 2026; with five
// articles it was removed at the client's request.)

const moreButton = document.querySelector('[data-load-more]');
moreButton?.addEventListener('click', () => {
  document.querySelectorAll('[data-beyond-page]').forEach((row) => {
    row.hidden = false;
  });
  moreButton.hidden = true;
});
