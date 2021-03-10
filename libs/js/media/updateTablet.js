import { state } from '../state.js';
import {
	elemShow,
	elemHide
} from '../helper.js';
import { updateTabletSettings } from './updateTabletSettings.js';
import { updateTabletSettingsBack } from './updateTabletSettingsBack.js';

function updateTablet() {

	switch (state.currentAction) {
		case 'slide-editor':
			updateTabletSettingsBack();
			break;
		case 'slide-view':
			updateTabletSettingsBack();
			break;
		case 'slide-settings':
			updateTabletSettings();
			break;
		case 'slide-settings-back':
			updateTabletSettingsBack();
			break;
	}

	var tablet = {
		elemShow: [
			'#settings-button-wrapper'
		],
		elemHide: [
			'.logo-img'

		]
	};

	elemShow(tablet.elemShow);
	elemHide(tablet.elemHide);
}

export { updateTablet };