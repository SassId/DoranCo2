<?php

session_start();

var_dump($_POST);
echo '<br>';

// Data Processing:

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    // Check if variables exist and are not empty strings

    if (isset($_POST['name']) && isset($_POST['password']) && !empty($_POST['name']) && !empty($_POST['password'])) {

        echo 'test';
        $name = $_POST['name'];
        $pswd = $_POST['password'];

        // Substract empty spaces in strings
        $trimmedName = trim($name);
        $trimmedPassword = trim($pswd);

        // Hash the password
        $hashedPassword = password_hash($trimmedPassword, PASSWORD_DEFAULT);

        // Redirect to home page with a success message
        // Set the success message in session
        $_SESSION['message'] = "You are now one of us";

        // Save the login status in a cookie:
        // the last parameter shows where the cookie is valid (in this case, all pages starting from the root)
        setcookie('connected', true, time() + 60 * 60 * 24 * 10, '/');

        header("location: ../index.php");
        exit();




        // Else, save a message in a session to display on the home page
    } else if (empty($_POST['name']) || empty($_POST['password'])) {
        $_SESSION['message'] = "Please enter your name and password";
        header("location: ../index.php");
        exit();
    }
} else {
    $_SESSION['error_message'] = "Something wrong has occured";
    header("location: ../index.php");
    exit();
}
