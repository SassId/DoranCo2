# DML (Data Manipulation Language)

(LMD: Langage de Manipulation de Données)

### Create Data:

```sql
INSERT INTO table_name (column_name) VALUES ();
```

==>

```sql
INSERT INTO movie (title, release_date) VALUES ('Pulp Fiction', '2001-10-23'), ('The Revenant', '2015-04-30');
```

```sql
INSERT INTO director (firstname, lastname) VALUES ('Joss', 'Whedon'), ('Géraldine', 'Nakache'), ('Steven', 'Spielberg'), ('Alfred', 'Hitchcock');
```

---

### Read Data:

```sql
SELECT col_name FROM table_name;
```

==>

```sql
SELECT * FROM movie;
```

_\* is for all_

---

### Read with Conditions:

```sql
SELECT col_name FROM table_name WHERE conditions;
```

==>

```sql
SELECT * FROM movie WHERE id_director IS NOT NULL;
```

```sql
SELECT * FROM director WHERE age>=40 AND age<=60

or

SELECT * FROM director WHERE age BETWEEN 40 AND 60
```

---

```sql
SELECT * FROM movie WHERE firstname LIKE 'n%';
```

_displays entries where firstname starts with 'n'_

```sql
SELECT * FROM movie WHERE firstname LIKE '%n%';
```

_displays entries where firstname contains 'n'_

```sql
SELECT * FROM movie WHERE firstname LIKE '%n';
```

_displays entries where firstname ends with 'n'_

---

```sql
SELECT * FROM movie WHERE firstname NOT LIKE '%n';

or

SELECT * FROM movie WHERE firstname != '%n';
```

_displays entries where firstname doesn't end with 'n'_

---

```sql
SELECT * FROM movie WHERE firstname IN ('Géraldine', 'Joss');

or

SELECT * FROM movie WHERE firstname NOT IN ('Géraldine', 'Joss');
```

_displays spécified entries_

---

### Sort in Order:

```sql
SELECT firstname, email FROM director WHERE lastname LIKE '%e%' AND country IN ('france', 'usa') AND age>30
ORDER BY email DESC LIMIT 2 OFFSET 1
```

- _by default the order is set to "asc"_
- _limit sets the limit of displayed entries_
- _offset sets the number of entries per page_

---

### Update a Table:

```sql
UPDATE table_name SET col_name=col_value WHERE id=id;
```

_we need to indicate the id to have that specific entry updated_

==>

```sql
UPDATE director SET email="gnark@gmail.com", date_of_birth="1970-02-22", salary=255455.00, country="usa" WHERE id=1
```

---

TODO:
Practice:

[x] Display the firstname and email of directors who have an "e" in their lastnames and who are from 'fr' or 'uk' and who are older than 30.

_Solution_

```sql
SELECT firstname, email FROM director WHERE lastname LIKE '%e%' AND country IN ('fr', 'uk') AND age>30
ORDER BY email LIMIT 2
```

---

### Delete Data:

```sql
DELETE FROM table_name
```
_Attention: deletes all entries and irreversible_

---


SELECT firstname, email FROM director WHERE lastname LIKE '%e%' AND country IN ('france', 'usa') AND age>30
ORDER BY email LIMIT 2 

update director set country='fr' where id between 0 and 10

update director set salary=1000000 where age < 20 or age between 40 and 70

alter table director modify salary decimal(12,2)

delete from director where country not like 'fr'

___

create database avengers_db;

use avengers_db;

create table figurine (
    id int primary key auto_increment,
    nom varchar(255),
    super_pouvoir varchar(255),
    annee_sortie date,
    description varchar(255),
);