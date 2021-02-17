import { state } from '../state.js';
import { view } from './cancelNewLocationView.js';
import {
	elemEnable,
	inputEnable,
	elemHide,
	elemShow
} from '../helper.js';

function cancelNewLocationButton() {
	$('#cancel-location').click(function() {
		$('#new-location').val('');
		updateView();
	})
}

function updateView() {

	elemEnable(view.elemEnable);
	inputEnable(view.inputEnable);
	elemHide(view.elemHide);
	elemShow(view.elemShow);
}

export { cancelNewLocationButton };