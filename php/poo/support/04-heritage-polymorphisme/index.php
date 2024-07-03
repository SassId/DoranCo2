<?php

require_once './Article.php';
require_once './Conserve.php';
require_once './Aliment.php';

$article = new Article("Chaise", 49.99);

echo $article->displayProduct();
echo '<br>';

$article->setPrice(99.99);

echo $article->displayProduct();
echo '<br>';

$boiteConserve = new Conserve('Ravioli', 12.99, ['E876', 'E4554']);

echo $boiteConserve->displayProduct();
echo '<br>';

$boiteConserve->setListExcipient(['E876', 'E4554']);

echo $boiteConserve->displayExcipient();
echo '<br>';
echo $boiteConserve->displayProduct();
echo '<br>';

$cheese = new Aliment('fromage de chèvre', 12.99, '12-12-2025');

echo $cheese->displayProduct();
