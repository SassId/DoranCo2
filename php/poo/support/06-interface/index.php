<?php

require_once './Bird.php';
require_once './Wolf.php';

$titi = new Bird('Titi', 80, 2, [], false);
echo $titi->getNom();

echo '<br>';
echo  $titi->description();
echo '<br>';

$loupGarou = new Wolf('eric', 300, 4, ['humain', 'poule'], true);
echo $loupGarou->devore();
echo '<br>';

echo $loupGarou->eatBird($titi);
