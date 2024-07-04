<?php

namespace App\Entity;

use App\Abstract\Vehicule;
use App\Entity\User;
use App\Utility\Engine;

// require_once './Vehicule.php';
// require_once './Engine.php';



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
      return   "{$user->getPseudo()} à démarré la Peugeot";
        
    }
}
