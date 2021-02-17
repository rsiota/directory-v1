function formEditorClear() {

	$('#initial-first').html('');
	$('#picture').attr('src', '');
	$('#initial-last').html('');
	$('#e-first-name').html('');
	$('#e-last-name').html('');
	$('#e-department').html('');
	$('#e-location').html('');
	$('#first-name').val('');
	$('#last-name').val('');
	$('#email').val('');
	$('#phone').val('');
	$('#department').val('');
	$('#job-title').val('');
	$('#date-join').val('');
	$('#office-location').val('');

}

export { formEditorClear };