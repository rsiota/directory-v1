import {
	elemShow,
	elemHide
} from '../helper.js';

function updateMobileEditor() {

	let animation = anime.timeline({});

	animation
		.add({
			begin: function() {
				$('#left-section').css('width', '100vw');
				$('#right-section').css('width', '100vw');
				elemShow(editor.elemShow);
				elemHide(editor.elemHide);
			},
			targets: '#left-section, #right-section',
			translateX: '-100%',
			easing: 'easeInOutQuad',
			duration: 400,
			complete: function() {
				$('#right-section').css('width', '100vw');
			}
		})
	var editor = {

		elemShow: [
			'#right-section'
		],
		elemHide: [
			'#center-section',
			'#switch-view'

		]
	}
}

export { updateMobileEditor };