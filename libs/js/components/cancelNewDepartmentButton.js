import { state } from '../state.js';
import { view } from './cancelNewDepartmentView.js';
import {
	elemEnable,
	elemDisable,
	inputEnable,
	inputDisable,
	elemHide,
	elemShow
} from '../helper.js';

function cancelNewDepartmentButton() {
	$('#cancel-department').click(function() {
		$('#new-department').val('');
		updateView();
	})
}

function updateView() {

	elemEnable(view.elemEnable);
	elemDisable(view.elemDisable);
	inputEnable(view.inputEnable);
	inputDisable(view.inputDisable);
	elemHide(view.elemHide);
	elemShow(view.elemShow);
}

export { cancelNewDepartmentButton };