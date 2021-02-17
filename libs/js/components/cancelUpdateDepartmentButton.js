import { state } from '../state.js';
import { view } from './cancelUpdateDepartmentView.js';
import { formLocationIdSelect } from './formLocationIdSelect.js';
import {
	elemEnable,
	elemDisable,
	inputEnable,
	elemHide,
	elemShow
} from '../helper.js';

function cancelUpdateDepartmentButton() {
	$('#update-department-no').click(function() {
		$('#update-department').val('');
		formLocationIdSelect();
		updateView();
	})
}

function updateView() {

	elemEnable(view.elemEnable);
	elemDisable(view.elemDisable);
	inputEnable(view.inputEnable);
	elemHide(view.elemHide);
	elemShow(view.elemShow);
}

export { cancelUpdateDepartmentButton };