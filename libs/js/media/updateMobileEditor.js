import {
	elemShow,
	elemHide
} from '../helper.js';

function updateMobileEditor() {

	let animation = anime.timeline({});

	animation

		.add({
			begin: function() {
				elemHide(editor.elemHide);
			},
			targets: '#right-section',
			translateX: '100%',
			translateY: 'calc(-100vh - 15px)',
			duration: 0
		})
		.add({
			targets: '#center-section',
			translateY: 'calc(-100vh - 15px)',
			easing: 'easeInOutQuad',
			duration: 0
		})
		.add({
			begin: function() {
				elemShow(editor.elemShow);
			},
			targets: '#left-section',
			translateX: '-100%',
			opacity: 1,
			easing: 'easeInOutQuad',
			duration: 400
		})
		.add({
			targets: '#right-section',
			translateX: '0%',
			easing: 'easeInOutQuad',
			duration: 400,
			complete: function() {
				$('#right-section').css('width', '100vw');
			}
		}, 0)
}

var editor = {

	elemHide: [
		'#switch-view',
	],
	elemShow: [
		'#center-section',
		'#right-section'
	]
}

export { updateMobileEditor };