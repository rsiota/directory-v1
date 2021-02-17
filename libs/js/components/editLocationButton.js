import { editLocationHtml } from './editLocationHtml.js';
import { state } from '../state.js';

function editLocationButton() {
	$('#edit-location').click(function() {
		editLocationHtml();
	})
}

export { editLocationButton };