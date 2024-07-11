<?php

namespace App\Controller;

use App\Controller\AbstractController;

class AdminController extends AbstractController
{
    public function index()
    {
        $this->render('dashboard');

    }
}
