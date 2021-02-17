<?php

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

	if ($_POST['dateJoin'] != '') {
		$dateJoin = "'" . $_POST['dateJoin'] . "'";
	} else {
		$dateJoin = 'null';
	}

	$query = 'UPDATE personnel SET ' .
		'id="' . $_POST['id'] . '", ' .
		'firstName="' . $_POST['firstName'] . '", ' .
		'lastName="' . $_POST['lastName'] . '", ' .
		'phone="' . $_POST['phone'] . '", ' .
		'email="' . $_POST['email'] . '", ' .
		'department="' . $_POST['department'] . '", ' .
		'jobTitle="' . $_POST['jobTitle'] . '", ' .
		'dateJoin=' . $dateJoin . ', ' .
		'photo="' . $_POST['photo'] . '", ' .
		'photoFile="' . $_POST['photoFile'] . '" ' .
		'WHERE id="' . $_POST['id'] . '"';

	$result = $conn->query($query);

	if (!$result) {

		$output['status']['code'] = "400";
		$output['status']['name'] = "executed";
		$output['status']['description'] = "query failed";
	$output['data'] = $_POST;

		mysqli_close($conn);

		echo json_encode($output);

		exit;

	}

	$output['status']['code'] = "200";
	$output['status']['name'] = "ok";
	$output['status']['description'] = "success";
	$output['status']['returnedIn'] = (microtime(true) - $executionStartTime) / 1000 . " ms";

	mysqli_close($conn);

	echo json_encode($output);

?>