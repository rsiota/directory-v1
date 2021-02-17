import {
	elemEnable,
	inputEnable,
	elemHide,
	elemShow
} from '../helper.js';
import { getLocations } from '../ajax/getLocations.js';
import { updateNewLocation } from '../ajax/getLocations.js';
import { formLocationClear } from './formLocationClear.js';
import { view } from './saveNewLocationView.js';

function saveNewLocationUpdate() {

	formLocationClear();
	getLocations(updateNewLocation);
	updateView();

}

function updateView() {
	elemEnable(view.elemEnable);
	inputEnable(view.inputEnable);
	elemHide(view.elemHide);
	elemShow(view.elemShow);

}

export { saveNewLocationUpdate };