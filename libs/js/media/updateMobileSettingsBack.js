import {
	elemShow,
	elemHide
} from '../helper.js';

function updateMobileSettingsBack() {

	let animation = anime.timeline({});

	animation
		.add({
			begin: function() {
				$('#left-section').css('width', '100vw');
				$('#center-section').css('width', '100vw');
			},
			targets: '#left-section, #center-section',
			translateX: '0%',
			easing: 'easeInOutQuad',
			duration: 400,
			complete: function() {
				$('#left-section').css('width', '100vw');
				elemShow(settingsBack.elemShow);
			}
		})

		var settingsBack = {
			elemShow: [
				'#right-section'
			]
		}
}

export { updateMobileSettingsBack };