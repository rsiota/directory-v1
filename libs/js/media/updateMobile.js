import { state } from '../state.js';
import { updateMobileSearch } from './updateMobileSearch.js';
import { updateMobileEditor } from './updateMobileEditor.js';
import { updateMobileView } from './updateMobileView.js';
import {
	elemShow,
	elemHide
} from '../helper.js';

function updateMobile() {

	switch (state.currentAction) {
		case 'search':
			elemShow(search.elemShow);
			elemHide(search.elemHide);
			break;
		case 'editor':
			elemShow(editor.elemShow);
			elemHide(editor.elemHide);
			break;
		case 'view':
			elemShow(view.elemShow);
			break;
		case 'slide-editor':
			updateMobileEditor();
			break;
		case 'slide-view':
			updateMobileView();
			break;
		case 'slide-search':
			updateMobileSearch();
	}

}

var search = {

	elemShow: [
		'#left-section'
	],
	elemHide: [
		'#center-section',
		'#right-section'
	]
}

var editor = {

	elemHide: [
		'#switch-view',
	],
	elemShow: [
		'#center-section',
		'#right-section'
	]
}

var view = {

	elemShow: [
		'#center-section',
		'#right-section',
		'#switch-view'
	]
}

export { updateMobile };