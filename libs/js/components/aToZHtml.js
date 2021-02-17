function aToZHtml(id, firstId) {

	//   <div class="atoz">
	//     <div class="alphabet-letter">A</div>
	//   </div>


	$('<div/>', {
		id: 'alphabet-letter-' + id,
		"class": 'alphabet-letter',
		text: id,
		click: function() {
			scrollTo(id, firstId);
		}
	}).appendTo('#atoz');

}

function scrollTo(id, firstId) {
	var firstElement = '#result-label-wrapper-' + firstId;
	var scrollTo = '#result-label-wrapper-' + id;
	$('#results-wrapper').animate({
			scrollTop: $(scrollTo).position().top - $(firstElement).position().top,
		},
		1000);
}

export { aToZHtml };