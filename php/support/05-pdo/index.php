<?php

require_once './src/config/db.php';
require_once './src/repository/bookRepository.php';

$pdo = connectDB();
$books = getAllBooks($pdo);

?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Librairie Digitale</title>
    <link rel="stylesheet" href="./assets/css/style.css">
</head>

<body>
    <header>
        <h1>Library</h1>
    </header>

    <main>
        <h2>Liste des livres disponibles :</h2>
        <div class="book-list">
            <?php foreach ($books as $book): ?>
            <div class="book-card">
                <div class="book-content">
                    <h3><?php echo htmlspecialchars($book['title']); ?>
                    </h3>
                    <p><?php echo htmlspecialchars($book['description']); ?>
                    </p>
                    <p><strong>Année de parution :</strong>
                        <?php echo htmlspecialchars($book['date_of_publication']); ?>
                    </p>
                    <a class="details-link"
                        href="./view/book-details.php?id=<?= $book['id'] ?>">Détails</a>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
        <a href="./view/add-book.php">Add a new book</a>
    </main>

    <footer>
        <p>&copy; 2024 Library</p>
    </footer>
</body>

</html>