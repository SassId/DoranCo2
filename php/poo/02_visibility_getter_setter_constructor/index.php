<?php

require_once './Car.php';
require_once './Book.php';

$car1 = new Car();

// $car1->model = 'Audi';
// $car1->color = 'blue';
// $car1->date = '2020';

$car1->setModel('bmw');

echo $car1->getModel();
echo '<br>';

// * After returning self ($this) inside the setter function we can now chain the methods:

echo $car1->setModel('mercedes')->getModel();
echo '<br>';


echo $car1->setColor('black')->getColor();
echo '<br>';

$car1->setDate('2000')->getDate();

echo $car1->display();

$book1 = new Book("Alice au pays des merveilles", "Lewis Carroll", 124, 1865);

echo '<pre>';
print_r($book1);
echo '</pre>';

echo $book1->getTitle();
echo '<br>';

echo $book1->read();
echo '<br>';
