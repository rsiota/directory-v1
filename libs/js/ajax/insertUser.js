import { getAll } from './getAll.js';
import { activeUserUpdate } from '../components/activeUserUpdate.js';
import { recentItemsUpdate } from '../components/recentItemsUpdate.js';
import { addToRecents, clearSearch } from '../helper.js';
import { state } from '../state.js';

function insertUser(user) {

	var url = 'libs/php/insertUser.php';

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
				state.record = "existing";
				state.user = user;
				addToRecents(user);
				getAll();
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

export { insertUser };