import { recentItemHtml } from './recentItemHtml.js';
import { recentItemUpdate } from './recentItemUpdate.js';

function recentItemsUpdate(recents) {

	$('#recents-wrapper').text('');

	for (var recent of recents) {
		// Create recent html element
		recentItemHtml(recent);
		// Update recent record
		recentItemUpdate(recent);
	}

	$(function() {
		$('.recents-wrapper').mousewheel(function(event, delta) {
			this.scrollLeft -= (delta);
			event.preventDefault();
		});

	});
}

export { recentItemsUpdate };