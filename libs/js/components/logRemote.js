import { getUserByEmail } from '../ajax/getUserByEmail.js';
import { state } from '../state.js';

function logRemote() {

	var loginEmail = 'lreddington16@w3.org';
	var loginPassword = 'password';
	getUserByEmail(loginEmail, loginPassword);

}

export { logRemote };