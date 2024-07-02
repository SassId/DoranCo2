# POO : Héritage

## Exercice : Créer une classe Article

### Objectif

Dans cet exercice, vous allez créer une classe `Article` en PHP, permettant de représenter un article avec un nom et un prix. Vous allez également implémenter des méthodes pour accéder et modifier ces propriétés, ainsi qu'une méthode pour afficher les détails de l'article.

### Instructions

1. **Définir la classe `Article`** :

   - La classe doit avoir deux propriétés privées : `name` et `price`.
   - Utilisez un constructeur pour initialiser ces propriétés lors de la création d'un objet.

2. **Implémenter les getters et setters** :

   - Créez des méthodes publiques `getName` et `getPrice` pour accéder aux propriétés.
   - Créez des méthodes publiques `setName` et `setPrice` pour modifier les propriétés.

3. **Afficher les détails du produit** :
   - Ajoutez une méthode `displayProduct` qui retourne une chaîne de caractères au format suivant :
     ```php
     "Le produit est : XXX et il coûte XXX euros"
     ```
     où `XXX` est le nom et le prix de l'article.

#### Exemple de code

```php
<?php

class Aliment
{
    protected $nom;
    protected $prix;

    public function __construct($nom, $prix)
    {
        $this->nom = $nom;
        $this->prix = $prix;
    }

    public function getNom()
    {
        return $this->nom;
    }

    public function setNom($nom)
    {
        $this->nom = $nom;
    }

    public function getPrix()
    {
        return $this->prix;
    }

    public function setPrix($prix)
    {
        $this->prix = $prix;
    }

    public function displayProduct()
    {
        echo "Le produit est un: {$this->nom} et il coûte : {$this->prix}.\n";
    }

}

?>
```

### Exercices Pratiques

1. **Créer et afficher un article** :

   - Créez un article avec le nom "Table" et le prix 99.99 euros.
   - Utilisez la méthode `displayProduct` pour afficher les détails de l'article.
   - Modifiez le prix de l'article à 89.99 euros et affichez de nouveau les détails.

## Classe Conserve héritant de la classe Article

### Instructions

Créer une classe `Conserve` qui hérite de la classe `Article`.

#### Propriétés

- `TABLEAU listExcipient;`

#### Constructeur

Créer un constructeur pour initialiser les propriétés de la classe.

#### Getter et Setter

Ajouter des méthodes getter et setter pour accéder et modifier les propriétés de la classe.

#### Méthode displayProduct

Créer une méthode `displayProduct` pour afficher les informations du produit sous le format suivant :

- "Le produit est un: [nom du produit] et il coûte : [prix]."
- "La date de péremption est le: [date de péremption]."
- "La liste des excipients est : [liste des excipients]."

Utiliser une méthode PHP pour transformer les éléments d'un tableau en une chaîne de caractères pour la liste des excipients.

#### Exemple de code

```php
<?php

class Conserve extends Aliment
{
    private $listExcipient;

    public function __construct($nom, $prix $listExcipient)
    {
        parent::__construct($nom, $prix);
        $this->listExcipient = $listExcipient;
    }

    public function getListExcipient()
    {
        return $this->listExcipient;
    }

    public function setListExcipient($listExcipient)
    {
        $this->listExcipient = $listExcipient;
    }

    public function displayProduct()
    {
        $excipients = implode(", ", $this->listExcipient);
        echo "Le produit est un: {$this->nom} et il coûte : {$this->prix}.\n";
        echo "La liste des excipients est : {$excipients}.\n";
    }
}

// Exemple d'utilisation
$conserve = new Conserve("cookie", 2.99, ["sucre", "farine", "beurre"]);
$conserve->displayProduct();

?>
```

## Classe Aliment héritant de la classe Article

### Instructions

Créer une classe `Conserve` qui hérite de la classe `Article`.

#### Propriétés

- `DatePeremption`

#### Constructeur

Créer un constructeur pour initialiser les propriétés de la classe.

#### Getter et Setter

Ajouter des méthodes getter et setter pour accéder et modifier les propriétés de la classe.

#### Méthode displayProduct

Créer une méthode `displayProduct` pour afficher les informations du produit sous le format suivant :

- "Le produit est un: [nom du produit] et il coûte : [prix]."
- "La date de péremption est le: [date de péremption]."

Utiliser une méthode PHP pour transformer les éléments d'un tableau en une chaîne de caractères pour la liste des excipients.

#### Exemple de code

```php
<?php

class Aliment extends Aliment
{
    private string $datePeremption;

    public function __construct($nom, $prix $datePeremption)
    {
        parent::__construct($nom, $prix);
        $this->datePeremption = $datePeremption;
    }

    public function getDatePeremption()
    {
        return $this->datePeremption;
    }

    public function setDatePeremption($datePeremption)
    {
        $this->datePeremption = $datePeremption;
        return $this;
    }

    public function displayProduct()
    {
        echo "Le produit est un: {$this->nom} et il coûte : {$this->prix}.\n";
        echo "La date de péremption est le: $this->datePeremption.";
    }
}

// Exemple d'utilisation
$conserve = new Aliment("cookie", 2.99, '12-04-1983');
$conserve->displayProduct();

?>
```

Avec ces exercices, vous vous familiariserez avec la création et la manipulation de classes en PHP, ainsi qu'avec l'utilisation de getters, setters et méthodes pour afficher des informations.
