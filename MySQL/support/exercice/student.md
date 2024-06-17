## Description de la situation :
Supposons que vous ayez une table appelée "students" contenant des informations sur les étudiants inscrits dans un cours. Cette table a les colonnes suivantes :

- student_id (identifiant de l'étudiant)
- first_name (prénom de l'étudiant)
- last_name (nom de famille de l'étudiant)
- age (âge de l'étudiant)
- grade (note de l'étudiant)

### Exercice :
Écrivez des requêtes SQL pour répondre aux questions suivantes :

1. Sélectionnez tous les étudiants et leurs informations.
2. Sélectionnez le prénom et le nom de famille des étudiants âgés de plus de 20 ans.
3. Sélectionnez les étudiants ayant obtenu une note supérieure à 80.
4. Sélectionnez le nombre total d'étudiants dans la table.
5. Sélectionnez l'âge moyen des étudiants.

### Solutions :
Voici les solutions correspondantes aux exercices :

1. Sélectionnez tous les étudiants et leurs informations.
```sql
SELECT * FROM students;
```

2. Sélectionnez le prénom et le nom de famille des étudiants âgés de plus de 20 ans.
```sql
SELECT first_name, last_name FROM students WHERE age > 20;
```

3. Sélectionnez les étudiants ayant obtenu une note supérieure à 80.
```sql
SELECT * FROM students WHERE grade > 80;
```

4. Sélectionnez le nombre total d'étudiants dans la table.
```sql
SELECT COUNT(*) AS total_students FROM students;
```

5. Sélectionnez l'âge moyen des étudiants.
```sql
SELECT AVG(age) AS average_age FROM students;
```

Ces requêtes devraient vous donner une bonne introduction à l'utilisation de SQL pour interroger une base de données. N'hésitez pas à les essayer dans votre environnement de base de données pour vous familiariser avec les concepts.