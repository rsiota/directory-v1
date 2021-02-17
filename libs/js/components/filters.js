import { state } from '../state.js';
import { getAll } from '../ajax/getAll.js';
import { sortResultsUpdate } from './sortResultsUpdate.js';

var filtersId = ['#filter-name', '#filter-location', '#filter-department'];

function filters() {

	$('#filter-name').click(function() {
		filter('firstName', this);
	});
	$('#filter-location').click(function() {
		filter('location', this);
	});
	$('#filter-department').click(function() {
		filter('department', this);
	})
}

function filter(sortBy, divId) {
	addSelectedClass(divId);
	state.filter = sortBy;
	getAll(sortResultsUpdate);
}

function addSelectedClass(divId) {
	removeSelectedClass();
	$(divId).addClass('selected');
}

function removeSelectedClass() {
	for (var filter of filtersId) {
		$(filter).removeClass('selected');
	}
}

export { filters };