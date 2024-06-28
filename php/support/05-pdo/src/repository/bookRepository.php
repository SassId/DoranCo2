<?php

function getAllBooks($pdo)
{
    $stmt = $pdo->query('SELECT * FROM book');
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}
function getBookDetailsById($pdo, $bookId)
{
    $stmt = $pdo->prepare(
        'SELECT book.*, author.firstname, author.lastname, author.DoB, author.country
        FROM book
        JOIN author ON book.id_author = author.id
        WHERE book.id = :bookId'
    );
    $stmt->bindParam(':bookId', $bookId, PDO::PARAM_INT);
    $stmt->execute();
    return $stmt->fetch(PDO::FETCH_ASSOC);
}

function addBook($conn, $title, $description, $date_of_publication, $id_author)
{
    $stmt = $conn->prepare('INSERT INTO book (title, description, date_of_publication, id_author) VALUES (:title, :description, :date_of_publication, :id_author )');

    $stmt->bindParam(':title', $title, PDO::PARAM_STR);
    $stmt->bindParam(':description', $description, PDO::PARAM_STR);
    $stmt->bindParam(':date_of_publication', $date_of_publication, PDO::PARAM_INT);
    $stmt->bindParam(':id_author', $id_author, PDO::PARAM_INT);

    $stmt->execute();
}

