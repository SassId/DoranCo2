<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>Je suis la page param</h1>
    <?php
    // $_GET contient des informations envoyées en paramètre dans l'URL
    var_dump($_GET);
    echo $_GET['nom'];
    ?>
</body>

</html>