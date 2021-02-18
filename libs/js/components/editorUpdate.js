import { addToRecents } from '../helper.js';
import { formEditorUpdate } from './formEditorUpdate.js';
import { formDepartmentsUpdate } from './formDepartmentsUpdate.js';
import { state } from '../state.js';

function editorUpdate(user) {

	state.user = user;
	formEditorUpdate(user);
	formDepartmentsUpdate();
	addToRecents(user);

}

export { editorUpdate };