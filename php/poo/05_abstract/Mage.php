<?php

require_once './Player.php';

class Mage extends Player
{
    /**
     * @var int
     */
    public int $mana;


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
    public function getMana(): int
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
    public function setMana(int $mana): self
    {
        $this->mana = $mana;

        return $this;
    }

    public function hit(): void
    {
        parent::hit();
        parent::hit();
        parent::hit();
    }
}
