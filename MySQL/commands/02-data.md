# DML (Data Manipulation Language) 
(LMD: Langage de Manipulation de Données)

```sql
INSERT INTO table_name (column_name) VALUES ();
```

==>

```sql
INSERT INTO movie (title, release_date) VALUES ('Pulp Fiction', '2001-10-23'), ('The Revenant', '2015-04-30');
```
---

```sql
SELECT * FROM table_name,
```

==>
```sql
SELECT * FROM movie,
```
_* is for all_

---
```sql
SELECT * FROM table_name WHERE conditions,
```
==>
```sql
SELECT * FROM movie WHERE id_director IS NOT NULL,
```
---

INSERT INTO director (firstname, lastname) VALUES ('Joss', 'Whedon'), ('Géraldine', 'Nakache'), ('Steven', 'Spielberg'), ('Alfred', 'Hitchcock');