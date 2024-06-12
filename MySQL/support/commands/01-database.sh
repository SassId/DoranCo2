# ? Voici quelques commandes de base pour interagir avec une base de données MySQL :

# Version de Mysql :
   mysql --version

# Connexion à la base de données :
   mysql -u nom_utilisateur -p
   # * Cela vous demandera le mot de passe associé à l'utilisateur spécifié et vous connectera à la base de données.

# Déconnexion de la base de données :
   quit;
   # ou
   exit;

# Affichage des bases de données :
   SHOW DATABASES;

# Création d'une base de données :
   CREATE DATABASE nom_bdd;

# Sélection de la base de données :
   USE nom_bdd;

# Suppression d'une base de données :
   DROP DATABASE nom_bdd;

# Sauvergarde de la base de données :
   mysqldump -u nom_utilisateur -p nom_bdd > db.sql

# * Ce ne sont là que quelques-unes des commandes de base pour MySQL.
# * Il existe de nombreuses autres fonctionnalités et commandes avancées disponibles pour interagir avec une base de données MySQL.
