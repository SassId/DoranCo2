# Gestion d'une Plateforme de Streaming d'Animes

Dans cet exercice, nous allons créer une base de données pour une plateforme de streaming d'animes. Nous allons créer plusieurs tables pour gérer les informations des animes, des épisodes, des utilisateurs, des listes de lecture et des commentaires. Suivez les étapes ci-dessous pour créer les tables et insérer les données nécessaires.

## Étapes à Suivre

### 1. Création de la Base de Données

-   Créez une base de données nommée `anime_streaming_db`.

```sql
create database anime_streaming_db;
```

### 2. Utilisation de la Base de Données

-   Utilisez la base de données `anime_streaming_db`.

```sql
use anime_streaming_db;
```

### 3. Création de la Table "Anime"

-   Créez une table "Animes" avec les colonnes suivantes :
    -   id_anime (Clé primaire)
    -   titre
    -   studio_production
    -   année_sortie
    -   genre
    -   description
    -   note

```sql
create table Anime (
    id_anime int primary key auto_increment,
    titre_anime varchar(255),
    studio_production varchar(255),
    annee_sortie year,
    genre varchar(50),
    description text, 
    note decimal(3,2)
);
```

### 4. Création de la Table "Épisode"

-   Créez une table "Épisodes" avec les colonnes suivantes :
    -   id_episode (Clé primaire)
    -   id_anime (Clé étrangère référençant la table "Animes")
    -   numéro_episode
    -   titre_episode
    -   durée
    -   date_sortie
```sql
CREATE TABLE Episode (
    id_episode INT AUTO_INCREMENT PRIMARY KEY,
    id_anime INT,
    numero_episode INT,
    titre_episode VARCHAR(255),
    durée TIME,
    date_sortie DATE,
    FOREIGN KEY (id_anime) REFERENCES Anime(id_anime)
);
```


### 5. Création de la Table "Utilisateur"

-   Créez une table "Utilisateurs" avec les colonnes suivantes :
    -   id_utilisateur (Clé primaire)
    -   nom_utilisateur
    -   email
    -   mot_de_passe

```sql
CREATE TABLE Utilisateur (
    id_utilisateur INT AUTO_INCREMENT PRIMARY KEY,
    nom_utilisateur VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    mot_de_passe VARCHAR(255) NOT NULL
);
```

### 6. Création de la Table "Liste_de_lecture"

-   Créez une table "Liste_de_lecture" avec les colonnes suivantes :
    -   id_liste (Clé primaire)
    -   id_utilisateur (Clé étrangère référençant la table "Utilisateurs")
    -   id_anime (Clé étrangère référençant la table "Animes")
    -   progression

```sql
CREATE TABLE Liste_de_lecture (
    id_liste INT AUTO_INCREMENT PRIMARY KEY,
    id_utilisateur INT,
    id_anime INT,
    progression VARCHAR(255),
    FOREIGN KEY (id_utilisateur) REFERENCES Utilisateur(id_utilisateur),
    FOREIGN KEY (id_anime) REFERENCES Anime(id_anime)
);
```

### 7. Création de la Table "Commentaire"

-   Créez une table "Commentaires" avec les colonnes suivantes :
    -   id_commentaire (Clé primaire)
    -   id_utilisateur (Clé étrangère référençant la table "Utilisateurs")
    -   id_anime (Clé étrangère référençant la table "Animes")
    -   contenu
    -   date_commentaire

```sql
CREATE TABLE Commentaire (
    id_commentaire INT AUTO_INCREMENT PRIMARY KEY,
    id_utilisateur INT,
    id_anime INT,
    contenu TEXT NOT NULL,
    date_commentaire DATETIME NOT NULL,
    FOREIGN KEY (id_utilisateur) REFERENCES Utilisateur(id_utilisateur),
    FOREIGN KEY (id_anime) REFERENCES Anime(id_anime)
);
```

### 8. Insertion de Données

-   Insérez des données dans la table "Anime".

    ```sql
    insert into anime (titre_anime, studio_production, annee_sortie, genre, description, note)
    ('Naruto', 'Studio Pierrot', 2002, 'Action', 'Un ninja adolescent cherche à devenir Hokage.', 8.5),
    ('One Piece', 'Toei Animation', 1999, 'Aventure', 'Un garçon au chapeau de paille veut devenir le roi des pirates.', 9.0),
    ('Attack on Titan', 'Wit Studio', 2013, 'Action', 'Des humains combattent des géants mangeurs d\'hommes.', 8.8);
    ```

-   Insérez des données dans la table "Épisodes".

    ```sql
    insert into episode (id_anime, numero_episode, titre_episode, durée, date_sortie) values
    (1, 1, 'Enter: Naruto Uzumaki!', 23, '2002-10-03'),
    (1, 2, 'My Name is Konohamaru!', 23, '2002-10-10'),
    (2, 1, 'I\'m Luffy! The Man Who\'s Gonna Be King of the Pirates!', 25, '1999-10-20'),
    (2, 2, 'Enter the Great Swordsman! Pirate Hunter Roronoa Zoro!', 25, '1999-11-17'),
    (3, 1, 'To You, in 2000 Years: The Fall of Shiganshina, Part 1', 24, '2013-04-07'),
    (3, 2, 'That Day: The Fall of Shiganshina, Part 2', 24, '2013-04-14');
    ```

-   Insérez des données dans la table "Utilisateurs".

    ```sql
    insert into utilisateur (nom_utilisateur, email, mot_de_passe) values
    ('johndoe', 'johndoe@example.com', 'password123'),
    ('janedoe', 'janedoe@example.com', 'password123'),
    ('animefan', 'animefan@example.com', 'password123');
    ```

-   Insérez des données dans la table "Liste_de_lecture".

    ```sql
    insert into liste_de_lecture (id_utilisateur, id_anime, progression) values
    (1, 1, 5),
    (1, 2, 10),
    (2, 3, 12),
    (3, 1, 3);
    ```

-   Insérez des données dans la table "Commentaires".

    ```sql
    insert into commentaire (id_utilisateur, id_anime, contenu, date_commentaire) values
    (1, 1, 'Amazing first episode!', '2023-01-15'),
    (2, 2, 'Can\'t wait for the next episode!', '2023-01-20'),
    (3, 3, 'This anime is so intense!', '2023-01-25');
    ```

### 9. Requêtes SQL

-   Affichez tous les enregistrements de la table "Animes".

 ```sql
    select * from anime;
 ```

-   Affichez les titres des animes qui appartiennent au genre "Action".

```sql
    select * from anime where genre = 'action';
```

-   Affichez le nombre total d'épisodes pour chaque anime.

```sql
    select count(*) from episode group by id_anime;
    or
    select titre_anime, count(titre_anime) from anime join episode on episode.id_anime = anime.id_anime group by titre_anime;
```

-   Affichez les noms des utilisateurs et les animes dans leurs listes de lecture.

```sql
select nom_utilisateur, titre_anime from utilisateur join liste_de_lecture on utilisateur.id_utilisateur = liste_de_lecture.id_utilisateur join anime on anime.id_anime = liste_de_lecture.id_anime group by id_liste;
```

-   Affichez les commentaires pour chaque anime avec le nom de l'utilisateur et la date du commentaire.

```sql
select contenu, nom_utilisateur, date_commentaire from commentaire join utilisateur on commentaire.id_utilisateur = utilisateur.id_utilisateur;
```

-   Affichez les animes avec une note moyenne supérieure à 8, triés par note décroissante et limitez les résultats à 5.

```sql
select titre_anime, note from anime where note > 8 order by note desc limit 5;
```

-   Affichez les utilisateurs et le nombre d'animes dans leurs listes de lecture, triés par nombre d'animes décroissant.

```sql

```

-   Affichez les 3 épisodes les plus longs avec le nom de l'anime et la durée de l'épisode.
-   Affichez les utilisateurs ayant laissé au moins 5 commentaires, triés par nombre de commentaires décroissant.
-   Affichez les animes et leur nombre total d'épisodes diffusés après 2020, triés par nombre d'épisodes décroissant.

## Exercice

Créez la base de données et les tables selon les instructions ci-dessus. Insérez des données fictives et effectuez les requêtes SQL demandées. Vous pouvez personnaliser les données et les requêtes en fonction de vos préférences.
