import { state } from '../state.js';

function deletePhoto(fileName) {

	var url = 'libs/php/deletePhoto.php'

	$.ajax({
		url: url,
		type: 'POST',
		data: { 'file': "../images/faces/" + fileName},
		success: function(result) {
		},
		error: function(jqXHR, textStatus, errorThrown) {
		}
	});
}

export { deletePhoto };