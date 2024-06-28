<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Produit</title>
</head>

<body>

    <div>
        <h2><?= $_GET['model']; ?></h2>
        <p>couleur du model : <?= $_GET['color']; ?></p>
        <p>année de sortie : <?= $_GET['year']; ?></p>
    </div>
</body>

</html>