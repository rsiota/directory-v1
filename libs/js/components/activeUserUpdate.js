import { avatarUpdate } from './avatarUpdate.js';
import { nameInitials } from '../helper.js';

function activeUserUpdate(user) {

	// Extract fields from user
	var firstName = user['firstName'];
	var lastName = user['lastName'];
	var name = firstName + ' ' + lastName;
	var initials = nameInitials(firstName, lastName);

	avatarUpdate(user, '#u-picture');

	// Update current user
	$('#u-name').html(name);
	$('#u-initials').html(initials);
}

export { activeUserUpdate };