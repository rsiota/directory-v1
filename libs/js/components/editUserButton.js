import { handleMediaChange, mediaQuery } from '../media/media.js';
import { state } from '../state.js';
import { view } from './editUserButtonView.js';
import {
	elemEnable,
	elemDisable,
	inputEnable,
	inputDisable,
	elemShow,
	elemHide,
} from '../helper.js';

function editUserButton() {
	$('#edit-button').click(function() {
		state.record = "existing";
		updateView();
	})
}

function updateView() {

	state.currentAction = "editor";
	handleMediaChange(mediaQuery);

	elemEnable(view.elemEnable);
	elemDisable(view.elemDisable);
	inputEnable(view.inputEnable);
	inputDisable(view.inputDisable);
	elemShow(view.elemShow);
	elemHide(view.elemHide);

	$('#first-name').select();

}

export { editUserButton };