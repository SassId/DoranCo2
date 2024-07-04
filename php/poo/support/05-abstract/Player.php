<?php

// Une classe abstraite est une classe qui ne peut pas être instanciée
// Une classe abstraite peut contenir des méthodes abstraites
// Elle sert de modèle à d'autres classes qui en hériteront

// Une méthode abstraite est une méthode qui n'a pas de contenu
// Lorsqu'une classe hérite d'une classe abstrainte, elle doit obligatoirement redéfinir les méthodes abstraites de la classe mère

abstract class Player
{
    /**
     * @var string
     */
    protected string $name;

    /**
     * @var int
     */
    protected int $life = 100;

    /**
     * @var int
     */
    protected int $score = 0;

    protected function __construct(string $name)
    {
        $this->name = $name;
    }

    /**
     * Get the value of name
     *
     * @return  string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set the value of name
     *
     * @param  string  $name
     *
     * @return  self
     */
    public function setName(string $name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get the value of life
     *
     * @return  int
     */
    public function getLife()
    {
        return $this->life;
    }

    /**
     * Set the value of life
     *
     * @param  int  $life
     *
     * @return  self
     */
    public function setLife(int $life)
    {
        $this->life = $life;

        return $this;
    }

    /**
     * Get the value of score
     *
     * @return  int
     */
    public function getScore()
    {
        return $this->score;
    }

    /**
     * Set the value of score
     *
     * @param  int  $score
     *
     * @return  self
     */
    public function setScore(int $score)
    {
        $this->score = $score;

        return $this;
    }

    abstract protected function hit();
}
