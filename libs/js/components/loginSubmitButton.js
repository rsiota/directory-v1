import { state } from '../state.js';
import { getUserByEmail } from '../ajax/getUserByEmail.js';

function loginSubmitButton() {

	$('#login-submit').hover(hoverIn, hoverOut);

	$('#login-submit').click(function(event) {

		event.preventDefault();

		const loginEmail = $('#login-email').val();
		const loginPassword = $('#login-password').val();
		getUserByEmail(loginEmail, loginPassword);

	});
}

function hoverIn() {
	$('#login-submit').css('backgroundColor', '#26ac48');
}

function hoverOut() {
	$('#login-submit').css('backgroundColor', '#34c759');
}


export { loginSubmitButton };