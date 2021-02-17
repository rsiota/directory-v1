import { sortResultsUpdate } from './sortResultsUpdate.js';
import { state } from '../state.js';
import { clearSearch } from '../helper.js';

function clearSearchButton() {
	$('#cancel-button-wrapper').click(function() {
		clearSearch();
		sortResultsUpdate(state.db, state.filter);
	})
}

export { clearSearchButton };