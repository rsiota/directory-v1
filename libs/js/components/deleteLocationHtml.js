import { elemDisable, elemHide, elemShow, inputDisable  } from '../helper.js';
import { view } from './deleteLocationView.js';
import { checkLocatDependencies, getIdOfValue } from '../helper.js';
import { state } from '../state.js';

function deleteLocationHtml() {
	updateView();
	var location = $('#office-location').val();
	var locationID = getIdOfValue(state.locations, location);
	var message = $('#delete-location-message');

	var hasDependencies = checkLocatDependencies(state.departments, locationID);
	if (hasDependencies == true) {
		message.html('Location with dependencies!');
		elemHide(['#delete-location-yes']);
	} else {
		message.html('Delete ' + location + '?');
		elemShow(['#delete-location-yes']);
	}
}

function updateView() {

	elemDisable(view.elemDisable);
	elemHide(view.elemHide);
	elemShow(view.elemShow);
	inputDisable(view.inputDisable);

}

export { deleteLocationHtml };