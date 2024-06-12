()# ? LDD : Langage de Définition de Données (DDL : Data Definition Language)
# ? Le langage de définition de données (DDL) est utilisé pour définir la structure de la base de données.

# Voici quelques-unes des principales commandes pour créer et modifier une base de données dans MySQL :

# Affichage des tables :
   SHOW TABLES;

# Création d'une table :
   CREATE TABLE nom_table (
      id INT PRIMARY KEY AUTO_INCREMENT,
      nom VARCHAR(100),
      prenom VARCHAR(100),
      age INT CHECK (age >= 18),
      date_naissance DATE DEFAULT '2000-01-01',
      email VARCHAR(100) UNIQUE,
);

# Affichage de la structure d'une table :
   SHOW CREATE TABLE nom_table;

# Affichage des colonnes d'une table :
   DESCRIBE nom_table;

# Suppression d'une table :
   DROP TABLE nom_table;

# Renommer une table :
   RENAME TABLE ancien_nom TO nouveau_nom;

# Ajouter une colonne :
   ALTER TABLE nom_table ADD colonne type_de_donnees;

# Supprimer une colonne :
   ALTER TABLE nom_table DROP COLUMN nom_colonne;

# Modifier le nom d'une colonne :
   ALTER TABLE nom_table CHANGE COLUMN ancien_nom nouveau_nom type_de_donnees;

# Modifier le type de données d'une colonne :
   ALTER TABLE nom_table MODIFY colonne nouveau_type_de_donnees;

# Ajouter une contrainte FOREIGN KEY :
   ALTER TABLE nom_table ADD CONSTRAINT nom_contrainte FOREIGN KEY (colonne) REFERENCES autre_table (colonne_reference);

# Supprimer une contrainte FOREIGN KEY :
   ALTER TABLE nom_table DROP FOREIGN KEY nom_contrainte;

# Ajouter une contrainte UNIQUE :
   ALTER TABLE nom_table ADD CONSTRAINT nom_contrainte UNIQUE (colonne);

# Supprimer une contrainte UNIQUE :
   ALTER TABLE nom_table DROP INDEX nom_contrainte;

# Ajouter un index :
   ALTER TABLE nom_table ADD INDEX nom_index (colonne);

# Supprimer un index :
   ALTER TABLE nom_table DROP INDEX nom_index;

# * Ces commandes vous permettent d'apporter des modifications à la structure d'une table existante, telles que l'ajout ou la suppression de colonnes, la modification des types de données, la gestion des contraintes et des indexes.
# * Assurez-vous de faire attention lorsque vous modifiez une table existante, car cela peut affecter les données déjà présentes.
# * Effectuez une sauvegarde de votre base de données avant d'apporter des modifications importantes.