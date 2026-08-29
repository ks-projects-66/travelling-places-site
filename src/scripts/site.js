// Site behaviour. Ported from the first draft's src/main.js, which also carried all the
// page content. Only the interaction code survives here; content now lives in
// src/content and src/data.

const menuToggle = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-nav]');
const siteHeader = document.querySelector('[data-header]');
const dialog = document.querySelector('[data-enquiry-dialog]');

const closeMenu = () => {
  menuToggle?.setAttribute('aria-expanded', 'false');
  nav?.classList.remove('is-open');
  document.body.classList.remove('menu-open');
};

menuToggle?.addEventListener('click', () => {
  const willOpen = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(willOpen));
  nav?.classList.toggle('is-open', willOpen);
  document.body.classList.toggle('menu-open', willOpen);
});
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
window.addEventListener('scroll', () => siteHeader?.classList.toggle('is-sticky', window.scrollY > 24), {
  passive: true,
});

document.querySelectorAll('[data-open-enquiry]').forEach((button) =>
  button.addEventListener('click', () => {
    closeMenu();
    dialog?.showModal();
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
dialog?.addEventListener('close', () => document.body.classList.remove('dialog-open'));

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

const carousel = document.querySelector('[data-carousel]');
if (carousel) {
  const slides = [...carousel.querySelectorAll('[data-slide]')];
  const dots = [...carousel.querySelectorAll('[data-carousel-dot]')];
  const playButton = carousel.querySelector('[data-carousel-play]');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let index = 0;
  let paused = reduceMotion.matches;
  let timer;

  const showSlide = (next) => {
    index = (next + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      const active = i === index;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', String(!active));
    });
    dots.forEach((dot, i) => {
      const active = i === index;
      dot.classList.toggle('is-active', active);
      dot.setAttribute('aria-pressed', String(active));
    });
  };
  const stop = () => window.clearInterval(timer);
  const start = () => {
    stop();
    if (!paused && !document.hidden) timer = window.setInterval(() => showSlide(index + 1), 6000);
  };
  const playIcon = playButton.querySelector('use');
  const setPaused = (value) => {
    paused = value;
    // The control is icon-only, so swap the sprite symbol rather than the text content,
    // which would delete the SVG.
    playIcon?.setAttribute(
      'href',
      `/brand-kit-v2/assets/icons/ui-icons.svg#icon-${paused ? 'play' : 'pause'}`,
    );
    playButton.setAttribute('aria-label', paused ? 'Play carousel' : 'Pause carousel');
    playButton.setAttribute('aria-pressed', String(paused));
    start();
  };

  carousel.querySelector('[data-carousel-next]').addEventListener('click', () => {
    showSlide(index + 1);
    start();
  });
  carousel.querySelector('[data-carousel-prev]').addEventListener('click', () => {
    showSlide(index - 1);
    start();
  });
  dots.forEach((dot, i) =>
    dot.addEventListener('click', () => {
      showSlide(i);
      start();
    }),
  );
  playButton.addEventListener('click', () => setPaused(!paused));
  carousel.addEventListener('mouseenter', stop);
  carousel.addEventListener('mouseleave', start);
  carousel.addEventListener('focusin', stop);
  carousel.addEventListener('focusout', start);
  carousel.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') showSlide(index - 1);
    if (event.key === 'ArrowRight') showSlide(index + 1);
  });
  document.addEventListener('visibilitychange', start);
  setPaused(paused);
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
