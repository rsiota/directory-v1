import { deleteDepartment } from '../ajax/deleteDepartment.js';
import { state } from '../state.js';
import { getIdOfValue } from '../helper.js';

function confirmDeleteDepartmentButton() {
	$('#delete-department-yes').click(function() {
		var department = $('#department-edit').val();
		var departmentId = getIdOfValue(state.departments, department);
		deleteDepartment(departmentId);
	})
}

export { confirmDeleteDepartmentButton };