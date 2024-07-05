<?php

namespace App\Entity;

use App\Abstract\Character;
use App\Interface\CombatSkills;

class Marine extends Character implements CombatSkills
{
    public function getRole(): string
    {
        return  "Marine";
    }

    public function attack(): string
    {
        return "{$this->getName()} attacks";
    }

    public function defend(): string
    {
        return "{$this->getName()} defends";
    }
}
