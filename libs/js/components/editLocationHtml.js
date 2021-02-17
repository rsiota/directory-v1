import { elemDisable, elemHide, elemShow, inputDisable } from '../helper.js';
import { view } from './editLocationView.js';
import { capitalizeFirst } from '../helper.js';

function editLocationHtml() {
	updateView();
}

function updateView() {

	elemDisable(view.elemDisable);
	elemHide(view.elemHide);
	elemShow(view.elemShow);
	inputDisable(view.inputDisable);

	$('#update-location').val($('#office-location').val());
	$('#update-location').focus();

	// Capitalize first letter on input
	capitalizeFirst('#update-location');

}

export { editLocationHtml };