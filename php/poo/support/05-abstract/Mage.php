<?php

require_once './Player.php';


class Mage extends Player
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
}
