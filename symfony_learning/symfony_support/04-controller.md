# 🚀 **[Symfony](https://symfony.com/)** | Controller : Gestion des Requêtes HTTP

<br>

<center>
<img src="https://symfony.com/logos/symfony_black_03.png" width="100">
</center>

<br>

> Les contrôleurs interprètent les requêtes HTTP effectuées via l'URL et renvoient les informations demandées par l'utilisateur à Twig, qui est la Vue.

## Sommaire

-   [Introduction](#introduction)
-   [Route](#route)
-   [Return](#return)
-   [Variables](#variables)
-   [Route dynamique](#route-dynamique)
-   [ParamConverter](#paramconverter)

## Introduction

-   Les contrôleurs sont des classes qui contiennent des méthodes qui correspondent à des routes.
-   Les contrôleurs sont créés dans le dossier `src/Controller`.
-   Les contrôleurs sont créés avec la commande `php bin/console make:controller NomDuController`.
-   Les contrôleurs doivent être des classes PHP qui héritent de `AbstractController`.
-   Les méthodes des contrôleurs doivent être publiques et retourner un objet `Response`.

```bash
php bin/console make:controller NomDuController
```

## Route

-   Les routes sont définies avec l'annotation `#[Route()]`.
-   Les routes sont définies avec un chemin et un nom.
-   Les routes sont définies avec des méthodes HTTP autorisées.

```php
#[Route("/", name="home_index", methods: ["GET"])]
```

## Return

-   Les méthodes des contrôleurs doivent contenir un `return` de type `Response`, soit `redirectToRoute()` soit `render()` ou `json()`.
-   Les méthodes des contrôleurs doivent être annotées avec `#[Route()]` pour définir la route.
-   Les méthodes des contrôleurs doivent contenir un `return $this->render('nomducontrollerenminuscule/nomdufichiertwig.html.twig', []);` pour afficher une vue.

```php
#[Route("/", name="home", methods: ["GET"])]
public function home()
{
    return $this->render('nom_controller_minuscule/nom_fichier.html.twig', []);
}
```

## Variables

-   Les variables à utiliser dans les vues doivent être envoyées depuis la méthode rendant la vue.
-   Les variables à utiliser dans les vues doivent être envoyées dans un tableau associatif en deux parties : le nom de la variable et la valeur de la variable.

```php
return $this->render('nomd_controller_minuscule/nom_fichier.html.twig', [
    'title' => 'Le contenu de la variable'
]);
```

## Route dynamique

-   Les routes dynamiques sont définies avec des paramètres dans l'URL.
-   Les paramètres sont définis dans l'annotation `#[Route()]` avec des accolades `{}`.
-   On peut récupérer les paramètres dans la méthode du contrôleur directement en les passant en paramètre de la méthode.

```php
#[Route("/article/{id}", name="article")]
public function article($id)
{
    return $this->render('article/article.html.twig', [
        'id' => $id
    ]);
}
```

## ParamConverter

-   Le ParamConverter est un mécanisme qui permet de convertir automatiquement un paramètre de route en objet.
-   Le ParamConverter est activé par défaut dans Symfony pour les `id`.

```php
#[Route("/article/{id}", name="article")]
public function article(Article $article)
{
    return $this->render('article/article.html.twig', [
        'article' => $article
    ]);
}
```

Pour pouvoir utiliser le ParamConverter avec les autres champs que l'`id`, par exemple le slug, il faut configurer dans le fichier `config/packages/doctrine.yaml`

```yaml
controller_resolver:
    auto_mapping: true:
```

---

[🏠 Retour au sommaire](#)
