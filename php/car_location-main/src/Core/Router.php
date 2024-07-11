<?php

namespace App\Core;

use App\Controller\CarController;
use App\Controller\UserController;
use App\Controller\ContactController;
use App\Controller\HomeController;
use App\Controller\AdminController;

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

        $this->add_route('/dashboard', function () {
            echo 'coucou';
            // $this->currentController = new AdminController();
            // $this->currentController->index();
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
