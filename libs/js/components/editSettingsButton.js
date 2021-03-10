import { handleMediaChange } from '../media/media.js';
import { state } from '../state.js';

function editSettingsButton() {
	$('#settings-button').click(function() {
		updateView();
	})
}

function updateView() {

	state.currentAction = "slide-settings";
	handleMediaChange();

}

export { editSettingsButton };