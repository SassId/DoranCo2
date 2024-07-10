<?php

namespace App\Core;

class Session
{
    public function __construct()
    {
        if (!isset($_SESSION)) {
            session_start();
        }
    }

    public function setFlashMessage(string $message, string $color = 'primary')
    {
        $_SESSION['message'] =
            '<div class="alert alert-' . $color . ' alert-dismissible fade show col-3 mx-auto" role="alert">
  <p>' . $message . '</p>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>';
    }

    public function displayFlashMessage()
    {
        if (isset($_SESSION['message'])) {
            echo $_SESSION['message'];
            unset($_SESSION['message']);
        }
    }
}
