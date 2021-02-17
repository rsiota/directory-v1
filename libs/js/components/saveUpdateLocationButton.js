import { updateLocation } from '../ajax/updateLocation.js';
import { state } from '../state.js';
import { getIdOfValue } from '../helper.js';

function saveUpdateLocationButton() {
	$('#update-location-yes').click(function() {
		state.updateLocation = $('#update-location').val();
		var location = $('#office-location').val();
		var locationId = getIdOfValue(state.locations, location);
		updateLocation(state.updateLocation, locationId);
	})
}

export { saveUpdateLocationButton };