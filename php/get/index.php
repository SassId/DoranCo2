<?php
include_once './templates/header.php';
?>

<main>
    <h1>Welcome to my Car Shop</h1>
    <section>
        <h2>Select your Car</h2>

        <?php
        $modelBmw = 'BMW';
        $modelBmw = urlencode($modelBmw);

        $colorBmw = 'yellow';
        $colorBmw = urlencode($colorBmw);

        $yearBmw = 2018;
        $yearBmw = urlencode($yearBmw);

        $modelMercedes = 'Mercedes';
        $modelMercedes = urlencode($modelMercedes);

        $colorMercedes = 'blue';
        $colorMercedes = urlencode($colorMercedes);

        $yearMercedes = 2011;
        $yearMercedes = urlencode($yearMercedes);

        $modelRenault = 'Renault';
        $modelRenault = urlencode($modelRenault);

        $colorRenault = 'black';
        $colorRenault = urlencode($colorRenault);

        $yearRenault = 2022;
        $yearRenault = urlencode($yearRenault);
        ?>

        <a href="./views/products.php?model=<?= $modelBmw ?>&color=<?= $colorBmw ?>&year=<?= $yearBmw ?>">BMW</a>
        <a href="./views/products.php?model=<?= $modelMercedes ?>&color=<?= $colorMercedes ?>&year=<?= $yearMercedes ?>">Mercedes</a>
        <a href="./views/products.php?model=<?= $modelRenault ?>&color=<?= $colorRenault ?>&year=<?= $yearRenault ?>">Renault</a>
    </section>

</main>

<?php include_once './templates/footer.php' ?>