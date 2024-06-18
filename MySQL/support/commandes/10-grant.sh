# ? LCD : Langage de Contrôle de Données (DCL : Data Control Language)
# ? Le langage de contrôle de données (DCL) est utilisé pour gérer les privilèges de la base de données et les rôles des utilisateurs.

# Voici quelques commandes couramment utilisées pour la gestion des utilisateurs dans MySQL :

# Afficher les utilisateurs :
   SELECT user, host FROM mysql.user;

# Créer un utilisateur :
   CREATE USER 'nom_utilisateur'@'adresse_IP' IDENTIFIED BY 'mot_de_passe';

# Pour autoriser l'accès depuis n'importe quelle adresse IP :
   CREATE USER 'nom_utilisateur'@'%' IDENTIFIED BY 'mot_de_passe';

# Modifier le mot de passe d'un utilisateur :
   ALTER USER 'nom_utilisateur'@'adresse_IP' IDENTIFIED BY 'nouveau_mot_de_passe';

# Supprimer un utilisateur :
   DROP USER 'nom_utilisateur'@'adresse_IP';

# Accorder tous les privilèges à un utilisateur :
   GRANT ALL PRIVILEGES ON nom_base_de_donnees.* TO 'nom_utilisateur'@'adresse_IP';

# Accorder des privilèges à un utilisateur :
   GRANT privilèges ON nom_base_de_donnees.table TO 'nom_utilisateur'@'adresse_IP';

# Révoquer tous les privilèges d'un utilisateur :
   REVOKE ALL PRIVILEGES ON nom_base_de_donnees.table FROM 'nom_utilisateur'@'adresse_IP';

# Révoquer des privilèges d'un utilisateur :
   REVOKE privilèges ON nom_base_de_donnees.table FROM 'nom_utilisateur'@'adresse_IP';

# Show Privileges :
SHOW GRANTS FOR 'nom_utilisateur'@'adresse_IP'


# Voici quelques exemples de privilèges couramment utilisés dans MySQL :
   ALL PRIVILEGES : Révoque tous les privilèges, ce qui réduit l'utilisateur à un état sans privilèges sur la base de données ou la table spécifiée.

   SELECT : Révoque le privilège de sélectionner (lire) des données à partir de la base de données ou de la table spécifiée.

   INSERT : Révoque le privilège d'insérer de nouvelles données dans la base de données ou la table spécifiée.

   UPDATE : Révoque le privilège de mettre à jour des données existantes dans la base de données ou la table spécifiée.

   DELETE : Révoque le privilège de supprimer des données de la base de données ou de la table spécifiée.

   CREATE : Révoque le privilège de créer de nouvelles tables ou bases de données.

   DROP : Révoque le privilège de supprimer des tables ou bases de données existantes.

   GRANT OPTION : Révoque le privilège d'accorder des privilèges à d'autres utilisateurs.
