# ? LCD : Langage de Contrôle de Données (DCL : Data Control Language)
# ? Le langage de contrôle de données (DCL) est utilisé pour gérer les privilèges de la base de données et les rôles des utilisateurs.

# Voici quelques commandes couramment utilisées pour la gestion des utilisateurs dans MySQL :

# Afficher les utilisateurs :
   SELECT user, host FROM mysql.user;
   # Cette requête affiche la liste des utilisateurs présents dans la base de données.

# Créer un utilisateur :
   CREATE USER 'nom_utilisateur'@'adresse_IP' IDENTIFIED BY 'mot_de_passe';
   # Cette commande crée un nouvel utilisateur avec le nom spécifié, associé à une adresse IP ou un hôte.
   # Le mot de passe est également spécifié.

# Supprimer un utilisateur :
   DROP USER 'nom_utilisateur'@'adresse_IP';
   # Cette commande supprime un utilisateur spécifié de la base de données.

# Accorder tous les privilèges à un utilisateur :
   GRANT ALL PRIVILEGES ON nom_base_de_donnees.* TO 'nom_utilisateur'@'adresse_IP';
   # Cette commande accorde tous les privilèges sur toutes les tables d'une base de données à un utilisateur.

# Accorder des privilèges à un utilisateur :
   GRANT privilèges ON nom_base_de_donnees.table TO 'nom_utilisateur'@'adresse_IP';
   # Cette commande accorde des privilèges spécifiques à un utilisateur sur une base de données ou une table spécifique.

# Modifier le mot de passe d'un utilisateur :
   SET PASSWORD FOR 'nom_utilisateur'@'adresse_IP' = 'nouveau_mot_de_passe';
   # Cette commande permet de changer le mot de passe d'un utilisateur existant.

# Révoquer des privilèges d'un utilisateur :
   REVOKE privilèges ON nom_base_de_donnees.table FROM 'nom_utilisateur'@'adresse_IP';
   # Cette commande révoque les privilèges spécifiques d'un utilisateur sur une base de données ou une table.


# Voici quelques exemples de privilèges couramment utilisés dans MySQL :
   ALL PRIVILEGES : Révoque tous les privilèges, ce qui réduit l'utilisateur à un état sans privilèges sur la base de données ou la table spécifiée.

   SELECT : Révoque le privilège de sélectionner (lire) des données à partir de la base de données ou de la table spécifiée.

   INSERT : Révoque le privilège d'insérer de nouvelles données dans la base de données ou la table spécifiée.

   UPDATE : Révoque le privilège de mettre à jour des données existantes dans la base de données ou la table spécifiée.

   DELETE : Révoque le privilège de supprimer des données de la base de données ou de la table spécifiée.

   CREATE : Révoque le privilège de créer de nouvelles tables ou bases de données.

   DROP : Révoque le privilège de supprimer des tables ou bases de données existantes.

   GRANT OPTION : Révoque le privilège d'accorder des privilèges à d'autres utilisateurs.
