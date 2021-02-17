function loginSubmitAnimation() {

	$('#login-submit').val('');

	let animation = anime.timeline({});

	animation
		.add({
			targets: '#login-submit',
			width: 42,
			easing: "easeInOutQuad",
			duration: 800
		})
		.add({
			targets: '#login-submit',
			scale: (60, 60),
			easing: "easeInOutQuad",
			duration: 800
		})
		.add({
			targets: '#login-welcome',
			opacity: 0,
			duration: 0
		})
		.add({
			targets: '.login-input-wrapper',
			opacity: 0,
			duration: 0
		})
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

export { loginSubmitAnimation };