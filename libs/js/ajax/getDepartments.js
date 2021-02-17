import { state } from '../state.js';
import { formDepartmentHtml } from '../components/formDepartmentHtml.js';

function getDepartments(callback) {

	var res = $.ajax({
		url: "libs/php/getAllDepartments.php",
		type: 'GET',
		dataType: 'json',
		async: false,
		success: function(result) {
			if (result.status.name == 'ok') {
				callback(result);
			}
		},
		error: function(jqXHR, textStatus, errorThrown) {
			console.log(errorThrown);
		}
	});
	return res;
}

function createDepartments(result) {
	state.departments = result.data;
	formDepartmentHtml('department');
	formDepartmentHtml('department-edit');
}

function updateNewDepartment(result) {
	state.departments = result.data;
	formDepartmentHtml('department');
	formDepartmentHtml('department-edit');
}

function updateCurrentDepartment(result) {
	state.departments = result.data;
	formDepartmentHtml('department');
	formDepartmentHtml('department-edit');
}

export { getDepartments, createDepartments, updateNewDepartment, updateCurrentDepartment };