const { chromium } = require('playwright');
const { resolve } = require('node:path');

const providedUrl = process.argv.slice(2).find((argument) => /^https?:\/\//.test(argument));
const baseUrl = providedUrl || process.env.BRAND_KIT_URL || 'http://127.0.0.1:4322/brand-kit/';
const outputDir = resolve(__dirname, '..', 'qa');
const failures = [];

function assert(condition, message) {
  if (!condition) failures.push(message);
}

(async () => {
  const browser = await chromium.launch({ headless: true });

  for (const viewport of [
    { name: 'desktop', width: 1440, height: 1000 },
    { name: 'mobile', width: 375, height: 812 },
  ]) {
    const page = await browser.newPage({ viewport: { width: viewport.width, height: viewport.height } });
    const consoleErrors = [];
    const pageErrors = [];
    const failedRequests = [];
    page.on('console', (message) => {
      if (message.type() === 'error') consoleErrors.push(message.text());
    });
    page.on('pageerror', (error) => pageErrors.push(error.message));
    page.on('requestfailed', (request) => failedRequests.push(`${request.method()} ${request.url()}`));

    const response = await page.goto(baseUrl, { waitUntil: 'networkidle' });
    assert(response?.ok(), `${viewport.name}: page response was not successful`);
    assert((await page.locator('body').innerText()).trim().length > 1000, `${viewport.name}: page body is unexpectedly empty`);
    assert(await page.locator('h1').count() === 1, `${viewport.name}: page must contain one h1`);
    assert(await page.locator('h1').isVisible(), `${viewport.name}: h1 is not visible`);

    const metrics = await page.evaluate(() => {
      const elements = [...document.querySelectorAll('body *')];
      const images = [...document.images];
      const controls = [...document.querySelectorAll('a, button')];
      const labels = [...document.querySelectorAll('input, textarea, select')].map((field) => ({
        id: field.id,
        labelled: Boolean(field.id && document.querySelector(`label[for="${CSS.escape(field.id)}"]`)),
      }));
      return {
        horizontalOverflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
        brokenImages: images.filter((image) => !image.complete || image.naturalWidth === 0).map((image) => image.src),
        missingAlt: images.filter((image) => !image.hasAttribute('alt')).map((image) => image.src),
        unnamedControls: controls.filter((control) => {
          const name = control.getAttribute('aria-label') || control.textContent || control.getAttribute('value');
          return !String(name || '').trim();
        }).map((control) => control.outerHTML.slice(0, 120)),
        unlabelledFields: labels.filter((field) => !field.labelled),
        italicElements: elements.filter((element) => getComputedStyle(element).fontStyle !== 'normal').length,
        maximumFontSize: Math.max(...elements.map((element) => Number.parseFloat(getComputedStyle(element).fontSize) || 0)),
        heroLines: (() => {
          const heading = document.querySelector('.kit-hero h1');
          if (!heading) return 0;
          const lineHeight = Number.parseFloat(getComputedStyle(heading).lineHeight);
          return Math.round(heading.getBoundingClientRect().height / lineHeight);
        })(),
        carouselCaptionColour: getComputedStyle(document.querySelector('.tp-carousel-caption h3')).color,
        textButtonIcons: document.querySelectorAll('.tp-button svg').length,
        buttonRadius: getComputedStyle(document.querySelector('.tp-button')).borderRadius,
        disabledBorderColour: getComputedStyle(document.querySelector('.tp-button:disabled')).borderColor,
        overlay: Boolean(document.querySelector('.vite-error-overlay, #webpack-dev-server-client-overlay')),
      };
    });

    assert(metrics.horizontalOverflow <= 1, `${viewport.name}: horizontal overflow is ${metrics.horizontalOverflow}px`);
    assert(metrics.brokenImages.length === 0, `${viewport.name}: broken images ${metrics.brokenImages.join(', ')}`);
    assert(metrics.missingAlt.length === 0, `${viewport.name}: images missing alt text ${metrics.missingAlt.join(', ')}`);
    assert(metrics.unnamedControls.length === 0, `${viewport.name}: unnamed controls found`);
    assert(metrics.unlabelledFields.length === 0, `${viewport.name}: unlabelled form fields found`);
    assert(metrics.italicElements === 0, `${viewport.name}: computed italic text found`);
    assert(metrics.maximumFontSize <= 56, `${viewport.name}: computed font size exceeds 56px`);
    assert(metrics.heroLines <= 2, `${viewport.name}: hero heading occupies ${metrics.heroLines} lines`);
    assert(metrics.carouselCaptionColour === 'rgb(255, 255, 255)', `${viewport.name}: carousel caption is not white`);
    assert(metrics.textButtonIcons === 0, `${viewport.name}: ordinary text buttons contain icons`);
    assert(Number.parseFloat(metrics.buttonRadius) >= 24, `${viewport.name}: text buttons are not pill shaped`);
    assert(metrics.disabledBorderColour === 'rgb(39, 43, 56)', `${viewport.name}: disabled button border is not ink`);
    assert(!metrics.overlay, `${viewport.name}: development error overlay detected`);
    assert(consoleErrors.length === 0, `${viewport.name}: console errors ${consoleErrors.join(' | ')}`);
    assert(pageErrors.length === 0, `${viewport.name}: page errors ${pageErrors.join(' | ')}`);
    assert(failedRequests.length === 0, `${viewport.name}: failed requests ${failedRequests.join(' | ')}`);

    const pauseControl = page.locator('[data-carousel-pause]');
    if (await pauseControl.getAttribute('aria-pressed') !== 'true') await pauseControl.click();
    await page.locator('[data-carousel-dot="0"]').click();
    await page.waitForTimeout(800);

    await page.screenshot({ path: resolve(outputDir, `${viewport.name}.png`), fullPage: true });

    if (viewport.name === 'desktop') {
      const firstCaption = await page.locator('[data-slide].is-active h3').innerText();
      await page.locator('[data-carousel-next]').click();
      const nextCaption = await page.locator('[data-slide].is-active h3').innerText();
      assert(firstCaption !== nextCaption, 'desktop: carousel next control did not change slides');
      assert(await pauseControl.getAttribute('aria-pressed') === 'true', 'desktop: carousel pause state did not update');
    }

    if (viewport.name === 'mobile') {
      await page.locator('[data-menu-toggle]').click();
      assert(await page.locator('[data-menu-toggle]').getAttribute('aria-expanded') === 'true', 'mobile: menu did not open');
      assert(await page.locator('[data-menu]').isVisible(), 'mobile: menu panel is not visible');
      await page.keyboard.press('Escape');
      assert(await page.locator('[data-menu-toggle]').getAttribute('aria-expanded') === 'false', 'mobile: menu did not close with Escape');
    }

    await page.locator('[data-demo-form] button[type="submit"]').click();
    assert(await page.locator('[data-demo-form] [aria-invalid="true"]').count() >= 3, `${viewport.name}: required-field validation did not run`);
    await page.close();
  }

  await browser.close();

  if (failures.length) {
    console.error(`Browser QA failed with ${failures.length} issue${failures.length === 1 ? '' : 's'}.`);
    failures.forEach((failure) => console.error(failure));
    process.exit(1);
  }

  console.log('Browser QA passed at 1440px and 375px. Rendering, controls, assets, and required-field validation are working.');
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
