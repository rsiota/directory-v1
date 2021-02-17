import { nameInitials } from '../helper.js';
import { avatarUpdate } from './avatarUpdate.js';

function fuzzyResultUpdate(user, name, match) {

	// Extract record fields
	var id = user['id'];
	var firstName = user['firstName'];
	var lastName = user['lastName'];
	var initials = nameInitials(firstName, lastName);

	// Check if image exists and update
	avatarUpdate(user, '#s-picture-' + id);

	// Update search record
	$('#s-initials-' + id).html(initials);
	$('#s-name-' + id).html(name);
	$('#s-match-' + id).html(match);
	$('#s-phone-' + id).attr('href', 'tel:' + user['phone']);
	$('#s-email-' + id).attr('href', 'mailto:' + user['email']);

}

export { fuzzyResultUpdate };