import { saveNewLocationUpdate } from '../components/saveNewLocationUpdate.js';
import { state } from '../state.js';

function insertLocation(location) {

	var url = 'libs/php/insertLocation.php?' +
		'name=' + location;

	$.ajax({
		url: url,
		type: 'POST',
		dataType: 'json',
		cache: 'false',
		success: function(result) {
			if (result.status.name == 'ok') {
				state.newLocation = location;
				saveNewLocationUpdate();
			}
		},
		error: function(jqXHR, textStatus, errorThrown) {
			console.log(errorThrown);
		}
	});
}

export { insertLocation };