import { elemEnable, elemDisable, elemHide, elemShow, inputDisable  } from '../helper.js';
import { view } from './deleteDepartmentView.js';
import { checkDepartDependencies } from '../helper.js';
import { state } from '../state.js';

function deleteDepartmentHtml() {
	updateView();
	var department = $('#department-edit').val();
	var message = $('#delete-department-message');

	var hasDependencies = checkDepartDependencies(state.db, department);
	if (hasDependencies == true) {
		message.html('Department with dependencies!');
		elemHide(['#delete-department-yes']);
	} else {
		message.html('Delete ' + department + '?');
		elemShow(['#delete-department-yes']);
	}
}

function updateView() {

	elemEnable(view.elemEnable);
	elemDisable(view.elemDisable);
	elemHide(view.elemHide);
	elemShow(view.elemShow);
	inputDisable(view.inputDisable);

}

export { deleteDepartmentHtml };