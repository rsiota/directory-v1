import {
	elemShow,
	elemHide
} from '../helper.js';

function updateMobileSettings() {

	let animation = anime.timeline({});

	animation
		.add({
			begin: function() {
				$('#left-section').css('width', '100vw');
				$('#center-section').css('width', '100vw');
				elemHide(settings.elemHide);
				elemShow(settings.elemShow);
			},
			targets: '#left-section, #center-section',
			translateX: '-100%',
			easing: 'easeInOutQuad',
			duration: 400,
			complete: function() {
				$('#center-section').css('width', '100vw');
			}
		})

	var settings = {

		elemShow: [
			'#switch-view-settings'
		],
		elemHide: [
			'#right-section'
		]
	}
}

export { updateMobileSettings };