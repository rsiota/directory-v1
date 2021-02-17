import {
	elemEnable,
	inputEnable,
	elemHide,
	elemShow
} from '../helper.js';
import { getLocations } from '../ajax/getLocations.js';
import { updateCurrentLocation } from '../ajax/getLocations.js';
import { state } from '../state.js';
import { view } from './saveUpdateLocationView.js';

function saveUpdateLocationUpdate() {

	state.locations = [];
	getLocations(updateCurrentLocation);
	updateView();

}

function updateView() {
	elemEnable(view.elemEnable);
	inputEnable(view.inputEnable);
	elemHide(view.elemHide);
	elemShow(view.elemShow);

}

export { saveUpdateLocationUpdate };