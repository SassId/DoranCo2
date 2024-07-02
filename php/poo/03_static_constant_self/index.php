<?php

require_once './CreditSimulator.php';
require_once './Math.php';

echo CreditSimulator::RATE;
echo '<br>';

echo CreditSimulator::calculateInterest(10000);
echo '<br>';


echo Math::add(50, 2);
echo '<br>';


echo Math::divide(50,4);
echo '<br>';

echo Math::divide(50,0);
