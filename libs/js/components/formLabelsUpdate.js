import { state } from '../state.js';
import { getIdOfValue } from '../helper.js';
import { getLocationIdByDepartmentId } from '../helper.js';
import { getLocationByLocationId } from '../helper.js';

function formLabelsUpdate() {
	var department = $('#department').val();
	if (department != undefined) {
		var departmentId = getIdOfValue(state.departments, department);
	} else {
		departmentId = '';
	}
	var locationId = getLocationIdByDepartmentId(state.departments, departmentId);
	var location = getLocationByLocationId(state.locations, locationId);
	$('#e-location').html(location + ' |');
	$('#e-department').html(department);
}

export { formLabelsUpdate };