import { state } from '../state.js';

function formLocationClear() {
	state.locations = [];
	$('#office-location').children().remove().end();
	$('#new-location').val('');
	$('#office-location').val('');
}

export { formLocationClear };