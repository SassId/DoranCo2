<!-- CREER UNE BASE DE DONNEE library_db -->
<!-- CREER UNE TABLE book -->
<!-- id, nom, description, annee_parution, id_auteur(clé etrangere) -->

<!-- CREER UNE TABLE author -->
<!-- id, nom, prenom, pays_origine, date_naissance -->

<!-- INSERER DES DONNEE -->
<!-- 10 livres et 4 auteurs -->

<!-- AFFICHER LES LIVRES AVEC LEURS AUTEURS -->

SELECT title, firstname, lastname FROM book JOIN author ON id_author = author.id;

<!-- AFFICHER LE NOMBRE DE LIVRES ECRIT PAR CHAQUE AUTEUR -->

select count(book.id), firstname, lastname from book join author on id_author = author.id group by lastname;