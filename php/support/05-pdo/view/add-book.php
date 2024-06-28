<!-- Create a form to add a new book -->
<?php
session_start();

require_once '../src/config/db.php';
require_once '../src/repository/authorRepo.php';

$pdo = connectDB();
$authors = getAllAuthors($pdo);



// echo '<pre>';
// var_dump($authors);
// echo '</pre>';

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../assets/css/style.css">
</head>

<body>
    <header>
        <h1>Library</h1>
    </header>
    <main>
        <form action="../src/form/processing.php" method="post">
            <div>
                <label for="title"> Enter the Title</label>
                <input type="text" id="title" name="title">
            </div>

            <div>
                <label for="description">Enter the Description</label>
                <textarea name="description" id="description"></textarea>
            </div>

            <div>
                <label for="date_of_publication">Enter the Date of Publication</label>
                <input type="number" min="0" max="9999" step="1" id="date_of_publication" name="date_of_publication">
            </div>
            <label for="author">Select the Author</label>
            <select name="id_author" id="author">
                <?php foreach ($authors as $author) { ?>
                    <option value="<?= htmlspecialchars($author['id']) ?>"><?= htmlspecialchars($author['firstname']) ?> <?= htmlspecialchars($author['lastname']) ?></option>
                <?php } ?>
            </select>
            <div>
                <input type="submit" value="Add Book">
            </div>
        </form>
        <p><?php
        if(isset($_SESSION['message'])) {
            echo $_SESSION['message'];
            unset($_SESSION['message']);
        } ?></p>
        <a href="../index.php">Return Home</a>
    </main>

    <footer>
    </footer>
</body>

</html>