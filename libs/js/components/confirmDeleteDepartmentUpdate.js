import {
	elemEnable,
	inputEnable,
	elemHide,
	elemShow
} from '../helper.js';
import { getDepartments } from '../ajax/getDepartments.js';
import { getLocations } from '../ajax/getLocations.js';
import { createDepartments } from '../ajax/getDepartments.js';
import { createLocations } from '../ajax/getLocations.js';
import { getAll } from '../ajax/getAll.js';
import { recentItemsUpdate } from './recentItemsUpdate.js';
import { clearSearch } from '../helper.js';
import { state } from '../state.js';
import { view } from './confirmDeleteDepartmentView.js';
import { formDepartmentClear } from './formDepartmentClear.js';
import { formDepartmentChoose } from './formDepartmentChoose.js';

function confirmDeleteDepartmentUpdate() {

	formDepartmentClear();
	getDepartments(createDepartments);
	getAll();
	recentItemsUpdate(state.recents);
	clearSearch();
	formDepartmentChoose();
	updateView();

}

function updateView() {
	elemEnable(view.elemEnable);
	inputEnable(view.inputEnable);
	elemHide(view.elemHide);
	elemShow(view.elemShow);

}

export { confirmDeleteDepartmentUpdate };