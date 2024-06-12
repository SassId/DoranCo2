# Basics Commands to interact with a DB with MySQL

### Check Version of MySQL:
```sql
mysql --version
```

### Connect to MySQL:
```sql
mysql -u user_name -p
```
_(u is for username and p is for password)_
_(the default username is "root"; it doesn't require a password)_

### Disconnect from MySQL:
```sql
quit
```
or 
```sql
exit
```
### Display the list of DataBases:
```sql
SHOW DATABASES;
```

### Create a DataBase:
```sql
CREATE DATABASE db_name;
```

### Delete a DataBase:
```sql
DROP DATABASE db_name;
```

### Use a DataBase:
```sql
USE DATABASE db_name;
```