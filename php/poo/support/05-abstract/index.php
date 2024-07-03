<?php

require_once './Warrior.php';
require_once './Mage.php';

$warrior12 = new Warrior('Hercule', 12);

$warrior12->hit();

echo $warrior12->getLife();

echo '<br>';

$mage12 = new Mage('Hercule', 12);

$mage12->hit();

echo $mage12->getLife();
