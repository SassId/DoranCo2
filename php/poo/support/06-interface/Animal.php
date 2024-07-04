<?php

abstract class Animal
{
    /**
     * @var string
     */
    protected string $nom;

    /**
     * @var int
     */
    protected int $age;

    /**
     * @var int
     */
    protected int $nbPattes;

    /**
     * @var array
     */
    protected array $listAliment;

    protected function __construct(string $nom, int $age, int $nbPattes, array $listAliment)
    {
        $this->nom = $nom;
        $this->age = $age;
        $this->nbPattes = $nbPattes;
        $this->listAliment = $listAliment;
    }

    /**
     * Get the value of nom
     */
    public function getNom(): string
    {
        return $this->nom;
    }

    /**
     * Set the value of nom
     *
     * @return  self
     */
    public function setNom($nom): self
    {
        $this->nom = $nom;

        return $this;
    }

    /**
     * Get the value of age
     */
    public function getAge(): int
    {
        return $this->age;
    }

    /**
     * Set the value of age
     *
     * @return  self
     */
    public function setAge($age)
    {
        $this->age = $age;

        return $this;
    }

    /**
     * Get the value of nbPattes
     */
    public function getNbPattes()
    {
        return $this->nbPattes;
    }

    /**
     * Set the value of nbPattes
     *
     * @return  self
     */
    public function setNbPattes($nbPattes)
    {
        $this->nbPattes = $nbPattes;

        return $this;
    }

    /**
     * Get the value of listAliment
     */
    public function getListAliment()
    {
        return $this->listAliment;
    }

    /**
     * Set the value of listAliment
     *
     * @return  self
     */
    public function setListAliment($listAliment)
    {
        $this->listAliment = $listAliment;

        return $this;
    }
}
