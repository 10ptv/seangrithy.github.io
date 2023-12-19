<?php
session_start();
include('db.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Perform any additional validation or sanitization if needed

    $sql = "INSERT INTO `login` (name, username, password) VALUES (?, ?, ?)";
    $stmt = $con->prepare($sql);

    if ($stmt) {
        // Use password_hash to securely store passwords
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        $stmt->bind_param('sss', $name, $username, $hashedPassword);
        $stmt->execute();

        // Check if the insertion was successful
        if ($stmt->affected_rows > 0) {
            echo "Data inserted successfully";
        } else {
            echo "Error inserting data: " . $con->error;
        }

        $stmt->close();
    } else {
        echo 'Error preparing statement: ' . $con->error;
    }
}

$con->close();
?>
