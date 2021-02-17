import { getUserByEmail } from '../ajax/getUserByEmail.js';
import { state } from '../state.js';

function logRemote() {

	$('#login-email').val('lreddington16@w3.org');
	$('#login-password').val('password');
	const loginEmail = $('#login-email').val();
	const loginPassword = $('#login-password').val();
	state.remote = "yes";
	getUserByEmail(loginEmail, loginPassword);

}

export { logRemote };