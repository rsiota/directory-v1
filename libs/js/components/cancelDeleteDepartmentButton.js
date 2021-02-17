import { view } from './cancelDeleteDepartmentView.js';
import {
	elemEnable,
	inputEnable,
	elemHide,
	elemShow
} from '../helper.js';

function cancelDeleteDepartmentButton() {
	$('#delete-department-no').click(function() {
		$('#delete-department-message').html('');
		updateView();
	})
}

function updateView() {

	elemEnable(view.elemEnable);
	inputEnable(view.inputEnable);
	elemHide(view.elemHide);
	elemShow(view.elemShow);
}

export { cancelDeleteDepartmentButton };