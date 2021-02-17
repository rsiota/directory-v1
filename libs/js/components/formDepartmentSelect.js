import { state } from '../state.js';
import { formLocationIdSelect } from './formLocationIdSelect.js'

function formDepartmentSelect() {
	$('#department-edit option[value="' + state.updateDepartment + '"]').prop('selected', true);

	document.getElementById('department-edit').onchange = formLocationIdSelect;
}

export { formDepartmentSelect };