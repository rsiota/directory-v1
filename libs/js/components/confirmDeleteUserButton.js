import { handleMediaChange, mediaQuery } from '../media/media.js';
import { deleteUser } from '../ajax/deleteUser.js';
import { state } from '../state.js';
import { deletePhoto } from '../ajax/deletePhoto.js';

function confirmDeleteUserButton() {
	$('#delete-user-button').click(function() {
		deleteUser(state.user['id']);
		deletePhoto(state.user['photoFile']);
		state.currentAction = "slide-search";
		state.record = "existing";
		handleMediaChange(mediaQuery);
	})
}

export { confirmDeleteUserButton };