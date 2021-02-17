import { state } from '../state.js';
import { updateMobileSearch } from './updateMobileSearch.js';
import { updateMobileEditor } from './updateMobileEditor.js';
import { updateMobileView } from './updateMobileView.js';
import { updateMobileSettings } from './updateMobileSettings.js';
import { updateMobileSettingsBack } from './updateMobileSettingsBack.js';
import {
	elemShow,
	elemHide
} from '../helper.js';

function updateMobile() {

	switch (state.currentAction) {
		case 'search':
			break;
		case 'editor':
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
			break;
		case 'slide-settings':
			updateMobileSettings();
			break;
		case 'slide-settings-back':
			updateMobileSettingsBack();
			break;
	}

}

var search = {

	elemHide: [
		'#center-section'
	],
}

var editor = {

	elemHide: [
		'#switch-view'
	],
}

var view = {

	elemShow: [
		'#switch-view'
	]
}


export { updateMobile };