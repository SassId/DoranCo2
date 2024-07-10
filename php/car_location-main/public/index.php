<?php

require_once '../src/Core/Autoloader.php';
require_once '../config/env.php';

use App\Core\Autoloader;
use App\Core\Database;
use App\Core\Router;

Autoloader::autoload();

Database::initConnection();
// $pdo = Database::getConnexion();

$router = new Router();
$router->execute();
