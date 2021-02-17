import { saveNewDepartmentUpdate } from '../components/saveNewDepartmentUpdate.js';
import { state } from '../state.js';
import { getAll } from '../ajax/getAll.js';
import { editorUpdate } from '../components/editorUpdate.js';

function insertDepartment(department) {

	var url = 'libs/php/insertDepartment.php';

	$.ajax({
		url: url,
		type: 'POST',
		data: {
			name: department.name,
			locationID: department.locationID,
		},
		dataType: 'json',
		cache: 'false',
		success: function(result) {
			if (result.status.name == 'ok') {
				state.newDepartment = department;
				saveNewDepartmentUpdate();
				getAll();
				editorUpdate(state.user);
			}
		},
		error: function(jqXHR, textStatus, errorThrown) {
			console.log(errorThrown);
		}
	});
}

export { insertDepartment };