import { sortResultHtml } from './sortResultHtml.js';
import { sortGroupHtml } from './sortGroupHtml.js';
import { sortResultUpdate } from './sortResultUpdate.js';
import { groupByFilter } from '../helper.js';
import { aToZHtml } from './aToZHtml.js';
import { aToZUpdate } from './aToZUpdate.js';

function sortResultsUpdate(result, sortBy) {

	// Group result by filter
	var data = groupByFilter(result, sortBy);
	var firstId = data[0].filter[0];

	$('#results-wrapper').text('');
	$('#atoz').text('');
	aToZUpdate(sortBy);

	for (var i = 0; i < data.length; i++) {

		var filter = data[i].filter;
		var id = filter[0];

		// Create label html element
		sortGroupHtml(id, filter);
		// Create vertical navigation
		aToZHtml(id, firstId);

		for (var j = 0; j < data[i].contacts.length; j++) {

			var user = data[i].contacts[j];

			// Create search html element
			sortResultHtml(id, user);

			// Update search record
			sortResultUpdate(user);
		}
	}

	setTimeout(function() { scrollTop(); }, 1000);

	// Scroll to first result
	function scrollTop() {
		var scrollTo = '#result-label-wrapper-' + data[0].filter[0];
		$('#results-wrapper').animate({
			scrollTop: $(scrollTo).position().top - 300,
		}, 1000);
	}
}

export { sortResultsUpdate };