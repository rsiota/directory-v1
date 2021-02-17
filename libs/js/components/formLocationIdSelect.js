import { state } from '../state.js';
import { getIdOfValue } from '../helper.js';
import { getLocationIdByDepartmentId } from '../helper.js';
import { getLocationByLocationId } from '../helper.js';

function formLocationIdSelect() {
	var departmentEdit = $('#department-edit').val();
	if (departmentEdit != undefined) {
		var departmentId = getIdOfValue(state.departments, departmentEdit);
	} else {
		departmentId = '';
	}
	var locationId = getLocationIdByDepartmentId(state.departments, departmentId);
	var location = getLocationByLocationId(state.locations, locationId);
	$('#location-department option[value="' + location + '"]').prop('selected', true);

}

export { formLocationIdSelect };