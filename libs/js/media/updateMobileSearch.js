import {
	elemShow,
	elemHide
} from '../helper.js';

function updateMobileSearch() {

	let animation = anime.timeline({});

	animation
		.add({
			begin: function() {
				$('#left-section').css('width', '100vw');
				$('#right-section').css('width', '100vw');
			},
			targets: '#left-section, #right-section',
			translateX: '0%',
			easing: 'easeInOutQuad',
			duration: 400,
			complete: function() {
				$('#left-section').css('width', '100vw');
				elemShow(search.elemShow);
			}
		})

	var search = {
		elemShow: [
			'#center-section'
		]
	}
}

export { updateMobileSearch };