<?php
session_start();

// Check if the user is logged in
if (!isset($_SESSION['username'])) {
    // Redirect to the login page if not logged in
    header('Location: login.html');
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Logged-In Page</title>
</head>
<body>
    <h2>Logged-In Page</h2>
    <p>Welcome, <?php echo $_SESSION['username']; ?>!</p>

    <!-- Your content for the logged-in page goes here -->
</body>
</html>
