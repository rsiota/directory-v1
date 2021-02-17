import { handleMediaChange, mediaQuery } from '../media/media.js';
import { editorSave } from './editorSave.js';
import { updateRecents } from '../helper.js';
import { insertUser } from '../ajax/insertUser.js';
import { updateUser } from '../ajax/updateUser.js';
import { state } from '../state.js';
import { view } from './saveButtonView.js';
import {
	elemEnable,
	elemDisable,
	inputDisable,
	inputEnable,
	elemShow,
	elemHide,
} from '../helper.js';

function saveButton() {
	$('#save-button').click(function() {
		var user = editorSave();
		updateRecents(user);
		checkUser(user);
		updateView();
	})
}

function checkUser(user) {
	if (state.record == "existing") {
		updateUser(user);
	} else {
		insertUser(user);
	}
}

function updateView() {

	state.currentAction = "view";
	handleMediaChange(mediaQuery);

	elemEnable(view.elemEnable);
	elemDisable(view.elemDisable);
	inputDisable(view.inputDisable);
	inputEnable(view.inputEnable);
	elemShow(view.elemShow);
	elemHide(view.elemHide);

}

export { saveButton };