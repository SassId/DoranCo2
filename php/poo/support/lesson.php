<?php

// *********************************************
// *                                           *
// *            POO - Lesson                   *
// *                                           *
// *********************************************

// 01. Les classes et les objets en PHP
// 02. Les propriétés et les méthodes
// 03. Visibilité des propriétés et des méthodes | Encapsulation
// 04. Accesseurs et mutateurs | Getters et setters
// 05. Méthodes magiques
// 06. Les constructeurs
// 07. Les classes statiques et les constantes
// 08. L'héritage
// 09. Polymorphisme
// 10. Les classes abstraites et les interfaces
// 11. Les classes finales
// 12. Les espaces de noms (namespaces)
// 13. L'autoload

/*------------------------------------*\
    # CLASS
\*------------------------------------*/

// Une classe est un modèle qui permet de créer des objets.
// Une classe est composée de propriétés et de méthodes.
// Une classe est un plan de construction d'objets.
// Une classe est un modèle de données.

/*------------------------------------*\
    # PROPRIÉTÉ
\*------------------------------------*/

// Une propriété est une variable définie dans une classe.

/*------------------------------------*\
    # MÉTHODE
\*------------------------------------*/

// Une méthode est une fonction définie dans une classe.

class Books
{
    /**
     * @var string
     */
    public string $title;

    /**
     * @var string
     */
    public string $author;

    /**
     * @var int
     */
    public int $yearOfPublication = 1900;

    /**
     * @return string
     */
    public function read(): string
    {
        return "Je lis le livre $this->title écrit par $this->author, publié en $this->yearOfPublication.";
    }

    /**
     * @return string
     */
    public function getAuthor(): string
    {
        return $this->author;
    }

    /**
     * @param string $year
     *
     * @return self
     */
    public function setYearOfPublication(string $year): self
    {
        $this->yearOfPublication = $year;
        return $this;
    }
}

/*------------------------------------*\
    # OBJET (INSTANCE)
\*------------------------------------*/

// Un objet est une instance de classe.
// Un objet est une variable qui contient toutes les propriétés et les méthodes d'une classe.

$AliceInWonderland = new Books();
$AliceInWonderland->title = "Alice au pays des merveilles";
$AliceInWonderland->author = "Lewis Carroll";
$AliceInWonderland->yearOfPublication = 1865;

$HarryPotter = new Books();
$HarryPotter->title = "Harry Potter à l'école des sorciers";
$HarryPotter->author = "J. K. Rowling";
$HarryPotter->yearOfPublication = 1997;

echo $AliceInWonderland->read();
echo '<br>';
echo $HarryPotter->read();

$HarryPotter->setYearOfPublication(2012);
echo '<br>';
echo $HarryPotter->getAuthor();

/*------------------------------------*\
    # VISIBILITÉ (public, private, protected)
\*------------------------------------*/

// La visibilité permet de définir si une propriété ou une méthode est accessible depuis l'extérieur de la classe.

// 3 niveaux de visibilité :
// - public :    accessible depuis l'extérieur de la classe
// - private :   accessible uniquement depuis l'intérieur de la classe
// - protected : accessible depuis l'intérieur de la classe et depuis les classes enfants

/*------------------------------------*\
    # ENCAPSULATION
\*------------------------------------*/

// L'encapsulation permet de définir des propriétés et des méthodes privées qui ne sont pas accessibles depuis l'extérieur de la classe.

class Manga
{
    /**
     * @var string
     */
    private string $title;

    /**
     * @var string
     */
    private string $author;

    public function __construct(string $titre, string $auteur)
    {
        $this->title = $titre;
        $this->author = $auteur;
    }

    public function __destruct()
    {
        echo 'la variable a été detruite';
    }

    private static function hello()
    {
        return 'salut';
    }

    public function bonjour()
    {
        return  self::hello() . 'tout le monde';
    }

    /**
     * @return string
     */
    public function getAuthor(): string
    {
        return $this->author;
    }

    /**
     * @param string $author
     *
     * @return self
     */
    public function setAuthor(string $author): self
    {
        $this->author = $author;
        return $this;
    }

    /**
     * @return string
     */
    public function getTitle(): string
    {
        return $this->title;
    }

    /**
     * @param string $title
     *
     * @return self
     */
    public function setTitle(string $title): self
    {
        $this->title = $title;
        return $this;
    }

    /**
     * @return string
     */
    public function read(): string
    {
        return "Je lis le livre $this->title écrit par $this->author";
    }
}

$naruto = new Manga('dragon ball', 'yamamoto');
$naruto->setTitle("naruto");
$naruto->setAuthor("Masashi Kishimoto");
echo $naruto->read();
echo $naruto->bonjour();


echo '<br>';
echo '<br>';
unset($naruto);

/*------------------------------------*\
    # GETTER | # SETTER
\*------------------------------------*/

// Un getter est une méthode qui permet de récupérer la valeur d'une propriété privée.
// Un setter est une méthode qui permet de modifier la valeur d'une propriété privée.

/*------------------------------------*\
    # MÉTHODE MAGIQUE
\*------------------------------------*/

// Une méthode magique est une méthode qui est appelée automatiquement par PHP.
// Une méthode magique est une méthode qui commence par __.

/*------------------------------------*\
    # CONSTRUCTEUR
\*------------------------------------*/

// Le constructeur est une méthode magique qui est appelée automatiquement lors de l'instanciation d'une classe.
// Le constructeur permet d'initialiser les propriétés d'un objet.

/*------------------------------------*\
    # MÉTHODE STATIC
\*------------------------------------*/

// Une méthode static est une méthode qui peut être appelée sans avoir besoin d'instancier la classe.

/*------------------------------------*\
    # CONSTANTE
\*------------------------------------*/

// Une constante est une valeur qui ne peut pas être modifiée.
// Une constante est static.

/*------------------------------------*\
    # HÉRITAGE
\*------------------------------------*/

// L'héritage permet de créer une classe enfant qui hérite des propriétés et des méthodes d'une classe parent.
// L'héritage permet de créer une classe enfant qui peut avoir des propriétés et des méthodes supplémentaires.

/*------------------------------------*\
    # POLYMORPHISME
\*------------------------------------*/

// Le polymorphisme permet de redéfinir une méthode dans une classe enfant.


/*------------------------------------*\
    # ABSTRACTION
\*------------------------------------*/

// L'abstraction permet de définir des méthodes abstraites qui doivent être implémentées dans les classes enfants.

/*------------------------------------*\
    # INTERFACE
\*------------------------------------*/

// Une interface est un contrat qui permet de définir des méthodes que les classes qui implémentent cette interface doivent implémenter.

/*------------------------------------*\
    # FINAL
\*------------------------------------*/

// Une classe finale est une classe qui ne peut pas être étendue.
// Une méthode finale est une méthode qui ne peut pas être redéfinie dans une classe enfant.

/*------------------------------------*\
    # COMPOSITION
\*------------------------------------*/

// La composition permet de créer une classe qui contient une autre classe.
// La classe conteneur est responsable de la création et de la gestion de la classe contenue.

class Engine
{
    /**
     * @return string
     */
    public function start(): string
    {
        return "Engine started!";
    }
}

class Car
{
    /**
     * @var Engine
     */
    private Engine $engine;

    public function __construct()
    {
        $this->engine = new Engine();
    }

    /**
     * @return string
     */
    public function start(): string
    {
        return $this->engine->start() . "Car started!";
    }
}

$car = new Car();
$car->start();

/*------------------------------------*\
    # AGGRÉGATION
\*------------------------------------*/

// L'aggrégation permet de créer une classe qui contient une autre classe.
// Elle sera passée en paramètre du constructeur ou d'une méthode.

class Livre
{
    /**
     * @var string
     */
    private string $title;

    /**
     * @var string
     */
    private string $author;

    /**
     * @param string $title
     * @param string $author
     */
    public function __construct(string $title, string $author)
    {
        $this->title = $title;
        $this->author = $author;
    }

    /**
     * @return string
     */
    public function getTitle(): string
    {
        return $this->title;
    }

    /**
     * @return string
     */
    public function getAuthor(): string
    {
        return $this->author;
    }
}

class Library
{
    /**
     * @var array
     */
    private array $books;

    /**
     * @param Livre $book
     *
     * @return void
     */
    public function addBook(Livre $book): void
    {
        $this->books[] = $book;
    }

    /**
     * @return array
     */
    public function getBooks(): array
    {
        return $this->books;
    }
}

$book1 = new Livre("The Catcher in the Rye", "J.D. Salinger");
$book2 = new Livre("To Kill a Mockingbird", "Harper Lee");

$library = new Library();
$library->addBook($book1);
$library->addBook($book2);

$books = $library->getBooks();
foreach ($books as $book) {
    echo $book->getTitle() . " by " . $book->getAuthor() . "<br>";
}

/*------------------------------------*\
    # INJECTION DE DÉPENDANCE
\*------------------------------------*/

// L'injection de dépendances est un concept lié à la gestion des dépendances entre les objets. Il s'agit d'un moyen de fournir à un objet les dépendances dont il a besoin pour fonctionner, au lieu de les créer directement à l'intérieur de cet objet.

// L'injection de dépendances permet de rendre les objets plus modulaires, réutilisables et faciles à tester, car les dépendances sont fournies de l'extérieur plutôt que d'être instanciées directement à l'intérieur de l'objet.

class Database
{
    /**
     * @param mixed $sql
     *
     * @return string
     */
    public function query($sql): string
    {
        return "Executing query: " . $sql . "\n";
        // Code pour exécuter la requête SQL sur la base de données réelle
    }
}

class UserRepository
{
    /**
     * @var Database
     */
    private Database $database;

    /**
     * @param Database $database
     */
    public function __construct(Database $database)
    {
        $this->database = $database;
    }

    /**
     * @param int $id
     *
     * @return void
     */
    public function getUserById(int $id): void
    {
        $sql = "SELECT * FROM users WHERE id = " . $id;
        $this->database->query($sql);
        // Code pour récupérer et retourner l'utilisateur
    }
}

$database = new Database();
$userRepository = new UserRepository($database);
$user = $userRepository->getUserById(1);

/*------------------------------------*\
    # NAMESPACE
\*------------------------------------*/

// Un namespace est un moyen d'encapsuler des éléments.
// Un namespace permet d'éviter les conflits de noms.
// Un namespace permet de définir des alias pour des classes.

/*------------------------------------*\
    # AUTOLOAD
\*------------------------------------*/

// spl_autoload_register() est une fonction prédéfinie de PHP qui permet de charger automatiquement les classes.
// spl_autoload_register() prend en paramètre une fonction anonyme qui prend en paramètre le nom de la classe à charger.
