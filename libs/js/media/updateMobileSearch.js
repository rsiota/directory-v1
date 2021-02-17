import {
	elemShow,
	elemHide
} from '../helper.js';

function updateMobileSearch() {

	let animation = anime.timeline({});

	animation
		.add({
			begin: function() {
				$('#right-section').css('width', 'auto');
			},
			targets: '#right-section',
			translateX: '100%',
			easing: 'easeInOutQuad',
			duration: 400
		})
		.add({
			begin: function() {
				elemShow(search.elemShow);
			},
			targets: '#left-section',
			translateX: '0%',
			easing: 'easeInOutQuad',
			duration: 400
		}, 0)
		.add({
			targets: '#center-section',
			translateY: '0vh',
			duration: 1
		})
		.add({
			targets: '#right-section',
			translateX: '0%',
			translateY: '0vh',
			duration: 1,
			complete: function() {
				elemHide(search.elemHide);
			},
		})
}

var search = {

	elemShow: [
		'#left-section'
	],
	elemHide: [
		'#center-section',
		'#right-section',
		'#switch-view'
	]
}

export { updateMobileSearch };