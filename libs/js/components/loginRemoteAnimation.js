function loginRemoteAnimation() {

	$('#login-submit').val('');

	let animation = anime.timeline({});

	animation
		.add({
			targets: '.main',
			opacity: 0,
			easing: "easeInOutQuad",
			duration: 800,
			complete: function() {
				$('#main').css('display', 'none');
			},
		})
}

export { loginRemoteAnimation };