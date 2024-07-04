# Exercice : Héritage et Interfaces en Programmation Orientée Objet

Dans cet exercice, nous allons explorer les concepts de classe abstraite, héritage et interfaces en utilisant des exemples réalistes. Nous allons créer une hiérarchie de classes pour modéliser des animaux, en incluant des oiseaux et des loups, et définir une interface pour les animaux sauvages.

## Objectifs

- Comprendre et implémenter une classe abstraite.
- Utiliser l'héritage pour créer des classes dérivées.
- Définir et implémenter des interfaces.

## Instructions

### 1. Classe Animal

Créez une classe `Animal` non instanciable avec les propriétés suivantes :

- `nom` (string)
- `age` (int)
- `nbPattes` (int)
- `listAliment` (array)

Méthodes à inclure :

- Constructeur pour initialiser les propriétés.
- Getter et Setter pour chaque propriété.

### 2. Classe Bird qui hérite de Animal

Créez une classe `Bird` qui hérite de `Animal` avec la propriété supplémentaire :

- `migrate` (bool)

Méthodes à inclure :

- Constructeur pour initialiser les propriétés, y compris celle héritée.
- Getter et Setter pour la propriété `migrate`.
- Méthode `description` : renvoie la chaîne de caractères "Je suis un oiseau migrateur" si l'oiseau est migrateur, sinon "Je ne suis pas un oiseau migrateur".

### 3. Classe Wolf

Créez une classe `Wolf` qui hérite de `Animal` avec la propriété suivante :

- `solitaire` (bool)

Méthodes à inclure :

- Constructeur pour initialiser les propriétés, y compris celle héritée.
- Getter et Setter pour la propriété `solitaire`.

### 4. Interface SavageAnimal

Définissez une interface `SavageAnimal` avec les méthodes suivantes :

- `devore` : retourne une chaîne de caractères.
- `eatBird` : prend en paramètre un objet de type `Bird` et retourne une chaîne de caractères.

### 5. Implémentation de l'interface SavageAnimal dans la classe Wolf

La classe `Wolf` doit implémenter l'interface `SavageAnimal` avec les méthodes suivantes :

- `devore` : retourne "Je viens de manger".
- `eatBird` : retourne "Je viens de manger l'oiseau qui s'appelait XXX" où XXX est le nom de l'oiseau passé en paramètre.
