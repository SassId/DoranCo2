<?php

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
    public function getName(): string
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
    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get the value of life
     *
     * @return  int
     */
    public function getLife(): int
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
    public function setLife(int $life): self
    {
        $this->life = $life;

        return $this;
    }

    /**
     * Get the value of score
     *
     * @return  int
     */
    public function getScore(): int
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
    public function setScore(int $score): self
    {
        $this->score = $score;

        return $this;
    }

    protected function hit(): void
    {
        $this->life = $this->life - 10;
    }
}
