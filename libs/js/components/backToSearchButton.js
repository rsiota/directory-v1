import { handleMediaChange, mediaQuery } from '../media/media.js';
import { state } from '../state.js';

function backToSearchButton() {

	$('#switch-view').click(function() {
		state.currentAction = "slide-search";
		handleMediaChange(mediaQuery);
	})

}

export { backToSearchButton };