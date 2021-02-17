import { saveUpdateLocationUpdate } from '../components/saveUpdateLocationUpdate.js';
import { state } from '../state.js';
import { getAll } from '../ajax/getAll.js';
import { editorUpdate } from '../components/editorUpdate.js';

function updateLocation(location, locationId) {

	var url = 'libs/php/updateLocation.php?';

	$.ajax({
		url: url,
		type: 'POST',
		data: {
			id: locationId,
			name: location
		},
		dataType: 'json',
		cache: 'false',
		success: function(result) {
			if (result.status.name == 'ok') {
				state.updateLocation = location;
				saveUpdateLocationUpdate();
				getAll();
				editorUpdate(state.user);
			}
		},
		error: function(jqXHR, textStatus, errorThrown) {
			console.log(errorThrown);
		}
	});
}

export { updateLocation };