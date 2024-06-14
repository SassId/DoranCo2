# ? Lors de la création d'une table avec MySQL, vous pouvez ajouter différentes contraintes pour spécifier des règles ou des restrictions sur les valeurs des colonnes.

# Voici quelques-unes des principales contraintes que vous pouvez utiliser :

**PRIMARY KEY** :
    # Cette contrainte spécifie une colonne (ou un groupe de colonnes) comme clé primaire de la table.
    # Elle garantit que chaque valeur de clé est unique et non nulle.
    # Une table ne peut avoir qu'une seule clé primaire.

**AUTO_INCREMENT** :
    # Cette contrainte est généralement utilisée avec une clé primaire numérique.
    # Elle permet à la colonne de générer automatiquement une valeur unique croissante pour chaque nouvel enregistrement inséré.

**NOT NULL** :
    # Cette contrainte indique que la colonne ne peut pas contenir de valeurs nulles.
    # Vous devez spécifier une valeur valide lors de l'insertion d'un nouvel enregistrement.

**UNIQUE** :
    # Cette contrainte garantit que chaque valeur dans la colonne est unique parmi tous les enregistrements de la table.
    # Cela signifie qu'aucune valeur ne peut être répétée dans la colonne.

**FOREIGN KEY** :
    # Cette contrainte est utilisée pour établir une relation entre deux tables.
    # Elle spécifie qu'une colonne (ou un groupe de colonnes) dans la table en question est une clé étrangère qui fait référence à une clé primaire dans une autre table.

**CHECK** :
    # Cette contrainte permet de définir une condition pour les valeurs acceptées dans une colonne.
    # Elle peut être utilisée pour limiter les valeurs possibles en fonction d'une expression ou d'une condition logique.
    # Par exemple, `CHECK (age >= 18)` pour s'assurer que l'âge est supérieur ou égal à 18.

**DEFAULT** :
    # Cette contrainte permet de définir une valeur par défaut pour une colonne si aucune valeur explicite n'est fournie lors de l'insertion d'un enregistrement.
    # Par exemple, `DEFAULT 0` pour définir la valeur par défaut à 0.

**INDEX** :
    # Bien qu'il ne s'agisse pas strictement d'une contrainte, un index est utilisé pour accélérer les opérations de recherche dans une table.
    # Il peut être défini sur une ou plusieurs colonnes pour améliorer les performances des requêtes.

# * Ces contraintes peuvent être spécifiées lors de la création de la table ou ajoutées ultérieurement à l'aide de la commande ALTER TABLE. Il est important de choisir les contraintes appropriées en fonction des règles métier et des besoins de votre application.