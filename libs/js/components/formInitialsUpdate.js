function formInitialsUpdate(user) {

	// Extract fields from user
	var firstName = user['firstName'];
	var lastName = user['lastName'];

	// Update input field
	$('#initial-first').html(firstName[0]);
	$('#initial-last').html(lastName[0]);
	$('#first-name').on('input', initialFirstUpdate);
	$('#last-name').on('input', initialLastUpdate);

	// Update dynamic input field
	function initialFirstUpdate() {
		$('#initial-first').html($('#first-name').val()[0]);
	}

	function initialLastUpdate() {
		$('#initial-last').html($('#last-name').val()[0]);
	}

}

export { formInitialsUpdate };