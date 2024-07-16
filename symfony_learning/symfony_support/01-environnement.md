# Environnement de Travail Symfony

<br>

<center>
<img src="https://symfony.com/logos/symfony_black_03.png" width="100">
</center>

<br>

## Sommaire

-   [1. Extensions VS Code](#1-extensions-vs-code)
-   [2. Paramètres VS Code](#2-paramètres-vs-code)
-   [3. Composer : Gestionnaire de dépendances PHP](#3-composer--gestionnaire-de-dépendances-php)
    -   [3.1. Installation de Composer](#31-installation-de-composer)
    -   [3.2. Utilisation de Composer](#32-utilisation-de-composer)
-   [4. Symfony CLI](#4-symfony-cli)

## 1. Extensions VS Code

-   [French Language Pack for Visual Studio Code (Microsoft)](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-fr)
-   [Prettier - Code formatter (Prettier)](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
-   [Live Server (Ritwick Dey)](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
-   [Auto Rename Tag (Jun Han)](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
-   [Better Comments (Aaron Bond)](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
-   [Material Icon Theme (Philipp Kief)](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
-   [Auto-Open Markdown Preview (hnw)](https://marketplace.visualstudio.com/items?itemName=hnw.vscode-auto-open-markdown-preview)
-   [Path Intellisense (Christian Kohler)](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
-   [Error Lens (Alexander)](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)
-   [Trailing Spaces (Shardul Mahadik)](https://marketplace.visualstudio.com/items?itemName=shardulm94.trailing-spaces)
-   [vscode-pdf (tomoki1207)](https://marketplace.visualstudio.com/items?itemName=tomoki1207.pdf)
-   [HTML CSS Support (ecmel)](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css)

Pour travailler efficacement avec Symfony, il est recommandé d'installer les extensions suivantes dans Visual Studio Code :

-   [PHP Intelephense (Ben Mewburn)](https://marketplace.visualstudio.com/items?itemName=bmewburn.vscode-intelephense-client)
-   [PHP Namespace Resolver (Mehedi Hassan)](https://marketplace.visualstudio.com/items?itemName=MehediDracula.php-namespace-resolver)
-   [PHP Getters & Setters (phproberto)](https://marketplace.visualstudio.com/items?itemName=phproberto.vscode-php-getters-setters)
-   [PHP Doc Generator (Ron van der Heijden)](https://marketplace.visualstudio.com/items?itemName=ronvanderheijden.phpdoc-generator)
-   [Symfony for VSCode (TheNouillet)](https://marketplace.visualstudio.com/items?itemName=TheNouillet.symfony-vscode)
-   [Twig Language 2 (mblode)](https://marketplace.visualstudio.com/items?itemName=mblode.twig-language-2)

## 2. Paramètres VS Code

-   Editor: Format On Save : true
-   PHP: Suggest > Basic : false
-   Emmet: Include Languages : { "twig": "html" }

## 3. Composer : Gestionnaire de dépendances PHP

Composer est un outil essentiel pour gérer les dépendances PHP dans un projet Symfony. Il permet de télécharger et d'installer des bibliothèques tierces facilement.

### 3.1. Installation de Composer

-   Pour Windows : [Téléchargement de l'Exécutable](https://getcomposer.org/Composer-Setup.exe)

-   Pour Linux ou Mac : [Instructions d'Installation](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-macos)

```bash
sudo apt install composer
```

### 3.2. Utilisation de Composer

Composer utilise un fichier `composer.json` pour définir les dépendances du projet. Pour créer un nouveau projet Symfony, utilisez la commande suivante dans le terminal :

Pour installer une bibliothèque comme le bundle FrameworkBundle, utilisez la commande suivante dans le terminal :

```bash
composer require symfony/framework-bundle
```

Composer téléchargera le bundle ainsi que toutes ses dépendances et les installera dans le projet.

## 4. Symfony CLI

Symfony CLI est un outil de développement pratique qui permet de créer, exécuter et gérer des applications Symfony directement depuis votre terminal.

Pour installer Symfony CLI, suivez les instructions sur le site officiel de Symfony : [Installation de Symfony CLI](https://symfony.com/download)

[Haut de page](#)
