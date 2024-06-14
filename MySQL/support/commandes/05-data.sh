# ? LMD : Langages de Manipulation de de Données (DML : Data Manipulation Language)
# ? Le langage de manipulation de données (DML) est utilisé pour interagir avec les données dans une base de données.

# Voici quelques commandes de base pour interagir avec une table dans une base de données MySQL :

# Insertion de données dans une table :
   INSERT INTO nom_table (colonne1, colonne2, ...)
   VALUES (valeur1, valeur2, ...), (valeur1, valeur2, ...);

# Sélection de données d'une table :
   SELECT colonne1, colonne2, ...
   FROM nom_table
   WHERE condition;

# Mise à jour de données dans une table :
   UPDATE nom_table
   SET colonne1 = nouvelle_valeur1, colonne2 = nouvelle_valeur2, ...
   WHERE condition;

# Suppression de données dans une table :
   DELETE FROM nom_table
   WHERE condition;

# Vider une table (supprimer toutes les données) :
   TRUNCATE TABLE nom_table;

# * Ce ne sont là que quelques-unes des commandes de base pour MySQL.
# * Il existe de nombreuses autres fonctionnalités et commandes avancées disponibles pour interagir avec une base de données MySQL.