import { handleMediaChange } from '../media/media.js';
import { state } from '../state.js';

function backFromSettingsButton() {

	$('#switch-view-settings').click(function() {
		state.currentAction = "slide-settings-back";
		handleMediaChange();
	})

}

export { backFromSettingsButton };