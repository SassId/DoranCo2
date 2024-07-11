<?php

namespace App\Controller\Front;

use App\Controller\Front\AbstractController;

class ContactController extends AbstractController
{
    public function showContactForm()
    {
        $this->render('/front/contact');
    }
}
