function locationSettingsButton() {
	$('#result-items-locations').hover(highlight, unHighlight);
}


function highlight() {
	anime({
		targets: '#locations-button',
		color: '#34c759',
		fontWeight: 600,
		duration: 100
	});
}

function unHighlight() {
	anime({
		targets: '#locations-button',
		color: '#979797',
		fontWeight: 400,
		duration: 100
	});
}


export { locationSettingsButton };