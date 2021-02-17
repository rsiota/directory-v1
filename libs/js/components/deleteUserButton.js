import { handleMediaChange, mediaQuery } from '../media/media.js';
import { state } from '../state.js';
import { view } from './deleteUserButtonView.js';
import { deleteUserTextUpdate } from './deleteUserTextUpdate.js';
import {
	elemDisable,
	elemShow,
	elemHide,
} from '../helper.js';

function deleteUserButton() {

	$('#remove-button').click(function() {
		updateView();
		deleteUserTextUpdate();
	})

}

function updateView() {

	state.currentAction = "editor";
	handleMediaChange(mediaQuery);

	elemDisable(view.elemDisable);
	elemShow(view.elemShow);
	elemHide(view.elemHide);

}

export { deleteUserButton };