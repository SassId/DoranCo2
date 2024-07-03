<?php

require_once './SimulateurCredit.php';
require_once './Mathematique.php';

echo SimulateurCredit::TAUX . '<br>';

echo SimulateurCredit::calculInteret(10022);

echo '<br>';
echo "resultat de l'addition : " . Mathematique::addition(58, 454);
echo '<br>';
echo "resultat de la soustraction  : " . Mathematique::soustraction(58, 454);
echo '<br>';
echo "resultat de la multiplication  : " . Mathematique::multiplication(58, 454);
echo '<br>';
echo "resultat de la division  : " . Mathematique::division(58, 0);
