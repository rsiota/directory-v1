import {
	elemEnable,
	elemDisable,
	inputEnable,
	inputDisable,
	elemHide,
	elemShow
} from '../helper.js';
import { getDepartments } from '../ajax/getDepartments.js';
import { updateNewDepartment } from '../ajax/getDepartments.js';
import { state } from '../state.js';
import { view } from './saveNewDepartmentView.js';

function saveNewDepartmentUpdate() {

	state.departments = [];
	getDepartments(updateNewDepartment);
	$('#department-edit option[value="' + state.newDepartment.name + '"]').prop('selected', true);
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

export { saveNewDepartmentUpdate };