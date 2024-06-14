Voici un exemple d'exercice avec une base de données pour des bandes dessinées belges, en incluant plusieurs tables telles que "BD", "auteur" et "editeur" :

1. Créez une base de données bd_collection_db:

```sql
create database bd_collection_db;
```

2. Sélectionnez la base de données nouvellement créée :

```sql
use bd_collection_db;
```

3. Créez la table "auteur" avec des colonnes telles que "id" (clé primaire), "name" et "nationality" :

```sql
create table auteur (
    auteur_id int primary key auto_increment,
    name varchar(255) not null, 
    nationality varchar(255)
);
```


4. Insérez des données dans la table "auteur" pour représenter les auteur des bandes dessinées :

```sql
insert into auteur (name, nationality) values 
    ('Hergé', 'Belge'),
    ('René Goscinny', 'Français'),
    ('Albert Uderzo', 'Français');
```

5. Créez la table "editeur" avec des colonnes telles que "id" (clé primaire), "nom" et "pays" :

```sql
create table editeur (
    editeur_id int primary key auto_increment,
    nom varchar(255) not null,
    pays varchar(255)
);
```

6. Insérez des données dans la table "editeur" pour représenter les éditeurs des bandes dessinées :

```sql
insert into editeur (nom, pays) values 
    ('Casterman', 'Belgique'),
    ('Dargaud', 'France'),
    ('Dupuis', 'Belgique');
```

7. Créez la table "bd" avec des colonnes telles que "id" (clé primaire), "titre", "auteur_id" (clé étrangère faisant référence à la table auteur), "editeur_id" (clé étrangère faisant référence à la table editeur) et "année_parution" :

```sql
create table bd (
    bd_id int primary key auto_increment,
    titre varchar(255),
    id_auteur int,
    id_editeur int,
    annee_parution year
);

alter table bd add constraint foreign key (id_auteur) references auteur (auteur_id);

alter table bd add constraint foreign key (id_editeur) references editeur (editeur_id);
```


8. Insérez des données dans la table "bd" pour représenter différentes bandes dessinées avec leurs auteur et éditeurs :
```sql
insert into bd (titre, id_auteur, id_editeur, annee_parution) values 
    ('Tintin au Tibet', 1, 1, 1960),
    ('Astérix le Gaulois', 2, 2, 1961),
    ('Les Aventures de Blake et Mortimer', 1, 3, 1946);
```

9. Effectuez des requêtes pour afficher les informations sur les bandes dessinées, les auteur et les éditeurs :

    - Afficher toutes les bandes dessinées avec les informations complètes :

```sql
select * from bd join auteur on id_auteur=auteur_id join editeur on id_editeur=editeur_id;
```

    - Afficher les bandes dessinées publiées par un éditeur spécifique (par exemple, "Casterman") :

```sql
select * from bd join auteur on id_auteur=auteur_id join editeur on id_editeur=editeur_id where nom='Casterman';
```

    - Afficher les bandes dessinées publiées après une certaine année (par exemple, après 1960) :

```sql
select * from bd join auteur on id_auteur=auteur_id join editeur on id_editeur=editeur_id where annee_parution > 1960;
```

    - Afficher les titres de bd avec leur auteur et leur éditeur et l'année de parution:

```sql
select titre, name, nom, annee_parution from bd join editeur on id_editeur=editeur_id join auteur on id_auteur=auteur_id;
```


Cet exercice vous permet de créer une base de données pour des bandes dessinées belges, de gérer les relations entre les tables "bd", "auteur" et "editeur", et d'effectuer des requêtes pour obtenir des informations spécifiques.
Vous pouvez ajouter davantage de données, de tables et d'autres fonctionnalités de MySQL pour enrichir votre base de données selon vos besoins.


