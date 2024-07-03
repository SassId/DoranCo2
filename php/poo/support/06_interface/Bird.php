<?php

require_once './Animal.php';

class Bird extends Animal

{
    /**
     * @var bool
     */
    private bool $isMigratory;

    public function __construct(string $name, int $age, int $nbLimbs, array $foodList, bool $isMigratory)
    {
        parent::__construct($name,  $age,  $nbLimbs,  $foodList);
        $this->isMigratory = $isMigratory;
    }

    /**
     * Get the value of isMigratory
     *
     * @return  bool
     */
    public function getisMigratory()
    {
        return $this->isMigratory;
    }

    /**
     * Set the value of isMigratory
     *
     * @param  bool  $isMigratory
     *
     * @return  self
     */
    public function setisMigratory(bool $isMigratory)
    {
        $this->isMigratory = $isMigratory;

        return $this;
    }

    public function describe()
    {
        if ($this->isMigratory) {
            return "I'm a migratory bird";
        }
        return "I'm not a migratory bird";
    }
}
