import { state } from '../state.js';
import { editorUpdate } from './editorUpdate.js';
import { recentItemsUpdate } from './recentItemsUpdate.js';

function searchButton() {
	$('#search-icon').click(function() {
		editorUpdate(state.firstResult);
		recentItemsUpdate(state.recents);
	})
}

export { searchButton };