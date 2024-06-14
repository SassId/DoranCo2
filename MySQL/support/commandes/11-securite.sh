# ? LCT : Langage de Controle de Transaction (TCL : Transaction Control Language)
# ? Le langage de contrôle de transactions (TCL) est utilisé pour gérer les transactions dans la base de données.

# Voici quelques commandes couramment utilisées pour la gestion des transactions dans MySQL :

# Débuter une transaction :
    START TRANSACTION;
    # Cette commande démarre une transaction.

# Valider une transaction :
    COMMIT;
    # Cette commande valide une transaction.

# Annuler une transaction :
    ROLLBACK;
    # Cette commande annule une transaction.

# Définir un point de sauvegarde :
    SAVEPOINT point_de_sauvegarde;
    # Cette commande définit un point de sauvegarde dans une transaction.

# Annuler une transaction jusqu'à un point de sauvegarde :
    ROLLBACK TO SAVEPOINT point_de_sauvegarde;
    # Cette commande annule une transaction jusqu'à un point de sauvegarde spécifié.
