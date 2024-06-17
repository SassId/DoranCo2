# Exercice avec une Base de Données pour des Séries Télévisées

Dans cet exercice, nous allons créer une base de données pour gérer des séries télévisées, leurs saisons et épisodes. Suivez les étapes ci-dessous pour créer les tables et insérer les données nécessaires.

## Étapes à Suivre

### 1. Création de la Base de Données `series_db`

```sql
CREATE DATABASE series_db;
```

### 2. Utilisation de la Base de Données `series_db`

```sql
USE series_db;
```

### 3. Création de la Table "serie"

```sql
CREATE TABLE serie (
    id INT PRIMARY KEY,
    nom VARCHAR(100),
    genre VARCHAR(50),
    annee_lancement INT
);
```

### 4. Création de la Table "saison"

```sql
CREATE TABLE saison (
    id INT PRIMARY KEY,
    serie_id INT,
    numero_saison INT,
    annee_diffusion INT,
    FOREIGN KEY (serie_id) REFERENCES serie(id)
);
```

### 5. Création de la Table "episode"

```sql
CREATE TABLE episode (
    id INT PRIMARY KEY,
    saison_id INT,
    numero_episode INT,
    titre VARCHAR(100),
    duree INT,
    FOREIGN KEY (saison_id) REFERENCES saison(id)
);
```

### 6. Insertion de Données dans la Table "serie"

```sql
INSERT INTO serie (id, nom, genre, annee_lancement)
VALUES
(1, 'Game of Thrones', 'Fantasy', 2011),
(2, 'Breaking Bad', 'Drama', 2008),
(3, 'Friends', 'Comedy', 1994);
```

### 7. Insertion de Données dans la Table "saison"

```sql
INSERT INTO saison (id, serie_id, numero_saison, annee_diffusion)
VALUES
(1, 1, 1, 2011),
(2, 1, 2, 2012),
(3, 2, 1, 2008),
(4, 2, 2, 2009),
(5, 3, 1, 1994),
(6, 3, 2, 1995);
```

### 8. Insertion de Données dans la Table "episode"

```sql
INSERT INTO episode (id, saison_id, numero_episode, titre, duree)
VALUES
(1, 1, 1, 'Winter Is Coming', 60),
(2, 1, 2, 'The Kingsroad', 55),
(3, 2, 1, 'The North Remembers', 58),
(4, 2, 2, 'The Night Lands', 53),
(5, 3, 1, 'The One Where Monica Gets a Roommate', 22),
(6, 3, 2, 'The One with the Sonogram at the End', 23);
```

---

## Requêtes SQL

### 9. Affichez Tous les Enregistrements de la Table "serie"

```sql
SELECT * FROM serie;
```

### 10. Affichez les Noms des Séries qui Appartiennent au Genre "Drama"

```sql
SELECT nom FROM serie WHERE genre = 'Drama';
```

### 11. Affichez le Nombre Total de Saisons pour Chaque Série

```sql
SELECT s.nom, COUNT(*) AS nombre_saisons
FROM serie s
INNER JOIN saison sa ON s.id = sa.serie_id
GROUP BY s.nom;
```

---

## Exercices Pratiques

### Exercice 1 : Requête Avancée

**Objectif :** Sélectionner le nom des séries, le numéro de saison et le nombre total d'épisodes pour chaque saison.

```sql
SELECT se.nom, sa.numero_saison, COUNT(ep.id) AS nombre_episodes
FROM serie se
JOIN saison sa ON se.id = sa.serie_id
JOIN episode ep ON sa.id = ep.saison_id
GROUP BY se.nom, sa.numero_saison;
```

### Exercice 2 : Filtrer et Trier les Résultats

**Objectif :** Afficher les titres des épisodes de la série 'Friends' triés par numéro d'épisode.

```sql
SELECT ep.titre
FROM episode ep
JOIN saison sa ON ep.saison_id = sa.id
JOIN serie se ON sa.serie_id = se.id
WHERE se.nom = 'Friends'
ORDER BY ep.numero_episode;
```

---

Ces exercices montrent comment créer des tables interconnectées pour gérer des séries télévisées, insérer des données et exécuter des requêtes SQL pour obtenir des informations spécifiques. Vous pouvez adapter les données et les requêtes en fonction de vos propres séries et informations spécifiques.