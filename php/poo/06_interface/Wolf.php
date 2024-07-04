<?php

require_once './Animal.php';
require_once './WildAnimal.php';

class Wolf extends Animal implements WildAnimal
{
    /**
     * @var bool
     */
    private bool $isSolitary;

    public function __construct(string $name, int $age, int $nbLimbs, array $foodList, bool $isSolitary)
    {
        parent::__construct($name,  $age,  $nbLimbs, $foodList);
        $this->isSolitary = $isSolitary;
    }

    /**
     * Get the value of isSolitary
     *
     * @return  bool
     */
    public function getIsSolitary()
    {
        return $this->isSolitary;
    }

    /**
     * Set the value of isSolitary
     *
     * @param  bool  $isSolitary
     *
     * @return  self
     */
    public function setIsSolitary(bool $isSolitary)
    {
        $this->isSolitary = $isSolitary;

        return $this;
    }

    public function devore(): string
    {
        return "I've just eaten";
    }

    public function eatBird(Bird $object): string
    {
        return "I'm going to eat the bird named " . $object->name;
    }
}
