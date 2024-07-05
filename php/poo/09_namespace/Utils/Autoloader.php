<?php

namespace App\Utils;

class Autoloader
{
    public static function autoload()
    {
        spl_autoload_register(function($className){
            echo $className . '<br>';

            $path = "$className.php";
            $path = str_replace('App','',$path);
            echo $path .'<br>';
            $path = str_replace('\\',DIRECTORY_SEPARATOR,$path);
            echo $path .'<br>';
            echo __DIR__ .'<br>';
            $dirPath = str_replace(DIRECTORY_SEPARATOR . "Utils",'',__DIR__);
            echo $dirPath .'<br>';


            require_once $dirPath . $path;
        });
    }
}
