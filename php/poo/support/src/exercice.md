# Exercice

Toutes nos classes seront dans des namespaces avec la logique que nous venons de voir.

## Classe Abstraite `Vehicule`

Créer une classe abstraite `Vehicule` avec les propriétés et méthodes suivantes :

-   Propriété protégée `$nbTest` initialisée à 100.
-   Méthode publique `demarrer()` qui retourne la chaîne "Je suis démarré".
    -   Interdisez le polymorphisme sur cette méthode.
-   Méthode abstraite publique `carburant()` qui n'a pas d'implémentation.
-   Méthode publique `nbTest()` qui retourne la valeur de la propriété `$nbTest`.

## Classe `Renault`

Créer une classe `Renault` qui hérite de `Vehicule` avec les propriétés et méthodes suivantes :

-   Propriété privée `$carburant`.
-   Redéfinir la méthode `carburant()` pour qu'elle retourne la chaîne "diesel".
-   Redéfinir la méthode `nbTest()` pour qu'elle retourne la valeur de `nbTest()` de la classe parente (`Vehicule`) augmentée de 30.

## Classe `User`

Créer une classe `User` avec les propriétés et méthodes suivantes :

-   Propriété `$pseudo`.
-   Interdire l'héritage sur cette classe `User`.

## Classe `Peugeot`

Créer une classe `Peugeot` qui hérite de `Vehicule` avec les propriétés et méthodes suivantes :

-   Propriété privée `$carburant`.
-   Redéfinir la méthode `carburant()` pour qu'elle retourne la chaîne "essence".
-   Redéfinir la méthode `nbTest()` pour qu'elle retourne la valeur de `nbTest()` de la classe parente (`Vehicule`) augmentée de 70.

## Instances et Affichage

Créer des instances des classes `Renault` et `Peugeot`.

Utiliser des `echo` pour afficher :

-   Le message retourné par la méthode `demarrer()` pour chaque véhicule.
-   Le carburant de chaque véhicule en utilisant la méthode `carburant()`.
-   Le nombre de tests effectués pour chaque véhicule en utilisant la méthode `nbTest()`.

## Interface `Engine`

Créer une interface appelée `Engine` avec les éléments suivants :

-   Fonction publique `start` qui prend en paramètre un `User`.

Obliger les classes `Peugeot` et `Renault` à implémenter cette interface :

-   `Peugeot` doit avoir une méthode `start` qui retourne la chaîne "XXX a demarré la Renault".
-   `Renault` doit avoir une méthode `start` qui retourne la chaîne "XXX a demarré la Peugeot".

Enfin, créer une instance de `User` et démarrer les véhicules `Peugeot` et `Renault` en utilisant la méthode `start` de l'interface `Engine`.
