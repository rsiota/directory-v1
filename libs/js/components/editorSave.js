import { state } from '../state.js';
import { getIdOfValue } from '../helper.js';

function editorSave() {

	var id;
	if (state.record == 'existing') {
		id = state.user['id'];
	} else {
		id = (state.lastId + 1).toString();
	}
	var department = $('#department').val();
	if (department != undefined) {
		var departmentId = getIdOfValue(state.departments, department);
	} else {
		departmentId = '';
	}
	var location = $('#office-location').val();
	if (location != undefined) {
		var locationId = getIdOfValue(state.locations, location);
	} else {
		locationId = '';
	}
	var photo;
	if ($(picture).attr('src') != '') {
		photo = 1;
	} else {
		photo = 0;
	}
	var numberPattern = /\d+[d\D]+/g;
	var photoPath = $('#picture').attr('src');
	if (photo != 0) {
	var photoFile = photoPath.match(numberPattern)[0];

	} else {
		photoFile = null;
	}

	// User object
	var user = {
		id: id,
		firstName: $('#first-name').val(),
		lastName: $('#last-name').val(),
		phone: $('#phone').val(),
		email: $('#email').val(),
		department: departmentId,
		jobTitle: $('#job-title').val(),
		dateJoin: $('#date-join').val(),
		location: locationId,
		photo: photo,
		photoFile: photoFile,
	}
	return user;
}

export { editorSave };