function aToZUpdate(filter) {

	if (filter == 'firstName') {
		showAToZ();
	} else {
		hideAToZ();
	}

}

function hideAToZ() {
	$('#atoz-wrapper').hide();
	$('.results-wrapper').css("padding-right", "15px");
}

function showAToZ() {
	$('#atoz-wrapper').show();
	$('.results-wrapper').css("padding-right", "25px");
}

export { aToZUpdate, hideAToZ }