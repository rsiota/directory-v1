import { capitalizeFirst } from '../helper.js';

function formFirstNameUpdate(user) {

	// Extract field from user
	var firstName = user['firstName'];

	// Update input field
	$('#e-first-name').html(firstName);
	$('#first-name').val(firstName);

	// Capitalize first letter on input
	capitalizeFirst('#first-name');

	// Update dynamic input field
	$('#first-name').on('input', firstNameUpdate);

	function firstNameUpdate() {
		$('#e-first-name').html($('#first-name').val());
	}

}

export { formFirstNameUpdate };