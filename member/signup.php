<?php
// Start the session
session_start();

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

// Assuming you have received form data from POST method
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $username = $_POST['username'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);  // Hash the password

    // Perform the signup operation
    $sql = "INSERT INTO users (name, username, password) VALUES (?, ?, ?)";
    $stmt = $con->prepare($sql);

    if ($stmt) {
        $stmt->bind_param('sss', $name, $username, $password);
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
