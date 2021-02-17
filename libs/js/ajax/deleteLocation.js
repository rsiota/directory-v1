import { confirmDeleteLocationUpdate } from '../components/confirmDeleteLocationUpdate.js';
import { state } from '../state.js';

function deleteLocation(id) {

	var url = 'libs/php/deleteLocationByID.php?' +
		'&id=' + id;

	$.ajax({
		url: url,
		type: 'POST',
		dataType: 'json',
		cache: 'false',
		success: function(result) {
			if (result.status.name == 'ok') {
				state.deleteLocationId = id;
				confirmDeleteLocationUpdate();
			}
		},
		error: function(jqXHR, textStatus, errorThrown) {
			console.log(errorThrown);
		}
	});
}

export { deleteLocation };