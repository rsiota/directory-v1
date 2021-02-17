import { handleMediaChange, mediaQuery } from '../media/media.js';
import { state } from '../state.js';
import { editorUpdate } from './editorUpdate.js';
import { view } from './cancelEditorButtonView.js';
import {
	elemEnable,
	elemDisable,
	inputDisable,
	inputEnable,
	elemShow,
	elemHide
} from '../helper.js';

function cancelEditorButton() {

	$('#cancel-button').click(function() {
		editorUpdate(state.user);
		updateView();
	})

}

function updateView() {

	state.currentAction = "slide-search";
	handleMediaChange(mediaQuery);

	elemEnable(view.elemEnable);
	elemDisable(view.elemDisable);
	inputDisable(view.inputDisable);
	inputEnable(view.inputEnable);
	elemShow(view.elemShow);
	elemHide(view.elemHide);

}

export { cancelEditorButton };