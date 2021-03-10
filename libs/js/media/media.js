import { state } from '../state.js';
import { updateMobile } from './updateMobile.js';
import { updateTablet } from './updateTablet.js';
import { updateDesktop } from './updateDesktop.js';

var mqMobile = window.matchMedia('(max-width: 767px)');
var mqTablet = window.matchMedia('(min-width: 767px) and (max-width: 1100px)');
var mqDesktop = window.matchMedia('(min-width: 1100px)');

function media() {

  mqMobile.addListener(handleMediaMobile);
  mqTablet.addListener(handleMediaTablet);
  mqDesktop.addListener(handleMediaDesktop);

  handleMediaChange();

}

function handleMediaChange() {
  handleMediaMobile(mqMobile);
  handleMediaTablet(mqTablet);
  handleMediaDesktop(mqDesktop);
}

function handleMediaMobile(e) {

  if (e.matches) {
    state.viewport = "mobile";
    updateMobile();
  }
}

function handleMediaTablet(e) {

  if (e.matches) {
    state.viewport = "tablet";
    updateTablet();
  }
}

function handleMediaDesktop(e) {

  if (e.matches) {
    state.viewport = "desktop";
    updateDesktop();
  }
}

export { media, handleMediaChange };