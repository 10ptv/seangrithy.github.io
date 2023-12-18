<?php
// Database connection parameters
$host = 'sql12.freesqldatabase.com';
$username = 'sql12671198';
$password = 'HTeIXZJhFS';
$database = 'sql12671198';

// Create a database connection
$con = new mysqli($host, $username, $password, $database);

// Check for connection errors
if ($con->connect_error) {
    die('Connection failed: ' . $con->connect_error);
}
?>
