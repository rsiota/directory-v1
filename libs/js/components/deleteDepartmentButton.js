import { deleteDepartmentHtml } from './deleteDepartmentHtml.js';

function deleteDepartmentButton() {
	$('#delete-department').click(function() {
		deleteDepartmentHtml();
	})
}

export { deleteDepartmentButton };