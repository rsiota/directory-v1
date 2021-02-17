import { nameInitials, shortenLocation, shortenDepartment } from '../helper.js';
import { avatarUpdate } from './avatarUpdate.js';
import { state } from '../state.js';

function recentItemUpdate(user) {

	// Extract record fields

	var id = user['id'];
	var firstName = user['firstName'];
	var lastName = user['lastName'];
	var initials = nameInitials(firstName, lastName);
	var name = firstName + ' ' + lastName;
	var urlNoCountry = './libs/images/blank-country.png';
	if (user['flag'] != '') {
		var urlFlag = `https://hatscripts.github.io/circle-flags/flags/${user['flag']}.svg`;
		$('#r-flag-' + id).attr('src', urlFlag);
	} else {
		$('#r-flag-' + id).attr('src', urlNoCountry);
	}
	// Check if image exists and update
	avatarUpdate(user, '#r-picture-' + id);

	// Update search record
	$('#r-initials-' + id).html(initials);
	$('#r-location-' + id).html(shortenLocation(user['location']));
	$('#r-department-' + id).html(shortenDepartment(user['department']));
	$('#r-name-' + id).html(name);
	$('#r-phone-' + id).attr('href', 'tel:' + user['phone']);
	$('#r-email-' + id).attr('href', 'mailto:' + user['email']);

}

export { recentItemUpdate };