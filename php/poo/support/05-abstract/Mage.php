<?php

require_once './Player.php';
require_once '../06-interface/Guerison.php';


class Mage extends Player implements Guerison
{
    /**
     * @var int
     */
    private int $mana;

    public function __construct(string $name, int $mana)
    {
        parent::__construct($name);
        $this->mana = $mana;
    }

    /**
     * Get the value of mana
     *
     * @return  int
     */
    public function getMana()
    {
        return $this->mana;
    }

    /**
     * Set the value of mana
     *
     * @param  int  $mana
     *
     * @return  self
     */
    public function setMana(int $mana)
    {
        $this->mana = $mana;

        return $this;
    }

    public function hit(): void
    {
        $this->life = $this->life - 30;
    }

    public function reanime():void
    {

    }

    public function nourrir(int $n):int
    {
        return $n;
    }
}
