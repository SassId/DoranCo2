# Symfony

<br>

<center>
<img src="https://symfony.com/logos/symfony_black_03.png" width="100">
</center>

<br>

> Symfony est un framework PHP qui permet de développer des applications web. Il fournit des fonctionnalités de base telles que le moteur de templates, la gestion des formulaires, la gestion des traductions, etc. En outre, Symfony permet de développer des applications web plus complexes comme des API REST, des applications websockets, des applications web en temps réel, etc.

## Sommaire

-   [1. MVC (Model-View-Controller)](#1-mvc-model-view-controller)
-   [2. Arborescence d'un projet Symfony 7](#2-arborescence-dun-projet-symfony-7)
-   [3. Controller](#3-controller)
-   [4. Twig](#4-twig)
-   [5. Doctrine](#5-doctrine)
-   [6. Entity](#6-entity)
-   [7. Repository](#7-repository)
-   [8. Type ou FormType](#8-type-ou-formtype)
-   [9. YAML](#9-yaml)
-   [10. Service](#10-service)
-   [11. Commande](#11-commande)
-   [12. Fixtures](#12-fixtures)
-   [13. Event](#13-event)
-   [Références](#références)

## 1. MVC (Model-View-Controller)

    Le modèle MVC (Model-View-Controller) est un modèle d'architecture logicielle qui sépare les données, la logique et l'interface utilisateur d'une application. Il est composé de trois parties :

-   **Modèle** : représente la gestion de la base de données de l'application et contient la logique métier.

-   **Vue** : représente l'affichage des données de l'application. Elle est chargée de l'interface utilisateur (front).

-   **Contrôleur** : un controller est une classe PHP qui fait le lien entre le modèle et la vue. Il récupère les données du modèle, les traite et les transmet à la vue.

## 2. Arborescence d'un projet Symfony 7

```bash
assets/ # Contient les fichiers assets (images, css, js) non accessibles depuis le navigateur
bin/ # Contient les fichiers exécutables (console)
config/ # Contient les fichiers de configuration de Symfony
migrations/ # Contient les fichiers de migration de la base de données
public/ # Contient les fichiers publics (images, css, js) accessibles depuis le navigateur
src/ # Contient le code source de l'application
    Controller/ # Contient les contrôleurs de l'application (classes PHP)
    Entity/ # Contient les entités de l'application (représentation des tables de la base de données)
    Form/ # Contient les formulaires de l'application (FormType)
    Repository/ # Contient les dépôts de l'application (requêtes SQL)
templates/ # Contient les fichiers de templates de l'application (fichiers Twig)
tests/ # Contient les fichiers de tests de l'application
translations/ # Contient les fichiers de traduction de l'application
var/ # Contient les fichiers temporaires de l'application
vendor/ # Contient les dépendances de l'application
.env # Fichier de configuration de l'application
```

## 3. Controller

Les contrôleurs interprètent les requêtes HTTP effectuées via l'URL et renvoient les informations demandées par l'utilisateur à Twig, qui est la Vue.

## 4. Twig

Twig est un moteur de templates, il permet de générer des pages HTML en lien avec les contrôleurs, les entités et les types. Il offre des fonctionnalités telles que les conditions, les boucles, les inclusions, les extensions, les appels de méthodes, les appels de propriétés, les appels de variables, les appels de fonctions, etc.

## 5. Doctrine

Doctrine est un ORM (Object Relational Mapper) pour PHP. Il permet de manipuler des objets PHP qui représentent des données stockées dans une base de données. Par exemple, si vous avez une table Produit dans votre base de données, Doctrine va vous permettre de manipuler les produits de cette table sous forme d'objets PHP. Doctrine est installé par défaut dans Symfony. Ainsi, tout ce qui est en lien avec la base de données pour la création, la modification, la suppression appelle des classes de Doctrine et des méthodes de ces classes.

## 6. Entity

Les entités représentent une table de la base de données, chacune des propriétés de l'entité représentant un champ de la table avec toutes les spécifications de ce champ. Ainsi, les entités sont directement liées à Doctrine. C'est ici que l'on définit les contraintes telles que le fait qu'elles ne soient pas nulles, qu'elles aient un minimum ou un maximum de caractères, le type, et la gestion des messages renvoyés si non respectées.

## 7. Repository

Les repositories représentent les requêtes de SELECT affiliées aux entités. Ils permettent ainsi de récupérer chaque insertion en BDD, grâce à des méthodes `find()`, `findAll()`, `findBy()`...

## 8. Type ou FormType

Les types ou FormTypes génèrent des formulaires en lien avec une entité, chaque propriété de l'entité représentant un input généré par le type. On peut y définir les contraintes aussi, mais ils servent surtout à personnaliser les inputs pour gérer le type d'input, les labels, et les attributs (placeholder, class, id, ...).

## 9. YAML

YAML permet de configurer des fichiers de configuration, comme le fichier `routes.yaml` qui permet de configurer les routes, ou le fichier `security.yaml` qui permet de configurer la sécurité de l'application.

## 10. Service

Un service est un objet qui effectue une tâche spécifique et qui est généralement disponible de manière globale dans toute l'application. Par exemple, l'objet `Doctrine\ORM\EntityManager` est un service qui permet d'effectuer des opérations sur la base de données. Les services sont généralement définis et configurés dans un fichier YAML.

## 11. Commande

Une commande est une classe PHP qui permet d'ajouter des fonctionnalités à la console Symfony. Par exemple, on peut créer une commande pour envoyer un email à tous les utilisateurs d'une application. Les commandes sont généralement définies dans le répertoire `src/Command`.

## 12. Fixtures

Les fixtures sont des classes PHP qui permettent de peupler la base de données avec des données de test. Par exemple, on peut créer des fixtures pour ajouter des utilisateurs, des produits, des catégories, etc. Les fixtures sont généralement définies dans le répertoire `src/DataFixtures`.

## 13. Event

Un événement est un objet qui représente un événement déclenché par une action dans l'application. Par exemple, on peut créer un événement pour envoyer un email à un utilisateur lorsqu'il s'inscrit sur le site. Les événements sont généralement définis dans le répertoire `src/Event`.

## Références

-   [Symfony](https://symfony.com/)
-   [Documentation Symfony](https://symfony.com/doc/current/index.html)
-   [Twig](https://twig.symfony.com/)
-   [Doctrine](https://www.doctrine-project.org/)

---

[Haut de page](#)
