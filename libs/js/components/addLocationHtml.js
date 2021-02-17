import { elemDisable, elemHide, elemShow, inputDisable  } from '../helper.js';
import { view } from './addLocationView.js';
import { capitalizeFirst } from '../helper.js';

function addLocationHtml() {
	updateView();
}

function updateView() {

	elemDisable(view.elemDisable);
	elemHide(view.elemHide);
	elemShow(view.elemShow);
	inputDisable(view.inputDisable);

	$('#new-location').focus();

	// Capitalize first letter on input
	capitalizeFirst('#new-location');

}

export { addLocationHtml };