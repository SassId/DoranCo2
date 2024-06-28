<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Introduction à PHP</title>
    <link rel="stylesheet" href="./css/style.css">
</head>

<body>
    <h1>Découverte de PHP</h1>
    <?php
    // Pour ouvrir un bloc PHP, on utilise la balise <?php
    // Pour fermer un bloc PHP on utilise la balise suivante :
    ?>

    <p>Je suis du HTML</p>

    <?php
    /* --------------------------------- */
    echo '<h2>Les commentaires</h2>';
    /* --------------------------------- */

    // Je suis un commentaire en PHP
    # Je suis aussi un commentaire en PHP
    /*
        Je suis un commentaire
        sur plusieurs lignes
    */


    /* --------------------------------- */
    echo '<h2>Affichage</h2>';
    /* --------------------------------- */

    //  echo est une instruction qui permet d'afficher du texte dans le navigateur
    echo 'Hello, world !';
    //  print est équivalent à echo
    print "Hello, World !";


    /* --------------------------------- */
    echo '<h2>Les variables</h2>';
    /* --------------------------------- */

    // Déclaration d'une variable avec le signe $
    $unNom;
    // Affectation d'une valeur à la variable
    $unNom = 127;
    // Affichage de la variable
    echo $unNom;
    echo '<br>';


    /* --------------------------------- */
    echo '<h2>Les types de variables</h2>';
    /* --------------------------------- */

    // Les types de variables :

    // String : chaine de caractères (texte)
    $unMessage = 'Salut, l\'equipe. Je suis un message dans une variable';
    echo gettype($unMessage) . '<br>';

    // Integer : entier (nombre sans virgule)
    $unNombreEntier = 123;
    echo gettype($unNombreEntier) . '<br>';
    $hexa = 0x123;
    $binar = 0b1010;
    $octal = 0123;

    // Float : nombre à virgule (-3.14, 0.0, 1.2, 3.14)
    $unNombreAVirgule = 23.6;
    echo gettype($unNombreAVirgule) . '<br>';

    // Boolean : true ou false
    $unBooleen = true;
    echo $unBooleen . ' <br>';

    $unBooleen = false;
    echo $unBooleen . '<br>';

    echo gettype($unBooleen) . '<br>';

    // NULL : absence de valeur
    $uneVariable = null;
    echo gettype($uneVariable) . '<br>';
    echo $uneVariable . '<br>';

    // Array : tableau
    $unTableau = ['Pomme', 'Poire', 'Banane'];
    $autreTableau = array('Pomme', 'Poire', 'Banane');
    echo gettype($unTableau) . '<br>';


    /* --------------------------------- */
    echo '<h2>La concaténation</h2>';
    /* --------------------------------- */

    // La concaténation permet d'assembler des chaines de caractères avec des variables
    $a = 'Bonjour';
    $b = 'tout le monde';
    echo $a . ' ' . $b . ', je suis en cours de PHP' . '<br>';

    // Entre guillemets simple les variables ne sont pas évaluées : c'est leur nom littéral qui est affiché
    echo '$a $b, je suis un message en PHP' . '<br>';

    // Entre guillemets doubles, les variables sont évaluées : c'est leur contenu qui est affiché
    echo "$a $b, je suis un message en PHP" . '<br>';

    // Entre guillemets doubles, on peut mettre des accolades autour des variables pour les séparer du reste de la chaine de caractères
    echo "{$a} {$b}, je suis un message en PHP" . '<br>';


    // Déclarer 3 variables contenant : bleu, blanc, rouge
    // Afficher bleu-blanc-rouge (avec les tirets) en mettant le texte de chaque couleur dans des variables.
    $blue  = 'Bleu';
    $white = 'Blanc';
    $red   = 'Rouge';

    echo $blue . '-' . $white . '-' . $red . '<br>';
    echo "$blue-$white-$red <br>";
    echo "{$blue}-{$white}-{$red} <br>";
    echo '$blue-$white-$red';


    /* --------------------------------- */
    echo '<h2>Les constantes</h2>';
    /* --------------------------------- */

    // Une constante permet de sauvegarder une valeur sauf que celle-ci ne peut pas être modifiée
    // Utile pour conserver les parametres de la base de donnée
    // Par convention, une constante se déclare toujours en majuscule

    /* --------------------------------- */
    echo '<h3>Déclaration de constantes</h3>';
    /* --------------------------------- */
    define("CAPITAL", "Paris");
    const PAYS = 'France';
    echo CAPITAL;
    echo '<br>';
    echo PAYS;
    echo '<br>';

    /* --------------------------------- */
    echo '<h3>Les constantes prédéfinies</h3>';
    /* --------------------------------- */
    echo 'Version de PHP : ' . PHP_VERSION . '<br>'; // Affiche la version de PHP
    echo 'Système d\'exploitation du serveur : ' . PHP_OS . '<br>'; // Affiche le système d'exploitation du serveur

    echo 'La valeur maximal que peut contenir un entier : ' . PHP_INT_MAX . '<br>'; // Affiche la valeur maximale d'un entier
    echo 'La valeur minimal que peut contenir un entier : ' . PHP_INT_MIN . '<br>'; // Affiche la valeur minimale d'un entier

    /* --------------------------------- */
    echo '<h3>Les constantes magiques</h3>';
    /* --------------------------------- */
    // Les constantes magiques sont des constantes prédéfinies dans le langage qui changent de valeur en fonction du contexte
    echo 'Chemin du fichier courant : ' . __FILE__ . '<br>'; // Affiche le chemin complet vers le fichier courant
    echo 'Numero de la ligne de code : ' . __LINE__ . '<br>'; // Affiche le numéro de la ligne courante
    echo 'Dossier courant : ' . __DIR__ . '<br>'; // Affiche le dossier dans lequel est le fichier courant


    /* --------------------------------- */
    echo '<h2>Les tableaux</h2>';
    /* --------------------------------- */

    /* --------------------------------- */
    echo '<h3>Les tableaux à indice</h3>';
    /* --------------------------------- */

    // Un tableau de données ARRAY est déclaré comme une variable améliorée dans laquelle on stocke une multitude de valeurs.
    // Ces valeurs peuvent être de n'importe quel type et possèdent un indice par défaut dont la numérotation commence à 0.

    $liste = ['France', 'Italie', 'Espagne', 'Portugal'];
    echo $liste[3] . '<br>';

    echo '<pre>';
    var_dump($liste); // Affiche le contenu du tableau avec le type des valeurs
    echo '</pre>';

    echo '<br>';

    echo '<pre>';
    print_r($liste); // Affiche le contenu du tableau avec les valeurs
    echo '</pre>';

    // Autre façon de déclarer un tableau ARRAY :
    $liste2 = array('France', 'Italie', 'Espagne', 'Portugal');

    $liste2[] = 'Algerie'; // Les [] vides permettent d'ajouter une valeur à la fin du tableau
    echo '<pre>';
    var_dump($liste2);
    echo '</pre>';

    /* --------------------------------- */
    echo '<h3>Les tableaux associatifs</h3>';
    /* --------------------------------- */

    $user = ['prenom' => 'Rachid', 'nom' => 'EDJEKOUANE', 'age' => 40, 'telephone' => '06 56 87 45 36'];

    echo '<pre>';
    var_dump($user);
    echo '</pre>';

    echo 'Bonjour, je m\'appelle ' . $user['prenom'] . ' ' . $user['nom'] . ', j\'ai ' . $user['age'] . ' ans et mon numéro de téléphone est le : ' . $user['telephone'];

    /* --------------------------------- */
    echo '<h3>La fonction implode()</h3>';
    /* --------------------------------- */

    // implode() permet de transformer un tableau en chaine de caractères.
    $animals = ['chien', 'chat', 'oiseau', 'lapin', 'hamster'];
    echo 'Mes animaux péférés : ' . implode(' ', $animals);


    /* --------------------------------- */
    echo '<h2>Les operateurs</h2>';
    /* --------------------------------- */

    // Les opérateurs de concaténation (.)
    // Les opérateurs arithmétiques (+, -, *, /, %, **)
    // Les opérateurs d'affectation (=, +=, -=, *=, /=, %=, **=)
    // Les opérateurs de comparaison (==, ===, !=, !==, <, >, <=, >=)
    // Les opérateurs logiques (&&, ||, !, and, or, xor)
    // Les opérateurs d'incrémentation et de décrémentation (++, --)

    // Les opérateurs de strucutre (if, else, elseif, switch, case, default, for, foreach, while, do while, break, continue, return, include, require, include_once, require_once)
    // Les structures conditionnelles (if / elseif/ else)
    // Les structures itératives : les boucles (while, for, foreach, do while)
    // Les structures de langage (break, continue, return, include, require, include_once, require_once)


    /* --------------------------------- */
    echo '<h3>Les opérateurs arithmétiques</h3>';
    /* --------------------------------- */

    $a = 10;
    $b = 2;
    echo $a + $b . '<br>';
    echo $a - $b . '<br>';
    echo $a * $b . '<br>';
    echo $a / $b . '<br>';
    echo $a % $b . '<br>'; // modulo = reste de la division entière
    $a++;
    echo $a . '<br>';
    $a = $a + 1;
    echo $a . '<br>';
    $a += 2;
    echo $a . '<br>';
    $a *= 2;
    echo $a . '<br>';
    $a %= 2;
    echo $a . '<br>';


    /* --------------------------------- */
    echo '<h2>Les structures conditionnelles (if / elseif/ else</h2>';
    /* --------------------------------- */

    $a = 23;
    $b = 5;
    $c = 2;

    // if() : permet de tester une condition. Si la condition est vraie, on execute le code à l'intérieur des accolades.
    // '' = false
    // null = false
    // '0' = false
    // '1' = true
    if ($a < $b) {
        echo "$a est superieur à $b";
    } elseif ($a == $b) {
        echo "$a est égal à $b";
    } else {
        echo 'si aucune condition est rempli le else sera executé <br>';
    }

    // Ecriture alternative :
    if ($a < $b) :
        echo "$a est superieur à $b";
    elseif ($a == $b) :
        echo "$a est égal à $b";
    else :
        echo 'si aucune condition est rempli le else sera executé <br>';
    endif;

    // L'opérateur AND écrit && permet de vérifier que 2 conditions soient réalisées en même temps.
    if ($a > $b && $b > $c) {
        echo 'Ok pour les 2 conditions <br>';
    }

    // L'opérateur OR écrit || permet de vérifier qu'au moins l'une des 2 conditions soit réalisée.
    if (($a === 9 || $b > $c) && $a > $b) {
        echo 'Ok, pour au moins une des 2 conditions <br>';
    }

    $couleur = 'bleu';

    switch ($couleur) {
        case 'bleu':
            echo 'Vous aimez le bleu <br>';
            break;
        case 'rouge':
            echo 'vous le rouge <br>';
            break;
        case 'vert':
            echo 'vous aimez le vert <br>';
            break;
        default:
            echo 'vous n \'aimez ni le bleu, ni le rouge, ni le vert <br>';
    }

    $animal = 'chat';

    switch ($animal) {
        case 'chien':
            echo 'Wouf<br>';
            break;
        case 'chat':
            echo 'Miaou<br>';
            break;
        case 'oiseau':
            echo 'Cui cui<br>';
            break;
        default:
            echo 'Je ne connais pas cet animal !<br>';
    }

    // Exercice : refaire le switch précédent avec des conditions if() pour obtenir exactement le même résultat.
    if ($couleur == 'bleu') {
        echo 'Vous aimez le bleu';
    } elseif ($couleur == 'rouge') {
        echo 'vous le rouge';
    } elseif ($couleur = 'vert') {
        echo 'vous aimez le vert';
    } else {
        echo ' vous n \'aimez ni le bleu, ni le rouge, ni le vert';
    }


    /* --------------------------------- */
    echo '<h2>Les structures itératives : les boucles</h2>';
    /* --------------------------------- */

    /* --------------------------------- */
    echo '<h3>Boucle while()</h3>';
    /* --------------------------------- */

    // Boucle while :
    $i = 0; //On initialise
    while ($i < 5) { // Tans que $i est inférieur à 5, on execute les accolades
        echo $i . '<br>';
        $i++; // On incremente $i de 1 à chaque tour pour que la condition d'entrée devienne fausse à un moment
    }

    echo '<select>';
    $i = 1920;
    while ($i <= 2020) {
        echo "<option>$i</option>";
        $i++;
    }
    echo '</select>';
    ?>

    <!-- Exercice : à l'aide d'une boucle while, afficher un sélecteur avec les années depuis 1920 jusqu'à 2020. -->
    <select name="" id="">
        <?php
        $i = 1920;
    while ($i <= 2020) {
        ?>
        <option value="<?php echo $i; ?>">
            <?= $i; ?>
        </option>
        <?php
            $i++;
    }
    ?>
    </select>

    <?php
    /* --------------------------------- */
    echo '<h3>Boucle for()</h3>';
    /* --------------------------------- */

    // Boucle for() :
    for ($i = 0; $i < 4; $i++) {
        echo "<p>J'ai fait $i tours </p>";
    }

    // Exercice : à l'aide d'une boucle for(), afficher un sélecteur avec les années depuis 1920 jusqu'à 2020.
    ?>
    <select name="" id="">
        <?php
        for ($i = 1920; $i <= 2020; $i++) {

            echo "<option value=\"$i\">$i</option>";
        }
    ?>
    </select>

    <select name="" id="">
        <?php
    for ($i = 1920; $i <= 2020; $i++) {
        ?>
        <option value="<?= $i; ?>">
            <?= $i; ?>
        </option>
        <?php
    }
    ?>
    </select>
    <?php

    $animals = ['lion', 'tigre', 'girafe', 'buffle', 'boa'];

    // Boucle for()
    for ($i = 0; $i < count($animals); $i++) {
        echo $animals[$i] . '<br>';
    }


    // ---------------------------------
    echo '<h3>Boucle foreach()</h3>';
    // ---------------------------------
    foreach ($animals as $animal) {
        echo $animal . '<br>';
    }

    $voiture = ['couleur' => 'jaune', 'modele' => 'bmw', 'annee' => 2018];

    foreach ($voiture as $key => $prop) {
        echo $key . ' : ' . $prop . '<br>';
    }


    /* --------------------------------- */
    echo '<h2>Les fonctions</h2>';
    /* --------------------------------- */

    /* --------------------------------- */
    echo '<h3>Les fonctions utilisateurs</h3>';
    /* --------------------------------- */

    //  On déclare une fonction avec le mot clé function suivi du la fonction puis d'une paire de ()
    function separation()
    {
        echo '<br>';
    }

    // Pour executer une fonction, on l'appelle par son nom suivi d'une paire de ()
    separation();

    // Fonction avec parametre et return
    function bonjour($name)
    {
        return "Bonjour, je m'appelle $name";
    }

    $name = 'Rachid';
    $res = bonjour($name);
    echo $res;

    // Exercice : écrire une fonction factureEssence() qui calcule le coût total de votre facture en fonction du nombre de litres d'essence que vous indiquez lors de l'appel de la fonction.
    // Le prix du litre est 1.9
    // Cette fonction retourne la phrase "Votre facture est de X euros pour Y litres d'essence." où X et Y sont des variables.
    //  Afficher le resultat de la fonction
    function factureEssence($litres, $prixEssence)
    {
        $res = $litres * $prixEssence;
        return "Votre facture est de $res euros pour $litres litres d'essence.";
    }

    separation();
    echo factureEssence(15, 1.4);

    function debbug($var)
    {
        echo '<pre>';
        var_dump($var);
        echo '</pre>';
    }

    /* --------------------------------- */
    echo '<h3>Les fonctions prédéfinies</h3>';
    /* --------------------------------- */

    // substr()
    // Extrait un bout de la chaine de caractère
    echo substr('Bonjour, je m\'appelle Rachid. Je suis formateur', 0, 25) . '...';
    echo '<br>';

    // declarez une variable description (extrait)
    // extraire 100 premier caractere suivi de ...
    $description = "Indiana Jones reçoit la visite surprise de sa filleule Helena Shaw, qui est à la recherche d'un artefact rare que son père a confié à Indiana par le passé : le fameux cadran d'Archimède, une relique qui aurait le pouvoir de localiser les fissures temporelles.";
    $newdesc = substr($description, 0, 120);
    echo $newdesc . '... <br>';

    // trim()
    $message = '   edjek@gmail.com   ';
    echo trim($message); // Supprime les espaces au début et à la fin de la chaine de caractère
    echo '<br>';

    // str_replace() : Remplace une chaine de caractère par une autre
    $message = "Bonjour, je m'appelle Paul. Je suis formateur";
    $message = str_replace('Paul', 'Rachid', $message);
    echo $message;
    echo '<br>';

    // strtolower() : Mettre la chaine de caractère en minuscule
    echo strtolower($message);
    echo '<br>';

    // strtoupper() : Mettre la chaine de caractère en majuscule
    echo strtoupper($message);
    echo '<br>';


    /* --------------------------------- */
    echo '<h2>Les superglobales</h2>';
    /* --------------------------------- */

    // Les superglobales sont des variables de type ARRAY (tableau associatif) qui sont disponibles dans tous les contextes du script.

    /* --------------------------------- */
    echo '<h3>$GLOBALS</h3>';
    /* --------------------------------- */

    // $GLOBALS : Contient l'ensemble des variables globales du script
    debbug($GLOBALS);


    /* --------------------------------- */
    echo '<h3>$_SERVER</h3>';
    /* --------------------------------- */

    // $_SERVER  : Contient des informations liées au serveur
    debbug($_SERVER);
    echo $_SERVER['MYSQL_HOME'];

    separation();
    echo "Adresse IP du server : " . $_SERVER['SERVER_NAME'];
    separation();
    echo "Nom du fichier executé : " . $_SERVER['SCRIPT_NAME'];
    separation();
    echo "Chemin du fichier executé : " . $_SERVER['SCRIPT_FILENAME'];


    /* --------------------------------- */
    echo '<h3>$_GET[]</h3>';
    /* --------------------------------- */

    // $_GET est une superglobale qui permet de récupérer des informations envoyées en paramètre dans l'URL
    var_dump($_GET);


    /* --------------------------------- */
    echo '<h3>$_POST[]</h3>';
    /* --------------------------------- */

    // $_POST est une superglobale qui permet de récupérer des informations envoyées en paramètre dans le corps de la requête HTTP
    var_dump($_POST);


    /* --------------------------------- */
    echo '<h3>$_SESSION[]</h3>';
    /* --------------------------------- */

    // Une session permet de conserver des informations à travers le site.
    // Ces informations sont stockées dans un fichier temporaire sur le serveur.
    // Ce fichier est relié à un internaute grâce à un identifiant unique : le session_id.
    // Ce fichier peut contenir des informations sensibles : il ne faut donc pas le laisser à la portée de tout le monde.
    // C'est pour cela qu'il est stocké dans un dossier temporaire du serveur, inaccessible aux internautes.

    // Pour accéder à la session, il faut commencer par la démarrer avec la fonction session_start().
    // Doit être déclaré en premier avant même tout élément HTML
    session_start();

    // $_SESSION
    var_dump($_SESSION);

    // Ajouter des informations à la session
    $_SESSION['pseudo'] = 'tintin';

    // Supprimer des informations de la session
    unset($_SESSION['pseudo']);

    // Supprime le fichier de session du serveur.
    session_destroy();

    // Vide le fichier de session sans le supprimer du serveur.
    session_unset();


    /* --------------------------------- */
    echo '<h3>$_COOKIE[]</h3>';
    /* --------------------------------- */

    // Un cookie est un petit fichier (4ko max) déposé par le serveur du site sur le poste de l'internaute, et qui peut contenir des informations.
    // Les cookies sont automatiquement renvoyés au serveur web par le navigateur lorsque l'internaute navigue dans les pages concernées par les cookies.
    // PHP permet de récupérer très facilement les données contenues dans un cookie : elles sont stockées dans la superglobale $_COOKIE.

    // Pour créer un cookie, il faut utiliser la fonction setcookie() :
    // setcookie('nom', 'valeur', 'date expiration', 'chemin', 'domaine', 'sécurité');
    setcookie('pseudo', 'tintin', time() + 365 * 24 * 3600); // expire dans 1 an


    /* --------------------------------- */
    echo '<h2>Les inclusions de fichier</h2>';
    /* --------------------------------- */

    // En PHP, il est possible d'inclure des fichiers dans d'autres fichiers avec l'instruction require, include, include_once ou encore require_once (on utilise plutôt require_once en pratique).

    // require 'inclus.php'; // Le fichier est obligatoire pour le fonctionnement du site. Si le fichier n'est pas trouvé, require génère une erreur fatale et stoppe l'exécution du code.
    // include 'inclus.php'; // Le fichier est facultatif pour le fonctionnement du site. Si le fichier n'est pas trouvé, include génère une erreur de type warning et poursuit l'exécution du code.
    include './include.inc.php';
    require './include.inc.php';

    // Le _once permet de vérifier si le fichier a déjà été inclus. Si c'est le cas, il ne le ré-inclut pas.
    include_once './include.inc.php';
    require_once './include.inc.php';
    echo $doranco;


    /* --------------------------------- */
    echo '<h2>Les objets</h2>';
    /* --------------------------------- */

    // Un objet est un autre type de données.
    // Il représente un objet réel (par exemple : un produit, un personnage, un panier d'achat, etc.).
    // Un objet est déclaré à partir d'un plan de construction : la classe. La classe est un plan général de l'objet.
    // L'objet est instancié à partir de la classe. Chaque objet est différent, mais ils ont tous la même structure (les mêmes propriétés et les mêmes méthodes).

    class Hero
    {
        public $pseudo; // Propriété "pseudo"
        private $vie = 100; // Propriété "vie"

        public function regenerer() // Méthode "regenerer"
        {
            $this->vie = 100;
        }
    }

    $hero = new Hero();
    $hero->pseudo = 'Batman';

    echo $hero->pseudo;
    // echo $hero->vie; // Erreur : la propriété est privée
    $hero->regenerer();

    // $hero2 est un objet de la classe "Hero". C'est une instance de la classe "Hero".
    $hero2 = new Hero();
    $hero->pseudo = 'Superman';

    ?>

</body>

</html>