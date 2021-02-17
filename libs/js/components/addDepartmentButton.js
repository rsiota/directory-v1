import { addDepartmentHtml } from './addDepartmentHtml.js';
import { state } from '../state.js';

function addDepartmentButton() {
	$('#add-department').click(function() {
		addDepartmentHtml();
	})
}

export { addDepartmentButton };