<?php
// Replace these credentials with your actual MySQL credentials
$hostname = 'localhost';
$username = 'root'; // Your MySQL username (default is often 'root' for XAMPP)
$password = ''; // Your MySQL password (default is often empty for XAMPP)
$database = 'login_sample_db'; // Update to your desired database name

$connection = new mysqli($hostname, $username, $password, $database);

if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
}

// Retrieve user input from the login form
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $input_username = $_POST['username'];
    $input_password = $_POST['password'];

    // Prepare the SQL statement to retrieve user information
    $sql = "SELECT username, password FROM users WHERE username = ?";
    $stmt = $connection->prepare($sql);

    // Check if the statement was prepared successfully
    if (!$stmt) {
        die("Error in preparing statement: " . $connection->error);
    }

    $stmt->bind_param("s", $input_username);
    $stmt->execute();
    $stmt->bind_result($stored_username, $stored_password);
    
    // Check if a user with the provided username exists
    if ($stmt->fetch()) {
        // Verify the entered password against the stored hashed password
        if (password_verify($input_password, $stored_password)) {
            // Successful login, redirect to cart.html
            header("Location: cart.html");
            exit();
        } else {
            echo "Invalid password. Please try again.";
        }
    } else {
        echo "User not found. Please check your username.";
    }

    // Close the prepared statement
    $stmt->close();
}

// Close the database connection
$connection->close();
?>
