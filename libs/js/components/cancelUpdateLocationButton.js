import { state } from '../state.js';
import { view } from './cancelUpdateLocationView.js';
import {
	elemEnable,
	inputEnable,
	elemHide,
	elemShow
} from '../helper.js';

function cancelUpdateLocationButton() {
	$('#update-location-no').click(function() {
		$('#update-location').val('');
		updateView();
	})
}

function updateView() {

	elemEnable(view.elemEnable);
	inputEnable(view.inputEnable);
	elemHide(view.elemHide);
	elemShow(view.elemShow);
}

export { cancelUpdateLocationButton };