import {
	elemShow,
	elemHide
} from '../helper.js';

function updateMobileView() {

	let animation = anime.timeline({});

	animation

		.add({
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
				elemShow(view.elemShow);
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

var view = {

	elemHide: [
		'#left-section'
	],
	elemShow: [
		'#center-section',
		'#right-section',
		'#switch-view'
	]
}
export { updateMobileView };