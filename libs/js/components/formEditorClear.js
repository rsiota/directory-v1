function formEditorClear() {

	var urlNoCountry = './libs/images/blank-country.png';

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
	$('#flag').attr('src', urlNoCountry);
	$('#country option[value=""').prop('selected', true);

}

export { formEditorClear };