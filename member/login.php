<?php
session_start();
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Define database connection parameters as constants
define('DB_HOST', 'sql12.freesqldatabase.com');
define('DB_USERNAME', 'sql12671198');
define('DB_PASSWORD', 'HTeIXZJhFS');
define('DB_DATABASE', 'sql12671198');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Create a database connection
    $con = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE);

    // Check for connection errors
    if ($con->connect_error) {
        die('Connection failed: ' . $con->connect_error);
    }

    // Use prepared statements to prevent SQL injection
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

                // Redirect to the logged-in page (adjust the URL accordingly)
                header('Location: logged_in.php');
                exit;
            } else {
                // Incorrect password, handle failed login
                echo "Incorrect password. Please try again.";
            }
        } else {
            // Username not found, handle failed login
            echo "Username not found. Please try again.";
        }

        $stmt->close();
    } else {
        die('Error preparing statement: ' . $con->error);
    }

    $con->close();
}

// Your HTML for the login form goes here
?>
