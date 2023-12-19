<?php
session_start();
include('db.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $username = $_POST['username'];
    $password = $_POST['password'];
    $email = $_POST['email'];

    // Perform any additional validation or sanitization if needed

    // Check if the username already exists
    $checkUsernameQuery = "SELECT id FROM login WHERE username=?";
    $checkStmt = $con->prepare($checkUsernameQuery);

    if ($checkStmt) {
        $checkStmt->bind_param('s', $username);
        $checkStmt->execute();
        $checkStmt->store_result();

        if ($checkStmt->num_rows > 0) {
            echo "Username already exists. Please choose a different username.";
            $checkStmt->close();
            $con->close();
            exit;
        }

        $checkStmt->close();
    } else {
        echo 'Error preparing statement: ' . $con->error;
        $con->close();
        exit;
    }

    // Insert user data into the login table
    $insertQuery = "INSERT INTO `login` (name, username, password, email) VALUES (?, ?, ?, ?)";
    $stmt = $con->prepare($insertQuery);

    if ($stmt) {
        // Use password_hash to securely store passwords
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        $stmt->bind_param('ssss', $name, $username, $hashedPassword, $email);
        $stmt->execute();

        // Check if the insertion was successful
        if ($stmt->affected_rows > 0) {
            echo "Signup successful. You can now log in.";
        } else {
            echo "Error inserting data: " . $con->error;
        }

        $stmt->close();
    } else {
        echo 'Error preparing statement: ' . $con->error;
    }

    $con->close();
}
?>
