# Controller (MVC)

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

```php
#[Route("/", name="home_index")]
```

## Return

-   Les méthodes des contrôleurs doivent contenir un `return` de type `Response`, soit `redirectToRoute()` soit `render()` ou `json()`.
-   Les méthodes des contrôleurs doivent être annotées avec `#[Route()]` pour définir la route.
-   Les méthodes des contrôleurs doivent contenir un `return $this->render('nomducontrollerenminuscule/nomdufichiertwig.html.twig', []);` pour afficher une vue.

```php
#[Route("/", name="home")]
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
