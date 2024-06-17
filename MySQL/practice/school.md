Créer la base de données school_db

```sql
create database school_db;
```

Utiliser la base de données

```sql
use school_db;
```


Créer la table "student" avec id, nom prenom, date_naissance, adresse, email

```sql
create table student (
    id int primary key auto_increment,
    nom varchar(255) not null,
    prenom varchar(255) not null, 
    date_naissance date, 
    adresse varchar(255),
    email varchar(255)
);
```


Créer la table "subject" id, nom, description

```sql
create table subject (
    id int primary key auto_increment,
    nom varchar(255),
    description text
);
```


Créer la table "note" avec id note et des clés étrangères pour student_id et subject_id

```sql
create table note (
    id int primary key auto_increment,
    note decimal(3,1),
    student_id int,
    subject_id int,
    foreign key (student_id) references student (id),
    foreign key (subject_id) references subject (id)
);
```

Insérez des données dans les tables :

-- Insertion des étudiants

```sql
insert into student (nom, prenom, date_naissance, adresse, email) values 
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

-- Insertion des matières

```sql
insert into subject (nom, description) values
    ('Mathématiques', 'Calcul et algèbre'),
    ('Sciences', 'Physique et chimie'),
    ('Histoire', 'Événements historiques'),
    ('Français', 'Grammaire et littérature'),
    ('Anglais', 'Conversation et grammaire');
```

-- Insertion des notes pour chaque étudiant (exemples)

```sql
insert into note (student_id, subject_id, note) values
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

<!-- TODO -->
Voici quelques exemples de requêtes SQL avec des conditions, des limites et du tri appliqués à la table "étudiant" :

1. Sélectionner tous les étudiants dont le nom est "Doe" :

```sql
select * from student where nom = 'doe';
```

2. Sélectionner tous les étudiants âgés de moins de 20 ans :

```sql
select * from student where datediff(curdate(), date_naissance) < 20*365.25;
```

- _CURDATE() returns the current date._
- _DATEDIFF(CURDATE(), date_naissance) calculates the difference in days between the current date and the student's date of birth._
- _20 * 365.25 approximates 20 years in days, accounting for leap years._

3. Sélectionner les 5 premiers étudiants dans l'ordre alphabétique des noms :

```sql
select * from student order by nom limit 5;
```

4. Sélectionner les étudiants par ordre décroissant de leur date de naissance :

```sql
select * from student order by date_naissance desc;
```

5. Sélectionner les étudiants dont l'adresse contient le mot "Street" et limiter les résultats à 3 :

```sql
select * from student where adresse like '%street%';
```

6. Sélectionner les étudiants dont le nom commence par "S" et trier les résultats par prénom :

```sql
select * from student where nom like 's%' order by prenom;
```

Ces exemples montrent comment appliquer des conditions, des limites et du tri dans vos requêtes SQL pour la table "student". N'hésitez pas à les ajuster en fonction de vos critères de recherche spécifiques.

---

Voici quelques exemples de requêtes SQL qui utilisent les fonctions MIN, MAX, COUNT, GROUP BY et HAVING :

1. Sélectionner la note minimale, maximale et le nombre total de notes pour chaque matière :

```sql
select min(note), max(note), count(note), subject.nom from note join subject on note.subject_id = subject.id group by subject.nom;
```

2. Sélectionner les étudiants ayant une moyenne supérieure à 15 :

```sql
select student.*, subject.nom, avg(note) from student join note on student.id = note.student_id join subject on subject.id = note.subject_id group by note having avg(note) > 15;
```

3. Sélectionner le nombre d'étudiants ayant obtenu une note supérieure à 16 dans chaque matière :

```sql
select count(student.id), subject.nom from student join note on student.id = note.student_id join subject on subject.id = note.subject_id where note > 16 group by subject.nom;
```

4. Sélectionner les matières ayant au moins cinq étudiants :

```sql
select subject.nom, count(student.id) from subject join note on subject.id = note.subject_id join student on student.id = note.student_id group by subject.nom having count(student.id) >= 5;
```

5. Sélectionner les étudiants ayant obtenu une note maximale dans chaque matière :

```sql
select student.*, max(note), subject.nom from student join note on student.id = note.student_id join subject on subject.id = note.subject_id group by subject.nom;
```

 6. Bonus: Cette requête sélectionne les noms d'étudiants dont la date de naissance est postérieure au 1er janvier 2000, groupe les résultats par matière, filtre les groupes ayant plus de 2 étudiants, trie les résultats par nom et limite les résultats à 10:

```sql

```

Ces exemples illustrent l'utilisation des fonctions MIN, MAX, COUNT, GROUP BY et HAVING pour effectuer des calculs et filtrer les données en fonction de certaines conditions.
N'hésitez pas à les adapter en fonction de votre base de données et de vos besoins spécifiques.

---

---

select * from student join note on student.id = note.student_id;

select * from student join note on student.id = note.student_id join subject on subject.id = note.subject_id;

select student.nom, student.prenom, subject.nom, count(student.id) from student join note on student.id = note.student_id join subject on subject.id = note.subject_id where date_naissance > '2000-01-01' group by subject.nom having count(student.id) order by student.nom limit 10; 
