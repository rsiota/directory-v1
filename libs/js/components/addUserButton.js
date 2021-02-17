import { handleMediaChange, mediaQuery } from '../media/media.js';
import { editorClear } from './editorClear.js';
import { state } from '../state.js';
import { view } from './addUserButtonView.js';
import {
	elemEnable,
	elemDisable,
	inputEnable,
	inputDisable,
	elemShow,
	elemHide,
} from '../helper.js';

function addUserButton() {

	$('#add-button').click(function() {
		editorClear();
		updateView();
		state.record = "new";
		state.lastId = Math.max(...state.db.data.map(user => parseInt(user.id)));
		console.log(state.lastId);
	})

}

function updateView() {

	state.currentAction = "slide-editor";
	handleMediaChange(mediaQuery);

	elemEnable(view.elemEnable);
	elemDisable(view.elemDisable);
	inputEnable(view.inputEnable);
	inputDisable(view.inputDisable);
	elemShow(view.elemShow);
	elemHide(view.elemHide);

	$('#first-name').select();

}

export { addUserButton };