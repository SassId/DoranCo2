# Exercice : Créer des Classes Player, Warrior, et Mage

## Objectif

Créer trois classes en PHP : `Player`, `Warrior`, et `Mage`. La classe `Player` sera la classe de base, et les classes `Warrior` et `Mage` hériteront de `Player`.

## Instructions

### Classe Player

1. Créez la classe `Player`, elle ne peut pas être instanciée, avec les propriétés et méthodes suivantes :
   - `name`
   - `life` (valeur par défaut : 100)
   - `score` (valeur par défaut : 0)
   - Constructeur pour initialiser le `name`
   - Getters et Setters pour toutes les propriétés
   - Méthode `hit()` qui enlève 10 points de `life`
   - `name`
   - `life` (valeur par défaut : 100)
   - `score` (valeur par défaut : 0)
   - Constructeur pour initialiser le `name`
   - Getters et Setters pour toutes les propriétés
   - Méthode `hit()` qui enlève 10 points de `life`

### Classe Warrior

2. Créez la classe `Warrior` qui hérite de `Player` avec les propriétés et méthodes suivantes :
   - `arrow` (nombre de flèches)
   - Constructeur pour initialiser le `name` et le `nombre de flèches`
   - Getters et Setters pour `arrow`
   - Méthode `hit()` qui enlève 15 points de `life`
   - `arrow` (nombre de flèches)
   - Constructeur pour initialiser le `name` et le `nombre de flèches`
   - Getters et Setters pour `arrow`
   - Méthode `hit()` qui enlève 15 points de `life`

### Classe Mage

3. Créez la classe `Mage` qui hérite de `Player` avec les propriétés et méthodes suivantes :
   - `mana` (un entier)
   - Constructeur pour initialiser le `name` et le `mana`
   - Getters et Setters pour `mana`
   - Méthode `hit()` qui enlève 30 points de `life`

### Exemple de Code

```php
<?php

class Player
{
    protected $name;
    protected $life = 100;
    protected $score = 0;

    public function __construct($name)
    {
        $this->name = $name;
    }

    public function getName()
    {
        return $this->name;
    }

    public function setName($name)
    {
        $this->name = $name;
    }

    public function getLife()
    {
        return $this->life;
    }

    public function setLife($life)
    {
        $this->life = $life;
    }

    public function getScore()
    {
        return $this->score;
    }

    public function setScore($score)
    {
        $this->score = $score;
    }

    public function hit()
    {
        $this->life -= 10;
    }
}

class Warrior extends Player
{
    private $arrow;

    public function __construct($name, $arrow)
    {
        parent::__construct($name);
        $this->arrow = $arrow;
    }

    public function getArrow()
    {
        return $this->arrow;
    }

    public function setArrow($arrow)
    {
        $this->arrow = $arrow;
    }

    public function hit()
    {
        $this->life -= 15;
    }
}

class Mage extends Player
{
    private $mana;

    public function __construct($name, $mana)
    {
        parent::__construct($name);
        $this->mana = $mana;
    }

    public function getMana()
    {
        return $this->mana;
    }

    public function setMana($mana)
    {
        $this->mana = $mana;
    }

    public function hit()
    {
        $this->life -= 30;
    }
}

// Exemple d'utilisation
$warrior = new Warrior("Archer", 10);
$mage = new Mage("Gandalf", 50);

echo "Avant attaque:\n";
echo "Warrior Life: " . $warrior->getLife() . "\n";
echo "Mage Life: " . $mage->getLife() . "\n";

$warrior->hit();
$mage->hit();

echo "Après attaque:\n";
echo "Warrior Life: " . $warrior->getLife() . "\n";
echo "Mage Life: " . $mage->getLife() . "\n";
?>
