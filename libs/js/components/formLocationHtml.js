import { state } from '../state.js';
import { formLabelsUpdate } from './formLabelsUpdate.js';

function formLocationHtml(id) {

	$('#' + id).children().remove().end();

	var select = document.getElementById(id);

	for (var i = 0; i < state.locations.length; i++) {
		var opt = state.locations[i]['name'];
		var el = document.createElement('option');
		el.textContent = opt;
		el.value = opt;
		select.appendChild(el);
	}

	document.getElementById('department').onchange = formLabelsUpdate;

}

export { formLocationHtml };