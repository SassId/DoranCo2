<?php

namespace App\Controller\Admin;

use App\Controller\Admin\AbstractAdminController;
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
        echo '<pre>';
        var_dump($user);
        echo '</pre>';

        $this->render('user-update-form', ['user'  => $user]);
    }
}
