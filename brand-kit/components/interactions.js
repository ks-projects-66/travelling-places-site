const defaultSprite = new URL('../assets/icons/ui-icons.svg', import.meta.url).href;

const iconHref = (name, sprite = defaultSprite) => `${sprite}#icon-${name}`;

export function initMenus(root = document, sprite = defaultSprite) {
  root.querySelectorAll('[data-menu-toggle]').forEach((toggle) => {
    const menuId = toggle.getAttribute('aria-controls');
    const menu = menuId ? document.getElementById(menuId) : null;
    if (!menu) return;

    const setMenu = (open) => {
      menu.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.querySelector('use')?.setAttribute('href', iconHref(open ? 'close' : 'menu', sprite));
      const label = toggle.querySelector('.sr-only');
      if (label) label.textContent = open ? 'Close menu' : 'Open menu';
    };

    toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
    menu.addEventListener('click', (event) => {
      if (event.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        toggle.focus();
      }
    });
  });
}

export function initCarousels(root = document, sprite = defaultSprite) {
  root.querySelectorAll('[data-carousel]').forEach((carousel) => {
    const slides = [...carousel.querySelectorAll('[data-slide]')];
    const dots = [...carousel.querySelectorAll('[data-carousel-dot]')];
    const previous = carousel.querySelector('[data-carousel-previous]');
    const next = carousel.querySelector('[data-carousel-next]');
    const pause = carousel.querySelector('[data-carousel-pause]');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let active = 0;
    let paused = reducedMotion;
    let timer;
    let touchStart = 0;

    if (slides.length < 2) return;
    carousel.tabIndex = 0;

    const render = (index) => {
      active = (index + slides.length) % slides.length;
      slides.forEach((slide, slideIndex) => {
        const selected = slideIndex === active;
        slide.classList.toggle('is-active', selected);
        slide.setAttribute('aria-hidden', String(!selected));
      });
      dots.forEach((dot, dotIndex) => {
        const selected = dotIndex === active;
        dot.classList.toggle('is-active', selected);
        dot.setAttribute('aria-pressed', String(selected));
      });
    };

    const stopTimer = () => window.clearInterval(timer);

    const startTimer = () => {
      stopTimer();
      if (!paused && !document.hidden) timer = window.setInterval(() => render(active + 1), 6000);
    };

    const setPaused = (value) => {
      paused = value;
      pause?.setAttribute('aria-pressed', String(paused));
      pause?.setAttribute('aria-label', paused ? 'Play carousel' : 'Pause carousel');
      pause?.querySelector('use')?.setAttribute('href', iconHref(paused ? 'play' : 'pause', sprite));
      startTimer();
    };

    previous?.addEventListener('click', () => {
      render(active - 1);
      startTimer();
    });
    next?.addEventListener('click', () => {
      render(active + 1);
      startTimer();
    });
    pause?.addEventListener('click', () => setPaused(!paused));
    dots.forEach((dot, index) => dot.addEventListener('click', () => {
      render(index);
      startTimer();
    }));

    carousel.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') render(active - 1);
      if (event.key === 'ArrowRight') render(active + 1);
    });
    carousel.addEventListener('touchstart', (event) => {
      touchStart = event.changedTouches[0]?.clientX ?? 0;
      stopTimer();
    }, { passive: true });
    carousel.addEventListener('touchend', (event) => {
      const touchEnd = event.changedTouches[0]?.clientX ?? touchStart;
      const distance = touchEnd - touchStart;
      if (Math.abs(distance) > 48) render(active + (distance < 0 ? 1 : -1));
      startTimer();
    }, { passive: true });
    carousel.addEventListener('pointerenter', stopTimer);
    carousel.addEventListener('pointerleave', startTimer);
    carousel.addEventListener('focusin', stopTimer);
    carousel.addEventListener('focusout', startTimer);
    document.addEventListener('visibilitychange', startTimer);

    render(0);
    setPaused(paused);
  });
}

export function initForms(root = document) {
  root.querySelectorAll('[data-enquiry-form], [data-demo-form]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      if (form.hasAttribute('data-demo-form')) event.preventDefault();
      const requiredFields = [...form.querySelectorAll('[required]')];
      let firstInvalid;

      requiredFields.forEach((field) => {
        const invalid = !field.validity.valid;
        field.setAttribute('aria-invalid', String(invalid));
        const describedBy = field.getAttribute('aria-describedby')?.split(' ')[0];
        const error = document.getElementById(describedBy || `${field.id}-error`);
        if (error) error.textContent = invalid ? 'Please complete this field.' : '';
        if (invalid && !firstInvalid) firstInvalid = field;
      });

      if (firstInvalid) {
        event.preventDefault();
        firstInvalid.focus();
      }
    });
  });
}
