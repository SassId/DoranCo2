# Twig

Twig est un moteur de template pour PHP. Il est utilisé pour générer des pages HTML dynamiques à partir de modèles. Symfony utilise Twig par défaut pour les vues.

## Installation

Pour installer Twig, exécutez la commande suivante :

```bash
composer require twig
```

## Syntaxe de base

Twig utilise des balises pour afficher des variables, des structures de contrôle et des filtres. Voici quelques exemples de syntaxe Twig :

-   Commentaire : `{# Commentaire #}`
-   Héritage : `{% extends 'base.html.twig' %}`
-   Bloc : `{% block content %} ... {% endblock %}`
-   Inclure un fichier : `{% include 'file.html.twig' %}`
-   Structure de contrôle `for` : `{% for item in items %} ... {% endfor %}`
-   Structure de contrôle `if` : `{% if condition %} ... {% endif %}`
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
{% if is_logged_in %}
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

```twig
{{ app.parameter_name }}
```

Pour accéder à un service dans un modèle Twig, utilisez :

```twig
{{ app.service_name.method() }}
```



Twig offre de nombreuses fonctionnalités pour rendre vos modèles plus dynamiques et interactifs. Consultez la [documentation officielle de Twig](https://twig.symfony.com/doc/3.x/) pour en savoir plus sur ses fonctionnalités et sa syntaxe.

---

[Haut de page](#)
