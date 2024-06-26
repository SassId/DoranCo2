<?php
// Start the session
session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>the POST method</title>
</head>

<body>
    <main>

        <form action="./src/processing.php" method="post">
            <div>
                <label for="name">Name: </label>
                <input id="name" type="text" name="name">
            </div>
            <div>
                <label for="password">Password: </label>
                <input id="password" type="password" name="password">
            </div>
            <input type="submit" value="Submit">
        </form>
        <?php
        // Check if there is an error message in the session and display it
        if (isset($_SESSION['message'])) {
            echo "<p style='color:red;'>" . htmlspecialchars($_SESSION['message']) . "</p>";

            // Clear the error message from the session after displaying it
            unset($_SESSION['message']);
        }

        if (isset($_COOKIE['connected']) == true) {
            $connectMessage = 'you are connected';
            echo "<p style='color:green;'>" . htmlspecialchars($connectMessage) . "</p>";
        }
        ?>
    </main>
</body>

</html>