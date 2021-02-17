import { saveUpdateDepartmentUpdate } from '../components/saveUpdateDepartmentUpdate.js';
import { state } from '../state.js';
import { getAll } from '../ajax/getAll.js';
import { editorUpdate } from '../components/editorUpdate.js';

function updateDepartment(department) {

	var url = 'libs/php/updateDepartment.php';

	$.ajax({
		url: url,
		type: 'POST',
		data: {
			id: department.id,
			name: department.name,
			locationID: department.locationID
		},
		dataType: 'json',
		cache: 'false',
		success: function(result) {
			if (result.status.name == 'ok') {
				state.updateDepartment = department;
				saveUpdateDepartmentUpdate();
				getAll();
				editorUpdate(state.user);
			}
		},
		error: function(jqXHR, textStatus, errorThrown) {
			console.log(errorThrown);
		}
	});
}

export { updateDepartment };