import { initCarousels, initForms, initMenus } from '../components/interactions.js';

const sprite = new URL('../assets/icons/ui-icons.svg', import.meta.url).href;

initMenus(document, sprite);
initCarousels(document, sprite);
initForms(document);
