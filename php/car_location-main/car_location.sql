-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 10 juil. 2024 à 09:07
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `car_location`
--
CREATE DATABASE IF NOT EXISTS `car_location` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `car_location`;

-- --------------------------------------------------------

--
-- Structure de la table `car`
--

CREATE TABLE `car` (
  `id` int(11) NOT NULL,
  `modele` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `prix` decimal(10,2) DEFAULT NULL,
  `img_path` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `car`
--

INSERT INTO `car` (`id`, `modele`, `description`, `prix`, `img_path`) VALUES
(1, 'Tesla Model S', 'Voiture électrique haut de gamme avec une autonomie exceptionnelle.', 199.99, 'Tesla_Model_S.jpg'),
(2, 'BMW i8', 'Voiture de sport hybride avec des performances impressionnantes.', 349.00, 'BMW_i8.jpg'),
(3, 'Audi A6', 'Berline de luxe avec un intérieur spacieux et confortable.', 149.00, 'Audi_A6.jpg'),
(4, 'Mercedes-Benz C-Class', 'Compacte de luxe avec des technologies avancées et un design élégant.', 139.00, 'Mercedes_Benz_C_Class.jpg'),
(5, 'Ford Mustang', 'Voiture de sport iconique avec un moteur puissant et un design agressif.', 159.95, 'Ford_Mustang.jpg'),
(6, 'Chevrolet Camaro', 'Voiture de sport américaine avec un style musclé et des performances robustes.', 125.00, 'Chevrolet_Camaro.jpg'),
(7, 'Honda Civic', 'Voiture compacte fiable avec une excellente économie de carburant.', 60.00, 'Honda_Civic.jpg'),
(8, 'Toyota Corolla', 'Voiture compacte populaire connue pour sa fiabilité et son économie de carburant.', 55.00, 'Toyota_Corolla.jpg'),
(9, 'Porsche 911', 'Voiture de sport de luxe avec une performance exceptionnelle et un design emblématique.', 299.99, 'Porsche_911.jpg'),
(10, 'Lamborghini Aventador', 'Supercar italienne avec un moteur V12 et des performances de pointe.', 999.00, 'Lamborghini_Aventador.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `pseudo` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `mot_de_passe` varchar(255) NOT NULL,
  `statut` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `pseudo`, `email`, `mot_de_passe`, `statut`) VALUES
(1, 'admin', 'admin@gmail.com', '123456', 1),
(2, 'user', 'user@gmail.com', '123456', 0);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `car`
--
ALTER TABLE `car`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `car`
--
ALTER TABLE `car`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
