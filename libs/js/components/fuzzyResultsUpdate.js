import { state } from '../state.js';
import { fuzzyResultHtml } from './fuzzyResultHtml.js';
import { fuzzyResultUpdate } from './fuzzyResultUpdate.js';
import { hideAToZ } from './aToZUpdate.js';

function fuzzyResultsUpdate(results) {

	// Show cancel search button
	$('#cancel-button-wrapper').show();
	// Hide atoZ
	hideAToZ();
	// Clear previous results
	$('#results-wrapper').text('');
	// Create result-items div
	$('<div/>', {
		id: 'result-items',
		"class": 'sort-items',
	}).appendTo('#results-wrapper');

	for (var [i, res] of results.entries()) {
		if (i == 10) { break };
		var user = res.obj;
		var name = keyHighlight(res, res[0], 'name');
		var mail = keyHighlight(res, res[1], 'email');
		var keys = ['email', 'phone', 'jobTitle', 'dateJoin'];

		for (var [j, key] of keys.entries()) {
			var keyMatch = fuzzysort.highlight(res[j + 1]);
			if (keyMatch) {
				var match = keyHighlight(res, res[j + 1], key);
				break;
			}
			var match = mail;
		}
		fuzzyResultHtml(user);
		fuzzyResultUpdate(user, name, match);
	}
}

// Highlight JSON field - if response is null, leave unhighlighted
function keyHighlight(result, keyResult, keyName) {
	var res = fuzzysort.highlight(keyResult);
	if (!res) res = result.obj[keyName];
	return res;
}

export { fuzzyResultsUpdate };