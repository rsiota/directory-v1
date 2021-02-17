import {
	elemEnable,
	elemHide,
	elemShow,
} from '../helper.js';
import { getAll } from '../ajax/getAll.js';
import { removeFromRecents } from '../helper.js';
import { editorUpdate } from './editorUpdate.js';
import { recentItemsUpdate } from './recentItemsUpdate.js';
import { clearSearch } from '../helper.js';
import { state } from '../state.js';
import { view } from './confirmDeleteUserView.js';

function confirmDeleteUserUpdate() {

	getAll();
	removeFromRecents(state.user);
	state.user = state.loggedUser;
	state.firstResult = {};
	editorUpdate(state.loggedUser);
	recentItemsUpdate(state.recents);
	clearSearch();
	updateView();
}

function updateView() {
	elemEnable(view.elemEnable);
	elemHide(view.elemHide);
	elemShow(view.elemShow);
	$('#search').focus();

}

export { confirmDeleteUserUpdate };