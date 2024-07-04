<?php

abstract class Animal
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
    protected int $nbLimbs;

    /**
     * @var array
     */
    protected array $foodList;


    public function __construct(string $name, int $age, int $nbLimbs, array $foodList)
    {
        $this->name = $name;
        $this->age = $age;
        $this->nbLimbs = $nbLimbs;
        $this->foodList = $foodList;
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
     * Get the value of nbLimbs
     *
     * @return  int
     */
    public function getNbLimbs()
    {
        return $this->nbLimbs;
    }

    /**
     * Set the value of nbLimbs
     *
     * @param  int  $nbLimbs
     *
     * @return  self
     */
    public function setNbLimbs(int $nbLimbs)
    {
        $this->nbLimbs = $nbLimbs;

        return $this;
    }

    /**
     * Get the value of foodList
     *
     * @return  array
     */
    public function getFoodList()
    {
        return $this->foodList;
    }

    /**
     * Set the value of foodList
     *
     * @param  array  $foodList
     *
     * @return  self
     */
    public function setFoodList(array $foodList)
    {
        $this->foodList = $foodList;

        return $this;
    }
}
