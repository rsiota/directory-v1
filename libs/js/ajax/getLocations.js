import { state } from '../state.js';
import { formLocationHtml } from '../components/formLocationHtml.js';

function getLocations(callback) {

	var res = $.ajax({
		url: "libs/php/getAllLocations.php",
		type: 'GET',
		dataType: 'json',
		async: false,
		success: function(result) {
			if (result.status.name == 'ok') {
				callback(result);
			}
		},
		error: function(jqXHR, textStatus, errorThrown) {
			console.log(errorThrown);
		}
	});
	return res;
}

function createLocations(result) {
	state.locations = result.data;
	formLocationHtml('office-location');
	formLocationHtml('location-department');
}

function updateNewLocation(result) {
	state.locations = result.data;
	formLocationHtml('office-location');
	formLocationHtml('location-department');
	$('#office-location option[value="' + state.newLocation + '"]').prop('selected', true);
	// $('#e-location').html($('#office-location').val() + ' |');
}

function updateCurrentLocation(result) {
	state.locations = result.data;
	formLocationHtml('office-location');
	formLocationHtml('location-department');
	$('#office-location option[value="' + state.updateLocation + '"]').prop('selected', true);
	// $('#e-location').html($('#office-location').val() + ' |');
}

export { getLocations, createLocations, updateNewLocation, updateCurrentLocation };