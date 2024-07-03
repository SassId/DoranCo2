<?php

require_once './User.php';
require_once './Animal.php';

// Un objet est une instance de classe.
// Un objet est une variable qui contient toutes les propriétés et méthode d'une classe.

$rachid = new User();
$doe = new User();

$doe->firstName = 'John';
$doe->lastName = 'Doe';

$rachid->firstName = 'rachid';
$rachid->lastName = 'edjekouane';

echo $doe->presentation(41) . '<br>';

$dog = new Animal();

$dog->name = 'Droopy';
echo $dog->sleep();

$dog->type = 'dog';
echo $dog->eat();

$cat = new Animal();
$cat->name = 'Jerry';
$cat->type = 'cat';
echo $cat->sleep();
echo $cat->eat();