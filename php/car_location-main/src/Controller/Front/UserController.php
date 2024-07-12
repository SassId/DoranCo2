<?php

namespace App\Controller\Front;

use App\Controller\Front\AbstractController;
use App\Core\Session;
use App\Repository\UserRepository;

class UserController extends AbstractController
{
    public function showConnexionForm()
    {
        $this->render('front/connexion');
    }

    public function processLogin()
    {
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {

            $session = new Session();

            if (!isset($_POST['email']) || !isset($_POST['pswd']) || empty($_POST['email']) || empty($_POST['pswd'])) {
                echo "caca";
                $session->setFlashMessage('tous les champs sont requis', 'danger');
                header('Location: ' . SITE_NAME . '/admin/dashboard/users');
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
                    $session->createSession($user);
                    $session->setFlashMessage('Vous êtes connecté(e), bienvenue à vous', 'success');
                    header('Location: ' . SITE_NAME . '/');
                    exit();
                }
            }
        } else {
            header('Location:' . SITE_NAME . '.connexion');
        }
    }

    public function disconnect()
    {

        // first, start a session:
        session_start();

        // remove all session variables
        session_unset();

        // destroy the session
        session_destroy();

        header('Location: ' . SITE_NAME . '/connexion');
    }
}
