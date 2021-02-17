import { handleMediaChange, mediaQuery } from '../media/media.js';
import { state } from '../state.js';
import { view } from './cancelDeleteUserView.js';
import {
	elemEnable,
	elemHide,
	elemShow,
	elemFullOpacity,
} from '../helper.js';

function cancelDeleteUserButton() {
	$('#cancel-delete-user').click(function() {
		updateView();
	})
}

function updateView() {

	state.currentAction = "view";
	handleMediaChange(mediaQuery);

	elemEnable(view.elemEnable);
	elemFullOpacity(view.elemFullOpacity);
	elemHide(view.elemHide);
	elemShow(view.elemShow);
}

export { cancelDeleteUserButton };