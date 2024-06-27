<?php

require_once './src/config/bdd.php';

// var_dump($pdo);

$res = $pdo->prepare("SELECT * FROM book"); //attend un paramètre de type string et qui est une requête SQL. On l'utilise pour éviter les injectins SQL
$res->execute();
$books = $res->fetchAll();

// var_dump($books);