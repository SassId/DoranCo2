<?php

require_once './Player.php';

class Warrior extends Player
{
    /**
     * @var int
     */
    private int $arrows;

    public function __construct(string $name, int $arrows)
    {
        parent::__construct($name);
        $this->arrows = $arrows;
    }

    /**
     * Get the value of arrows
     *
     * @return  int
     */
    public function getArrows(): int
    {
        return $this->arrows;
    }

    /**
     * Set the value of arrows
     *
     * @param  int  $arrows
     *
     * @return  self
     */
    public function setArrows(int $arrows): self
    {
        $this->arrows = $arrows;

        return $this;
    }

    public function hit(): void
    {
        parent::hit();
        $this->life = $this->life - 5;
    }
}
