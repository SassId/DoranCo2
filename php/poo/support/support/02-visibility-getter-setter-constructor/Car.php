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
    private int $date = 1900;

    /**
     * @return string
     */
    public function display(): string
    {
        return "Ce vehicule est une $this->model de couleur $this->color sortie en $this->date";
    }

    /**
     * Get the value of model
     *
     * @return  string
     */ 
    public function getModel()
    {
        return $this->model;
    }

    /**
     * Set the value of model
     *
     * @param  string  $model
     *
     * @return  self
     */ 
    public function setModel(string $model)
    {
        $this->model = $model;

        return $this;
    }

    /**
     * Get the value of color
     *
     * @return  string
     */ 
    public function getColor():string
    {
        return $this->color;
    }

    /**
     * Set the value of color
     *
     * @param  string  $color
     *
     * @return  self
     */ 
    public function setColor(string $color):self
    {
        $this->color = $color;

        return $this;
    }

    /**
     * Get the value of date
     *
     * @return  int
     */ 
    public function getDate()
    {
        return $this->date;
    }

    /**
     * Set the value of date
     *
     * @param  int  $date
     *
     * @return  self
     */ 
    public function setDate(int $date)
    {
        $this->date = $date;

        return $this;
    }
}
