# 🚀 **[Symfony](https://symfony.com/)** | Twig : Générer des pages HTML dynamiques

<br>

<center>
<img src="https://symfony.com/logos/symfony_black_03.png" width="100">
</center>

<br>

> Twig est un moteur de template pour PHP. Il est utilisé pour générer des pages HTML dynamiques à partir de modèles. Symfony utilise Twig par défaut pour les vues.

## Sommaire

-   [Installation](#installation)
-   [Syntaxe de base](#syntaxe-de-base)
-   [Utilisation](#utilisation)
    -   [Variables](#variables)
    -   [Structures de contrôle](#structures-de-contrôle)
-   [Assets (CSS, JS, Images)](#assets-css-js-images)
-   [Liens et formulaires](#liens-et-formulaires)
-   [app](#app)
-   [Conclusion](#conclusion)

## Installation

Pour installer Twig, exécutez la commande suivante :

```bash
composer require twig
```

## Syntaxe de base

Twig utilise des balises pour afficher des variables, des structures de contrôle et des filtres. Voici quelques exemples de syntaxe Twig :

-   Balises de commentaire : `{# Commentaire #}`
-   Les structures de contrôle :
    -   Héritage : `{% extends 'base.html.twig' %}`
    -   Bloc : `{% block content %} ... {% endblock %}`
    -   Inclure un fichier : `{% include 'file.html.twig' %}`
    -   Structure de contrôle `for` : `{% for item in items %} ... {% endfor %}`
    -   Structure de contrôle `if` : `{% if condition %} ... {% endif %}`
-   Affichage des variables :
    -   Afficher une variable : `{{ variable }}`
    -   Filtre : `{{ variable|filter }}`

## Utilisation

### Variables

Pour afficher une variable dans un fichier Twig, utilisez la syntaxe `{{ }}`. Par exemple, pour afficher le titre, utilisez :

```twig
<h1>{{ title }}</h1>
```

### Structures de contrôle

Vous pouvez également utiliser des structures de contrôle comme les boucles `for` et les conditions `if` dans Twig. Voici un exemple de boucle `for` :

```twig
<ul>
    {% for item in items %}
        <li>{{ item }}</li>
    {% endfor %}
</ul>
```

Et un exemple de condition `if` :

```twig
{% if is_granted('IS_AUTHENTICATED') %}
    <p>Welcome, {{ user.name }}!</p>
{% else %}
    <p>Please log in to continue.</p>
{% endif %}
```

## Assets (CSS, JS, Images)

Pour inclure des fichiers CSS, JS ou des images dans votre projet Symfony, placez-les dans le répertoire `public/` à la racine de votre projet.

Pour inclure un fichier CSS, JS ou une image dans un template Twig, utilisez la fonction `asset()` :

```twig
<link rel="stylesheet" href="{{ asset('css/style.css') }}">
<script src="{{ asset('js/script.js') }}"></script>
<img src="{{ asset('images/image.jpg') }}" alt="Image">
```

Assurez-vous que le chemin spécifié dans `asset()` correspond au chemin réel du fichier dans le répertoire `public/`.

## Liens et formulaires

Pour les liens cliquables, utilisez la fonction `path()` :

```twig
<a href="{{ path('route_name') }}">Lien</a>
```

Pour les formulaires, utilisez la fonction `form_start()` :

```twig
{{ form_start(form) }}
```

## app

L'objet `app` vous permet d'accéder à l'application Symfony dans vos modèles Twig. Vous pouvez utiliser `app` pour accéder à des services, des paramètres et d'autres fonctionnalités de Symfony.

Par exemple, pour accéder à un paramètre dans un modèle Twig, utilisez :

-   Pour accéder à la requête actuelle :

```twig
{{ app.request}}
```

-   Pour accéder à l'utilisateur actuel :

```twig
{{ app.user }}
```

-   Pour accéder à la session actuelle :

```twig
{{ app.session }}
```

-   Pour acceder à la Session Flash :

```twig
{{ app.flashes }}
```

Twig offre de nombreuses fonctionnalités pour rendre vos modèles plus dynamiques et interactifs. Consultez la [documentation officielle de Twig](https://twig.symfony.com/doc/3.x/) pour en savoir plus sur ses fonctionnalités et sa syntaxe.

## Conclusion

Twig est un moteur de template puissant qui facilite la création de vues dynamiques dans Symfony. En utilisant Twig, vous pouvez générer des pages HTML interactives et attrayantes pour votre application Symfony.

---

**🔗 Liens Utiles :**

-   [Documentation officielle de Twig](https://twig.symfony.com/doc/3.x/)
-   [Symfony avec Twig](https://symfony.com/doc/current/templating.html)
-   [Comment Customiser les formulaires avec Twig](https://symfony.com/doc/current/form/form_customization.html)

---

[🏠 Retour au sommaire](#)
