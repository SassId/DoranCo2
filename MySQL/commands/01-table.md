# DDL: Data Definition Language

(LDD: Langage de Définition de Données)

### Display Tables:

```sql
SHOW TABLES;
```

### Create Table:

```sql
CREATE TABLE table_name (
    --structure of the table:
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    release_date DATE DEFAULT '2000-01-01'
);
```

- _the rule requires a name (id), a type (int) and then we can add conditions or constraints_
- _int = integar_
- _primary key makes the chosen key the reference to identify the line of the table_
- unsigned: we don't need use the first bit of ram to define if the number is positive or negative thus making it only positive and greater
- _auto-increment allows to automatically increment the value of the id_
- _varchar = variable character field, we have to precise the number of characters. The size is unfixed_
- _char: fixed size, faster_
- _date: must be in the YYYY-MM-DD format so you'll probably need to transform the user input to match that format_

### Display Tables:

```sql
SHOW TABLES;
```

### Display Structure of a Table:

```sql
DESCRIBE table_name;
```

```sql
SHOW CREATE TABLE table_name;
```

### Delete a constraint:

```sql
alter table movie drop constraint unique title
```

---

TODO:
Practice:

[x] create a table "director"
[x] id,
[x] firstname (not null),
[x] lastname (not null),
[x] age (must be legal),
[x] email (must be unique),
[x] date of birth (default),
[x] salary (must be a decimal)

_Solution:_

```sql
CREATE TABLE director(
    id INT PRIMARY KEY AUTO_INCREMENT,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    age TINYINT UNSIGNED CHECK (age >= 18),
    email VARCHAR(255),
    date_of_birth DATE DEFAULT CURDATE(),
    salary DECIMAL,
)
```

---

TODO:
Practice 2:

[x] rename table film to "movie",
[x] change the table "director" to add a column "country",
[x] change the column "salary" to have DECIMAL(8,2),
[x] change the table "movie" to add the constraint UNIQUE on the movie name,

[x] create a table "test" with a column "id",
[x] delete the table "test",

_Solution:_

```sql
RENAME TABLE film TO movie;
ALTER TABLE director
ADD country VARCHAR(100);
ALTER TABLE director
MODIFY salary DECIMAL(8,2);
ALTER TABLE movie
ADD CONSTRAINT UNIQUE (title) ;
```

```sql
CREATE TABLE test(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT
);
```

```sql
DROP TABLE test;
```

---

```sql
ALTER TABLE movie ADD CONSTRAINT fk_id_director FOREIGN KEY (id_director) REFERENCES director (id);
```
