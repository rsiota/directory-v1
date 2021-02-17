import {
	elemEnable,
	elemDisable,
	inputEnable,
	inputDisable,
	elemHide,
	elemShow
} from '../helper.js';
import { getDepartments } from '../ajax/getDepartments.js';
import { updateCurrentDepartment } from '../ajax/getDepartments.js';
import { state } from '../state.js';
import { view } from './saveUpdateDepartmentView.js';

function saveUpdateDepartmentUpdate() {

	state.departments = [];
	getDepartments(updateCurrentDepartment);
	$('#department-edit option[value="' + state.updateDepartment.name + '"]').prop('selected', true);
	updateView();

}

function updateView() {
	elemEnable(view.elemEnable);
	elemDisable(view.elemDisable);
	inputEnable(view.inputEnable);
	inputDisable(view.inputDisable);
	elemHide(view.elemHide);
	elemShow(view.elemShow);

}

export { saveUpdateDepartmentUpdate };