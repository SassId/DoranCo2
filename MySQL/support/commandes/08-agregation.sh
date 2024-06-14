# ? Agregation de donnees
# ? MySQL fournit plusieurs fonctions d'agrégation pour effectuer des calculs sur un ensemble de valeurs et renvoyer un seul résultat.

# Voici quelques-unes des fonctions les plus couramment utilisées :

**ROUND()** :
    # Arrondit un nombre à un nombre spécifié de décimales.
    # Par exemple, `SELECT ROUND(AVG(price), 2) FROM table;` renvoie la valeur arrondi 2 nombres après la virgule.

**AVG()** :
    # Calcule la moyenne des valeurs d'une colonne.
    # Par exemple, `SELECT AVG(price) FROM table;` renvoie la moyenne du champs sélectionné.

**SUM()** :
    # Calcule la somme des valeurs d'une colonne.
    # Par exemple, `SELECT SUM(price) FROM table;` renvoie la somme du champs séléctionné.

**COUNT()** :
    # Compte le nombre de lignes ou les occurrences d'une valeur dans une colonne.
    # Par exemple, `SELECT COUNT(*) FROM table;` renvoie la nombre de lignes.

**MIN()** :
    # Retourne la valeur minimale d'une colonne.
    # Par exemple, `SELECT MIN(price) FROM table;` renvoie la valeur minimale.

**MAX()** :
    # Retourne la valeur maximale d'une colonne.
    # Par exemple, `SELECT MAX(price) FROM table;` renvoie la valeur maximale.

# ? Groupement de donnees
# ? MySQL fournit la clause GROUP BY pour regrouper les lignes ayant des valeurs identiques dans une colonne spécifiée ou plusieurs colonnes.

# Voici un exemple de requête SQL utilisant la clause GROUP BY :

SELECT column_name(s)
FROM table_name
WHERE condition
GROUP BY column_name(s)
ORDER BY column_name(s);

SELECT count(*), city, population
FROM commandes
GROUP BY city
HAVING population >300000
ORDER BY city;