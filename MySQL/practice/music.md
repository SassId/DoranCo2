# Exercice avec une Base de Données pour une Plateforme de Musique

Dans cet exercice, nous allons créer une base de données pour gérer des artistes, des albums, des chansons et des utilisateurs dans une plateforme de musique.

## Étapes à Suivre

### 1. Créez la Base de Données `music_db`

```sql
create database music_db;
```

### 2. Utilisez la Base de Données `music_db`

```sql
use music_db;
```

### 3. Créez les Tables

#### a. Table "artist"

```sql
    CREATE TABLE artist (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    pays VARCHAR(100),
    date_debut DATE
);
```


#### b. Table "album"

```sql
    CREATE TABLE album (
    id INT AUTO_INCREMENT PRIMARY KEY,
    artiste_id INT,
    titre VARCHAR(255) NOT NULL,
    annee_sortie YEAR,
    genre VARCHAR(100),
    FOREIGN KEY (artiste_id) REFERENCES artist(id)
);
```


#### c. Table "song"

```sql
   CREATE TABLE song (
    id INT AUTO_INCREMENT PRIMARY KEY,
    album_id INT,
    titre VARCHAR(255) NOT NULL,
    duree INT,  -- durée en secondes
    FOREIGN KEY (album_id) REFERENCES album(id)
);
```


#### d. Table "user"

```sql
    CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom_utilisateur VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    mot_de_passe VARCHAR(255) NOT NULL
);
```


#### e. Table "playlist"

```sql
    CREATE TABLE playlist (
    id INT AUTO_INCREMENT PRIMARY KEY,
    utilisateur_id INT,
    nom VARCHAR(100) NOT NULL,
    date_creation DATE,
    FOREIGN KEY (utilisateur_id) REFERENCES user(id)
);
```


#### f. Table "playlist_song"

```sql
    CREATE TABLE playlist_song (
    id INT AUTO_INCREMENT PRIMARY KEY,
    playlist_id INT,
    chanson_id INT,
    FOREIGN KEY (playlist_id) REFERENCES playlist(id),
    FOREIGN KEY (chanson_id) REFERENCES song(id)
);
```


### 4. Insérez des Données dans les Tables

#### a. Insertion des Artistes

```sql
INSERT INTO artist (nom, pays, date_debut)
VALUES 
('The Beatles', 'UK', '1960-01-01'),
('Beyoncé', 'USA', '1997-01-01'),
('Eminem', 'USA', '1996-01-01'),
('Adele', 'UK', '2006-01-01'),
('Drake', 'Canada', '2006-01-01');
```

#### b. Insertion des Albums

```sql
INSERT INTO album (artiste_id, titre, annee_sortie, genre)
VALUES 
(1, 'Abbey Road', 1969, 'Rock'),
(1, 'Sgt. Pepper\'s Lonely Hearts Club Band', 1967, 'Rock'),
(2, 'Lemonade', 2016, 'Pop'),
(3, 'The Eminem Show', 2002, 'Rap'),
(4, '25', 2015, 'Pop'),
(5, 'Scorpion', 2018, 'Rap');
```

#### c. Insertion des Chansons

```sql
INSERT INTO song (album_id, titre, duree)
VALUES 
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
INSERT INTO user (nom_utilisateur, email, mot_de_passe)
VALUES 
('john_doe', 'john.doe@example.com', 'password123'),
('jane_smith', 'jane.smith@example.com', 'password123'),
('michael_johnson', 'michael.johnson@example.com', 'password123');
```

#### e. Insertion des Playlists

```sql
INSERT INTO playlist (utilisateur_id, nom, date_creation)
VALUES 
(1, 'Rock Classics', '2022-01-01'),
(2, 'Rap Hits', '2022-02-01'),
(3, 'Pop Favorites', '2022-03-01');
```

#### f. Insertion des Chansons dans les Playlists

```sql
INSERT INTO playlist_song (playlist_id, chanson_id)
VALUES 
(1, 1), (1, 2), (1, 3), (1, 4),
(2, 7), (2, 8), (2, 11), (2, 12),
(3, 5), (3, 6), (3, 9), (3, 10);
```

### Requêtes Supplémentaires

1. Affichez les albums et leurs artistes respectifs.

```sql
select titre, artist. nom from album join artist on album.artiste_id = artist.id;
```

2. Affichez les chansons et leurs albums respectifs, triées par titre de chanson.

```sql
select song.titre as song , album.titre as album from song join album on song.album_id = album.id order by song.titre;
```

3. Affichez les playlists et le nombre de chansons dans chaque playlist, triées par nom de playlist.

```sql
select playlist.nom, count(chanson_id) from playlist join playlist_song on playlist.id = playlist_song.playlist_id group by playlist.id order by playlist.nom;
```

4. Affichez les utilisateurs et le nombre de playlists qu'ils ont créées.

```sql
select nom_utilisateur, count(playlist.id) from user join playlist on user.id = playlist.utilisateur_id group by user.id;
```

5. Affichez les chansons d'une playlist spécifique, triées par titre de chanson.

```sql
select playlist.nom, song.titre from playlist join playlist_song on playlist.id = playlist_song.playlist_id join song on playlist_song.chanson_id = song.id order by song.titre;
```

6. Affichez les artistes avec le nombre total de chansons qu'ils ont.

```sql
select a.nom, count(s.id) from artist a join album al on a.id = al.artiste_id join song s on s.album_id = al.id group by artiste_id;
```

7. Affichez les chansons dont la durée est supérieure à 300 secondes, triées par durée décroissante.

```sql
select titre, duree from song where duree > 300 order by duree desc;
```

8. Affichez les albums sortis après l'année 2000, triés par année de sortie.

```sql
select titre, annee_sortie from album where annee_sortie > 2000 order by annee_sortie;
```

9. Affichez les utilisateurs et les chansons qu'ils ont dans leurs playlists, triées par nom d'utilisateur.

```sql
select nom_utilisateur, song.titre from user join playlist on user.id = playlist.utilisateur_id join playlist_song on playlist.id = playlist_song.playlist_id join song on playlist_song.chanson_id = song.id order by nom_utilisateur;
```

10. Affichez les playlists créées après le 1er janvier 2022, triées par date de création.

```sql
select nom, date_creation from playlist where date_creation > '2022-01-01' order by date_creation;
```


Utilisez ces requêtes pour pratiquer les jointures, les agrégations, les tris et les limites dans une base de données relationnelle sur le thème de la musique.
