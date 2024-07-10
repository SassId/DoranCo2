<?php

namespace App\Controller;

use App\Controller\AbstractController;

class ContactController extends AbstractController
{
    public function showContactForm()
    {
        $this->render('contact');
    }
}
