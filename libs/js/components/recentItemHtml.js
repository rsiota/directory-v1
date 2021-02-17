import { handleMediaChange, mediaQuery } from '../media/media.js';
import { state } from '../state.js';
import { editorUpdate } from './editorUpdate.js';

function recentItemHtml(user) {

	// <div class="recent-item">
	//   <div class="recent-wrapper">
	//     <div class="recent-picture-tags">
	//       <div class="recent-picture-highlight">
	//         <img id="r-picture" src="" loading="lazy" alt="" class="recent-picture">
	//         <div id="r-initials" class="recent-picture-text"></div>
	//       </div>
	//       <div class="recent-tags">
	//         <div id="r-location" class="item-text-city-tag"></div>
	//         <div id="r-department" class="item-text-dep-tag">SA</div>
	//       </div>
	//     </div>
	//     <h5 id="r-name" class="recent-name"></h5>
	//     <div class="recent-icons">
	//       <div class="recent-phone"><a id="r-phone" href=""></a></div>
	//       <div class="recent-email"><a id="r-email" href=""></a></div>
	//       <img id="r-flag" src="" loading="lazy" alt="" class="recent-flag">
	//     </div>
	//   </div>
	// </div>

	var id = user['id'];

	$('<div/>', {
		id: 'recent-item-' + id,
		"class": 'recent-item',
		click: function() {
			state.currentAction = "slide-view";
			handleMediaChange(mediaQuery);
			editorUpdate(user);
		}
	}).appendTo('#recents-wrapper');
	$('<div/>', {
		id: 'recent-wrapper-' + id,
		"class": 'recent-wrapper',
	}).appendTo('#recent-item-' + id);
	$('<div/>', {
		id: 'recent-picture-tags-' + id,
		"class": 'recent-picture-tags',
	}).appendTo('#recent-wrapper-' + id);
	$('<div/>', {
		id: 'recent-picture-highlight-' + id,
		"class": 'recent-picture-highlight',
	}).appendTo('#recent-picture-tags-' + id);
	$('<img/>', {
		id: 'r-picture-' + id,
		"class": 'recent-picture',
	}).appendTo('#recent-picture-highlight-' + id);
	$('<div/>', {
		id: 'r-initials-' + id,
		"class": 'recent-picture-text',
	}).appendTo('#recent-picture-highlight-' + id);
	$('<div/>', {
		id: 'recent-tags-' + id,
		"class": 'recent-tags',
	}).appendTo('#recent-picture-tags-' + id);
	$('<div/>', {
		id: 'r-location-' + id,
		"class": 'item-text-city-tag',
	}).appendTo('#recent-tags-' + id);
	$('<div/>', {
		id: 'r-department-' + id,
		"class": 'item-text-dep-tag',
	}).appendTo('#recent-tags-' + id);
	$('<h5/>', {
		id: 'r-name-' + id,
		"class": 'recent-name',
	}).appendTo('#recent-wrapper-' + id);
	$('<div/>', {
		id: 'recent-icons-' + id,
		"class": 'recent-icons',
	}).appendTo('#recent-wrapper-' + id);
	$('<div/>', {
		id: 'recent-phone-' + id,
		"class": 'recent-phone',
	}).appendTo('#recent-icons-' + id);
	$('<a/>', {
		id: 'r-phone-' + id,
		text: '',
	}).appendTo('#recent-phone-' + id);
	$('<div/>', {
		id: 'recent-email-' + id,
		"class": 'recent-email',
	}).appendTo('#recent-icons-' + id);
	$('<a/>', {
		id: 'r-email-' + id,
		text: '',
	}).appendTo('#recent-email-' + id);

}

export { recentItemHtml };