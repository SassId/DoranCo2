<?php

namespace App\Utilities;

class Autoloader
{
    public static function autoload()
    {
        spl_autoload_register(function ($className) {
            $className = str_replace("App", "", $className);
            $path = str_replace(DIRECTORY_SEPARATOR . "Utilities", "", __DIR__);
            $path = $path . $className . ".php";
            $path = str_replace("\\", DIRECTORY_SEPARATOR, $path);

            require_once $path;
        });
    }
}
