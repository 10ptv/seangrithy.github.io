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

// Retrieve user input from the registration form
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $input_username = $_POST['username'];
    $input_password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];

    // Check if passwords match
    if ($input_password !== $confirm_password) {
        die("Passwords do not match. Please try again.");
    }

    // Hash the user's input password (adjust the hashing method if needed)
    $hashed_input_password = password_hash($input_password, PASSWORD_DEFAULT);

    // Prepare and execute the SQL statement to insert user information
    $sql = "INSERT INTO users (username, password) VALUES (?, ?)";
    $stmt = $connection->prepare($sql);

    // Check if the statement was prepared successfully
    if (!$stmt) {
        die("Error in preparing statement: " . $connection->error);
    }

    $stmt->bind_param("ss", $input_username, $hashed_input_password);

    // Execute the statement
    if ($stmt->execute()) {
        echo "Registration successful! Welcome, " . $input_username;
    } else {
        die("Error: " . $stmt->error);
    }

    // Close the prepared statement
    $stmt->close();
}

// Close the database connection
$connection->close();
?>
