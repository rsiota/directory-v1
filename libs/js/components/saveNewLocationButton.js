import { insertLocation } from '../ajax/insertLocation.js';
import { state } from '../state.js';

function saveNewLocationButton() {
	$('#save-location').click(function() {
		state.newLocation = $('#new-location').val();
		insertLocation(state.newLocation);
	})
}

export { saveNewLocationButton };