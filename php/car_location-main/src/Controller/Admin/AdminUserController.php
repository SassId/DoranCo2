<?php

namespace App\Controller\Admin;

use App\Controller\Admin\AbstractAdminController;
use App\Core\Session;
use App\Repository\UserRepository;

class AdminUserController extends AbstractAdminController
{
    public function showUsers(): void
    {
        $users = new UserRepository();
        $allUsers = $users->getAllUsers();

        $this->render('dashboard-users', ['users' => $allUsers, 'nom' => 'said']);
    }

    public function showUserUpdateForm($param)
    {
        $users = new UserRepository();
        $user = $users->getUserById($param['id']);

        $this->render('user-update-form', ['user'  => $user]);
    }

    public function processUpdate()
    {
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {

            $session = new Session();
            echo '<pre>';
            echo var_dump($_POST);
            echo '</pre>';

            if (
                !isset($_POST['nouveau-pseudo']) ||
                !isset($_POST['nouvel-email']) ||
                !isset($_POST['statut']) ||
                empty($_POST['nouveau-pseudo']) ||
                empty($_POST['nouvel-email']) ||
                empty($_POST['statut'])
            ) {

                $session->setFlashMessage('tous les champs sont requis', 'danger');
                header('Location: ' . SITE_NAME . '/admin/dashboard/users/modifier/' . $_POST['user-id']);
                exit();
            } else {

                $newEmail = trim($_POST['nouvel-email']);
                $newPseudo = trim($_POST['nouveau-pseudo']);
                $id = $_POST['user-id'];
                $statut = $_POST['statut'];

                $statut = ($statut == "true") ? true : false;

                $repo = new UserRepository();
                $isRequestSuccessful = $repo->updateUser($id, $newPseudo, $newEmail, $statut);

                if ($isRequestSuccessful) {
                    $session->setFlashMessage('modification enregristrées', "success");
                    header('Location: '.SITE_NAME. '/admin/dashboard/users');
                    exit();
                } else {
                    $session->setFlashMessage('la requête a rencontré un problème');
                    header('Location: '.SITE_NAME. '/admin/dashboard/users/modifier/' . $_POST['user-id']);
                }
            }
        } else {

            header('Location: ' . SITE_NAME . '/dashboard');
            exit();
        }
    }
}
