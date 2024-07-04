<?php

namespace App\Entity;

use App\Abstract\Vehicule;
use App\Entity\User;
use App\Utility\Engine;


// require_once './Vehicule.php';
// require_once './Engine.php';

class Renault extends Vehicule implements Engine
{
    /**
     * @var string
     */
    private string $carburant;


    public function carburant(): string
    {
        return "diesel";
    }

    public function nbTest():int
    {
      return parent::nbTest() + 30;
    }


    /**
     * Get the value of carburant
     *
     * @return  string
     */ 
    public function getCarburant()
    {
        return $this->carburant;
    }

    /**
     * Set the value of carburant
     *
     * @param  string  $carburant
     *
     * @return  self
     */ 
    public function setCarburant(string $carburant)
    {
        $this->carburant = $carburant;

        return $this;
    }

    public function start(User $user)
    {
      return   "{$user->getPseudo()} à démarré la Renault";
    }
}