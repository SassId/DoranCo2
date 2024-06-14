Voici un exemple d'exercice avec une base de données pour des bandes dessinées belges, en incluant plusieurs tables telles que "BD", "auteur" et "editeur" :

1. Créez une base de données bd_collection_db:

2. Sélectionnez la base de données nouvellement créée :

3. Créez la table "auteur" avec des colonnes telles que "id" (clé primaire), "name" et "nationality" :

4. Insérez des données dans la table "auteur" pour représenter les auteur des bandes dessinées :

    ('Hergé', 'Belge'),
    ('René Goscinny', 'Français'),
    ('Albert Uderzo', 'Français');

5. Créez la table "editeur" avec des colonnes telles que "id" (clé primaire), "nom" et "pays" :

6. Insérez des données dans la table "editeur" pour représenter les éditeurs des bandes dessinées :

    ('Casterman', 'Belgique'),
    ('Dargaud', 'France'),
    ('Dupuis', 'Belgique');

7. Créez la table "bd" avec des colonnes telles que "id" (clé primaire), "titre", "auteur_id" (clé étrangère faisant référence à la table auteur), "editeur_id" (clé étrangère faisant référence à la table editeur) et "année_parution" :

8. Insérez des données dans la table "bd" pour représenter différentes bandes dessinées avec leurs auteur et éditeurs :

    ('Tintin au Tibet', 1, 1, 1960),
    ('Astérix le Gaulois', 2, 2, 1961),
    ('Les Aventures de Blake et Mortimer', 1, 3, 1946);

9. Effectuez des requêtes pour afficher les informations sur les bandes dessinées, les auteur et les éditeurs :

    - Afficher toutes les bandes dessinées avec les informations complètes :

    - Afficher les bandes dessinées publiées par un éditeur spécifique (par exemple, "Casterman") :

    - Afficher les bandes dessinées publiées après une certaine année (par exemple, après 1960) :

Cet exercice vous permet de créer une base de données pour des bandes dessinées belges, de gérer les relations entre les tables "bd", "auteur" et "editeur", et d'effectuer des requêtes pour obtenir des informations spécifiques.
Vous pouvez ajouter davantage de données, de tables et d'autres fonctionnalités de MySQL pour enrichir votre base de données selon vos besoins.
