import { confirmDeleteUserUpdate } from '../components/confirmDeleteUserUpdate.js';

function deleteUser(id) {

	var url = 'libs/php/deleteUser.php?' +
		'&id=' + id;

	$.ajax({
		url: url,
		type: 'POST',
		dataType: 'json',
		cache: 'false',
		success: function(result) {
			if (result.status.name == 'ok') {
				confirmDeleteUserUpdate();
			}
		},
		error: function(jqXHR, textStatus, errorThrown) {
			console.log(errorThrown);
		}
	});
}

export { deleteUser };