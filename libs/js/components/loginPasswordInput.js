import { getUserByEmail } from '../ajax/getUserByEmail.js';

function loginPasswordInput() {

	$('#login-password').hover(highlight, unHighlight);
	$('#login-password').blur(unHighlight);
	$('#login-password').focus(function() {
		$('#error-message').addClass('hide');
	})
	$("#login-password").keydown(function(e) {

		if (e.keyCode == 13) {
			e.preventDefault();
			const loginEmail = $('#login-email').val();
			const loginPassword = $('#login-password').val();
			getUserByEmail(loginEmail, loginPassword);
		}
	});
};

function highlight() {
	anime({
		targets: '#login-icon-password',
		color: '#34c759',
		duration: 100
	});
}

function unHighlight() {
	if (!$('#login-password').is(':focus')) {
		anime({
			targets: '#login-icon-password',
			color: '#979797',
			duration: 100
		});
	}
}

export { loginPasswordInput };