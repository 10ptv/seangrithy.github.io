<?php
$host = 'sql12.freesqldatabase.com';
$username = 'sql12671198';
$password = 'HTeIXZJhFS';
$database = 'sql12671198';

$con = new mysqli($host, $username, $password, $database);

if ($con->connect_error) {
    die('Connection failed: ' . $con->connect_error);
}
?>
