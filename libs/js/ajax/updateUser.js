import { getAll } from './getAll.js';
import { state } from '../state.js';
import { recentItemsUpdate } from '../components/recentItemsUpdate.js';
import { clearSearch } from '../helper.js';
import { activeUserUpdate } from '../components/activeUserUpdate.js';

function updateUser(user) {

	var url = 'libs/php/updateUser.php';

	$.ajax({
		url: url,
		type: 'POST',
		data: {
			id: user['id'],
			firstName: user['firstName'],
			lastName: user['lastName'],
			phone: user['phone'],
			email: user['email'],
			department: user['department'],
			jobTitle: user['jobTitle'],
			dateJoin: user['dateJoin'],
			photo: user['photo'],
			photoFile: user['photoFile'],
		},
		dataType: 'json',
		cache: false,
		async: false,
		success: function(result) {
			if (result.status.name == 'ok') {
				if (state.loggedUser['id'] == user['id']) {
					state.loggedUser = user;
				}
				state.record = 'existing';
				state.user = user;
				getAll();
				activeUserUpdate(state.loggedUser);
				recentItemsUpdate(state.recents);
				clearSearch();
				$('#search').focus();
			}
		},
		error: function(jqXHR, textStatus, errorThrown) {
			console.log(errorThrown);
		}
	});
}

export { updateUser };