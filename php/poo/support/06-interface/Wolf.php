<?php

require_once './Animal.php';
require_once './SavageAnimal.php';

class Wolf extends Animal implements SavageAnimal 
{
    /**
     * @var bool
     */
    private bool $isSolitaire;

    public function __construct(string $nom, int $age, int $nbPattes, array $listAliment, bool $isSolitaire)
    {
        parent::__construct($nom, $age, $nbPattes, $listAliment);
        $this->isSolitaire = $isSolitaire;
    }

    /**
     * Get the value of isSolitaire
     *
     * @return  bool
     */ 
    public function getIsSolitaire()
    {
        return $this->isSolitaire;
    }

    /**
     * Set the value of isSolitaire
     *
     * @param  bool  $isSolitaire
     *
     * @return  self
     */ 
    public function setIsSolitaire(bool $isSolitaire)
    {
        $this->isSolitaire = $isSolitaire;

        return $this;
    }

    public function devore():string
    {
        return "Je viens de manger";
    }

    public function eatBird(Bird $y):string
    {
        return "Je viens de manger l'oiseau qui s'apelle {$y->nom}";
    }
}