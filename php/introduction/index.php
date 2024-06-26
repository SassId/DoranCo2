<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Introduction to PHP</title>
    <script>

    </script>
</head>

<body>
    <h1>Let's discover PHP</h1>

    <!-- This is the PHP code block -->

    <?php
    echo '<h2> Comments </h2>';
    // I'm a comment in php
    # I'm also a comment in php
    /* I'm a multilign comment, 
    see? */

    echo '<h2> Display </h2>';

    // * 2 commands to display text in the browser:

    echo 'Hello, World! ';
    echo '<br>';

    // or
    print 'Hello, World! ';
    echo '<br>';

    // * Declares a variable:

    $theVariable = 127;

    echo $theVariable;
    echo '<br>';

    $firstname = 'Roo';

    echo 'Hello, ' . $firstname;
    echo '<br>';

    // or
    echo "Hello, $firstname";
    echo '<br>';


    // or
    echo "Hello, {$firstname}";

    // Types of Variables:
    echo '<h2>Types of Variables</h2>';
    // string, number, boolean, null, undefined

    // Strings:
    $theMessage = 'Hi there, i\'m a text in a variable';
    echo gettype($theMessage);
    echo '<br>';


    // Numbers:
    $theIntegarNumber = 127;
    echo gettype($theIntegarNumber);
    echo '<br>';


    $theDecimalNumber = 521.5;
    echo gettype($theDecimalNumber);
    echo '<br>';

    // Booleans:
    $theBoolean = true;
    echo gettype($theBoolean);
    echo '<br>';

    // Null:
    $theNullVariable = null;
    echo gettype($theNullVariable);
    echo '<br>';


    // Arrays:
    $theArray = ['apple', 'pear', 'banana'];
    echo gettype($theArray);
    echo '<br>';


    // or
    $theOtherArray = array('kiwi', 'litchi', 'mango');
    echo $theArray[0];
    echo '<br>';

    echo $theOtherArray[2];
    echo '<br>';


    // Checks the PHP version used:
    // phpinfo();

    // * Associative Arrays
    $theAssociativeArray = ['firstname' => 'Roo', 'lastname' => 'Rogers'];
    echo $theAssociativeArray['firstname'];
    echo '<br>';

    echo '<pre>';
    var_dump($theAssociativeArray);
    echo '</pre>';

    // or

    ?>

    <pre>
        <?php var_dump($theAssociativeArray); ?>
    </pre>

    <!-- TODO: Create a debug function, with one parameter to execute the previous code block -->

    <?php

    function debug($variable)
    {
        echo '<pre>';
        var_dump($variable);
        echo '</pre>';
    }

    debug($theArray)
    ?>

    <h2>Global Variables</h2>
    <?php
    debug($GLOBALS);

    echo $GLOBALS['firstname'];

    debug($_SERVER);
    ?>

    <h2>Predefined Constants et Magical Constants</h2>

    <?php
    // * Declares a constant
    // unmodifiable value, useful to store the database parameters

    define('CAPITAL_CITY', 'Paris');
    echo CAPITAL_CITY;
    echo '<br>';

    // or

    const PAYS = "France";
    echo PAYS;
    echo '<br>';

    // Displays the current PHP version
    echo PHP_VERSION;
    echo '<br>';

    // Displays the current line of code
    echo __LINE__;
    echo '<br>';

    // Displays the file path
    echo __FILE__;
    echo '<br>';

    // Displays the current directory
    echo __DIR__;
    echo '<br>';

    // Displays the max value of an int
    echo PHP_INT_MAX;
    echo '<br>';

    // Displays the min value of an int
    echo PHP_INT_MIN;
    echo '<br>';


    $bleu = 'bleu';
    $blanc = 'blanc';
    $rouge = 'rouge';

    echo $bleu . '-' . $blanc . '-' . $rouge;
    echo '<br>';


    $person = ['prenom' => 'Roo', 'nom' => 'Rogers', 'age' => 223, 'tel' => '555-2585-0595'];

    echo 'Bonjour, je m\'appelle ' . $person['prenom'] . ' ' . $person['nom'] . ', j\'ai ' . $person['age'] . ' ans et mon numéro de téléphone est le ' . $person['tel'];
    echo '<br>';

    // or

    echo "Bonjour, je m'appelle $person[prenom] $person[nom], j'ai $person[age] ans et mon numéro de téléphone est le $person[tel];";
    echo '<br>';

    $animals = ['lions', 'tigers', 'bears'];

    $string = implode(", ", $animals);
    echo 'I\'m not scared of ' . $string;
    echo '<br>';


    echo implode(", ", $animals);
    echo '<br>';

    ?>

    <h2>Loops</h2>

    <?php
    for ($i = 0; $i < 5; $i++) {
        echo $i . '<br>';
    }


    $length = count($animals);

    // for loop on a regular array:

    for ($i = 0; $i < $length; $i++) { // for ($i = 0; $i < count($animals); $i++) {
        echo $animals[$i] . ', ';
    }
    echo '<br>';


    // or

    // foreach loop on a regular array:

    foreach ($animals as $animal) {
        echo "$animal, ";
    }
    echo '<br>';

    echo var_dump(count($animals));
    echo '<br>';

    // loop on an associative array:
    foreach ($person as $key => $value) {
        echo "$key: $value <br>";
    }

    ?>

    <h2>Predefined Functions</h2>

    <?php

    $description = "Indiana Jones reçoit la visite surprise de sa filleule Helena Shaw, qui est à la recherche d'un artefact rare que son père a confié à Indiana par le passé : le fameux cadran d'Archimède, une relique qui aurait le pouvoir de localiser les fissures temporelles.";

    // *Trims a string with parameters (start, end, addon):
    $extract = mb_strimwidth($description, 0, 100, '...');
    echo $extract;
    echo '<br>';

    // * Trims a string (here, removes ' '):
    $endMessage = ' something@somethingelse.com ';
    echo '<br>';

    $nospace = trim($endMessage);
    echo $nospace;
    echo '<br>';

    // * Replaces a word by another:
    $message = "Hi, my name is Jack. I'm am the ripper";
    echo $message;
    echo '<br>';

    echo str_replace('Jack', 'Joe', $message);
    echo '<br>';

    // * To lowercase:
    echo strtolower($message);
    echo '<br>';


    // * To uppercase:
    echo strtoupper($message);
    echo '<br>';

    //  * PHP into HTML:
    $vehicules = ['motorbike', 'car', "boat", 'jet'];

    echo '<select name="" id="">';
    foreach ($vehicules as $vehicule) {
        echo '<option value="' . $vehicule . '">' . $vehicule . '</option>';
    };
    echo '</select>';

    echo '<br>'
    ?>

    <!-- alternative: -->
    <select name="" id="">
        <?php foreach ($vehicules as $vehicule) { ?>
            <option value="<?php echo $vehicule; ?>"><?php echo $vehicule; ?></option>
        <?php } ?>
    </select>
    <br>

    <!-- short version: -->
    <select name="" id="">
        <?php foreach ($vehicules as $vehicule) { ?>
            <option value="<?= $vehicule; ?>"><?= $vehicule; ?></option>
        <?php } ?>
    </select>

    <h2>File Inclusions</h2>
    <?php
    include './include.php';
    require './include.php';

    echo $doranco
    ?>

    <h2>$_GET</h2>

    <?php
    $firstname = 'roo';
    $firstname = urlencode($firstname);

    $lastname = 'rogers';
    $lastname = urlencode($lastname);

    $address = '225 cypress pond road';
    $address = urlencode($address);
    ?>

    <a href="./get.php?firstname=<?= $firstname ?>&lastname=<?= $lastname ?>&address=<?= $address ?>">Go to Get</a>


</body>

</html>