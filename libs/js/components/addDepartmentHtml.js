import { elemEnable, elemDisable, elemHide, elemShow, inputEnable, inputDisable  } from '../helper.js';
import { view } from './addDepartmentView.js';
import { capitalizeFirst } from '../helper.js';

function addDepartmentHtml() {
	updateView();
}

function updateView() {


	elemEnable(view.elemEnable);
	elemDisable(view.elemDisable);
	elemHide(view.elemHide);
	elemShow(view.elemShow);
	inputEnable(view.inputEnable);
	inputDisable(view.inputDisable);

	$('#new-department').focus();

	// Capitalize first letter on input
	capitalizeFirst('#new-department');

}

export { addDepartmentHtml };