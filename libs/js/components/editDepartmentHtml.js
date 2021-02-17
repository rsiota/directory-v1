import { elemEnable, elemDisable, elemHide, elemShow, inputEnable, inputDisable } from '../helper.js';
import { view } from './editDepartmentView.js';
import { capitalizeFirst } from '../helper.js';

function editDepartmentHtml() {
	updateView();
}

function updateView() {

	elemEnable(view.elemEnable);
	elemDisable(view.elemDisable);
	elemHide(view.elemHide);
	elemShow(view.elemShow);
	inputDisable(view.inputDisable);
	inputEnable(view.inputEnable);

	$('#update-department').val($('#department-edit').val());
	$('#update-department').focus();

	// Capitalize first letter on input
	capitalizeFirst('#update-department');

}

export { editDepartmentHtml };