<?php

require_once './Database.php';
require_once './DatabaseAgregation.php';

// Composition exemple
$db = new Database();
$db->dbConnect();
$conn = $db->getPdo();

// Agregation exemple
$pdo = new PDO('mysql:host=localhost;dbname=library_db', 'root', '');

$dbAgregation = new DatabaseAgregation($pdo);
$dbAgregation->getPdo();
