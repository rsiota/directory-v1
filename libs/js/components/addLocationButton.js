import { addLocationHtml } from './addLocationHtml.js';
import { insertLocation } from '../ajax/insertLocation.js';
import { state } from '../state.js';

function addLocationButton() {
	$('#add-location').click(function() {
		addLocationHtml();
	})
}

export { addLocationButton };