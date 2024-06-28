<?php

require_once '../config/db.php';
require_once '../repository/bookRepository.php';

session_start();


// echo '<pre>';
// echo var_dump($_POST);
// echo '</pre>';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {



    if (!isset($_POST['title']) || !isset($_POST['description']) || !isset($_POST['date_of_publication']) || !isset($_POST['id_author'])) {

        $_SESSION['message'] = 'veuillez recommencer';

        header('Location: ../../view/add-book.php');
        exit();
    } else if (empty($_POST['title']) || empty($_POST['description']) || empty($_POST['date_of_publication'])) {
        $_SESSION['message'] = 'tous les champs sont requis';
        header('Location: ../../view/add-book.php');
        exit();
    }

    $title = $_POST['title'];
    $description = $_POST['description'];
    $date_of_publication = $_POST['date_of_publication'];
    $id_author = $_POST['id_author'];

    $trimmedTitle = trim($title);
    $trimmedDescription = trim($description);
    $trimmedDate = trim($date_of_publication);

    $intDate = intval($trimmedDate);

    $pdo = connectDB();
    addBook($pdo, $title, $description, $date_of_publication, $id_author);
    $_SESSION['message'] = 'votre livre a bien été ajouté';
    header('Location: ../../view/add-book.php ');

} else {
    $_SESSION['message'] = 'le serveur a rencontré une erreur';
    header('Location: ../../view/add-book.php');
    exit();
}
