<?php

namespace App\Abstract;

abstract class Character
{
    /**
     * @var string
     */
    protected string $name;

    /**
     * @var int
     */
    protected int $age;

    /**
     * @var int
     */
    protected int $bounty;

    public function __construct(string $name, int $age, int $bounty)
    {
        $this->name = $name;
        $this->age = $age;
        $this->bounty = $bounty;
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
     * Get the value of age
     *
     * @return  int
     */
    public function getAge()
    {
        return $this->age;
    }

    /**
     * Set the value of age
     *
     * @param  int  $age
     *
     * @return  self
     */
    public function setAge(int $age)
    {
        $this->age = $age;

        return $this;
    }

    /**
     * Get the value of bounty
     *
     * @return  int
     */
    public function getBounty()
    {
        return $this->bounty;
    }

    /**
     * Set the value of bounty
     *
     * @param  int  $bounty
     *
     * @return  self
     */
    public function setBounty(int $bounty)
    {
        $this->bounty = $bounty;

        return $this;
    }

    abstract public function getRole(): string;

    public function getInfo(): string
    {
        return "$this->name, $this->age, $this->bounty";
    }
}
