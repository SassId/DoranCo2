### Exercice Avancé : Application de Gestion de Bibliothèque avec PHP et Base de Données

#### Objectif

L'objectif de cet exercice est de créer une application de gestion de bibliothèque en PHP en utilisant les concepts avancés de la programmation orientée objet, y compris la connexion à une base de données, l'héritage, les classes abstraites, finales et les interfaces.

#### Contexte

Vous devez développer une application de gestion de bibliothèque avec plusieurs entités (livres, auteurs, utilisateurs, emprunts). L'application doit permettre d'ajouter, de modifier, de supprimer et de lister ces entités à partir d'une base de données MySQL.

#### Partie 1 : Conception de la Base de Données

1. Créez une base de données `library` avec les tables suivantes :
    - `authors` : id, first_name, last_name, birth_date, nationality
    - `books` : id, title, author_id, publication_year, genre
    - `users` : id, username, password, email
    - `loans` : id, book_id, user_id, loan_date, return_date

#### Partie 2 : Connexion à la Base de Données

1. Créez une classe `Database` avec une méthode statique pour se connecter à la base de données en utilisant PDO.
2. Ajoutez des méthodes pour exécuter des requêtes SQL.

#### Partie 3 : Entités et Héritage

1. Créez une classe abstraite `Person` avec des propriétés et des méthodes communes pour les auteurs et les utilisateurs.
2. Créez des classes `Author` et `User` qui héritent de `Person`.

#### Partie 4 : Interface et Classe Finale

1. Créez une interface `CRUDInterface` avec les méthodes suivantes :

    - `create()`
    - `read()`
    - `update()`
    - `delete()`

2. Créez une classe finale `Book` qui implémente `CRUDInterface` et contient les propriétés et méthodes pour gérer les livres.

#### Partie 5 : Gestion des Emprunts

1. Créez une classe `Loan` pour gérer les emprunts de livres avec des méthodes pour ajouter, modifier et supprimer des emprunts.
2. Implémentez une méthode pour vérifier si un livre est disponible pour l'emprunt.

#### Partie 6 : Interface Utilisateur

1. Créez des pages PHP pour gérer les différentes entités (auteurs, livres, utilisateurs, emprunts) avec des formulaires pour les opérations CRUD.
2. Utilisez des sessions PHP pour gérer l'authentification des utilisateurs.

### Exigences Détailées

-   Utilisez les concepts de classes abstraites et d'héritage pour éviter la redondance dans le code.
-   Utilisez des interfaces pour définir des contrats que les classes doivent respecter.
-   Utilisez des classes finales pour éviter l'héritage non désiré.
-   Établissez une connexion sécurisée à la base de données en utilisant PDO.
-   Assurez-vous que l'application suit les principes SOLID de la programmation orientée objet.

### Conclusion

Cet exercice complexe vous permettra de mettre en pratique une grande variété de concepts avancés en POO avec PHP, tout en travaillant sur une application réelle qui se connecte à une base de données. Bonne chance !
