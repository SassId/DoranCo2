<?php
echo 'yo!';
echo '<br>';

require_once './Utils/Autoloader.php';

use App\Utils\Autoloader;
use App\Entity\Bd;


Autoloader::autoload();


$description = "Tintin et le Lotus Bleu est une aventure où le reporter Tintin se rend en Chine pour démanteler un réseau de trafic d'opium et rencontre son futur ami, Tchang.";

// spl_autoload_register(function($a){
//     echo $a;
//     echo '<br>';
//  $path = str_replace("App", "", $a);
//  echo $path;
//  echo '<br>';

//  $reslash = str_replace("\\", DIRECTORY_SEPARATOR, $path);
//  echo $reslash;

//  $newPath = __DIR__.$reslash;
//  echo $newPath;
// });

$tintin1 = new BD('Tintin et le lotus bleu', $description, 1936, 'Hergé');
echo $tintin1->getName();

