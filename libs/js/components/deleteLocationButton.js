import { deleteLocationHtml } from './deleteLocationHtml.js';

function deleteLocationButton() {
	$('#delete-location').click(function() {
		deleteLocationHtml();
	})
}

export { deleteLocationButton };