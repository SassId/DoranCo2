<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <a href="./index.php">Back to Home</a>
    <br>

    < <!-- <?= var_dump($_GET); ?> -->

        <?php
        // ! isset checks if the variable exists
        if (isset($_GET['firstname']) && isset($_GET['lastname']) && isset($_GET['address'])) {
            $firstname = urldecode($_GET['firstname']);
            $firstname = htmlspecialchars($nom);

            $lastname = urldecode($_GET['lastname']);
            $lastname = htmlspecialchars($lastname);

            $address = urldecode($_GET['address']);
            $address = htmlspecialchars($address);
        ?>
            <p>Hi my name is <?= strtoupper($firstname) ?> <?= strtoupper($lastname) ?> and I live at <?= $address ?>.</p>
        <?php

        } else {
        }
        ?>


</body>

</html>