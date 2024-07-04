<?php

require_once './Animal.php';

class Bird extends Animal
{
    /**
     * @var bool
     */
    private bool $migrate;

    public function __construct(string $nom, int $age, int $nbPattes, array $listAliment, bool $migrate)
    {
        parent::__construct($nom, $age, $nbPattes, $listAliment);
        $this->migrate = $migrate;
    }

    /**
     * Get the value of migrate
     *
     * @return  bool
     */
    public function getMigrate(): bool
    {
        return $this->migrate;
    }

    /**
     * Set the value of migrate
     *
     * @param  bool  $migrate
     *
     * @return  self
     */
    public function setMigrate(bool $migrate): self
    {
        $this->migrate = $migrate;

        return $this;
    }

    public function description(): string
    {
        if ($this->migrate == true) {
            return "Vous êtes un oiseau migrateur";
        }
        return "Vous n'êtes pas un oiseau migrateur";
    }
}
