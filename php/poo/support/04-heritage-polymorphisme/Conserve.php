<?php

require_once './Article.php';

// L'héritage permet de créer une classe enfant qui hérite des propriétés et méthodes de la classe parent.
// L'héritage permet de créer une classe enfant qui pourra avoir ses propriétés et méthodes supplémentaires.
// Il faut que les propriétés et méthodes du parent soient en public ou protected pour que l'enfant puisse y acceder.

// Le polymorphisme permet de redéfinir une méthode dans la classe enfant.

class Conserve extends Article
{
    /**
     * @var array
     */
    private array $listExcipient;

    public function __construct(string $name, float $price, array $list)
    {
        parent::__construct($name, $price);
        $this->listExcipient = $list;
    }

    /**
     *
     * @return  array
     */
    public function getListExcipient(): array
    {
        return $this->listExcipient;
    }

    /**
     *
     * @param  array  $listExcipient
     *
     * @return  self
     */
    public function setListExcipient(array $listExcipient): self
    {
        $this->listExcipient = $listExcipient;

        return $this;
    }

    /**
     * @return string
     */
    public function displayExcipient(): string
    {
        return "Dans le produit $this->name , La liste des excipient est " . implode(' - ', $this->listExcipient);
    }

    /**
     * @return string
     */
    public function displayProduct(): string
    {
        return parent::displayProduct() . " et la liste des excipient est : " . implode('', $this->listExcipient);
    }
}
