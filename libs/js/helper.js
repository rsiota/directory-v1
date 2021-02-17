import { state } from './state.js';

export function shortenLocation(s) {
  if (s != null && s !== '') {
    var res = s[0];
    if (s.indexOf(' ') >= 0) {
      var secondWordIndex = s.indexOf(' ') + 1;
      res += s[secondWordIndex];
    } else {
      res += s[1];
    }
    return res.toUpperCase();
  } else {
    var res = '';
  }
  return res;
}

export function shortenDepartment(s) {
  if (s != null && s !== '') {
    var res = s.slice(0, 2);
    res = res.toUpperCase();
  } else {
    var res = '';
  }
  return res;
}

export function nameInitials(first, last) {
  if (first != '') {
    var fInitial = first[0];
  } else {
    fInitial = '';
  }
  if (last != '') {
    var lInitial = last[0];
  } else {
    lInitial = '';
  }
  var initials = fInitial + lInitial;
  return initials;
}

export function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key].toUpperCase() === value);
}

export function getIdOfValue(arr, value) {
  var id;
  for (var i = 0; i < arr.length; i++) {
    var name = arr[i]['name'];
    if (name === value) {
      var id = arr[i]['id'];
    }
  }
  return id;
}

export function getLocationIdByDepartmentId(arr, depId) {
  var locationId;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]['id'] == depId) {
      locationId = arr[i]['locationID'];
    }
  }
  return locationId;
}

export function getLocationByLocationId(arr, locId) {
  var location;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]['id'] == locId) {
      location = arr[i]['name'];
    }
  }
  return location;
}

export function addToRecents(item) {
  let recentIds = state.recents.map(recent => recent.id);
  if (recentIds.indexOf(item['id']) === -1) {
    state.recents.unshift(item);
    state.recents = state.recents.slice(0, 10);
  }
}

export function removeFromRecents(item) {
  const index = state.recents.indexOf(item);
  if (index > -1) {
    state.recents.splice(index, 1);
  }
}

export function updateRecents(item) {
  for (var i = 0; i < state.recents.length; i++) {
    if (state.recents[i]['id'] == item['id']) {
      state.recents[i] = item;
      break;
    }
  }
}

export function recentItemsRefresh(db, recents) {
  var updatedRecents = [];
  for (var j = 0; j < recents.length; j++) {
    for (var i = 0; i < db.length; i++) {
      if (recents[j]['id'] == db[i]['id']) {
        updatedRecents.push(db[i]);
      }
    }
  }
  return updatedRecents;
}

export function groupByFilter(result, filter) {
  switch (filter) {
    case 'firstName':
      var data = _(result.data)
        .groupBy(o => o[filter][0])
        .map((contacts, filter) => ({ filter, contacts }))
        .value();
      break;
    default:
      var data = _(result.data)
        .groupBy(o => o[filter])
        .map((contacts, filter) => ({ filter, contacts }))
        .value();
  }
  return data;
}

export function capitalizeFirst(input) {
  $(input).on('keydown', function(event) {
    if (this.selectionStart == 0 && event.keyCode >= 65 && event.keyCode <= 90 && !(event.shiftKey) && !(event.ctrlKey) && !(event.metaKey) && !(event.altKey)) {
      var $t = $(this);
      event.preventDefault();
      var char = String.fromCharCode(event.keyCode);
      $t.val(char + $t.val().slice(this.selectionEnd));
      this.setSelectionRange(1, 1);
    }
  });
}

export function elemEnable(array) {
  for (var i = 0; i < array.length; i++) {
    $(array[i]).removeClass('disable-content');
  }
}

export function elemDisable(array) {
  for (var i = 0; i < array.length; i++) {
    $(array[i]).addClass('disable-content');
  }
}

export function elemShow(array) {
  for (var i = 0; i < array.length; i++) {
    $(array[i]).removeClass('hide');
  }
}

export function elemHide(array) {
  for (var i = 0; i < array.length; i++) {
    $(array[i]).addClass('hide');
  }
}

export function inputDisable(array) {
  for (var i = 0; i < array.length; i++) {
    $(array[i]).prop('disabled', true);
  }
}

export function inputEnable(array) {
  for (var i = 0; i < array.length; i++) {
    $(array[i]).removeAttr('disabled');
  }
}

export function elemLowOpacity(array) {
  for (var i = 0; i < array.length; i++) {
    $(array[i]).addClass('reduce-opacity');
  }
}

export function elemFullOpacity(array) {
  for (var i = 0; i < array.length; i++) {
    $(array[i]).removeClass('reduce-opacity');
  }
}

export function checkDepartDependencies(db, department) {
  var departments = db['data'].map(a => a.department);
  var hasDependencies = departments.includes(department);
  return hasDependencies;
}

export function checkLocatDependencies(departments, locatID) {
  var locations = departments.map(a => a.locationID);
  var hasDependencies = locations.includes(locatID);
  return hasDependencies;
}

export function clearSearch() {
  $('#cancel-button-wrapper').hide();
  $('#search').val('');
}