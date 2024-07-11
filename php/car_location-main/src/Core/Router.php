<?php

namespace App\Core;

use App\Controller\Front\CarController;
use App\Controller\Front\UserController;
use App\Controller\Front\ContactController;
use App\Controller\Front\HomeController;
use App\Controller\Admin\AdminController;
use App\Controller\Admin\AdminUserController;

class Router
{
    private array $routes;

    private $currentController;

    public function __construct()
    {
        $this->add_route('/', function () {
            $this->currentController = new HomeController();
            $this->currentController->index();
        });

        $this->add_route('/reservation/{id}', function ($param) {
            $this->currentController = new CarController();
            $this->currentController->showReservationDetails($param);
        });

        $this->add_route('/connexion', function () {
            $this->currentController = new UserController();
            $this->currentController->showConnexionForm();
        });

        $this->add_route('/connecter', function () {
            $this->currentController = new UserController();
            $this->currentController->processLogin();
        });

        $this->add_route('/contact', function () {
            $this->currentController = new ContactController();
            $this->currentController->showContactForm();
        });

        $this->add_route('/admin/dashboard', function () {
            $this->currentController = new AdminController();
            $this->currentController->index();
        });

        $this->add_route('/admin/dashboard/users', function () {
            $this->currentController = new AdminUserController();
            $this->currentController->showUsers();
        });

        $this->add_route('/admin/dashboard/users/modifier/{id}', function($param) {
            $this->currentController = new AdminUserController();
            $this->currentController->showUserUpdateForm($param);
        });
    }

    private function add_route(string $route, callable $closure)
    {
        $route = str_replace('/', '\/', $route);
        $pattern = preg_replace('/\{(\w+)\}/', '(?P<$1>[^\/]+)', $route);
        $pattern = '/^' . $pattern . '$/';

        $this->routes[$pattern] = $closure;
    }

    public function execute()
    {
        $requestUri = $_SERVER['REQUEST_URI'];
        $requestUri = str_replace('/car_location-main', '', $requestUri);

        foreach ($this->routes as $key => $closure) {
            if (preg_match($key, $requestUri, $matches)) {
                array_shift($matches);
                $closure($matches);
                return;
            }
        }

        require_once  '../templates/error-404.php';
    }
}
