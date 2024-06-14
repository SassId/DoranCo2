```sql
create database agregation;

create table ville_notation (
    id int primary key auto_increment,
    nom varchar(255),
    note int,
    code_pays varchar(5)
);
```

### Display the number of entries

```sql
select count(*) as nombre_lignes from ville_notation;
```

```sql
select count(*) as nombre_lignes from ville_notation where note>3;
```

### Display minimum

```sql
select min(note) from ville_notation;
```

### Display maximum

```sql
select max(note) from ville_notation;
```

### Display average

```sql
select avg(note) from ville_notation;
```

```sql
select avg(note), code_pays from ville_notation group by code_pays;
```


```sql
select * from ville_notation group by code_pays;
```

```sql
select max(note), code_pays from ville_notation group by code_pays having max(note)>5;
```

```sql
select min(note), max(note), code_pays from ville_notation;
```

```sql
select min(note), max(note), code_pays from ville_notation group by code_pays;
```

```sql
select max(note), code_pays from ville_notation where note !=1 group by code_pays having max(note)>2 order by code_pays;
```

```sql
select avg(note), code_pays from ville_notation where note !=1 group by code_pays having avg(note)>2 order by code_pays;
```



