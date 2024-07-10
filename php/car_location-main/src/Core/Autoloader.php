<?php

namespace App\Core;

class Autoloader
{
    public static function autoload()
    {
        spl_autoload_register(function ($a) {
            $path = "$a.php";
            $path = str_replace('App', '', $path);
            $path = str_replace('\\', DIRECTORY_SEPARATOR, $path);
            $dirPath = str_replace(DIRECTORY_SEPARATOR . "Core", '', __DIR__);

            require_once $dirPath . $path;
        });
    }
}
