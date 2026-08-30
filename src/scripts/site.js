// Site behaviour. Ported from the first draft's src/main.js, which also carried all the
// page content. Only the interaction code survives here; content now lives in
// src/content and src/data.

const menuToggle = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-nav]');
const siteHeader = document.querySelector('[data-header]');
const dialog = document.querySelector('[data-enquiry-dialog]');

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

  const focusable = [...nav.querySelectorAll('a, button')].filter(
    (el) => !el.hasAttribute('disabled') && el.offsetParent !== null,
  );
  if (focusable.length === 0) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  const active = document.activeElement;

  if (event.shiftKey && (active === first || active === menuToggle)) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && active === last) {
    event.preventDefault();
    first.focus();
  } else if (!nav.contains(active) && active !== menuToggle) {
    // Focus escaped some other way, so bring it back rather than leaving it behind the overlay.
    event.preventDefault();
    first.focus();
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

// Progressive enhancement. The opener is an ordinary link to /contact/, so it works with no JS,
// on the contact page itself where no dialog is rendered, and if <dialog> is unsupported. Where
// the dialog does exist, the click opens it instead of making the visitor leave the page.
let enquiryOpener = null;
document.querySelectorAll('[data-open-enquiry]').forEach((opener) =>
  opener.addEventListener('click', (event) => {
    if (!dialog || typeof dialog.showModal !== 'function') return;
    event.preventDefault();
    enquiryOpener = opener;
    closeMenu();
    dialog.showModal();
    document.body.classList.add('dialog-open');
  }),
);
const closeDialog = () => {
  dialog?.close();
  document.body.classList.remove('dialog-open');
};
document.querySelector('[data-close-enquiry]')?.addEventListener('click', closeDialog);
dialog?.addEventListener('click', (event) => {
  if (event.target === dialog) closeDialog();
});
dialog?.addEventListener('close', () => {
  document.body.classList.remove('dialog-open');
  // Native Escape also fires this, so focus returns however the dialog was dismissed.
  enquiryOpener?.focus();
  enquiryOpener = null;
});

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

const sendViaMailto = (form, data) => {
  const value = (name) => String(data.get(name) || '').trim();
  const name = value('name');
  const subject = encodeURIComponent('Travel enquiry from ' + name);
  const lines = [
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
    if (status) status.textContent = 'Thank you. We have your enquiry and will be in touch.';
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

document.querySelectorAll('[data-enquiry-form]').forEach((form) => {
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

// --- destination carousel ---

/**
 * Advances on its own every 3 seconds. There is no visible control bar: the dots, the
 * pause button and the arrows were removed by request.
 *
 * WCAG 2.2.2 asks for a way to pause content that moves for more than five seconds. With the
 * visible control gone, the mitigations are: it stops while the pointer is over it, it stops
 * while anything inside it has keyboard focus, arrow keys still step through slides, it does
 * not run while the tab is hidden, and it never auto-advances at all under
 * prefers-reduced-motion. That is weaker than a real pause button; if the missing control
 * becomes a problem, add one back rather than lengthening the interval.
 */

const SLIDE_MS = 3000;

const carousel = document.querySelector('[data-carousel]');
if (carousel) {
  const slides = [...carousel.querySelectorAll('[data-slide]')];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let index = 0;
  let timer;

  const showSlide = (next) => {
    index = (next + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      const active = i === index;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', String(!active));
    });
  };

  const stop = () => window.clearInterval(timer);
  const start = () => {
    stop();
    if (!reduceMotion.matches && !document.hidden) {
      timer = window.setInterval(() => showSlide(index + 1), SLIDE_MS);
    }
  };

  carousel.addEventListener('mouseenter', stop);
  carousel.addEventListener('mouseleave', start);
  carousel.addEventListener('focusin', stop);
  carousel.addEventListener('focusout', start);
  carousel.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') showSlide(index - 1);
    if (event.key === 'ArrowRight') showSlide(index + 1);
  });
  document.addEventListener('visibilitychange', start);
  reduceMotion.addEventListener('change', start);

  showSlide(0);
  start();
}

// --- journal year filter ---

document.querySelectorAll('[data-filter]').forEach((button) =>
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach((item) => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    let visible = 0;
    document.querySelectorAll('[data-year-item]').forEach((article) => {
      const show = filter === 'all' || article.dataset.yearItem === filter;
      article.hidden = !show;
      if (show) visible += 1;
    });
    const empty = document.querySelector('[data-empty-state]');
    if (empty) empty.hidden = visible !== 0;
  }),
);
