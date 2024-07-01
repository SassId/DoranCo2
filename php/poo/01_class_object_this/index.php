<?php

require_once './User.php';
require_once './Animal.php';

// * An object is an instance of a class : it contains all the properties and methods of the class from which it was instanced

$roo = new User();

$roo->firstname = 'Roo';
$roo->lastname = 'Rogers';

echo $roo->greet();
echo '<br>';

echo $roo->presentation(223);
echo '<br>';


$lion = new Animal();
$lion->name = "lion";
$lion->type = 'Panthera leo';

$fox = new Animal();
$fox->name = 'fox';
$fox->type = 'Vulpes vulpes';

echo $fox->eat();
echo '<br>';


echo $lion->sleep();
echo '<br>';


