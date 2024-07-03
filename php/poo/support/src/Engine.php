<?php

require_once './User.php';

interface Engine
{
    public function start(User $user);


}