<?php

namespace App\Controller;

use App\Controller\AbstractController;

class UserController extends AbstractController
{
    public function showConnexionForm()
    {
        $this->render('connexion');
    }

    public function processLogin()
    {
        var_dump($_POST);
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            if (!isset($POST['email']) || !isset($POST['pswd']) || empty($POST['email']) || empty($POST['pswd'])) {
                echo 'erreur';
            }

            $email = trim($_POST['email']);
            $pswd = trim($_POST['pswd']);
        }
    }
}
