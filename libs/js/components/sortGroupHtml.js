function sortGroupHtml(id, filter) {

	// <div id="result-wrapper" class="result-wrapper"
	// 	<div id="result-label-wrapper" class="result-label-wrapper">
	// 	  <h2 id="result-label" class="result-label">A</h2>
	// 	</div>
	// 	<div id="result-items" class="result-items"></div>
	// </div>

	$('<div/>', {
		id: 'result-wrapper-' + id,
		"class": 'result-wrapper',
	}).appendTo('#results-wrapper');
	$('<div/>', {
		id: 'result-label-wrapper-' + id,
		"class": 'result-label-wrapper',
	}).prependTo('#result-wrapper-' + id);
	$('<h2/>', {
		id: 'result-label-' + id,
		"class": 'result-label',
		text: filter,
	}).appendTo('#result-label-wrapper-' + id);
	$('<div/>', {
		id: 'result-items-' + id,
		"class": 'result-items',
	}).appendTo('#result-wrapper-' + id);

}

export { sortGroupHtml };