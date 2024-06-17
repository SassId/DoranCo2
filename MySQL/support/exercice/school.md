# Exercice avec une Base de Données pour une École

Dans cet exercice, nous allons créer une base de données pour gérer des étudiants, des matières et des notes dans une école.

## Étapes à Suivre

### 1. Créez la Base de Données `school_db`

```sql
CREATE DATABASE school_db;
```

### 2. Utilisez la Base de Données `school_db`

```sql
USE school_db;
```

### 3. Créez la Table "student"

```sql
CREATE TABLE student (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50),
    prenom VARCHAR(50),
    date_naissance DATE,
    adresse VARCHAR(100),
    email VARCHAR(100)
);
```

### 4. Créez la Table "subject"

```sql
CREATE TABLE subject (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50),
    description VARCHAR(100)
);
```

### 5. Créez la Table "note"

```sql
CREATE TABLE note (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    matiere_id INT,
    note FLOAT,
    FOREIGN KEY (student_id) REFERENCES student(id),
    FOREIGN KEY (matiere_id) REFERENCES subject(id)
);
```

### 6. Insérez des Données dans les Tables

#### a. Insertion des Étudiants

```sql
INSERT INTO student (nom, prenom, date_naissance, adresse, email)
VALUES
('Doe', 'John', '2000-01-01', '123 Main Street', 'john.doe@example.com'),
('Smith', 'Emma', '1999-03-15', '456 Elm Street', 'emma.smith@example.com'),
('Johnson', 'Michael', '2001-05-10', '789 Oak Street', 'michael.johnson@example.com'),
('Brown', 'Olivia', '2002-07-20', '321 Pine Street', 'olivia.brown@example.com'),
('Taylor', 'Sophia', '2003-09-25', '654 Maple Street', 'sophia.taylor@example.com'),
('Anderson', 'Liam', '2000-12-05', '987 Cedar Street', 'liam.anderson@example.com'),
('Clark', 'Ava', '1998-02-14', '741 Birch Street', 'ava.clark@example.com'),
('Lewis', 'Noah', '1999-04-30', '852 Walnut Street', 'noah.lewis@example.com'),
('Walker', 'Mia', '2001-06-08', '369 Oakwood Street', 'mia.walker@example.com'),
('Hall', 'Elijah', '2002-08-16', '258 Cherry Street', 'elijah.hall@example.com');
```

#### b. Insertion des Matières

```sql
INSERT INTO subject (nom, description)
VALUES
('Mathématiques', 'Calcul et algèbre'),
('Sciences', 'Physique et chimie'),
('Histoire', 'Événements historiques'),
('Français', 'Grammaire et littérature'),
('Anglais', 'Conversation et grammaire');
```

#### c. Insertion des Notes

```sql
INSERT INTO note (student_id, matiere_id, note)
VALUES
(1, 1, 15.5),
(1, 2, 12.0),
(2, 3, 14.5),
(2, 4, 16.0),
(3, 5, 13.5),
(3, 1, 17.0),
(4, 2, 13.0),
(4, 3, 11.5),
(5, 4, 18.0),
(5, 5, 16.5);
```

---

## Requêtes SQL

### 1. Sélectionner Tous les Étudiants Dont le Nom est "Doe"

```sql
SELECT *
FROM student
WHERE nom = 'Doe';
```

### 2. Sélectionner Tous les Étudiants Âgés de Moins de 20 Ans

```sql
SELECT *
FROM student
WHERE date_naissance > DATE_SUB(CURDATE(), INTERVAL 20 YEAR);
```

### 3. Sélectionner les 5 Premiers Étudiants dans l'Ordre Alphabétique des Noms

```sql
SELECT *
FROM student
ORDER BY nom
LIMIT 5;
```

### 4. Sélectionner les Étudiants par Ordre Décroissant de Leur Date de Naissance

```sql
SELECT *
FROM student
ORDER BY date_naissance DESC;
```

### 5. Sélectionner les Étudiants Dont l'Adresse Contient le Mot "Street" et Limiter les Résultats à 3

```sql
SELECT *
FROM student
WHERE adresse LIKE '%Street%'
LIMIT 3;
```

### 6. Sélectionner les Étudiants Dont le Nom Commence par "S" et Trier les Résultats par Prénom

```sql
SELECT *
FROM student
WHERE nom LIKE 'S%'
ORDER BY prenom;
```

---

## Requêtes Avancées

### 1. Sélectionner la Note Minimale, Maximale et le Nombre Total de Notes pour Chaque Matière

```sql
SELECT matiere_id, MIN(note) AS note_minimale, MAX(note) AS note_maximale, COUNT(*) AS nombre_notes
FROM note
GROUP BY matiere_id;
```

### 2. Sélectionner les Étudiants Ayant une Moyenne Supérieure à 15

```sql
SELECT student_id, AVG(note) AS moyenne
FROM note
GROUP BY student_id
HAVING AVG(note) > 15;
```

### 3. Sélectionner le Nombre d'Étudiants Ayant Obtenu une Note Supérieure à 16 dans Chaque Matière

```sql
SELECT matiere_id, COUNT(*) AS nombre_etudiants
FROM note
WHERE note > 16
GROUP BY matiere_id;
```

### 4. Sélectionner les Matières Ayant au Moins Cinq Étudiants

```sql
SELECT matiere_id, COUNT(*) AS nombre_etudiants
FROM note
GROUP BY matiere_id
HAVING COUNT(*) >= 5;
```

### 5. Sélectionner les Étudiants Ayant Obtenu une Note Maximale dans Chaque Matière

```sql
SELECT matiere_id, student_id, MAX(note) AS note_maximale
FROM note
GROUP BY matiere_id;
```

---

## Requête Complexe

### Sélectionner le nombre d'Étudiants Dont la Date de Naissance est Postérieure au 1er Janvier 2000, Groupe les Résultats par matière, Filtre les Groupes Ayant Plus de 2 Étudiants, Trie les Résultats par Nom de matiere et Limite les Résultats à 10

```sql
SELECT nom, COUNT(*) AS nombre
FROM student
WHERE date_naissance > '2000-01-01'
GROUP BY nom
HAVING COUNT(*) > 2
ORDER BY nom
LIMIT 10;
```

### Sélectionner le Nom, le Prénom, le Nom de la Matière et la Note Maximale pour Chaque Étudiant Dont la Date de Naissance est Postérieure au 1er Janvier 2000, Groupe les Résultats par Nom d'Étudiant, Filtre les Groupes Ayant une Note Maximale Supérieure à 2

```sql
SELECT student.nom, student.prenom, subject.nom, MAX(note) AS 'note_maximale'
FROM student
JOIN note ON student.id = note.student_id
JOIN subject ON note.matiere_id = subject.id
WHERE student.date_naissance > '2000-01-01'
GROUP BY student.nom
HAVING MAX(note) > 2
ORDER BY student.nom
LIMIT 10;
```

---

Ces exemples montrent comment appliquer des conditions, des limites et du tri dans vos requêtes SQL pour la table `student`, ainsi que l'utilisation de fonctions d'agrégation telles que `MIN`, `MAX`, `COUNT`, `GROUP BY` et `HAVING`. N'hésitez pas à les ajuster en fonction de vos critères de recherche spécifiques et à explorer d'autres fonctionnalités de MySQL pour enrichir vos requêtes.
