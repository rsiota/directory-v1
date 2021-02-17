function updateCurrentUser(arr, userId) {
	var user;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i]['id'] == userId) {
			user = arr[i];
		}
	}
	return user;
}

export { updateCurrentUser };