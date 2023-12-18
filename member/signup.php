<?php
session_start();

// Your database connection parameters
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

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Collect user inputs from the form
    $username = $_POST['username'];
    $password = $_POST['password'];
    $email = $_POST['email'];
    $full_name = $_POST['full_name'];

    // Hash the password for security
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Insert user information into the database
    $sql = "INSERT INTO users (username, password, email, full_name) VALUES (?, ?, ?, ?)";
    $stmt = $con->prepare($sql);

    if ($stmt) {
        $stmt->bind_param('ssss', $username, $hashed_password, $email, $full_name);
        $result = $stmt->execute();

        if ($result) {
            // Signup successful
            echo "Signup successful";
        } else {
            // Error in the signup process
            echo "Error: " . $stmt->error;
        }

        $stmt->close();
    } else {
        // Error preparing the statement
        echo 'Error preparing statement: ' . $con->error;
    }
}

// Close the database connection
$con->close();
?>
