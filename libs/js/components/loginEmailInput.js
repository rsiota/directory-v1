import { getUserByEmail } from '../ajax/getUserByEmail.js';

function loginEmailInput() {

	$('#login-email').hover(highlight, unHighlight);
	$('#login-email').blur(unHighlight);
	$('#login-email').focus(function() {
		$('#error-message').addClass('hide');
	})
	$("#login-email").keydown(function(e) {

		if (e.keyCode == 13) {
			e.preventDefault();
			const loginEmail = $('#login-email').val();
			const loginPassword = $('#login-password').val();
			getUserByEmail(loginEmail, loginPassword);
		}
	});
}

function highlight() {
	anime({
		targets: '#login-icon-email',
		color: '#34c759',
		duration: 100
	});
}

function unHighlight() {
	if (!$('#login-email').is(':focus')) {
		anime({
			targets: '#login-icon-email',
			color: '#979797',
			duration: 100
		});
	}
}

export { loginEmailInput };