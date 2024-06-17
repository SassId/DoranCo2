# ? Les alias permettent de renommer les colonnes d'un résultat de requête. Ainsi que les tables.

# ? Par exemple, si vous avez une table clients avec une colonne nom et une table produits avec une colonne nom, vous pouvez renommer les colonnes nom pour éviter toute confusion dans le résultat de la requête.

SELECT c.nom AS nom_client, p.nom AS nom_produit, p.prix AS prix_produit
FROM clients AS c
JOIN commandes AS cmd ON c.id = cmd.client_id
JOIN produits AS p ON cmd.produit_id = p.id
WHERE c.pays = 'France'
ORDER BY p.prix DESC;