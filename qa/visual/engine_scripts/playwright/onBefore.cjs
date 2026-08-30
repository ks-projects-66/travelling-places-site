/**
 * Runs before navigation. Reduced motion is emulated rather than merely overridden in CSS,
 * because it is also what stops the carousel advancing: site.js checks the media query and never
 * starts its timer when it matches. That removes the single largest source of flake without
 * needing to freeze anything by hand.
 */
module.exports = async (page) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
};
