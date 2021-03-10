import { handleMediaChange } from '../media/media.js';
import { state } from '../state.js';
import { editorUpdate } from './editorUpdate.js';
import { recentItemsUpdate } from './recentItemsUpdate.js';

function loggedUserAvatar() {
	$('#u-picture-wrapper').click(function() {
		state.currentAction = "slide-view";
		handleMediaChange();
		editorUpdate(state.loggedUser);
		recentItemsUpdate(state.recents);
	})

}

export { loggedUserAvatar };