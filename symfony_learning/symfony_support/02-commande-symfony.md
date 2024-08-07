# 🚀 **[Symfony](https://symfony.com/)** | Commandes de base : Gérer votre application Symfony avec la console

<br>

<center>
<img src="https://symfony.com/logos/symfony_black_03.png" width="100">
</center>

<br>

> 🚀 **[Symfony](https://symfony.com/)** fourni de nombreuses commandes pour gérer votre application. Nous pouvons les exécuter en utilisant la commande `php bin/console` ou `symfony console`. Voici quelques commandes utiles pour travailler avec Symfony.

## Sommaire

-   [1. Installation de Symfony](#1-installation-de-symfony)
    -   [1.1. Avec Symfony CLI](#11-avec-symfony-cli)
    -   [1.2. Avec Composer](#12-avec-composer)
-   [2. Serveur Local](#2-serveur-local)
    -   [2.1. Symfony CLI](#21-symfony-cli)
-   [3. .env](#3-env)
-   [4. Lister les commandes Symfony](#4-lister-les-commandes-symfony)
-   [5. Commandes Make](#5-commandes-make)
-   [6. Base de Données](#6-base-de-données)
-   [7. Twig : Template Engine](#7-twig--template-engine)
-   [8. Debug](#8-debug)
-   [9. Cache](#9-cache)
-   [10. Données de Test](#10-données-de-test)
-   [10. Dashboard d'Administration](#10-dashboard-dadministration)

## 1. Installation de Symfony

### 1.1. Avec Symfony CLI

Créez un nouveau projet avec la dernière version de Symfony en utilisant _Symfony CLI_ :

```bash
symfony new my_project_directory --version="7.1.*" --webapp
```

### 1.2. Avec Composer

Créez un projet (version LTS, voir symfony.com/releases) en utilisant Composer :

```bash
composer create-project symfony/skeleton:"7.1.*" my_project_directory
```

Ensuite, allez dans le répertoire du projet et installez le package "webapp" :

```bash
cd my_project_directory
composer require webapp
```

## 2. Serveur Local

### 2.1. Symfony CLI

Générez un certificat SSL pour le serveur local (à faire une seule fois) :

```bash
symfony server:ca:install
```

Lancez le serveur local avec Symfony CLI :

```bash
symfony serve
```

Lancez le serveur local en arrière-plan (détaché) :

```bash
symfony server -d
```

Lancer le navigateur par défaut avec le serveur local :

```bash
symfony open:local
```

Arrêtez le serveur local :

```bash
symfony serve:stop
```

## 3. .env

Modifiez le fichier .env pour configurer la base de données. Voici un exemple pour MySQL :

```dotenv
DATABASE_URL="mysql://user:password@host:port/database_name"
```

## 4. Lister les commandes Symfony

Symfony fournir de nombreuses commandes pour gérer votre application.
Nous pouvons les exécuter en utilisant la commande `php bin/console` ou `symfony console`.
Pour lister toutes les commandes disponibles, utilisez la commande suivante :

```bash
php bin/console list
```

## 5. Commandes Make

Symfony fournit des commandes "make" pour automatiser la création de certaines parties de votre application :

-   Créez un nouveau controller avec sa fonction index et une vue de cette fonction en Twig :

```bash
php bin/console make:controller
```

-   Créez une nouvelle entité qui représente une table en base de données avec ses propriétés :

```bash
php bin/console make:entity
```

-   Créez un formulaire lié directement à une entité :

```bash
php bin/console make:form
```

-   Créez un CRUD (Create, Read, Update, Delete) pour une entité :

```bash
php bin/console make:crud
```

-   Créez un Validator personnalisé :

```bash
php bin/console make:validator
```

## 6. Base de Données

Symfony propose des commandes pour gérer la base de données :

-   Créez la base de données après avoir configuré le fichier .env :

```bash
php bin/console doctrine:database:create
```

-   Générez un fichier de migration pour les entités créées ou modifiées :

```bash
php bin/console make:migration
```

-   Exécutez les migrations générées pour mettre à jour la base de données avec les entités :

```bash
php bin/console doctrine:migrations:migrate
```

-   Mettez à jour la base de données sans migration (déconseillé) :

```bash
php bin/console doctrine:schema:update --force
```

## 7. Twig : Template Engine

Configurez Bootstrap ou Tailwind CSS pour les formulaires dans le fichier `config/packages/twig.yaml` :

```yaml
twig:
    form_themes: ['bootstrap_5_layout.html.twig']
```

## 8. Debug

Affichez les routes existantes dans votre application :

```bash
php bin/console debug:router
```

Affichez les services disponibles dans votre application :

```bash
php bin/console debug:autowiring

```

Affichez les informations de débogage sur une commande :

```bash
php bin/console help nom_de_la_commande
```

## 9. Cache

Videz le cache de l'application :

```bash
php bin/console cache:clear
```

## 10. Données de Test

Installez le bundle des fixtures et le package Faker pour générer des données de test :

```bash
composer require orm-fixtures fakerphp/faker --dev
```

Créez un fichier de fixtures avec Faker pour générer des données de test :

```bash
php bin/console make:fixtures nom_du_fichier
```

Chargez les fixtures pour insérer les données de test dans la base de données :

```bash
php bin/console doctrine:fixtures:load
```

## 10. Dashboard d'Administration

Installez EasyAdminBundle pour générer un tableau de bord d'administration :

```bash
composer require admin:4.*
```

Créez un tableau de bord d'administration avec EasyAdminBundle :

```bash
php bin/console make:admin:dashboard
```

Créez un CRUD (Create, Read, Update, Delete) avec EasyAdminBundle pour gérer une entité dans l'administration :

```bash
php bin/console make:admin:crud
```

[Haut de page](#)
