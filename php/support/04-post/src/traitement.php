<?php
// Injection SQL : est une technique qui permet d'injecter du code SQL dans des variables ou bases de données mal protégées.
// exemple : $sql = "SELECT * FROM users WHERE name = '$name' AND pswd = '$pswd'";

// Faille XSS : Cross-Site Scripting, est une faille qui permet d'injecter du code HTML et/ou Javascript dans des variables ou bases de données mal protégées.
// exemple : <script>alert('Hello World')</script>

session_start();

// Validation du formulaire
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['name']) && isset($_POST['name']) && !empty($_POST['name']) && !empty($_POST['pswd'])) {
        $name = trim($_POST['name']); // Supprimer les espaces en début et fin de chaîne
        $pswd = trim($_POST['pswd']);
        $hashedPswd = password_hash($pswd, PASSWORD_DEFAULT); // Hachage du mot de passe

        $_SESSION['message'] = 'Vous êtes bien inscrit';
        setcookie('connected', true, time() + 365 * 24 * 3600, '/');

        header('Location: ../index.php');
        exit;
    } else {
        $_SESSION['message'] = 'Veuillez remplir tous les champs correctement';

        header('Location: ../index.php');
        exit;
    }
} else {
    $_SESSION['message'] = 'Il y a eu une erreur';

    header('Location: ../index.php');
    exit;
}
