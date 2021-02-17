import { state } from '../state.js';
import { searchBarSort } from '../components/searchBarSort.js';
import { sortResultsUpdate } from '../components/sortResultsUpdate.js';
import { recentItemsRefresh } from '../helper.js';
import { updateCurrentUser } from '../components/updateCurrentUser.js';

function getAll() {
	$.ajax({
		url: "libs/php/getAll.php",
		type: 'GET',
		dataType: 'json',
		async: false,
		success: function(result) {
			if (result.status.name == 'ok') {
				state.db = result;
				state.recents = recentItemsRefresh(state.db.data, state.recents);
				state.user = updateCurrentUser(result.data, state.user['id']);
				sortResultsUpdate(result, state.filter);
				searchBarSort(state.db.data);
			}
		},
		error: function(jqXHR, textStatus, errorThrown) {
			console.log(errorThrown);
		}
	});
}

export { getAll };