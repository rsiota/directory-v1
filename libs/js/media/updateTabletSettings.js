import {
	elemShow,
	elemHide
} from '../helper.js';

function updateTabletSettings() {

	let animation = anime.timeline({});

	animation
		.add({
			begin: function() {
				$('#layout').css('grid-template-areas', '"search editor settings"');
				$('#center-section').css('width', 'calc(50vw - 20px)');
				$('#right-section').css('z-index', '-10');
			},
			targets: '#center-section, #right-section',
			translateX: '-100%',
			easing: 'easeInOutQuad',
			duration: 400,
			complete: function() {
				elemShow(settings.elemShow);
				elemHide(settings.elemHide);
			}
		})

	var settings = {

		elemShow: [
			'#switch-view-settings'
		],
		elemHide: [
			'#settings-button-wrapper'

		]
	}
}



export { updateTabletSettings };