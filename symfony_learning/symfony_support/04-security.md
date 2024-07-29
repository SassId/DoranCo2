# Symfony Authentication Guide

<br>

<center>
<img src="https://symfony.com/logos/symfony_black_03.png" width="100">
</center>

<br>

Ce guide vous explique comment configurer l'authentification dans une application Symfony.

## 1. Vérification de la Sécurité

Il est important de vérifier régulièrement les vulnérabilités de sécurité dans vos dépendances.

```bash
symfony check:security
```

## 2. Création d'un Utilisateur

Créez une entité utilisateur avec Symfony. Cela configurera également le système de sécurité pour gérer les utilisateurs.

```bash
symfony console make:user
```

### Explication

Cette commande vous posera des questions pour configurer l'entité utilisateur, comme le nom de la classe et les champs nécessaires (e.g., `email`, `password`). Par défaut, elle créera une classe `User` dans le répertoire `src/Entity`.

## 3. Configuration du Fichier de Sécurité

Après avoir créé l'utilisateur, configurez le fichier `config/packages/security.yaml` pour définir les pare-feu et les encodages des mots de passe.

## 4. Création d'un Formulaire de Connexion

Générez un formulaire de connexion et configurez votre système de sécurité pour utiliser ce formulaire.

```bash
symfony console make:security:form-login
```

### Explication

Cette commande crée un contrôleur de connexion et les templates associés, ainsi que les routes nécessaires. Par défaut, elle configurera les routes `/login` et `/logout`.

## 5. Création d'un Formulaire d'Inscription

Générez un formulaire d'inscription pour permettre aux utilisateurs de créer un compte.

```bash
symfony console make:registration-form
```

### Explication

Cette commande crée un formulaire d'inscription, un contrôleur, et met à jour l'entité `User` pour gérer l'inscription. Elle ajoute également une route `/register`.
Mettre à jour la base de données pour ajouter les champs de l'utilisateur nouvellement créés.

## 6. Test des Routes de Sécurité

Vérifiez que les routes de connexion, déconnexion et inscription fonctionnent correctement en accédant aux URLs suivantes :

-   **Connexion :** `/login`
-   **Déconnexion :** `/logout`
-   **Inscription :** `/register`

## 7. Ajout de Rôles et de Permissions

Pour ajouter des rôles à vos utilisateurs, modifiez l'entité `User` :

```php
class User implements UserInterface
{
    // ...

    #[ORM\Column(type: 'json')]
    private array $roles = [];

    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }
}
```

### Modification des Permissions

Mettez à jour `security.yaml` pour ajouter des restrictions basées sur les rôles :

```yaml
security:
    access_control:
        - { path: ^/admin, roles: ROLE_ADMIN }
        - { path: ^/profile, roles: ROLE_USER }
```

## 8. Personnalisation des Formulaires et Vues

Personnalisez les templates générés dans le répertoire `templates` pour correspondre à votre design. Par exemple, modifiez `login.html.twig` pour ajouter des styles Bootstrap :

```twig
{% extends 'base.html.twig' %}

{% block body %}
    <h1>Login</h1>
    <form method="post">
        {% if error %}
            <div class="alert alert-danger">{{ error.messageKey|trans(error.messageData, 'security') }}</div>
        {% endif %}

        <div class="form-group">
            <label for="inputEmail">Email</label>
            <input type="email" name="_username" id="inputEmail" class="form-control" required autofocus>
        </div>

        <div class="form-group">
            <label for="inputPassword">Password</label>
            <input type="password" name="_password" id="inputPassword" class="form-control" required>
        </div>

        <button class="btn btn-lg btn-primary" type="submit">
            Sign in
        </button>
    </form>
{% endblock %}
```

En suivant ce guide, vous pouvez configurer un système d'authentification robuste dans votre application Symfony. Assurez-vous de tester chaque étape et de personnaliser les formulaires et les vues selon vos besoins.
