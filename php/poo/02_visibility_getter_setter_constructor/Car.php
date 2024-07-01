<?php

// VISIBILITE (public, private, protected)
//    - public : accessible depuis l'exterieur et l'interieur de la classe.
//    - private : accessible uniquement depuis l'interieur de la classe.
//    - protected : accessible depuis l'interieur de la classe et depuis les classes enfants.

// Encapsulation est le fait de rendre privé les propriétés ou les methodes d'une classe
// pour empecher l'exterieur de modifier ou de lire les propriétés d'une classe.
// Pour accéder aux propriétés privées d'une classe, on utilise les getters et les setters.

// Un getter (accesseur) est une methode qui permet de récupérer la valeur d'une propriété privée.
// Un setter (mutateur) est une méthode qui permet de modifier la valeur d'une propriété privée.

class Car
{

    /**
     * @var string
     */
    private string $model;

    /**
     * @var string
     */
    private string $color;

    /**
     * @var int
     */
    private int $date = 1900; //this sets the default value and can be overwritten in the instance we create

    public function getModel(): string
    {
        return $this->model;
    }

    public function setModel(string $model): self
    {
        $this->model = $model;
        return $this;
    }

    public function getColor(): string
    {
        return $this->color;
    }

   public function setColor(string $color): self
   {
    $this->color = $color;
    return $this;
   }

   public function getDate(): int
    {
        return $this->date;
    }

   public function setDate(int $date): self
   {
    $this->date = $date;
    return $this;
   }

    public function display(): string
    {
        return "This vehicule was designed by $this->model, whit the color $this->color and was release in $this->date.";
    }
}
