import { state } from '../state.js';
import {
	elemShow,
	elemHide
} from '../helper.js';

function updateDesktop() {

	elemShow(desktop.elemShow);
	elemHide(desktop.elemHide);

}

var desktop = {

	elemShow: [
		'#left-section',
		'#center-section',
		'#right-section'
	],
	elemHide: [
		'#switch-view'
	]
}

export { updateDesktop };