import { handleMediaChange } from '../media/media.js';
import { editorUpdate } from './editorUpdate.js';
import { recentItemsUpdate } from './recentItemsUpdate.js';
import { state } from '../state.js';

function fuzzyResultHtml(user) {

	// <div id='item-center' class="item-center">
	//   <div class="item-picture-wrapper">
	//     <div class="item-picture-highlight"></div>
	//     <div id="s-initials" class="item-picture-text"></div>
	//     <img src="" loading="lazy" alt="" id="s-picture" class="item-picture">
	//   </div>
	//   <div class="item-text-wrapper">
	//     <h4 id="s-name" class="item-text-name"></h4>
	//     <div class="item-text-dep-wrapper">
	//       <div id="s-location" class="item-text-city-tag"></div>
	//       <h6 id="s-department" class="item-text-department"></h6>
	//     </div>
	//   </div>
	//   <div class="item-actions-wrapper">
	//     <div class="action-phone"><a id="s-phone" href=""></a></div>
	//     <div class="action-email"><a id="s-email" href=""></a></div>
	//   </div>
	// </div>

	var id = user['id'];

	$('<div/>', {
		id: 'item-center-' + id,
		"class": 'item-center',
		click: function() {
			state.currentAction = "slide-view";
			handleMediaChange();
			editorUpdate(user);
			recentItemsUpdate(state.recents);
		}
	}).appendTo('#result-items');
	$('<div/>', {
		id: 'item-picture-wrapper-' + id,
		"class": 'item-picture-wrapper',
	}).appendTo('#item-center-' + id);
	$('<div/>', {
		id: 'item-picture-highlight-' + id,
		"class": 'item-picture-highlight',
	}).appendTo('#item-picture-wrapper-' + id);
	$('<div/>', {
		id: 's-initials-' + id,
		"class": 'item-picture-text',
	}).appendTo('#item-picture-wrapper-' + id);
	$('<img/>', {
		id: 's-picture-' + id,
		"class": 'item-picture',
	}).appendTo('#item-picture-wrapper-' + id);
	$('<div/>', {
		id: 'item-text-wrapper-' + id,
		"class": 'item-text-wrapper',
	}).appendTo('#item-center-' + id);
	$('<h4/>', {
		id: 's-name-' + id,
		"class": 'item-text-name',
	}).appendTo('#item-text-wrapper-' + id);
	$('<div/>', {
		id: 'item-text-dep-wrapper-' + id,
		"class": 'item-text-dep-wrapper',
	}).appendTo('#item-text-wrapper-' + id);
	$('<div/>', {
		id: 's-match-' + id,
		"class": 'item-text-department',
	}).appendTo('#item-text-dep-wrapper-' + id);
	$('<div/>', {
		id: 'item-actions-wrapper-' + id,
		"class": 'item-actions-wrapper',
	}).appendTo('#item-center-' + id);
	$('<div/>', {
		id: 'action-phone-' + id,
		"class": 'action-phone',
	}).appendTo('#item-actions-wrapper-' + id);
	$('<a/>', {
		id: 's-phone-' + id,
		text: '',
	}).appendTo('#action-phone-' + id);
	$('<div/>', {
		id: 'action-email-' + id,
		"class": 'action-email',
	}).appendTo('#item-actions-wrapper-' + id);
	$('<a/>', {
		id: 's-email-' + id,
		text: '',
	}).appendTo('#action-email-' + id);

}

export { fuzzyResultHtml };