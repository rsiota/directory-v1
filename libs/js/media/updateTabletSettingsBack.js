import {
	elemShow,
	elemHide
} from '../helper.js';

function updateTabletSettingsBack() {

	let animation = anime.timeline({});

	animation
		.add({
			targets: '#center-section, #right-section',
			translateX: '0%',
			easing: 'easeInOutQuad',
			duration: 400,
			complete: function() {
				elemHide(settingsBack.elemHide);
				$('#layout').css('grid-template-areas', '');
				$('#center-section').css('width', '');
				$('#right-section').css('z-index', '');
			}
		})

		var settingsBack = {
			elemHide: [
				'#switch-view-settings',
			]
		}
}

export { updateTabletSettingsBack };