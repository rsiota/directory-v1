import { view } from './cancelDeleteLocationView.js';
import {
	elemEnable,
	inputEnable,
	elemHide,
	elemShow
} from '../helper.js';

function cancelDeleteLocationButton() {
	$('#delete-location-no').click(function() {
		$('#delete-location-message').html('');
		updateView();
	})
}

function updateView() {

	elemEnable(view.elemEnable);
	inputEnable(view.inputEnable);
	elemHide(view.elemHide);
	elemShow(view.elemShow);
}

export { cancelDeleteLocationButton };