<?php

require_once './Player.php';

class Warrior extends Player
{
    /**
     * @var int
     */
    private int $arrow;

    public function __construct(string $name, int $arrow)
    {
        parent::__construct($name);
        $this->arrow = $arrow;
    }

    /**
     * Get the value of arrow
     *
     * @return  int
     */
    public function getArrow()
    {
        return $this->arrow;
    }

    /**
     * Set the value of arrow
     *
     * @param  int  $arrow
     *
     * @return  self
     */
    public function setArrow(int $arrow)
    {
        $this->arrow = $arrow;

        return $this;
    }

    public function hit(): void
    {
        $this->life = $this->life - 15;
    }
}
