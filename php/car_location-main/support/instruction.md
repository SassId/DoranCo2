# Projet Location de voiture (car-location)

## Description

Ce projet est une application web de location de voitures. Elle permet de gérer les locations de voitures, les clients et les voitures de manière efficace et intuitive.

## Fonctionnalités

-   **Gestion des clients** : Ajouter, modifier, supprimer et consulter les informations des clients.
-   **Gestion des voitures** : Ajouter, modifier, supprimer et consulter les informations des voitures disponibles à la location.
-   **Gestion des locations** : Gérer les réservations, suivre les locations en cours et historiques.

## Installation

### Prérequis

-   Serveur Apache
-   PHP Poo
-   MySQL

### Étapes d'installation

1. **Configurer le serveur Apache**

    - Assurez-vous que le serveur Apache redirige les requêtes vers le dossier `public` du projet à l'aide du fichier `.htaccess`.

    ```apacheconf
    # .htaccess
    RewriteEngine On
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^(.*)$ public/index.php?url=$1 [QSA,L]

    ```

2. **Créer un Autoloader**

    - Utilisez un autoloader pour charger les classes automatiquement.

    ```php
    // Autoloader.php
    spl_autoload_register(function ($class) {
        require_once ''.php';
    });
    ```

3. **Créer un routeur**

    - Créez un routeur pour rediriger les requêtes vers les bonnes actions.

    ```php
    // index.php
    require_once 'Autoloader.php';

    use App\Autoloader;
    use App\Router;

    Autoloader::autoload();

    $router = new Router();
    $router->execute();
    ```

4. **Créer des contrôleurs**

    - Créez des contrôleurs pour gérer les actions.

    ```php
    // Controllers/ClientController.php
    class ClientController {
        public function index() {
            // Code pour afficher la liste des clients
        }

        public function create() {
            // Code pour ajouter un client
        }

        // Autres actions...
    }
    ```

## Base de données

Le projet utilise une base de données MySQL. Suivez les étapes ci-dessous pour configurer la base de données.

### Création de la base de données

1. **Créer la base de données**

    ```sql
    CREATE DATABASE car_location;
    ```

2. **Créer les tables**

    ```sql
    -- Table Clients
    CREATE TABLE client (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        phone VARCHAR(20)
    );

    -- Table Voitures
    CREATE TABLE car (
        id INT AUTO_INCREMENT PRIMARY KEY,
        model VARCHAR(255) NOT NULL,
        description TEXT,
        rental_price DECIMAL(10, 2),
        image VARCHAR(255)
    );

    -- Table Locations
    CREATE TABLE rental (
        id INT AUTO_INCREMENT PRIMARY KEY,
        client_id INT,
        car_id INT,
        start_date DATE,
        end_date DATE,
        FOREIGN KEY (client_id) REFERENCES client(id),
        FOREIGN KEY (car_id) REFERENCES car(id)
    );
    ```

3. Insérez des données dans les tables.

```sql
-- Insertion de données
INSERT INTO car (model, description, price, image_path) VALUES
('Toyota Corolla', 'Voiture économique et fiable', 20000.00, 'images/toyota_corolla.jpg'),
('Honda Civic', 'Compacte sportive avec de bonnes performances', 22.00, 'images/honda_civic.jpg'),
('Ford Mustang', 'Voiture de sport emblématique avec un V8 puissant', 35.99, 'images/ford_mustang.jpg'),
('Chevrolet Camaro', 'Muscle car avec un design agressif', 33.99, 'images/chevrolet_camaro.jpg'),
('Tesla Model S', 'Voiture électrique de luxe avec une grande autonomie', 80.99, 'images/tesla_model_s.jpg'),
('BMW 3 Series', 'Berline de luxe avec des performances dynamiques', 45.99, 'images/bmw_3_series.jpg'),
('Audi A4', 'Berline élégante avec des technologies avancées', 42.99, 'images/audi_a4.jpg'),
('Mercedes-Benz C-Class', 'Berline de luxe avec un intérieur raffiné', 48.99, 'images/mercedes_benz_c_class.jpg'),
('Volkswagen Golf', 'Compacte polyvalente avec une bonne tenue de route', 25.99, 'images/volkswagen_golf.jpg'),
('Nissan Leaf', 'Voiture électrique compacte avec une autonomie décente', 30.99, 'images/nissan_leaf.jpg');
```

## Exercice Pratique

### Exercice 1 : Ajouter un Client

1. Créez un formulaire HTML pour ajouter un nouveau client.
2. Dans le contrôleur `ClientController`, créez une méthode `create` pour traiter la soumission du formulaire et ajouter un nouveau client à la base de données.

#### Solution

```html
<!-- Formulaire HTML -->
<form action="client/create" method="post">
    <label for="name">Nom:</label>
    <input type="text" id="name" name="name" />
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" />
    <label for="phone">Téléphone:</label>
    <input type="text" id="phone" name="phone" />
    <input type="submit" value="Ajouter" />
</form>
```

```php
// ClientController.php
public function create() {
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];

        $db = new Database();
        $db->query("INSERT INTO client (name, email, phone) VALUES (?, ?, ?)", [$name, $email, $phone]);
    }

    // Afficher le formulaire
    require 'views/client/create.php';
}
```

### Exercice 2 : Lister les Voitures

1. Créez une méthode `index` dans le contrôleur `CarController` pour récupérer et afficher toutes les voitures.
2. Affichez la liste des voitures dans une vue HTML.

#### Solution

```php
// CarController.php
class CarController {
    public function index() {
        $db = new Database();
        $cars = $db->query("SELECT * FROM car")->fetchAll();

        require 'views/car/index.php';
    }
}
```

```html
<!-- Vue HTML -->
<table>
    <thead>
        <tr>
            <th>Marque</th>
            <th>Modèle</th>
            <th>Année</th>
            <th>Prix de location</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach ($cars as $car): ?>
        <tr>
            <td><?= $car['brand'] ?></td>
            <td><?= $car['model'] ?></td>
            <td><?= $car['year'] ?></td>
            <td><?= $car['rental_price'] ?></td>
        </tr>
        <?php endforeach; ?>
    </tbody>
</table>
```

Ces exercices vous permettront de mettre en pratique les concepts de base pour la gestion des clients et des voitures dans une application de location de voitures.
