import { updateDepartment } from '../ajax/updateDepartment.js';
import { state } from '../state.js';
import { getIdOfValue } from '../helper.js';
import { editorUpdate } from './editorUpdate.js';

function saveUpdateDepartmentButton() {
	$('#update-department-yes').click(function() {

		var department = $('#department-edit').val();
		var location = $('#location-department').val();

		state.updateDepartment.name = $('#update-department').val();
		state.updateDepartment.id = getIdOfValue(state.departments, department);
		state.updateDepartment.locationID = getIdOfValue(state.locations, location);

		updateDepartment(state.updateDepartment);
	})
}

export { saveUpdateDepartmentButton };