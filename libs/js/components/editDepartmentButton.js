import { editDepartmentHtml } from './editDepartmentHtml.js';
import { state } from '../state.js';

function editDepartmentButton() {
	$('#edit-department').click(function() {
		editDepartmentHtml();
	})
}

export { editDepartmentButton };