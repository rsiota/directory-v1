import { handleMediaChange } from '../media/media.js';
import { state } from '../state.js';

function backFromEditorButton() {

	$('#switch-view').click(function() {
		state.currentAction = "slide-search";
		handleMediaChange();
	})

}

export { backFromEditorButton };