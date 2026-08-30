/**
 * The viewport matrix. Every suite imports from here, so a viewport is defined once.
 *
 * Labels matter: 1366 appears twice at different heights (desktop 1366x768 and iPad Pro
 * landscape 1366x1024), so width alone does not identify a viewport.
 */

export const DESKTOP = [
  { label: 'desktop-2560', width: 2560, height: 1440 },
  { label: 'desktop-1920', width: 1920, height: 1080 },
  { label: 'desktop-1680', width: 1680, height: 1050 },
  { label: 'desktop-1440', width: 1440, height: 900 },
  { label: 'desktop-1366', width: 1366, height: 768 },
  { label: 'desktop-1280', width: 1280, height: 800 },
];

export const TABLET = [
  { label: 'ipad-pro-landscape', width: 1366, height: 1024 },
  { label: 'ipad-pro-portrait', width: 1024, height: 1366 },
  { label: 'ipad-air-landscape', width: 1180, height: 820 },
  { label: 'ipad-air-portrait', width: 820, height: 1180 },
  { label: 'ipad-landscape', width: 1024, height: 768 },
  { label: 'ipad-portrait', width: 768, height: 1024 },
];

export const MOBILE = [
  { label: 'mobile-430', width: 430, height: 932 },
  { label: 'mobile-414', width: 414, height: 896 },
  { label: 'mobile-393', width: 393, height: 852 },
  { label: 'mobile-390', width: 390, height: 844 },
  { label: 'mobile-375', width: 375, height: 812 },
  { label: 'mobile-360', width: 360, height: 800 },
  { label: 'mobile-320', width: 320, height: 568 },
];

export const ALL = [...DESKTOP, ...TABLET, ...MOBILE];

const byLabel = (label) => {
  const found = ALL.find((v) => v.label === label);
  if (!found) throw new Error(`Unknown viewport label: ${label}`);
  return found;
};

/**
 * The site swaps to the overlay menu at 940px, not at any notion of "tablet". Four of the six
 * tablet viewports are wider than that and render the ordinary desktop nav, so menu tests must
 * select on this rather than on device category.
 */
export const MOBILE_NAV_BREAKPOINT = 940;
export const usesMobileNav = (width) => width <= MOBILE_NAV_BREAKPOINT;

/** Full-page visual baselines. Six points across the range rather than all nineteen. */
export const VISUAL_PAGES = [
  'desktop-2560',
  'desktop-1440',
  'desktop-1366',
  'ipad-pro-portrait',
  'ipad-portrait',
  'mobile-390',
].map(byLabel);

/** Component baselines. One desktop, one tablet below the nav breakpoint, one phone. */
export const VISUAL_COMPONENTS = ['desktop-1440', 'ipad-portrait', 'mobile-390'].map(byLabel);

/** Functional runs. Same three: desktop nav, overlay nav on tablet, overlay nav on phone. */
export const FUNCTIONAL = ['desktop-1440', 'ipad-portrait', 'mobile-390'].map(byLabel);

/** Cross-browser points, as specified: 1440x900, 1024x1366, 390x844. */
export const CROSS_BROWSER = ['desktop-1440', 'ipad-pro-portrait', 'mobile-390'].map(byLabel);
