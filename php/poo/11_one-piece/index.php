<?php

require_once './Utilities/Autoloader.php';

use App\Utilities\Autoloader;
use App\Abstract\Character;
use App\Entity\Pirate;
use App\Entity\Marine;
use App\Entity\Revolutionary;
use App\Variation\Captain;
use App\Variation\Commander;

Autoloader::autoload();

$luffy = new Pirate('Luffy', 500, 5000000);
echo $luffy->getName();
echo "<br>";
echo $luffy->attack();
echo "<br>";
echo $luffy->getInfo();
echo "<br>";

$bombo = new Marine("Bombo", 8, 200);
echo $bombo->getInfo();
echo "<br>";

$xino = new Revolutionary("Xino", 35, 10000000);
echo $xino->getInfo();
echo "<br>";

$klump = new Captain('Klump', 78, 598541);
echo $klump->getInfo();
echo "<br>";

$hewie = new Commander('Hewie', 20, 70);
echo $hewie->getInfo();
echo "<br>";
