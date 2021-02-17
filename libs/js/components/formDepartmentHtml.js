import { state } from '../state.js';

function formDepartmentHtml(id) {

	$('#' + id).children().remove().end();

	$('#' + id).append($('<option>', {
		value: '',
		text: '',
		disabled: true,
	}));

	var select = document.getElementById(id);

	for (var i = 0; i < state.departments.length; i++) {
		var opt = state.departments[i]['name'];
		var el = document.createElement('option');
		el.textContent = opt;
		el.value = opt;
		select.appendChild(el);
	}

}

export { formDepartmentHtml };