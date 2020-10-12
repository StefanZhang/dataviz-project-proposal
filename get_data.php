<?php

// database variables
$hostname = "localhost";
$user = "twitter";
$password = "CR5tsKTJSh3B63Pz";
$database = "twitter";
$port = 3306;

$conn = mysqli_connect($hostname, $user, $password, $database, $port);
if (mysqli_connect_errno()) {
    die("Failed to connect to MySQL: " . mysqli_connect_error());
}

$query = mysqli_query($conn, "SELECT * FROM twitter");