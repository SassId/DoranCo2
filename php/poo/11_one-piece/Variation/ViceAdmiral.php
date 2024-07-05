<?php

namespace App\Variation;

use App\Entity\Marine;

class ViceAdmiral extends Marine
{
    public function commandFleet(): string
    {
        return "I am {$this->getName()} !";
    }
}
