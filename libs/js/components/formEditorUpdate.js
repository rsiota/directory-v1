import { nameInitials } from '../helper.js';
import { avatarUpdate } from './avatarUpdate.js';
import { formFirstNameUpdate } from './formFirstNameUpdate.js';
import { formLastNameUpdate } from './formLastNameUpdate.js';
import { formEmailUpdate } from './formEmailUpdate.js';
import { formPhoneUpdate } from './formPhoneUpdate.js';
import { formDepartmentUpdate } from './formDepartmentUpdate.js';
import { formJobTitleUpdate } from './formJobTitleUpdate.js';
import { formJoinDateUpdate } from './formJoinDateUpdate.js';
import { formLabelsUpdate } from './formLabelsUpdate.js';
import { formInitialsUpdate } from './formInitialsUpdate.js';

function formEditorUpdate(user) {

	avatarUpdate(user, '#picture');
	formFirstNameUpdate(user);
	formLastNameUpdate(user);
	formEmailUpdate(user);
	formPhoneUpdate(user);
	formDepartmentUpdate(user);
	formJobTitleUpdate(user);
	formJoinDateUpdate(user);
	formInitialsUpdate(user);
	formLabelsUpdate();

}

export { formEditorUpdate };