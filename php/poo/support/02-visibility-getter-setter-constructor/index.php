<?php

require_once './Car.php';
require_once './Book.php';

// - new est mot clé permettant d'effectuer une instanciation.
// - Une class peut produire plusieurs objets. Nous pouvons donc effectuer plusieurs instanciations 'new'
// - $audi est techniquement appelé "l'objet de la class Panier"

// Crée un nouvel objet de la classe MaClasse, déclenche automatiquement la méthode __construct

$audi = new Car();
echo $audi->setModel('Q3')->getModel() . '<br>';
$audi->setColor('rouge');
echo $audi->display() . '<br>';


$book = new Book('oui oui', 'bonjour, les zouzou', 128, 1997);
echo $book->read() . '<br>';
$book->setTitle('non non');
echo $book->read() . '<br>';
