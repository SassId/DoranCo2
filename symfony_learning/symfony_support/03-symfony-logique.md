# 🚀 **[Symfony](https://symfony.com/)** | Logique : Vue d'ensemble

<br>

<center>
<img src="https://symfony.com/logos/symfony_black_03.png" width="100">
</center>

<br>

> Vue d'ensemble de la logique de Symfony, y compris la création de contrôleurs, la gestion des bases de données, la création de formulaires, etc.

## Sommaire

-   [1. Création d'un Contrôleur et d'une Vue](#1-création-dun-contrôleur-et-dune-vue)
-   [2. Création de la Base de Données](#2-création-de-la-base-de-données)
-   [3. Créez un formulaire Symfony :](#3-créez-un-formulaire-symfony-)
-   [4. Manipulation des Données](#4-manipulation-des-données)
-   [5. Affichage et Modification des Données](#5-affichage-et-modification-des-données)
-   [6. Lecture des Données Provenant de la Base de Données](#6-lecture-des-données-provenant-de-la-base-de-données)
-   [7. Création (CREATE)](#7-création-create)
-   [8. Recherche (READ)](#8-recherche-read)
-   [9. Mise à Jour (UPDATE)](#9-mise-à-jour-update)
-   [10. Suppression (DELETE)](#10-suppression-delete)
-   [11. Assets (CSS, JS, Images)](#11-assets-css-js-images)

## 1. Création d'un Contrôleur et d'une Vue

Pour commencer, créez votre template de base dans `base.html.twig` en incluant la navigation, le block `body`, les liens CSS, les scripts, etc.

Configurez ensuite dans `config/package/twig.yaml` les formulaires pour Bootstrap ou Tailwind CSS :

```yaml
twig:
    form_themes: ['bootstrap_5_layout.html.twig']
```

Ensuite, créez votre premier contrôleur :

```bash
php bin/console make:controller NomDuController
```

Supprimez la méthode `index` créée dans le contrôleur et créez une nouvelle méthode publique d'accueil. Par exemple :

```php
#[Route("/", name="home")]
public function home()
{
    return $this->render('nomducontrollerenminuscule/nomdufichiertwig.html.twig', []);
}
```

Toute méthode publique doit contenir un `return` de type `Response`, soit `redirectToRoute()` soit `render()` ou `json()`.

Pour toute page nécessitant le rendu d'une vue, utilisez `render`. Toute variable à utiliser dans le Twig doit être envoyée depuis la méthode rendant la vue de cette page.

Pour utiliser une variable `title` dans le Twig, la méthode doit ressembler à ceci :

```php
return $this->render('nomducontrollerenminuscule/nomdufichiertwig.html.twig', [
    'title' => $title
]);
```

À gauche de `=>` se trouve le nom de la variable que vous utiliserez dans le Twig, à droite se trouve le nom de la variable dans la méthode qui contient les informations de `title`.

## 2. Création de la Base de Données

Pour commencer à travailler avec une base de données, vous devez configurer le fichier `.env` avec les informations de connexion à la base de données.

```dotenv
DATABASE_URL="mysql://user:password@host:port/database_name"
```

ENsuite, créez la base de données avec la commande suivante :

```bash
php bin/console doctrine:database:create
```

Connaissez votre schéma de base de données. Commencez par créer la première table logique pour votre projet.

Pour créer une table, utilisez la commande suivante :

```bash
php bin/console make:entity nom_table
```

Chaque champ de la table en base de données est une propriété. Vous devez renseigner son nom, son type et s'il est nullable ou non.

Pour exécuter la création de cette table en base de données, utilisez soit des migrations :

```bash
php bin/console make:migration
php bin/console doctrine:migrations:migrate
```

Soit de manière brute :

```bash
php bin/console doctrine:schema:update --force
```

Ensuite, effectuez des contrôles sur les propriétés des entités. Consultez les `Assert` et les `Constraints` dans la documentation Symfony.

## 3. Créez un formulaire Symfony :

```bash
php bin/console make:form nom_formulaire
```

Allez dans `src/form/nomFormType.php` et effectuez les contrôles sur les champs du formulaire. N'oubliez pas d'importer toutes les classes nécessaires.

Ajoutez un bouton de soumission, soit en utilisant `SubmitType` soit en le créant en HTML dans le Twig.

Créez une méthode dans le contrôleur pour générer l'affichage de ce formulaire.

## 4. Manipulation des Données

Lorsque vous souhaitez récupérer des données de la superglobale (`$_GET`, `$_POST`), injectez en dépendance `Request $request` de `HttpFoundation`.

Pour accéder aux données de la session ou les modifier, utilisez `SessionInterface $session`.

Pour récupérer des données provenant de la base de données, appelez le repository de la table.

Pour modifier, insérer ou supprimer en base de données, appelez `EntityManagerInterface $manager`.

## 5. Affichage et Modification des Données

Pour afficher des données provenant de la base de données, vous devez accéder au repository correspondant à votre entité.

```php
public function maMethod(NomEntiteRepository $repository)
{
    $repository->findAll();
}
```

Continuez à explorer et à pratiquer ces concepts pour renforcer votre compréhension de la logique de Symfony. N'hésitez pas à poser des questions si vous en avez !

## 6. Lecture des Données Provenant de la Base de Données

Pour afficher des données provenant de la base de données, vous devez accéder au repository correspondant à votre entité.

Voici un exemple de méthode dans un contrôleur pour afficher des données :

```php
#[Route("/afficheDonnees", name="afficheDonnees")]
public function afficheDonnees(NomDeVotreEntiteRepository $repository)
{
    $donnees = $repository->findAll();

    return $this->render('nomcontroller/nomdufichierd.html.twig', [
        'donnees' => $donnees
    ]);
}
```

Cette méthode récupère toutes les données de votre entité à partir du repository et les passe au template Twig pour affichage.

## 7. Création (CREATE)

Pour créer de nouvelles données dans la base de données, vous pouvez utiliser une méthode dans votre contrôleur comme celle-ci :

```php
#[Route("/createDonnees", name="createDonnees")]
public function createDonnee(EntityManagerInterface $manager)
{
    $entite = new NomDeVotreEntite();
    $entite->setPropriete('valeur');

    // persist() est utilisé pour dire à Doctrine de "suivre" cette entité
    $manager->persist($entite);
    $manager->flush();

    // Ajoutez un message Flash et redirigez l'utilisateur vers une autre page
    $this->addFlash('success', 'Données créées avec succès !');
    return $this->redirectToRoute('route_de_redirection');
}
```

Cette méthode crée une nouvelle entité, définit ses propriétés, utilise `persist()` pour dire à Doctrine de suivre cette entité, puis utilise `flush()` pour enregistrer les modifications dans la base de données.

## 8. Recherche (READ)

Pour rechercher des données dans la base de données, vous pouvez utiliser une méthode dans votre contrôleur comme celle-ci :

```php
#[Route("/rechercheDonnees/{id}", name="rechercheDonnees")]
public function rechercheDonnee(NomDeVotreEntiteRepository $repository)
{
    $entite = $repository->find($id);

    return $this->render('nomducontrollerenminuscule/nomdufichierderecherche.html.twig', [
        'entite' => $entite
    ]);
}
```

Cette méthode utilise le repository de l'entité pour rechercher une entité par son identifiant, puis passe cette entité au template Twig pour affichage.

## 9. Mise à Jour (UPDATE)

Pour mettre à jour des données dans la base de données, vous pouvez utiliser une méthode dans votre contrôleur comme celle-ci :

```php
#[Route("/updateDonnees/{id}", name="updateDonnees")]
public function updateDonnee(NomDeVotreEntite $entite, EntityManagerInterface $manager)
{
    $entite->setPropriete('nouvelleValeur');

    $manager->flush();

    // Ajoutez un message Flash et redirigez l'utilisateur vers une autre page
    $this->addFlash('success', 'Données mises à jour avec succès !');
    return $this->redirectToRoute('route_de_redirection');
}
```

Cette méthode prend en paramètre une entité à mettre à jour, modifie une propriété de cette entité, puis utilise `EntityManagerInterface` pour mettre à jour la base de données.

## 10. Suppression (DELETE)

Pour supprimer des données de la base de données, vous aurez besoin de `EntityManagerInterface`, vous pouvez utiliser une méthode dans votre contrôleur comme celle-ci :

```php
#[Route("/deleteDonnees/{id}", name="deleteDonnees")]
public function deleteDonnee(NomDeVotreEntite $entite, EntityManagerInterface $manager)
{
    $manager->remove($entite);
    $manager->flush();

    $this->addFlash('danger', 'Données supprimées avec succès !');
    return $this->redirectToRoute('route_de_redirection');
}
```

Cette méthode prend en paramètre une entité à supprimer, puis utilise `EntityManagerInterface` pour la supprimer de la base de données.

## 11. Assets (CSS, JS, Images)

Pour inclure des fichiers CSS, JS ou des images dans votre projet Symfony, placez-les dans le répertoire `public/` à la racine de votre projet.

Pour inclure un fichier CSS, JS ou une image dans un template Twig, utilisez la fonction `asset()` :

```twig
<link rel="stylesheet" href="{{ asset('css/style.css') }}">
<script src="{{ asset('js/script.js') }}"></script>
<img src="{{ asset('images/image.jpg') }}" alt="Image">
```

Assurez-vous que le chemin spécifié dans `asset()` correspond au chemin réel du fichier dans le répertoire `public/`.

Pour les liens cliquables, utilisez la fonction `path()` :

```twig
<a href="{{ path('route_name') }}">Lien</a>
```

Pour les formulaires, utilisez la fonction `form_start()` :

```twig
{{ form_start(form) }}
```

---

[🏠 Retour au sommaire](#)
