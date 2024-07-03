<?php

// Exercice 1
// Créer une classe Animal avec les propriétés suivantes :
// - name de type string
// - type de type string
// - age de type int

// Exercice 2
// Ajouter à la classe Animal les méthodes suivantes :
// - eat() qui retourne une chaine de caractere et qui affiche "The animal is eating"
// - sleep() qui retourne une chaine de caractere et qui affiche "The animal is sleeping"

// Créer un objet Dog de la classe Animal et afficher ses propriétés et ses méthodes.
// Créer un objet Cat de la classe Animal et afficher ses propriétés et ses méthodes.

class Animal
{
    /**
     * @var string
     */
    public string $name;

    /**
     * @var string
     */
    public string $type;

    /**
     * @var int
     */
    public int $age;

    /**
     * @return string
     */
    public function eat(): string
    {
        return "The $this->name ($this->type) is eating.";
    }

    public function sleep(): string
    {
        return "The $this->name ($this->type) is sleeping.";
    }
}
