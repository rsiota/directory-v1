import { confirmDeleteDepartmentUpdate } from '../components/confirmDeleteDepartmentUpdate.js';
import { state } from '../state.js';
import { getAll } from '../ajax/getAll.js';
import { editorUpdate } from '../components/editorUpdate.js';

function deleteDepartment(id) {

	var url = 'libs/php/deleteDepartmentByID.php?' +
		'&id=' + id;

	$.ajax({
		url: url,
		type: 'POST',
		dataType: 'json',
		cache: 'false',
		success: function(result) {
			if (result.status.name == 'ok') {
				state.deleteDepartmentId = id;
				confirmDeleteDepartmentUpdate();
				getAll();
				editorUpdate(state.user);
			}
		},
		error: function(jqXHR, textStatus, errorThrown) {
			console.log(errorThrown);
		}
	});
}

export { deleteDepartment };