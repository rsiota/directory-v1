import { insertDepartment } from '../ajax/insertDepartment.js';
import { state } from '../state.js';
import { getIdOfValue } from '../helper.js';

function saveNewDepartmentButton() {
	$('#save-department').click(function() {
		state.newDepartment.name = $('#new-department').val();
		var location = $('#location-department').val();
		state.newDepartment.locationID = getIdOfValue(state.locations, location);
		insertDepartment(state.newDepartment);
	})
}

export { saveNewDepartmentButton };