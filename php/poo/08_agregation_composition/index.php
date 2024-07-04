<?php

require_once './Database.php';
require_once './DatabaseAgregation.php';

$pdo = new Database();

$pdo->dbConnect();

echo '<pre>';
var_dump($pdo);
echo '</pre>';

$conn = $pdo->getPdo();

$pdo = new PDO(
    'mysql:host=localhost;dbname=library_db', // driver mysql, serveur de la BDD (host),nom de la BDD(dbname)
    'root', // Nom d'utilisateur
    '', // mot de passe
    [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION] // on affiche les erreurs
);

$conn = new DatabaseAgregation($pdo);
$conn->getPdo();
