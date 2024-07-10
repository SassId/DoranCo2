<?php

namespace App\Controller;

use App\Controller\AbstractController;
use App\Core\Session;
use App\Repository\UserRepository;

class UserController extends AbstractController
{
    public function showConnexionForm()
    {
        $this->render('connexion');
    }

    public function processLogin()
    {
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {

            $session = new Session();

            if (!isset($_POST['email']) || !isset($_POST['pswd']) || empty($_POST['email']) || empty($_POST['pswd'])) {
                $session->setFlashMessage('tous les champs sont requis', 'danger');
                header('Location: ' . SITE_NAME . '/connexion');
                exit();
            } else {

                $email = trim($_POST['email']);
                $pswd = trim($_POST['pswd']);

                $userRepo = new UserRepository();

                $user = $userRepo->getUserByEmail($email);

                if (!$user || $user['mot_de_passe'] !== $pswd) {
                    $session->setFlashMessage('cet utilisateur n\'existe pas' . '<br> créez-vous un compte bordel !', 'danger');
                    header('Location: ' . SITE_NAME . '/connexion');
                    exit();
                }

                // if ($user && $user['mot_de_passe'] !== $pswd) {
                //     $session->setFlashMessage('cet utilisateur n\'existe pas' . '<br> créez-vous un compte bordel !', 'danger');
                //     header('Location: ' . SITE_NAME . '/connexion');
                // }

                if ($user['mot_de_passe'] === $pswd) {
                    $session->setFlashMessage('bienvenue à vous', 'success');
                    header('Location: ' . SITE_NAME . '/');
                    exit();
                }
            }
        } else {
            header('Location:' . SITE_NAME . '.connexion');
        }
    }
}
