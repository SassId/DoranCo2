# Exercice avec une Base de Données pour une Plateforme de Musique

Dans cet exercice, nous allons créer une base de données pour gérer des artistes, des albums, des chansons et des utilisateurs dans une plateforme de musique.

## Étapes à Suivre

### 1. Créez la Base de Données `music_db`

### 2. Utilisez la Base de Données `music_db`

### 3. Créez les Tables

#### a. Table "artist"

    id,
    nom,
    pays,
    date_debut

#### b. Table "album"

    id,
    artiste_id,
    titre,
    annee_sortie,
    genre,
    artiste_id CLE ETRANGERE artist

#### c. Table "song"

    id,
    album_id,
    titre,
    duree,  -- durée en secondes
    album_id CLE ETRANGERE album

#### d. Table "user"

    id,
    nom_utilisateur,
    email,
    mot_de_passe

#### e. Table "playlist"

    id INT AUTO_INCREMENT PRIMARY KEY,
    utilisateur_id INT,
    nom VARCHAR(100),
    date_creation DATE,
    utilisateur_id CLE ETRANGERE user

#### f. Table "playlist_song"

    id,
    playlist_id,
    chanson_id,
    playlist_id CLE ETRANGERE playlist,
    chanson_id CLE ETRANGERE song

### 4. Insérez des Données dans les Tables

#### a. Insertion des Artistes

```sql
('The Beatles', 'UK', '1960-01-01'),
('Beyoncé', 'USA', '1997-01-01'),
('Eminem', 'USA', '1996-01-01'),
('Adele', 'UK', '2006-01-01'),
('Drake', 'Canada', '2006-01-01');
```

#### b. Insertion des Albums

```sql
(1, 'Abbey Road', 1969, 'Rock'),
(1, 'Sgt. Pepper\'s Lonely Hearts Club Band', 1967, 'Rock'),
(2, 'Lemonade', 2016, 'Pop'),
(3, 'The Eminem Show', 2002, 'Rap'),
(4, '25', 2015, 'Pop'),
(5, 'Scorpion', 2018, 'Rap');
```

#### c. Insertion des Chansons

```sql
(1, 'Come Together', 259),
(1, 'Something', 182),
(2, 'Sgt. Pepper\'s Lonely Hearts Club Band', 122),
(2, 'Lucy in the Sky with Diamonds', 207),
(3, 'Formation', 210),
(3, 'Sorry', 200),
(4, 'Without Me', 290),
(4, 'Cleanin\' Out My Closet', 297),
(5, 'Hello', 295),
(5, 'Send My Love (To Your New Lover)', 223),
(6, 'God\'s Plan', 198),
(6, 'In My Feelings', 217);
```

#### d. Insertion des Utilisateurs

```sql
('john_doe', 'john.doe@example.com', 'password123'),
('jane_smith', 'jane.smith@example.com', 'password123'),
('michael_johnson', 'michael.johnson@example.com', 'password123');
```

#### e. Insertion des Playlists

```sql
(1, 'Rock Classics', '2022-01-01'),
(2, 'Rap Hits', '2022-02-01'),
(3, 'Pop Favorites', '2022-03-01');
```

#### f. Insertion des Chansons dans les Playlists

```sql
(1, 1), (1, 2), (1, 3), (1, 4),
(2, 7), (2, 8), (2, 11), (2, 12),
(3, 5), (3, 6), (3, 9), (3, 10);
```

### Requêtes Supplémentaires

1. Affichez les albums et leurs artistes respectifs.
2. Affichez les chansons et leurs albums respectifs, triées par titre de chanson.
3. Affichez les playlists et le nombre de chansons dans chaque playlist, triées par nom de playlist.
4. Affichez les utilisateurs et le nombre de playlists qu'ils ont créées.
5. Affichez les chansons d'une playlist spécifique, triées par titre de chanson.
6. Affichez les artistes avec le nombre total de chansons qu'ils ont.
7. Affichez les chansons dont la durée est supérieure à 300 secondes, triées par durée décroissante.
8. Affichez les albums sortis après l'année 2000, triés par année de sortie.
9. Affichez les utilisateurs et les chansons qu'ils ont dans leurs playlists, triées par nom d'utilisateur.
10. Affichez les playlists créées après le 1er janvier 2022, triées par date de création.

Utilisez ces requêtes pour pratiquer les jointures, les agrégations, les tris et les limites dans une base de données relationnelle sur le thème de la musique.
