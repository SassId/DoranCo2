<?php
include_once './src/repository/book.php';
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digital Library</title>
    <link rel="stylesheet" href="./assets/css/style.css">
</head>

<body>
    <main>
        <h1>📙Digital Library📙</h1>

        <!-- <pre>
        <?php
        var_dump($books);

        // or
        print_r($books)
        ?>
    </pre> -->

        <!-- Display all the book in a div with:
 book title : h2
 book description: p
 book publication date: p -->
        <div class="container">
            <?php foreach ($books as $book) { ?>
                <div class="card">
                    <h2><?= $book['title'] ?></h2>
                    <p><?= mb_strimwidth($book['description'], 0, 50, '...') ?></p>
                    <p><?= $book['date_of_publication'] ?></p>
                    <?php $bookID = $book['id'] ?>
                    <a href="./views/details.php?id=<?= $bookID ?>">Details</a>
                </div>
            <?php } ?>
        </div>

        <!-- <pre>
        <?php print_r($book) ?>
        </pre> -->


    </main>
</body>

</html>