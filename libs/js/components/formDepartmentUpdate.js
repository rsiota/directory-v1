import { state } from '../state.js';
import { getIdOfValue } from '../helper.js';

function formDepartmentUpdate(user) {
	var department = user['department'];
	if (department == null) {
		department = '';
	}

	// Update select field
	$('#department option[value="' + department + '"]').prop('selected', true);
	// Update label field
	$('#e-department').html($('#department').val());

}

export { formDepartmentUpdate };