
### Exercice PHP POO : Création de Classes avec Héritage, Classes Finales, Classes Abstraites et Méthodes Abstraites sur le Thème de One Piece

#### Objectif
Créer une hiérarchie de classes représentant des personnages de l'univers de One Piece en utilisant des concepts avancés de la programmation orientée objet en PHP, incluant l'héritage, les classes finales, les classes abstraites et les méthodes abstraites.

#### Instructions

#### Partie 1 : Création de la Classe Abstraite `Character`

1. Créez une classe abstraite `Character` avec les propriétés et méthodes suivantes :
   - Propriétés : `name`, `age`, `bounty` (prime).
   - Méthode abstraite : `getRole()` (doit retourner le rôle du personnage).
   - Méthode concrète : `getInfo()` (retourne les informations de base du personnage).

#### Partie 2 : Création de Classes Dérivées

1. Créez une classe `Pirate` qui hérite de `Character` et implémente la méthode `getRole()`.
2. Créez une classe `Marine` qui hérite de `Character` et implémente la méthode `getRole()`.
3. Créez une classe `Revolutionary` qui hérite de `Character` et implémente la méthode `getRole()`.

#### Partie 3 : Création de Classes Spécifiques

1. Créez une classe finale `Captain` qui hérite de `Pirate` et ajoute une propriété `crewName` (nom de l'équipage).
2. Créez une classe `ViceAdmiral` qui hérite de `Marine` et ajoute une méthode `commandFleet()` (affiche une phrase spécifique).
3. Créez une classe `Commander` qui hérite de `Revolutionary` et ajoute une méthode `leadRevolution()` (affiche une phrase spécifique).

#### Partie 4 : Implémentation d'Interface

1. Créez une interface `CombatSkills` avec les méthodes suivantes :
   - `attack()`
   - `defend()`
2. Implémentez l'interface `CombatSkills` dans les classes `Pirate`, `Marine` et `Revolutionary`.

#### Partie 5 : Gestion des Personnages

1. Créez une classe `CharacterManager` avec les méthodes suivantes :
   - `addCharacter(Character $character)` : ajoute un personnage à une liste.
   - `listCharacters()` : liste tous les personnages ajoutés.
2. Utilisez la classe `CharacterManager` pour ajouter et lister différents personnages.

### Exigences
- Utilisez des classes abstraites et des méthodes abstraites pour définir des comportements communs.
- Utilisez l'héritage pour réutiliser et étendre les fonctionnalités.
- Utilisez des classes finales pour éviter l'héritage non désiré.
- Implémentez des interfaces pour définir des contrats de méthodes que les classes doivent respecter.
- Assurez-vous que le code est lisible, bien structuré et suit les principes de la programmation orientée objet.

### Conclusion
Cet exercice vous permettra de pratiquer la création de classes en PHP avec des concepts avancés de POO, tout en utilisant un thème amusant et engageant comme celui de One Piece. Bonne chance et amusez-vous bien avec vos personnages !

Réduire
message.txt3 Ko
﻿

### Exercice PHP POO : Création de Classes avec Héritage, Classes Finales, Classes Abstraites et Méthodes Abstraites sur le Thème de One Piece

#### Objectif
Créer une hiérarchie de classes représentant des personnages de l'univers de One Piece en utilisant des concepts avancés de la programmation orientée objet en PHP, incluant l'héritage, les classes finales, les classes abstraites et les méthodes abstraites.

#### Instructions

#### Partie 1 : Création de la Classe Abstraite `Character`

1. Créez une classe abstraite `Character` avec les propriétés et méthodes suivantes :
   - Propriétés : `name`, `age`, `bounty` (prime).
   - Méthode abstraite : `getRole()` (doit retourner le rôle du personnage).
   - Méthode concrète : `getInfo()` (retourne les informations de base du personnage).

#### Partie 2 : Création de Classes Dérivées

1. Créez une classe `Pirate` qui hérite de `Character` et implémente la méthode `getRole()`.
2. Créez une classe `Marine` qui hérite de `Character` et implémente la méthode `getRole()`.
3. Créez une classe `Revolutionary` qui hérite de `Character` et implémente la méthode `getRole()`.

#### Partie 3 : Création de Classes Spécifiques

1. Créez une classe finale `Captain` qui hérite de `Pirate` et ajoute une propriété `crewName` (nom de l'équipage).
2. Créez une classe `ViceAdmiral` qui hérite de `Marine` et ajoute une méthode `commandFleet()` (affiche une phrase spécifique).
3. Créez une classe `Commander` qui hérite de `Revolutionary` et ajoute une méthode `leadRevolution()` (affiche une phrase spécifique).

#### Partie 4 : Implémentation d'Interface

1. Créez une interface `CombatSkills` avec les méthodes suivantes :
   - `attack()`
   - `defend()`
2. Implémentez l'interface `CombatSkills` dans les classes `Pirate`, `Marine` et `Revolutionary`.

#### Partie 5 : Gestion des Personnages

1. Créez une classe `CharacterManager` avec les méthodes suivantes :
   - `addCharacter(Character $character)` : ajoute un personnage à une liste.
   - `listCharacters()` : liste tous les personnages ajoutés.
2. Utilisez la classe `CharacterManager` pour ajouter et lister différents personnages.

### Exigences
- Utilisez des classes abstraites et des méthodes abstraites pour définir des comportements communs.
- Utilisez l'héritage pour réutiliser et étendre les fonctionnalités.
- Utilisez des classes finales pour éviter l'héritage non désiré.
- Implémentez des interfaces pour définir des contrats de méthodes que les classes doivent respecter.
- Assurez-vous que le code est lisible, bien structuré et suit les principes de la programmation orientée objet.

### Conclusion
Cet exercice vous permettra de pratiquer la création de classes en PHP avec des concepts avancés de POO, tout en utilisant un thème amusant et engageant comme celui de One Piece. Bonne chance et amusez-vous bien avec vos personnages !

message.txt3 Ko
