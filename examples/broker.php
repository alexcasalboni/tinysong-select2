<?php

/* ******** config *********** */
$pname = "s"; //GET param name
$format = "json"; //results format
$key = "TINYSONG_API_KEY"; //you can get one visiting http://tinysong.com/api
/* *************************** */

if(!isSet($_GET[$pname]) || !strlen($_GET[$pname])) {
	die("No '$pname' query param.");
}

$term = $_GET[$pname];
$url = "http://tinysong.com/s/" . urlencode($term) . "/?format=$format&key=$key";

if($format=='json'){
	header('Content-Type: application/json');
}

echo file_get_contents($url);