<?php

require_once './CreditSimulator.php';
require_once './Math.php';

echo CreditSimulator::RATE;
echo '<br>';

echo CreditSimulator::calculateInterest(10000);
