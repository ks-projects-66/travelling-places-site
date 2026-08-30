/**
 * Visual regression.
 *
 * Scenarios are generated from the same routes.js and viewports.js everything else uses, so a new
 * page gets a baseline without editing this file.
 *
 * Tiering: full pages at six viewports, components at three. The full nineteen still run in the
 * responsive suite, which measures geometry without storing a pixel. That keeps roughly 90
 * reference images in the repo instead of roughly 400, on a repository that is public.
 *
 * misMatchThreshold stays at 0.1. Raising it to clear a diff would defeat the point of the suite.
 */

const { VISUAL_PAGES, VISUAL_COMPONENTS } = require('../viewports.js');
const { ROUTES, routeId } = require('../routes.js');

const BASE = process.env.BACKSTOP_URL || 'http://127.0.0.1:4322';
const vp = (list) => list.map((v) => ({ label: v.label, width: v.width, height: v.height }));

const DESKTOP = VISUAL_COMPONENTS.filter((v) => v.width > 940);
const OVERLAY = VISUAL_COMPONENTS.filter((v) => v.width <= 940);

const base = {
  delay: 400,
  misMatchThreshold: 0.1,
  requireSameDimensions: true,
  readySelector: 'body',
};

/** Full pages. */
const pages = ROUTES.map((route) => ({
  ...base,
  label: `page-${routeId(route)}`,
  url: `${BASE}${route}`,
  viewports: vp(VISUAL_PAGES),
  delay: 600,
}));

/** Components, each pinned to the viewports where it actually exists. */
const components = [
  { label: 'header', url: '/', selectors: ['[data-header]'], viewports: VISUAL_COMPONENTS },
  { label: 'nav-desktop', url: '/', selectors: ['[data-nav]'], viewports: DESKTOP },
  { label: 'menu-closed', url: '/', selectors: ['[data-header]'], viewports: OVERLAY },
  {
    label: 'menu-open',
    url: '/',
    selectors: ['[data-nav]'],
    viewports: OVERLAY,
    clickSelector: '[data-menu-toggle]',
    postInteractionWait: 500,
  },
  { label: 'footer', url: '/', selectors: ['.site-footer'], viewports: VISUAL_COMPONENTS },
  { label: 'hero-photo', url: '/', selectors: ['.page-hero'], viewports: VISUAL_COMPONENTS },
  { label: 'hero-navy', url: '/journal/', selectors: ['.page-hero'], viewports: VISUAL_COMPONENTS },
  { label: 'carousel', url: '/', selectors: ['[data-carousel]'], viewports: VISUAL_COMPONENTS },
  { label: 'journal-cards', url: '/journal/', selectors: ['.article-list'], viewports: VISUAL_COMPONENTS },
  { label: 'team-cards', url: '/who-we-are/', selectors: ['.roster-list'], viewports: VISUAL_COMPONENTS },
  { label: 'contact-form', url: '/contact/', selectors: ['.enquiry-form'], viewports: VISUAL_COMPONENTS },
  // Button states. Disabled exists only on the unconfigured newsletter placeholder.
  { label: 'button-normal', url: '/', selectors: ['.hero-actions'], viewports: VISUAL_COMPONENTS },
  {
    label: 'button-hover',
    url: '/',
    selectors: ['.hero-actions'],
    viewports: DESKTOP,
    hoverSelector: '.hero-actions .button',
    postInteractionWait: 300,
  },
  {
    label: 'button-focus',
    url: '/',
    selectors: ['.hero-actions'],
    viewports: DESKTOP,
    focusSelector: '.hero-actions .button',
    postInteractionWait: 300,
  },
  {
    label: 'button-active',
    url: '/',
    selectors: ['.hero-actions'],
    viewports: DESKTOP,
    clickSelector: '.hero-actions .text-link',
    postInteractionWait: 200,
  },
  { label: 'button-disabled', url: '/', selectors: ['.newsletter-form'], viewports: VISUAL_COMPONENTS },
].map((s) => ({
  ...base,
  ...s,
  url: `${BASE}${s.url}`,
  label: `component-${s.label}`,
  viewports: vp(s.viewports),
}));

module.exports = {
  id: 'travelling-places',
  viewports: vp(VISUAL_COMPONENTS),
  scenarios: [...pages, ...components],
  paths: {
    bitmaps_reference: 'qa/visual/reference',
    bitmaps_test: 'qa/visual/test',
    engine_scripts: 'qa/visual/engine_scripts',
    html_report: 'qa/visual/report',
    json_report: 'qa/visual/report',
  },
  onBeforeScript: 'playwright/onBefore.js',
  onReadyScript: 'playwright/onReady.js',
  engine: 'playwright',
  engineOptions: { browser: 'chromium' },
  report: ['browser', 'json'],
  asyncCaptureLimit: 4,
  asyncCompareLimit: 25,
  debug: false,
  debugWindow: false,
};
