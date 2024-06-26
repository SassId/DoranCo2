<?php
include_once '../templates/header.php';
?>

<main>
    <section>
        <h2>Your Car:</h2>
        <div>
            <h3><?= $_GET['model'] ?></h3>
            <p>The color is <?= $_GET['color'] ?> </p>
            <p>It came out in <?= $_GET['year'] ?></p>
        </div>
    </section>
</main>

<?php include_once '../templates/footer.php' ?>
