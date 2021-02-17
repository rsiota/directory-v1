import { state } from '../state.js';

function formDepartmentClear() {
	state.departments = [];
	$('#department-edit').children().remove().end();
	$('#new-department').val('');
	$('#department-edit').val('');
}

export { formDepartmentClear };