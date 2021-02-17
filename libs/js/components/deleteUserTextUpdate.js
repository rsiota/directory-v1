import { state } from '../state.js';

function deleteUserTextUpdate() {
	var name = state.user['firstName'] + ' ' + state.user['lastName'];
	var message = 'Delete ' + name + '?';
	$('#delete-user-text').html(message);
}

export { deleteUserTextUpdate };