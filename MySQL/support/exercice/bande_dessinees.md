# Exercice avec une Base de Données pour des Bandes Dessinées Belges

Dans cet exercice, nous allons créer une base de données pour gérer des bandes dessinées belges, en incluant plusieurs tables telles que "bd", "auteur" et "editeur".

## Étapes à Suivre

### 1. Créez une Base de Données

```sql
CREATE DATABASE bd_collection_db;
```

### 2. Sélectionnez la Base de Données Nouvellement Créée

```sql
USE bd_collection_db;
```

### 3. Créez la Table "auteur"

```sql
CREATE TABLE auteur (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100),
    nationalite VARCHAR(50)
);
```

### 4. Insérez des Données dans la Table "auteur"

```sql
INSERT INTO auteur (nom, nationalite) VALUES
('Hergé', 'Belge'),
('René Goscinny', 'Français'),
('Albert Uderzo', 'Français');
```

### 5. Créez la Table "editeur"

```sql
CREATE TABLE editeur (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100),
    pays VARCHAR(50)
);
```

### 6. Insérez des Données dans la Table "editeur"

```sql
INSERT INTO editeur (nom, pays) VALUES
('Casterman', 'Belgique'),
('Dargaud', 'France'),
('Dupuis', 'Belgique');
```

### 7. Créez la Table "bd"

```sql
CREATE TABLE bd (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titre VARCHAR(100),
    auteur_id INT,
    editeur_id INT,
    annee_parution INT,
    FOREIGN KEY (auteur_id) REFERENCES auteur(id),
    FOREIGN KEY (editeur_id) REFERENCES editeur(id)
);
```

### 8. Insérez des Données dans la Table "bd"

```sql
INSERT INTO bd (titre, auteur_id, editeur_id, annee_parution) VALUES
('Tintin au Tibet', 1, 1, 1960),
('Astérix le Gaulois', 2, 2, 1961),
('Les Aventures de Blake et Mortimer', 1, 3, 1946);
```

### 9. Effectuez des Requêtes pour Afficher les Informations sur les Bandes Dessinées

#### a. Afficher Toutes les Bandes Dessinées avec les Informations Complètes

```sql
SELECT bd.titre, auteur.nom AS auteur, editeur.nom AS editeur, bd.annee_parution
FROM bd
JOIN auteur ON bd.auteur_id = auteur.id
JOIN editeur ON bd.editeur_id = editeur.id;
```

#### b. Afficher les Bandes Dessinées Publiées par un Éditeur Spécifique (par exemple, "Casterman")

```sql
SELECT bd.titre, auteur.nom AS auteur, editeur.nom AS editeur, bd.annee_parution
FROM bd
JOIN auteur ON bd.auteur_id = auteur.id
JOIN editeur ON bd.editeur_id = editeur.id
WHERE editeur.nom = 'Casterman';
```

#### c. Afficher les Bandes Dessinées Publiées Après une Certaine Année (par exemple, après 1960)

```sql
SELECT bd.titre, auteur.nom AS auteur, editeur.nom AS editeur, bd.annee_parution
FROM bd
JOIN auteur ON bd.auteur_id = auteur.id
JOIN editeur ON bd.editeur_id = editeur.id
WHERE bd.annee_parution > 1960;
```

---

Cet exercice vous permet de créer une base de données pour des bandes dessinées belges, de gérer les relations entre les tables "bd", "auteur" et "editeur", et d'effectuer des requêtes pour obtenir des informations spécifiques. Vous pouvez ajouter davantage de données, de tables et d'autres fonctionnalités de MySQL pour enrichir votre base de données selon vos besoins.
