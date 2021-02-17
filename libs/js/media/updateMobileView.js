import {
	elemShow,
	elemHide
} from '../helper.js';

function updateMobileView() {

	let animation = anime.timeline({});

	animation
		.add({
			begin: function() {
				$('#left-section').css('width', '100vw');
				$('#right-section').css('width', '100vw');
			},
			targets: '#left-section, #right-section',
			translateX: '-100%',
			easing: 'easeInOutQuad',
			duration: 400,
			complete: function() {
				$('#right-section').css('width', '100vw');
				elemShow(view.elemShow);
			}
		})

	var view = {

		elemShow: [
			'#switch-view',
			'right-section'
		],
	}
}
export { updateMobileView };