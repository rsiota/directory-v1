<?php

	// example use from browser
	// http://localhost/~rsiota/contacts/test.php?email="bmacalland@github.com"&password=password

	// remove next two lines for production

	ini_set('display_errors', 'On');
	error_reporting(E_ALL);

	$executionStartTime = microtime(true);

	include("config.php");

	header('Content-Type: application/json; charset=UTF-8');

	$conn = new mysqli($cd_host, $cd_user, $cd_password, $cd_dbname, $cd_port, $cd_socket);

	if (mysqli_connect_errno()) {

		$output['status']['code'] = "300";
		$output['status']['name'] = "failure";
		$output['status']['description'] = "database unavailable";
		$output['status']['returnedIn'] = (microtime(true) - $executionStartTime) / 1000 . " ms";
		$output['data'] = [];

		mysqli_close($conn);

		echo json_encode($output);

		exit;

	}



	// $_REQUEST used for development / debugging. Remember to change to $_POST for production

	$query = 'SELECT p.id, p.firstName, p.lastName, p.password, CONCAT (p.firstName, " ", p.lastName) as name, p.phone, p.email, d.name as department, jobTitle, dateJoin, l.name as location, photo, photoFile FROM personnel p LEFT JOIN department d ON (d.id = p.department) LEFT JOIN location l ON (l.id = p.location) WHERE p.email = ' . $_REQUEST['email'];

	$result = $conn->query($query);

	if (!$result) {

		$output['status']['code'] = "400";
		$output['status']['name'] = "executed";
		$output['status']['description'] = "query failed";
		$output['data'] = [];

		mysqli_close($conn);

		echo json_encode($output);

		exit;

	}

   	$data = [];

	while ($row = mysqli_fetch_assoc($result)) {

		array_push($data, $row);

	}

	$output['status']['code'] = "200";
	$output['status']['name'] = "ok";
	$output['status']['returnedIn'] = (microtime(true) - $executionStartTime) / 1000 . " ms";
	$output['data'] = $data;

	$hash = $data[0]['password'];
	$password = $_REQUEST['password'];

	if (password_verify($password, $hash)) {
	$output['status']['description'] = "success";
	} else {
		$output['status']['description'] = "login error";
	};

	unset($output['data'][0]['password']);

	mysqli_close($conn);


	echo json_encode($output);

?>
