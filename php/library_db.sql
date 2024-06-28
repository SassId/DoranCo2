-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 28 juin 2024 à 16:35
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
-- Base de données : `library_db`
--
CREATE DATABASE IF NOT EXISTS `library_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `library_db`;

-- --------------------------------------------------------

--
-- Structure de la table `author`
--

CREATE TABLE `author` (
  `id` int(11) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `country` varchar(100) DEFAULT NULL,
  `DoB` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `author`
--

INSERT INTO `author` (`id`, `firstname`, `lastname`, `country`, `DoB`) VALUES
(1, 'George', 'Orwell', 'United Kingdom', '1903-06-25'),
(2, 'J.K.', 'Rowling', 'United Kingdom', '1965-07-31'),
(3, 'Mark', 'Twain', 'United States', '1835-11-30'),
(4, 'Haruki', 'Murakami', 'Japan', '1949-01-12');

-- --------------------------------------------------------

--
-- Structure de la table `book`
--

CREATE TABLE `book` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` text DEFAULT NULL,
  `date_of_publication` int(4) DEFAULT NULL,
  `id_author` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `book`
--

INSERT INTO `book` (`id`, `title`, `description`, `date_of_publication`, `id_author`) VALUES
(1, '1984', 'A dystopian social science fiction novel and cautionary tale.', 1949, 1),
(2, 'Animal Farm', 'A satirical allegorical novella reflecting events leading up to the Russian Revolution of 1917.', 1945, 1),
(3, 'Harry Potter and the Philosopher\'s Stone', 'The first novel in the Harry Potter series.', 1997, 2),
(4, 'Harry Potter and the Chamber of Secrets', 'The second novel in the Harry Potter series.', 1998, 2),
(5, 'Harry Potter and the Prisoner of Azkaban', 'The third novel in the Harry Potter series.', 1999, 2),
(6, 'The Adventures of Tom Sawyer', 'A novel about a young boy growing up along the Mississippi River.', 0, 3),
(7, 'Adventures of Huckleberry Finn', 'A novel about a boy and a runaway slave traveling down the Mississippi River.', 0, 3),
(8, 'Norwegian Wood', 'A nostalgic story of loss and burgeoning sexuality.', 1987, 4),
(9, 'Kafka on the Shore', 'A metaphysical mind-bender and one of Murakami\'s best-known books.', 2002, 4),
(10, '1Q84', 'A story of how two characters, Aomame and Tengo, find themselves in a strange parallel universe.', 2009, 4),
(11, '', '', 0, NULL),
(12, '', '', 0, NULL),
(13, '', '', 0, NULL),
(14, 'erezrz', 'zerzrzr', 1111, 1);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `author`
--
ALTER TABLE `author`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_author` (`id_author`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `author`
--
ALTER TABLE `author`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `book`
--
ALTER TABLE `book`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `book`
--
ALTER TABLE `book`
  ADD CONSTRAINT `book_ibfk_1` FOREIGN KEY (`id_author`) REFERENCES `author` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
