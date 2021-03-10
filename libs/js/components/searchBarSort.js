import { handleMediaChange } from '../media/media.js';
import { state } from '../state.js';
import { fuzzyResultHtml } from './fuzzyResultHtml.js';
import { fuzzyResultUpdate } from './fuzzyResultUpdate.js';
import { fuzzyResultsUpdate } from './fuzzyResultsUpdate.js';
import { editorUpdate } from './editorUpdate.js';
import { recentItemsUpdate } from './recentItemsUpdate.js';

function searchBarSort(database) {


	const $input = $('#search');
	const $results = $('#results');


	$input.off('input');

	// Run a search on input change
	$input.on('input', function() {
		search(database);
	});
	// Select input when escape pressed
	$input.onkeyup = (e) => {
		if (e.keyCode === 27) { $input.select() }
	}
	// Focus input when any key pressed
	document.onkeydown = (e) => {
		if (e.keyCode == 13) {
			if ($input.is(":focus")) {
				e.preventDefault();
				state.currentAction = "slide-view";
				handleMediaChange();
				editorUpdate(state.firstResult);
				recentItemsUpdate(state.recents);

			}
		}
	}
}

function search(db) {

	function getSearchLower() { return $input.val().toLowerCase() }

	const $input = $('#search');
	$input.focus();
	const inputValue = getSearchLower();
	let results = fuzzysort.go(inputValue, db, {
		keys: ['name', 'email', 'phone', 'jobTitle', 'dateJoin']
	})
	// Store first id for search button
	if (inputValue && results[0]) {
		state.firstResult = results[0]['obj'];
	}
	// Render results
	fuzzyResultsUpdate(results);
}

export { searchBarSort };