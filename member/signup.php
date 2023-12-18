<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $confirmPassword = $_POST['confirm_password'];

    // Validate and sanitize inputs (you may add more validation as needed)
    $username = filter_var($username, FILTER_SANITIZE_STRING);
    $password = filter_var($password, FILTER_SANITIZE_STRING);
    $confirmPassword = filter_var($confirmPassword, FILTER_SANITIZE_STRING);

    // Check if passwords match
    if ($password !== $confirmPassword) {
        echo "Error: Passwords do not match. Please try again.";
        exit;
    }

    // Hash the password
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Create a database connection
    $con = new mysqli('sql12.freesqldatabase.com', 'sql12671198', 'HTeIXZJhFS', 'sql12671198');

    // Check for connection errors
    if ($con->connect_error) {
        die('Connection failed: ' . $con->connect_error);
    }

    // Use prepared statements to prevent SQL injection
    $checkExistingUserSql = "SELECT username FROM users WHERE username=?";
    $checkStmt = $con->prepare($checkExistingUserSql);

    if ($checkStmt) {
        $checkStmt->bind_param('s', $username);
        $checkStmt->execute();
        $checkStmt->store_result();

        if ($checkStmt->num_rows > 0) {
            echo "Error: The username '" . $username . "' already exists. Please choose a different username.";
        } else {
            // Insert the new user with hashed password
            $insertUserSql = "INSERT INTO `users` (username, password) VALUES (?, ?)";
            $insertStmt = $con->prepare($insertUserSql);

            if ($insertStmt) {
                $insertStmt->bind_param('ss', $username, $hashedPassword);

                if ($insertStmt->execute()) {
                    echo "Sign up successful! Welcome, $username.";
                } else {
                    echo "Error inserting data: " . $insertStmt->error;
                }

                $insertStmt->close();
            } else {
                echo "Error preparing statement: " . $con->error;
            }
        }

        $checkStmt->close();
    } else {
        die('Error preparing statement: ' . $con->error);
    }

    $con->close();
} else {
    // Redirect or handle the case when someone tries to access this page directly without submitting the form.
    echo "Invalid request.";
}
?>
