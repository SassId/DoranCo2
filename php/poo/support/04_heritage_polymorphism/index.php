<?php

require_once './Article.php';
require_once './Can.php';
require_once './FreshFood.php';

// $doll = new Article("Doll", 49.99);
// echo $doll->displayProduct();
// echo '<br>';

// $doll->setPrice(59.99);
// echo $doll->displayProduct();
// echo '<br>';


// $can1 = new Can("ravioli", 3.99);
// echo $can1->displayProduct();
// echo '<br>';

// $can1->setExcipients(["truc", "bidule", "machin"]);
// echo implode($can1->getExcipients());
// echo '<br>';

// echo $can1->displayExcipients();
// echo '<br>';


$can2 = new Can("beans", 2.99, ["plutonium", "uranium"]);
echo $can2->displayExcipients();
echo '<br>';

$food1 = new FreshFood("Rice", "10.25", "2025 Feb 02");
echo $food1->displayProduct();
