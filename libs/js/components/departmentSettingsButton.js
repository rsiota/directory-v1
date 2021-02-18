function departmentSettingsButton() {
	$('#departments-editor').hover(highlight, unHighlight);
}


function highlight() {
	anime({
		targets: '#departments-button',
		color: '#34c759',
		fontWeight: 600,
		duration: 100
	});
}

function unHighlight() {
	anime({
		targets: '#departments-button',
		color: '#979797',
		fontWeight: 400,
		duration: 100
	});
}


export { departmentSettingsButton };