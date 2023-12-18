<?php
session_start();
include('db.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Retrieve hashed password from the database
    $sql = "SELECT username, password FROM users WHERE username=?";
    $stmt = $con->prepare($sql);

    if ($stmt) {
        $stmt->bind_param('s', $username);
        $stmt->execute();
        $stmt->store_result();

        if ($stmt->num_rows > 0) {
            $stmt->bind_result($dbUsername, $dbPassword);
            $stmt->fetch();

            // Verify the entered password with the hashed password from the database
            if (password_verify($password, $dbPassword)) {
                // Password is correct, set the username in the session
                $_SESSION['username'] = $dbUsername;
                echo "Login successful";
            } else {
                echo "Incorrect password. Please try again.";
            }
        } else {
            echo "Username not found. Please try again.";
        }

        $stmt->close();
    } else {
        echo 'Error preparing statement: ' . $con->error;
    }
}

// Close the database connection
$con->close();
?>
