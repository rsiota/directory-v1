import { capitalizeFirst } from '../helper.js';

function formLastNameUpdate(user) {

	// Extract field from user
	var lastName = user['lastName'];

	// Update input field
	$('#e-last-name').html(lastName);
	$('#last-name').val(lastName);

	// Capitalize first letter on input
	capitalizeFirst('#last-name');

	// Update dynamic input field
	$('#last-name').on('input', lastNameUpdate);

	function lastNameUpdate() {
		$('#e-last-name').html($('#last-name').val());
	}

}

export { formLastNameUpdate };