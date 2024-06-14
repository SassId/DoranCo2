# ? MySQL fournit plusieurs fonctions pour manipuler les dates.

# Voici quelques-unes des fonctions les plus couramment utilisées :

**NOW()** :
    # Cette fonction renvoie la date et l'heure actuelles.
    #Par exemple, `SELECT NOW();` renvoie la date et l'heure actuelles.

**CURDATE()** :
    # Cette fonction renvoie la date actuelle (sans l'heure).
    # Par exemple, `SELECT CURDATE();` renvoie la date actuelle.

**CURTIME()** :
    # Cette fonction renvoie l'heure actuelle (sans la date).
    # Par exemple, `SELECT CURTIME();` renvoie l'heure actuelle.

**DATE_FORMAT()** :
    # Cette fonction formate une valeur de date/heure selon un modèle spécifié.
    # Par exemple, `SELECT DATE_FORMAT(NOW(), '%Y-%m-%d');` renvoie la date actuelle au format "AAAA-MM-JJ".

# * Ces sont quelques-unes des fonctions les plus couramment utilisées pour manipuler les dates dans MySQIl en existe d'autres, comme `YEAR()`, `MONTH()`, `DAY()`, `HOUR()`, `MINUTE()`, `SECOND()`, etc., qui permettent d'extraire des parties spécifiques d'une date ou d'une heure.
# * N'hésitez pas à consulter la documentation de MySQL pour obtenir la liste complète des fonctions disponibles pour manipuler les dates :
https://mariadb.com/kb/en/date-time-functions/