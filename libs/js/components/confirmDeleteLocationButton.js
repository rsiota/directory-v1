import { deleteLocation } from '../ajax/deleteLocation.js';
import { state } from '../state.js';
import { getIdOfValue } from '../helper.js';

function confirmDeleteLocationButton() {
	$('#delete-location-yes').click(function() {
		var location = $('#office-location').val();
		var locationId = getIdOfValue(state.locations, location);
		deleteLocation(locationId);
	})
}

export { confirmDeleteLocationButton };