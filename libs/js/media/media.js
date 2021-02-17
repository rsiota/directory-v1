import { state } from '../state.js';
import { updateMobile } from './updateMobile.js';
import { updateDesktop } from './updateDesktop.js';

const mediaQuery = window.matchMedia('(max-width: 479px)')

function media() {

  // Register event listener
  mediaQuery.addListener(handleMediaChange);

  // Initial check
  handleMediaChange(mediaQuery);

}

function handleMediaChange(e) {
  // Check if the media query is true
  if (e.matches) {
    // Then log the following message to the console
    state.viewport = "mobile";
    updateMobile();
  } else {
    state.viewport = "desktop";
    updateDesktop();
  }
}

export { media, handleMediaChange, mediaQuery };