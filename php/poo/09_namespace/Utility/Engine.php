<?php

namespace App\Utility;

use App\Entity\User;

// require_once './User.php';

interface Engine
{
    public function start(User $user);


}