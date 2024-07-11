<?php

namespace App\Controller\Admin;

use App\Controller\Admin\AbstractAdminController;

class AdminController extends AbstractAdminController
{
    public function index():void
    {
        $this->render('dashboard');

    }
}
