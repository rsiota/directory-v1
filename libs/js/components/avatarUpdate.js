
function avatarUpdate(user, divId) {

	var isPhoto = user['photo'];
	var urlPhoto = './libs/images/faces/' + user['photoFile'];
	if (isPhoto === '1') {
		$(divId).removeClass('hide');
		$(divId).attr('src', urlPhoto);
	} else {
		$(divId).addClass('hide');
	}
}

export { avatarUpdate };