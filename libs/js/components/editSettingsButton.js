import { handleMediaChange, mediaQuery } from '../media/media.js';
import { state } from '../state.js';
import { view } from './editSettingsButtonView.js';
import {
	elemEnable,
	elemDisable,
	inputEnable,
	inputDisable,
	elemShow,
	elemHide,
} from '../helper.js';

function editSettingsButton() {
	$('#settings-button').click(function() {
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


}

export { editSettingsButton };