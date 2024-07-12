<?php

namespace App\Controller\Admin;

use App\Controller\Admin\AbstractAdminController;

class AdminCarController extends AbstractAdminController
{
    public function showcars()
    {
        $this->render('/admin/dashboard/cars');
    }
}