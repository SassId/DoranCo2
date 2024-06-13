Exercice avec une base de données pour des figurine Avengers :

    Créez une base de données avec le nom avengers_db :

    Sélectionnez la base de données nouvellement créée :

    Créez la table "figurine" avec des colonnes telles que "id" (clé primaire), "nom", "super_pouvoir", "annee_sortie" et "description" :

    Insérez des données dans la table "figurine" pour représenter des figurine Avengers :

('Iron Man', 'Armure surpuissante', 2008, 'Milliardaire et génie inventeur.'),
('Captain America', 'Force et endurance surhumaines', 2011, 'Héros emblématique de la Seconde Guerre mondiale.'),
('Thor', 'Contrôle de la foudre et marteau magique', 2011, 'Dieu nordique du tonnerre et prince d'Asgard.'),
('Hulk', 'Force et résistance surhumaines', 2008, 'Scientifique transformé en monstre vert lorsqu'il est en colère.'),
('Black Widow', 'Expert en arts martiaux et espionnage', 2010, 'Agent secret russe doté de grandes compétences.'),
('Black Panther', 'Force, vitesse et agilité surhumaines', 2018, 'Roi du Wakanda et protecteur de son peuple.');

    Effectuez des requêtes pour afficher les figurine Avengers :

    Afficher toutes les figurine :




    Afficher les figurine sorties après 2010 :




    Afficher les figurine avec le pouvoir "Force" dans leur super_pouvoir :


    Modifiez une figurine dans la table "figurine" :

    Modifiez la description de "Black Panther" pour "Prince de Wakanda et protecteur de son peuple."


    Supprimez la figurine Black Widow de la table "figurine" :

create database avengers_db;

use avengers_db;

create table figurine (
id int unsigned primary key auto_increment,
nom varchar(255),
super_pouvoir varchar(255),
annee_sortie date default '2000-01-01',
description varchar(255)
);

insert into figurine (nom, super_pouvoir, annee_sortie, description) values
('Iron Man', 'Armure surpuissante', 2008, 'Milliardaire et génie inventeur.'),

('Captain America', 'Force et endurance surhumaines', 2011, 'Héros emblématique de la Seconde Guerre mondiale.'),

('Thor', 'Contrôle de la foudre et marteau magique', 2011, 'Dieu nordique du tonnerre et prince d\'Asgard.'),

('Hulk', 'Force et résistance surhumaines', 2008, 'Scientifique transformé en monstre vert lorsqu\'il est en colère.'),

('Black Widow', 'Expert en arts martiaux et espionnage', 2010, 'Agent secret russe doté de grandes compétences.'),

('Black Panther', 'Force, vitesse et agilité surhumaines', 2018, 'Roi du Wakanda et protecteur de son peuple.');

select * from figurine;

select * from figurine where super_pouvoir like '%force%'

update figurine set description="Prince de Wakanda et protecteur de son peuple." where nom="Black Panther";

delete from figurine where nom="Black Widow"
