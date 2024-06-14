# ? Les conditions SQL sont utilisées pour spécifier des critères de filtrage pour les données à récupérer dans une requête SQL.

# Voici les conditions avec des exemples :

**EQUALS (=)** :
   # Exemple : `SELECT * FROM table WHERE age = 25;`

**NOT EQUALS (!=, <>)** :
   # Exemple : `SELECT * FROM table WHERE couleur != 'rouge';`

**LESS THAN (<)** :
   # Exemple : `SELECT * FROM table WHERE quantite < 10;`

**LESS THAN OR EQUAL TO (<=)** :
   # Exemple : `SELECT * FROM table WHERE prix <= 100.00;`

**GREATER THAN (>)** :
   # Exemple : `SELECT * FROM table WHERE score > 90;`

**GREATER THAN OR EQUAL TO (>=)** :
   # Exemple : `SELECT * FROM table WHERE date >= '2022-01-01';`

**IN** :
   # Exemple : `SELECT * FROM table WHERE categorie IN ('Fruits', 'Légumes');`

**NOT IN** :
   # Exemple : `SELECT * FROM table WHERE code NOT IN (1001, 1002, 1003);`

**LIKE** :
   # Exemple : `SELECT * FROM table WHERE nom LIKE 'J%';`

**NOT LIKE** :
   # Exemple : `SELECT * FROM table WHERE email NOT LIKE '%gmail.com';`

**BETWEEN** :
   # Exemple : `SELECT * FROM table WHERE quantite BETWEEN 10 AND 20;`

**IS NULL** :
   # Exemple : `SELECT * FROM table WHERE adresse IS NULL;`

**IS NOT NULL** :
   # Exemple : `SELECT * FROM table WHERE nom IS NOT NULL;`

**ORDER BY ** :
   # Exemple : `SELECT * FROM table WHERE quantite BETWEEN 10 AND 20 ORDER BY quantite ASC/DESC;`

**LIMIT ** :
   # Exemple : `SELECT * FROM table WHERE quantite BETWEEN 10 AND 20 LIMIT 5;`


# * Ces exemples illustrent comment utiliser les différentes conditions pour filtrer les données en fonction des critères spécifiés.
# * Vous pouvez combiner ces conditions avec des opérateurs logiques et les utiliser dans des requêtes SQL plus complexes pour obtenir les résultats souhaités.