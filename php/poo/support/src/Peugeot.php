<?php

require_once './Vehicule.php';

class Peugeot extends Vehicule implements Engine
{

    /**
     * @var string
     */
    private string $carburant;


    public function carburant(): string
    {
        return 'essence';
    }

    public function nbTest(): int
    {
        return parent::nbTest() + 70;
    }

    public function start(User $user)
    {
        
    }
}
