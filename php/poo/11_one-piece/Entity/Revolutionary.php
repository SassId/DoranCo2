<?php

namespace App\Entity;

use App\Abstract\Character;
use App\Interface\CombatSkills;

class Revolutionary extends Character implements CombatSkills
{
    public function getRole(): string
    {
        return  "Revolutionary";
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
