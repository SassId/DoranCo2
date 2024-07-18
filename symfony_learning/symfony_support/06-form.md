# AbstractTypes

## Sommaire

-   [Introduction](#introduction)
-   [Création d'un AbstractType](#création-dun-abstracttype)
-   [Options](#options)
-   [Utilisation de l'AbstractType](#utilisation-de-labstracttype)
-   [Affichage du formulaire](#affichage-du-formulaire)
-   [Validation](#validation)
-   [Conclusion](#conclusion)

## Introduction

Les AbstractTypes sont des classes abstraites qui permettent de définir des formulaires. Elles sont utilisées pour définir les champs du formulaire et les options de ce dernier.

## Création d'un AbstractType

Pour créer un AbstractType, il suffit de créer une classe qui hérite de `AbstractType` et de redéfinir la méthode `buildForm` qui permet de définir les champs du formulaire.

```php
<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;

class ArticleType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title')
            ->add('content')
            ->add('publishedAt')
        ;
    }
}
```

## Options

Les options permettent de définir le comportement du formulaire. Par exemple, on peut définir si le formulaire doit être protégé contre les attaques CSRF, si le formulaire doit être affiché en mode horizontal, etc.

```php
<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ArticleType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title', TextType::class, [
                'label' => 'Titre',
                'attr' => ['class' => 'form-control'],
                'required' => true,
                'help' => 'Le titre de l\'article',
                'placeholder' => 'Entrez le titre de l\'article',
            ])
            ->add('content')
            ->add('publishedAt')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Article, // Classe de l'objet à lier
            'csrf_protection' => true, // Protection CSRF
            'attr' => ['class' => 'form-horizontal'], // Classe CSS
        ]);
    }
}
```

Voici une liste des principaux paramètres que l'on peut passer dans le tableau d'options lors de l'ajout d'un champ de formulaire avec la méthode `->add()` en Symfony :

1. `label`: Définit le libellé du champ

2. `required`: Indique si le champ est obligatoire (true) ou optionnel (false)

3. `attr`: Permet d'ajouter des attributs HTML au champ (ex: `['class' => 'form-control']`)

4. `data`: Définit la valeur par défaut du champ

5. `mapped`: Indique si le champ doit être lié à une propriété de l'objet sous-jacent

6. `constraints`: Permet d'ajouter des contraintes de validation spécifiques au champ (ex: `new NotBlank()`)

7. `placeholder`: Ajoute une option vide au début de la liste pour les champs de type choix

8. `expanded`: Pour les champs de type choix, affiche les options sous forme de boutons radio ou cases à cocher

9. `disabled`: Désactive le champ

10. `help`: Ajoute un texte d'aide sous le champ

11. `row_attr`: Permet d'ajouter des attributs HTML à la ligne du formulaire contenant le champ

12. `empty_data`: Définit la valeur à utiliser si le champ est vide

13. `invalid_message`: Personnalise le message d'erreur en cas de validation échouée

Ces options permettent de personnaliser le comportement et l'apparence des champs de formulaire en Symfony, offrant une grande flexibilité dans la création de formulaires.

## Utilisation de l'AbstractType

Pour utiliser un AbstractType, il suffit de l'instancier dans le contrôleur et de l'ajouter à la méthode `createForm`.

```php
<?php

namespace App\Controller;

use App\Form\ArticleType;

class ArticleController extends AbstractController
{
    public function new(Request $request)
    {
        $article = new Article();
        // `createForm()` prend en paramètre le nom de l'AbstractType et l'objet à lier
        $form = $this->createForm(ArticleType::class, $article);

        // handleRequest permet de gérer la requête et de lier les données du formulaire à l'objet
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // ...
        }

        return $this->render('article/new.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
```

## Affichage du formulaire

Pour afficher le formulaire dans une vue Twig, il suffit d'utiliser la fonction `form` avec le formulaire en paramètre.

```twig
{# templates/article/new.html.twig #}

{{ form(form) }}
```

Twig permet de personnaliser l'affichage du formulaire en utilisant des thèmes.

```twig
{# templates/article/new.html.twig #}

{{ form_start(form) }}
    {{ form_row(form.title) }}
    {{ form_row(form.content) }}
    {{ form_row(form.publishedAt) }}
    {{ form_rest(form) }}
{{ form_end(form) }}
```

## Validation

La validation des données du formulaire se fait automatiquement grâce aux contraintes de validation définies dans les entités.

```php
<?php

namespace App\Entity;

use Symfony\Component\Validator\Constraints as Assert;

class Article
{
    [Assert\NotBlank]
    private $title;

    [Assert\NotBlank]
    private $content;

    // ...
}
```

## Conclusion

Les AbstractTypes sont des classes abstraites qui permettent de définir des formulaires dans Symfony. Ils permettent de définir les champs du formulaire, les options et la validation des données.

---

[Retour au sommaire](#)
