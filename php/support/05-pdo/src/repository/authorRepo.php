<?php


function getAllAuthors($conn) {
    $stmt = $conn->query('SELECT * FROM author');
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}