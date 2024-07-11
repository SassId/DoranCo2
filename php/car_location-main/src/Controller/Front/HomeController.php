<?php

namespace App\Controller\Front;

use App\Controller\Front\AbstractController;

class HomeController extends AbstractController
{
    public function index()
    {
        $this->render('/front/home');
    }
}
