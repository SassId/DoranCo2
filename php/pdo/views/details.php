<?php 
require_once '../src/config/bdd.php';

$res = $pdo->prepare("SELECT *, firstname, lastname FROM book join author ON id_author = author.id WHERE book.id = :id");
$res->bindParam(':id', $_GET['id'], PDO::PARAM_INT); //the last parameter secures the type of the variable
$res->execute();
$data = $res->fetch()

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Details</title>
</head>
<body>
    <main>

      <a href="../index.php">Back</a>

    <!-- <pre>

        <?= var_dump($data)?>
    </pre>   -->

    <h2><?= $data['title']?></h2>
    <p><?= $data['description']?></p>
    <p>First published on the <?= $data['date_of_publication']?></p>
    <p>Written by <strong><?= $data['firstname']?> <?= $data['lastname']?></strong></p>
    <p><em>(Born in <?= $data['country']?> on the <?= $data['DoB']?> )</em></p>
    <p></p>

    </main>
    
</body>
</html>