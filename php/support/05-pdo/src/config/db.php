<?php

function connectDB()
{
    try {
        $pdo = new PDO('mysql:host=localhost;dbname=library_db', 'root', '', [PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION]);
        return $pdo;
    } catch (PDOException $e) {
        echo 'Erreur : ' . $e->getMessage();
        exit;
    }
}
