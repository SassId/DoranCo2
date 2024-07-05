<?php

namespace App\Variation;

use App\Entity\Revolutionary;

class Commander extends Revolutionary
{
    public function leadRevolution(): string
    {
        return "I am {$this->getName()} !";
    }
}
