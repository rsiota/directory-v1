import { loader } from './components/loader.js';
import { addListeners } from './addListeners.js';
import { logRemote } from './components/logRemote.js';
import { getDepartments } from './ajax/getDepartments.js';
import { createDepartments } from './ajax/getDepartments.js';
import { createLocations } from './ajax/getLocations.js';
import { getLocations } from './ajax/getLocations.js';
import { getAll } from './ajax/getAll.js';
import { state } from './state.js';

loader();
addListeners();
getDepartments(createDepartments);
getLocations(createLocations);
logRemote();
getAll();