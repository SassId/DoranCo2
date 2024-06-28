<?php

require_once '../src/config/db.php';
require_once '../src/repository/bookRepository.php';

$pdo = connectDB();
$bookDetails = getBookDetailsById($pdo, $_GET['id']);

?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Librairie Digitale</title>
    <link rel="stylesheet" href="../assets/css/style.css">
</head>

<body>
    <header>
        <h1>Library</h1>
    </header>

    <main>
        <h2>Détails du Livre</h2>
        <?php if ($bookDetails): ?>
        <div class="book-details">
            <div class="detail-item">
                <span class="label"><strong>Titre :</strong></span>
                <span
                    class="value"><?php echo htmlspecialchars($bookDetails['title']); ?></span>
            </div>
            <div class="detail-item">
                <span class="label"><strong>Description :</strong></span>
                <span
                    class="value"><?php echo htmlspecialchars($bookDetails['description']); ?></span>
            </div>
            <div class="detail-item">
                <span class="label"><strong>Année de parution :</strong></span>
                <span
                    class="value"><?php echo htmlspecialchars($bookDetails['date_of_publication']); ?></span>
            </div>
            <div class="detail-item">
                <span class="label"><strong>Auteur :</strong></span>
                <span
                    class="value"><?php echo htmlspecialchars($bookDetails['firstname'] . ' ' . $bookDetails['lastname']); ?></span>
            </div>
            <div class="detail-item">
                <span class="label"><strong>Date de naissance :</strong></span>
                <span
                    class="value"><?php echo htmlspecialchars($bookDetails['DoB']); ?></span>
            </div>
            <div class="detail-item">
                <span class="label"><strong>Pays d'origine :</strong></span>
                <span
                    class="value"><?php echo htmlspecialchars($bookDetails['country']); ?></span>
            </div>
        </div>
        <?php else: ?>
        <p>Aucun livre trouvé avec l'ID donné.</p>
        <?php endif; ?>

        <a href="../index.php">Return Home</a>
    </main>

    <footer>
        <p>&copy; 2024 Library</p>
    </footer>
</body>

</html>