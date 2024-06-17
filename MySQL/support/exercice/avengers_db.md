# Exercice avec une Base de Données pour des Figurines Avengers

Dans cet exercice, nous allons créer une base de données pour gérer des figurines Avengers, en incluant plusieurs tables telles que "figurine" et "weapon".

## Étapes à Suivre

### 1. Créez une Base de Données avec le Nom `avengers_db`

```sql
CREATE DATABASE avengers_db;
```

### 2. Sélectionnez la Base de Données Nouvellement Créée

```sql
USE avengers_db;
```

### 3. Créez la Table "figurine"

```sql
CREATE TABLE figurine (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100),
    super_pouvoir VARCHAR(100),
    annee_sortie INT,
    description TEXT
);
```

### 4. Insérez des Données dans la Table "figurine"

```sql
INSERT INTO figurine (nom, super_pouvoir, annee_sortie, description) VALUES
('Iron Man', 'Armure surpuissante', 2008, 'Milliardaire et génie inventeur.'),
('Captain America', 'Force et endurance surhumaines', 2011, 'Héros emblématique de la Seconde Guerre mondiale.'),
('Thor', 'Contrôle de la foudre et marteau magique', 2011, 'Dieu nordique du tonnerre et prince d\'Asgard.'),
('Hulk', 'Force et résistance surhumaines', 2008, 'Scientifique transformé en monstre vert lorsqu\'il est en colère.'),
('Black Widow', 'Expert en arts martiaux et espionnage', 2010, 'Agent secret russe doté de grandes compétences.'),
('Black Panther', 'Force, vitesse et agilité surhumaines', 2018, 'Roi du Wakanda et protecteur de son peuple.');
```

### 5. Effectuez des Requêtes pour Afficher les Figurines Avengers

#### a. Afficher Toutes les Figurines

```sql
SELECT * FROM figurine;
```

#### b. Afficher les Figurines Sorties Après 2010

```sql
SELECT * FROM figurine WHERE annee_sortie > 2010;
```

#### c. Afficher les Figurines avec le Pouvoir "Force" dans leur Super Pouvoir

```sql
SELECT * FROM figurine WHERE super_pouvoir LIKE '%Force%';
```

### 6. Modifiez une Figurine dans la Table "figurine"

```sql
UPDATE figurine SET description = 'Prince de Wakanda et protecteur de son peuple.' WHERE nom = 'Black Panther';
```

### 7. Supprimez la Figurine "Black Widow" de la Table "figurine"

```sql
DELETE FROM figurine WHERE nom = 'Black Widow';
```

### 8. Créez la Table "weapon"

```sql
CREATE TABLE weapon (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100),
    description TEXT
);
```

### 9. Insérez des Données dans la Table "weapon"

```sql
INSERT INTO weapon (nom, description) VALUES
('Marteau', 'Marteau magique de Thor.'),
('Bouclier', 'Bouclier indestructible.'),
('Arc et flèches', 'Arc et flèches de Hawkeye.'),
('Armure', 'Armure spéciale conçue pour combattre Hulk.'),
('Vibranium Claws', 'Griffes en vibranium indestructible.');
```

### 10. Modifiez la Table "figurine" pour Ajouter une Colonne "weapon_id"

```sql
ALTER TABLE figurine ADD weapon_id INT;
```

### 11. Modifiez la Table "figurine" pour Ajouter une Contrainte de Clé Étrangère avec la Table "weapon"

```sql
ALTER TABLE figurine ADD CONSTRAINT fk_weapon FOREIGN KEY (weapon_id) REFERENCES weapon(id);
```

### 12. Mettez la Table "weapon" en Relation avec la Table "figurine"

```sql
UPDATE figurine SET weapon_id = 1 WHERE nom = 'Thor';
UPDATE figurine SET weapon_id = 2 WHERE nom = 'Captain America';
UPDATE figurine SET weapon_id = 5 WHERE nom = 'Black Panther';
```

### 13. Afficher les Figurines avec Leur Arme

```sql
SELECT figurine.nom, weapon.nom FROM figurine JOIN weapon ON figurine.weapon_id = weapon.id;
```

### 14. Afficher le Nom des Figurines, Leurs Armes et Leurs Années de Sortie pour les Figurines Sorties Après 2010

```sql
SELECT figurine.nom, weapon.nom, figurine.annee_sortie FROM figurine JOIN weapon ON figurine.weapon_id = weapon.id WHERE figurine.annee_sortie > 2010;
```

### 15. Afficher les Figurines Sans Arme

```sql
SELECT figurine.nom FROM figurine WHERE weapon_id IS NULL;
```

---

Cet exercice vous permet de créer une base de données ludique pour des figurines Avengers, d'insérer des données et d'effectuer des requêtes pour obtenir des informations spécifiques. N'hésitez pas à ajouter davantage de figurines et à explorer d'autres fonctionnalités de MySQL pour enrichir votre base de données et vos requêtes.
