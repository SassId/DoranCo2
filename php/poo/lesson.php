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

    public function __construct($titre, $auteur)
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
// Une constante est statique.
