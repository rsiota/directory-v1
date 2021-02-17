var state = {
	// viewport size
	viewport: "",
	// current logged user
	currentAction: "search",
	loginUser: {},
	loggedUser: {},
	// user on editor
	user: {},
	// whole database
	db: {},
	departments: [],
	locations: [],
	newDepartment: {},
	newLocation: "",
	deleteDepartmentId: "",
	deleteLocationId: "",
	updateDepartment: {},
	// current 'sort by' field
	filter: "firstName",
	// array of recent selected users
	recents: [],
	// user on editor [existing or new]
	record: "existing",
	// number of current records in database
	lastId: 0,
};

export { state };