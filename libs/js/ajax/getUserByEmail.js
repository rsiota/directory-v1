import { state } from '../state.js';
import { loginSubmitAnimation } from '../components/loginSubmitAnimation.js';
import { loginRemoteAnimation } from '../components/loginRemoteAnimation.js';
import { activeUserUpdate } from '../components/activeUserUpdate.js';
import { editorUpdate } from '../components/editorUpdate.js';
import { recentItemsUpdate } from '../components/recentItemsUpdate.js';


function getUserByEmail(email, password) {
	var res = $.ajax({
		url: "libs/php/getUserByEmail.php/?email='" + email + "'&password=" + password,
		type: 'POST',
		dataType: 'json',
		async: false,
		success: function(result) {
			if (result.status.name == 'ok' && result.status.description == 'success') {
				if (state.remote == "yes") {
					loginRemoteAnimation();
					state.remote = "no";
				} else {
					loginSubmitAnimation();
				}
				state.loggedUser = result.data[0];
				activeUserUpdate(state.loggedUser);
				editorUpdate(state.loggedUser);
				recentItemsUpdate(state.recents);
			} else if (result.status.name == 'ok' && result.status.description == 'login error') {
				$('#error-message').removeClass('hide');
				$('#error-message').html('Your password is incorrect. Please try again!');
			}
		},
		error: function(jqXHR, textStatus, errorThrown) {
			$('#error-message').removeClass('hide');
			$('#error-message').html('Your email is incorrect. Please try again!');
		}
	});
	return res;
}

export { getUserByEmail };