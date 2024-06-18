# Gestion d'une Plateforme de Streaming d'Animes

Dans cet exercice, nous allons créer une base de données pour une plateforme de streaming d'animes. Nous allons créer plusieurs tables pour gérer les informations des animes, des épisodes, des utilisateurs, des listes de lecture et des commentaires. Suivez les étapes ci-dessous pour créer les tables et insérer les données nécessaires.

## Étapes à Suivre

### 1. Création de la Base de Données

-   Créez une base de données nommée `anime_streaming_db`.

### 2. Utilisation de la Base de Données

-   Utilisez la base de données `anime_streaming_db`.

### 3. Création de la Table "Animes"

-   Créez une table "Animes" avec les colonnes suivantes :
    -   id_anime (Clé primaire)
    -   titre
    -   studio_production
    -   année_sortie
    -   genre
    -   description
    -   note

### 4. Création de la Table "Épisodes"

-   Créez une table "Épisodes" avec les colonnes suivantes :
    -   id_episode (Clé primaire)
    -   id_anime (Clé étrangère référençant la table "Animes")
    -   numéro_episode
    -   titre_episode
    -   durée
    -   date_sortie

### 5. Création de la Table "Utilisateurs"

-   Créez une table "Utilisateurs" avec les colonnes suivantes :
    -   id_utilisateur (Clé primaire)
    -   nom_utilisateur
    -   email
    -   mot_de_passe

### 6. Création de la Table "Liste_de_lecture"

-   Créez une table "Liste_de_lecture" avec les colonnes suivantes :
    -   id_liste (Clé primaire)
    -   id_utilisateur (Clé étrangère référençant la table "Utilisateurs")
    -   id_anime (Clé étrangère référençant la table "Animes")
    -   progression

### 7. Création de la Table "Commentaires"

-   Créez une table "Commentaires" avec les colonnes suivantes :
    -   id_commentaire (Clé primaire)
    -   id_utilisateur (Clé étrangère référençant la table "Utilisateurs")
    -   id_anime (Clé étrangère référençant la table "Animes")
    -   contenu
    -   date_commentaire

### 8. Insertion de Données

-   Insérez des données dans la table "Animes".

    ```sql
    ('Naruto', 'Studio Pierrot', 2002, 'Action', 'Un ninja adolescent cherche à devenir Hokage.', 8.5),
    ('One Piece', 'Toei Animation', 1999, 'Aventure', 'Un garçon au chapeau de paille veut devenir le roi des pirates.', 9.0),
    ('Attack on Titan', 'Wit Studio', 2013, 'Action', 'Des humains combattent des géants mangeurs d\'hommes.', 8.8);
    ```

-   Insérez des données dans la table "Épisodes".

    ```sql
    (1, 1, 'Enter: Naruto Uzumaki!', 23, '2002-10-03'),
    (1, 2, 'My Name is Konohamaru!', 23, '2002-10-10'),
    (2, 1, 'I\'m Luffy! The Man Who\'s Gonna Be King of the Pirates!', 25, '1999-10-20'),
    (2, 2, 'Enter the Great Swordsman! Pirate Hunter Roronoa Zoro!', 25, '1999-11-17'),
    (3, 1, 'To You, in 2000 Years: The Fall of Shiganshina, Part 1', 24, '2013-04-07'),
    (3, 2, 'That Day: The Fall of Shiganshina, Part 2', 24, '2013-04-14');
    ```

-   Insérez des données dans la table "Utilisateurs".

    ```sql
    ('johndoe', 'johndoe@example.com', 'password123'),
    ('janedoe', 'janedoe@example.com', 'password123'),
    ('animefan', 'animefan@example.com', 'password123');
    ```

-   Insérez des données dans la table "Liste_de_lecture".

    ```sql
    (1, 1, 5),
    (1, 2, 10),
    (2, 3, 12),
    (3, 1, 3);
    ```

-   Insérez des données dans la table "Commentaires".

    ```sql
    (1, 1, 'Amazing first episode!', '2023-01-15'),
    (2, 2, 'Can\'t wait for the next episode!', '2023-01-20'),
    (3, 3, 'This anime is so intense!', '2023-01-25');
    ```

### 9. Requêtes SQL

-   Affichez tous les enregistrements de la table "Animes".
-   Affichez les titres des animes qui appartiennent au genre "Action".
-   Affichez le nombre total d'épisodes pour chaque anime.
-   Affichez les noms des utilisateurs et les animes dans leurs listes de lecture.
-   Affichez les commentaires pour chaque anime avec le nom de l'utilisateur et la date du commentaire.
-   Affichez les animes avec une note moyenne supérieure à 8, triés par note décroissante et limitez les résultats à 5.
-   Affichez les utilisateurs et le nombre d'animes dans leurs listes de lecture, triés par nombre d'animes décroissant.
-   Affichez les 3 épisodes les plus longs avec le nom de l'anime et la durée de l'épisode.
-   Affichez les utilisateurs ayant laissé au moins 5 commentaires, triés par nombre de commentaires décroissant.
-   Affichez les animes et leur nombre total d'épisodes diffusés après 2020, triés par nombre d'épisodes décroissant.

## Exercice

Créez la base de données et les tables selon les instructions ci-dessus. Insérez des données fictives et effectuez les requêtes SQL demandées. Vous pouvez personnaliser les données et les requêtes en fonction de vos préférences.

# Gestion d'une Plateforme de Streaming d'Animes

Dans cet exercice, nous allons créer une base de données pour une plateforme de streaming d'animes. Nous allons créer plusieurs tables pour gérer les informations des animes, des épisodes, des utilisateurs, des listes de lecture et des commentaires. Suivez les étapes ci-dessous pour créer les tables et insérer les données nécessaires.

## Étapes à Suivre

### 1. Création de la Base de Données

-   Créez une base de données nommée `anime_streaming_db`.

```sql
CREATE DATABASE anime_streaming_db;
```

### 2. Utilisation de la Base de Données

-   Utilisez la base de données `anime_streaming_db`.

```sql
USE anime_streaming_db;
```

### 3. Création de la Table "Animes"

```sql
CREATE TABLE anime (
    id_anime INT PRIMARY KEY AUTO_INCREMENT,
    titre VARCHAR(255),
    studio_production VARCHAR(255),
    annee_sortie INT(4),
    genre VARCHAR(255),
    description TEXT,
    note DECIMAL(3, 1)
);
```

### 4. Création de la Table "Épisodes"

```sql
CREATE TABLE episode (
    id_episode INT PRIMARY KEY AUTO_INCREMENT,
    id_anime INT,
    numero_episode INT,
    titre_episode VARCHAR(255),
    duree INT(4),
    date_sortie DATE,
    FOREIGN KEY (id_anime) REFERENCES anime (id_anime)
);
```

### 5. Création de la Table "Utilisateurs"

```sql
CREATE TABLE utilisateur (
    id_utilisateur INT PRIMARY KEY AUTO_INCREMENT,
    nom_utilisateur VARCHAR(255),
    email VARCHAR(255),
    mot_de_passe VARCHAR(255)
);
```

### 6. Création de la Table "Liste_de_lecture"

```sql
CREATE TABLE liste_de_lecture (
    id_liste INT PRIMARY KEY AUTO_INCREMENT,
    id_utilisateur INT,
    id_anime INT,
    progression INT,
    FOREIGN KEY (id_utilisateur) REFERENCES utilisateur(id_utilisateur),
    FOREIGN KEY (id_anime) REFERENCES anime(id_anime)
);
```

### 7. Création de la Table "Commentaires"

```sql
CREATE TABLE commentaire (
    id_commentaire INT PRIMARY KEY AUTO_INCREMENT,
    id_utilisateur INT,
    id_anime INT,
    contenu TEXT,
    date_commentaire DATE,
    FOREIGN KEY (id_utilisateur) REFERENCES utilisateur(id_utilisateur),
    FOREIGN KEY (id_anime) REFERENCES anime (id_anime)
);
```

### 8. Insertion de Données

-   Insérez des données dans la table "Anime".

```sql
INSERT INTO anime (titre, studio_production, annee_sortie, genre, description, note) VALUES
('Naruto', 'Studio Pierrot', 2002, 'Action', 'Un ninja adolescent cherche à devenir Hokage.', 8.5),
('One Piece', 'Toei Animation', 1999, 'Aventure', 'Un garçon au chapeau de paille veut devenir le roi des pirates.', 9.0),
('Attack on Titan', 'Wit Studio', 2013, 'Action', 'Des humains combattent des géants mangeurs d\'hommes.', 8.8);
```

-   Insérez des données dans la table "Episode".

```sql
INSERT INTO episode (id_anime, numero_episode, titre_episode, duree, date_sortie) VALUES
(1, 1, 'Enter: Naruto Uzumaki!', 23, '2002-10-03'),
(1, 2, 'My Name is Konohamaru!', 23, '2002-10-10'),
(2, 1, 'I\'m Luffy! The Man Who\'s Gonna Be King of the Pirates!', 25, '1999-10-20'),
(2, 2, 'Enter the Great Swordsman! Pirate Hunter Roronoa Zoro!', 25, '1999-11-17'),
(3, 1, 'To You, in 2000 Years: The Fall of Shiganshina, Part 1', 24, '2013-04-07'),
(3, 2, 'That Day: The Fall of Shiganshina, Part 2', 24, '2013-04-14');
```

-   Insérez des données dans la table "Utilisateur".

    ```sql
    INSERT INTO utilisateur (nom_utilisateur, email, mot_de_passe) VALUES
    ('johndoe', 'johndoe@example.com', 'password123'),
    ('janedoe', 'janedoe@example.com', 'password123'),
    ('animefan', 'animefan@example.com', 'password123');
    ```

-   Insérez des données dans la table "Liste_de_lecture".

    ```sql
    INSERT INTO liste_de_lecture (id_utilisateur, id_anime, progression) VALUES
    (1, 1, 5),
    (1, 2, 10),
    (2, 3, 12),
    (3, 1, 3);
    ```

-   Insérez des données dans la table "Commentaire".

    ```sql
    INSERT INTO commentaire (id_utilisateur, id_anime, contenu, date_commentaire) VALUES
    (1, 1, 'Amazing first episode!', '2023-01-15'),
    (2, 2, 'Can\'t wait for the next episode!', '2023-01-20'),
    (3, 3, 'This anime is so intense!', '2023-01-25');
    ```

### 9. Requêtes SQL

-   Affichez tous les enregistrements de la table "Animes".

```sql
SELECT * FROM anime;
```

-   Affichez les titres des animes qui appartiennent au genre "Action".

```sql
SELECT titre FROM anime WHERE genre = 'Action';
```

-   Affichez le nombre total d'épisodes pour chaque anime.

```sql
SELECT a.titre, COUNT(e.id_episode) AS nombre_episodes
FROM anime a
INNER JOIN episode e ON a.id_anime = e.id_anime
GROUP BY a.titre;
```

-   Affichez les noms des utilisateurs et les animes dans leurs listes de lecture.

```sql
SELECT u.nom_utilisateur, a.titre
FROM utilisateur u
LEFT JOIN liste_de_lecture l ON u.id_utilisateur = l.id_utilisateur
LEFT JOIN anime a ON l.id_anime = a.id_anime;
```

-   Affichez les commentaires pour chaque anime avec le nom de l'utilisateur et la date du commentaire.

```sql
SELECT a.titre, u.nom_utilisateur, c.contenu, c.date_commentaire
FROM commentaire c
JOIN utilisateur u ON c.id_utilisateur = u.id_utilisateur
JOIN anime a ON c.id_anime = a.id_anime;
```

### Requêtes Supplémentaires

-   Affichez les animes avec une note moyenne supérieure à 8, triés par note décroissante et limitez les résultats à 5.

```sql
SELECT titre, AVG(note) AS note_moyenne
FROM anime
GROUP BY titre
HAVING AVG(note) > 8
ORDER BY note_moyenne DESC
LIMIT 5;
```

-   Affichez les utilisateurs et le nombre d'animes dans leurs listes de lecture, triés par nombre d'animes décroissant.

```sql
SELECT u.nom_utilisateur, COUNT(l.id_anime) AS nombre_animes
FROM utilisateur u
INNER JOIN liste_de_lecture l ON u.id_utilisateur = l.id_utilisateur
GROUP BY u.nom_utilisateur
ORDER BY nombre_animes DESC;
```

-   Affichez les 3 épisodes les plus longs avec le nom de l'anime et la durée de l'épisode.

```sql
SELECT a.titre, e.titre_episode, e.duree
FROM episode e
INNER JOIN anime a ON e.id_anime = a.id_anime
ORDER BY e.duree DESC, date_sortie DESC
LIMIT 3;
```

-   Affichez les utilisateurs ayant laissé au moins 5 commentaires, triés par nombre de commentaires décroissant.

```sql
SELECT u.nom_utilisateur, COUNT(c.id_commentaire) AS nombre_commentaires
FROM utilisateurs u
INNER JOIN commentaires c ON u.id_utilisateur = c.id_utilisateur
GROUP BY u.nom_utilisateur
HAVING COUNT(c.id_commentaire) >= 5
ORDER BY nombre_commentaires DESC;
```

-   Affichez les animes et leur nombre total d'épisodes diffusés après 2020, triés par nombre d'épisodes décroissant.

```sql
SELECT a.titre, COUNT(e.id_episode) AS nombre_episodes
FROM anime a
INNER JOIN episode e ON a.id_anime = e.id_anime
WHERE e.date_sortie > '2000-01-01'
GROUP BY a.titre
ORDER BY nombre_episodes DESC;
```

Ces requêtes vous permettent de pratiquer les jointures, les agrégations, les tris et les limites. Adaptez-les à vos besoins spécifiques et explorez d'autres aspects de la base de données pour une compréhension approfondie.
