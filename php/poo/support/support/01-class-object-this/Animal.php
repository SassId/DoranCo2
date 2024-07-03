<?php

class Animal
{
    /**
     * @var string
     */
    public string $name;

    /**
     * @var string
     */
    public string $type;

    /**
     * @var int
     */
    public int $age = 0;

    /**
     * @return string
     */
    public function eat(): string
    {
        return "The $this->type is eating";
    }

    /**
     * @return string
     */
    public function sleep(): string
    {
        return "$this->name is sleeping ";
    }
}
