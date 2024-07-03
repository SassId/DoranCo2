# Exercice : Créer des Classes Player, Warrior, et Mage

## Objectif

Créer trois classes en PHP : `Player`, `Warrior`, et `Mage`. La classe `Player` sera la classe de base, et les classes `Warrior` et `Mage` hériteront de `Player`.

## Instructions

### Classe Player

1. Créez la classe `Player`, elle ne peut pas être instanciée, avec les propriétés et méthodes suivantes :
    - `name`
    - `life` (valeur par défaut : 100)
    - `score` (valeur par défaut : 0)
    - Constructeur pour initialiser le `name`
    - Getters et Setters pour toutes les propriétés
    - Méthode `hit()` qui enlève 10 points de `life`

### Classe Warrior

2. Créez la classe `Warrior` qui hérite de `Player` avec les propriétés et méthodes suivantes :
    - `arrow` (nombre de flèches)
    - Constructeur pour initialiser le `name` et le `nombre de flèches`
    - Getters et Setters pour `arrow`
    - Méthode `hit()` qui enlève 15 points de `life`

### Classe Mage

3. Créez la classe `Mage` qui hérite de `Player` avec les propriétés et méthodes suivantes :
    - `mana` (un entier)
    - Constructeur pour initialiser le `name` et le `mana`
    - Getters et Setters pour `mana`
    - Méthode `hit()` qui enlève 30 points de `life`
