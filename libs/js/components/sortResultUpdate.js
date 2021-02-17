import { nameInitials, shortenLocation } from '../helper.js';
import { avatarUpdate } from './avatarUpdate.js';
import { state } from '../state.js';

function sortResultUpdate(user) {

	// Extract record fields
	var id = user['id'];
	var firstName = user['firstName'];
	var lastName = user['lastName'];
	var name = firstName + ' ' + lastName;
	var initials = nameInitials(firstName, lastName);
	var loggedUserLoc = state.loggedUser['location'];
	var location = user['location'];


	// Update search record
	$('#s-initials-' + id).html(initials);
	$('#s-name-' + id).html(name);
	$('#s-location-' + id).html(shortenLocation(user['location']));
	$('#s-department-' + id).html(user['department']);
	$('#s-phone-' + id).attr('href', 'tel:' + user['phone']);
	$('#s-email-' + id).attr('href', 'mailto:' + user['email']);

	// Check if image exists and update
	avatarUpdate(user, '#s-picture-' + id);

}

export { sortResultUpdate };