-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 23 juil. 2024 à 23:56
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
-- Base de données : `marmytho_db`
--
CREATE DATABASE IF NOT EXISTS `marmytho_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `marmytho_db`;

-- --------------------------------------------------------

--
-- Structure de la table `doctrine_migration_versions`
--

CREATE TABLE `doctrine_migration_versions` (
  `version` varchar(191) NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `doctrine_migration_versions`
--

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20240722120742', '2024-07-22 14:08:34', 18),
('DoctrineMigrations\\Version20240722124613', '2024-07-22 14:46:45', 4),
('DoctrineMigrations\\Version20240723092136', '2024-07-23 11:22:45', 40),
('DoctrineMigrations\\Version20240723125527', '2024-07-23 14:56:13', 39),
('DoctrineMigrations\\Version20240723145618', '2024-07-23 16:56:52', 56),
('DoctrineMigrations\\Version20240723201837', '2024-07-23 22:21:10', 75);

-- --------------------------------------------------------

--
-- Structure de la table `ingredient`
--

CREATE TABLE `ingredient` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `price` double NOT NULL,
  `created_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  `slug` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `ingredient`
--

INSERT INTO `ingredient` (`id`, `name`, `price`, `created_at`, `slug`) VALUES
(601, 'ingredient 0', 85.4, '2024-07-23 22:31:51', 'ingredient-0'),
(602, 'ingredient 1', 98.2, '2024-07-23 22:31:51', 'ingredient-1'),
(603, 'ingredient 2', 5.6, '2024-07-23 22:31:51', 'ingredient-2'),
(604, 'ingredient 3', 93, '2024-07-23 22:31:51', 'ingredient-3'),
(605, 'ingredient 4', 71.2, '2024-07-23 22:31:51', 'ingredient-4'),
(606, 'ingredient 5', 74.8, '2024-07-23 22:31:51', 'ingredient-5'),
(607, 'ingredient 6', 66.9, '2024-07-23 22:31:51', 'ingredient-6'),
(608, 'ingredient 7', 99.9, '2024-07-23 22:31:51', 'ingredient-7'),
(609, 'ingredient 8', 53.6, '2024-07-23 22:31:51', 'ingredient-8'),
(610, 'ingredient 9', 66.2, '2024-07-23 22:31:51', 'ingredient-9'),
(611, 'ingredient 10', 41.3, '2024-07-23 22:31:51', 'ingredient-10'),
(612, 'ingredient 11', 88.7, '2024-07-23 22:31:51', 'ingredient-11'),
(613, 'ingredient 12', 66.3, '2024-07-23 22:31:51', 'ingredient-12'),
(614, 'ingredient 13', 42.2, '2024-07-23 22:31:51', 'ingredient-13'),
(615, 'ingredient 14', 84.3, '2024-07-23 22:31:51', 'ingredient-14'),
(616, 'ingredient 15', 26.3, '2024-07-23 22:31:51', 'ingredient-15'),
(617, 'ingredient 16', 44.9, '2024-07-23 22:31:51', 'ingredient-16'),
(618, 'ingredient 17', 96.8, '2024-07-23 22:31:51', 'ingredient-17'),
(619, 'ingredient 18', 27.7, '2024-07-23 22:31:51', 'ingredient-18'),
(620, 'ingredient 19', 73.1, '2024-07-23 22:31:51', 'ingredient-19'),
(621, 'ingredient 20', 67.3, '2024-07-23 22:31:51', 'ingredient-20'),
(622, 'ingredient 21', 53, '2024-07-23 22:31:51', 'ingredient-21'),
(623, 'ingredient 22', 76.1, '2024-07-23 22:31:51', 'ingredient-22'),
(624, 'ingredient 23', 83.7, '2024-07-23 22:31:51', 'ingredient-23'),
(625, 'ingredient 24', 14.1, '2024-07-23 22:31:51', 'ingredient-24'),
(626, 'ingredient 25', 81.9, '2024-07-23 22:31:51', 'ingredient-25'),
(627, 'ingredient 26', 53.6, '2024-07-23 22:31:51', 'ingredient-26'),
(628, 'ingredient 27', 75.4, '2024-07-23 22:31:51', 'ingredient-27'),
(629, 'ingredient 28', 1.1, '2024-07-23 22:31:51', 'ingredient-28'),
(630, 'ingredient 29', 32.2, '2024-07-23 22:31:51', 'ingredient-29'),
(631, 'ingredient 30', 72.2, '2024-07-23 22:31:51', 'ingredient-30'),
(632, 'ingredient 31', 36.3, '2024-07-23 22:31:51', 'ingredient-31'),
(633, 'ingredient 32', 90.6, '2024-07-23 22:31:51', 'ingredient-32'),
(634, 'ingredient 33', 2.7, '2024-07-23 22:31:51', 'ingredient-33'),
(635, 'ingredient 34', 67.5, '2024-07-23 22:31:51', 'ingredient-34'),
(636, 'ingredient 35', 55.2, '2024-07-23 22:31:51', 'ingredient-35'),
(637, 'ingredient 36', 95.3, '2024-07-23 22:31:51', 'ingredient-36'),
(638, 'ingredient 37', 74.9, '2024-07-23 22:31:51', 'ingredient-37'),
(639, 'ingredient 38', 97.5, '2024-07-23 22:31:51', 'ingredient-38'),
(640, 'ingredient 39', 42.3, '2024-07-23 22:31:51', 'ingredient-39'),
(641, 'ingredient 40', 37.2, '2024-07-23 22:31:51', 'ingredient-40'),
(642, 'ingredient 41', 14.1, '2024-07-23 22:31:51', 'ingredient-41'),
(643, 'ingredient 42', 43.2, '2024-07-23 22:31:51', 'ingredient-42'),
(644, 'ingredient 43', 47.8, '2024-07-23 22:31:51', 'ingredient-43'),
(645, 'ingredient 44', 77.4, '2024-07-23 22:31:51', 'ingredient-44'),
(646, 'ingredient 45', 10, '2024-07-23 22:31:51', 'ingredient-45'),
(647, 'ingredient 46', 9.1, '2024-07-23 22:31:51', 'ingredient-46'),
(648, 'ingredient 47', 90.6, '2024-07-23 22:31:51', 'ingredient-47'),
(649, 'ingredient 48', 36.3, '2024-07-23 22:31:51', 'ingredient-48'),
(650, 'ingredient 49', 70.7, '2024-07-23 22:31:51', 'ingredient-49'),
(651, 'ingredient 50', 57.9, '2024-07-23 22:31:51', 'ingredient-50'),
(652, 'ingredient 51', 4.9, '2024-07-23 22:31:51', 'ingredient-51'),
(653, 'ingredient 52', 92.5, '2024-07-23 22:31:51', 'ingredient-52'),
(654, 'ingredient 53', 37.1, '2024-07-23 22:31:51', 'ingredient-53'),
(655, 'ingredient 54', 18.6, '2024-07-23 22:31:51', 'ingredient-54'),
(656, 'ingredient 55', 55.8, '2024-07-23 22:31:51', 'ingredient-55'),
(657, 'ingredient 56', 57.1, '2024-07-23 22:31:51', 'ingredient-56'),
(658, 'ingredient 57', 7.4, '2024-07-23 22:31:51', 'ingredient-57'),
(659, 'ingredient 58', 72.2, '2024-07-23 22:31:51', 'ingredient-58'),
(660, 'ingredient 59', 59.9, '2024-07-23 22:31:51', 'ingredient-59'),
(661, 'ingredient 60', 97, '2024-07-23 22:31:51', 'ingredient-60'),
(662, 'ingredient 61', 4.4, '2024-07-23 22:31:51', 'ingredient-61'),
(663, 'ingredient 62', 99.4, '2024-07-23 22:31:51', 'ingredient-62'),
(664, 'ingredient 63', 18.7, '2024-07-23 22:31:51', 'ingredient-63'),
(665, 'ingredient 64', 77, '2024-07-23 22:31:51', 'ingredient-64'),
(666, 'ingredient 65', 78.9, '2024-07-23 22:31:51', 'ingredient-65'),
(667, 'ingredient 66', 28.5, '2024-07-23 22:31:51', 'ingredient-66'),
(668, 'ingredient 67', 39.9, '2024-07-23 22:31:51', 'ingredient-67'),
(669, 'ingredient 68', 9.2, '2024-07-23 22:31:51', 'ingredient-68'),
(670, 'ingredient 69', 92.7, '2024-07-23 22:31:51', 'ingredient-69'),
(671, 'ingredient 70', 60.7, '2024-07-23 22:31:51', 'ingredient-70'),
(672, 'ingredient 71', 84.7, '2024-07-23 22:31:51', 'ingredient-71'),
(673, 'ingredient 72', 15.3, '2024-07-23 22:31:51', 'ingredient-72'),
(674, 'ingredient 73', 16.2, '2024-07-23 22:31:51', 'ingredient-73'),
(675, 'ingredient 74', 68.7, '2024-07-23 22:31:51', 'ingredient-74'),
(676, 'ingredient 75', 50.7, '2024-07-23 22:31:51', 'ingredient-75'),
(677, 'ingredient 76', 45.8, '2024-07-23 22:31:51', 'ingredient-76'),
(678, 'ingredient 77', 54.4, '2024-07-23 22:31:51', 'ingredient-77'),
(679, 'ingredient 78', 20.2, '2024-07-23 22:31:51', 'ingredient-78'),
(680, 'ingredient 79', 93.1, '2024-07-23 22:31:51', 'ingredient-79'),
(681, 'ingredient 80', 69.5, '2024-07-23 22:31:51', 'ingredient-80'),
(682, 'ingredient 81', 41.3, '2024-07-23 22:31:51', 'ingredient-81'),
(683, 'ingredient 82', 58.1, '2024-07-23 22:31:51', 'ingredient-82'),
(684, 'ingredient 83', 86.2, '2024-07-23 22:31:51', 'ingredient-83'),
(685, 'ingredient 84', 28.8, '2024-07-23 22:31:51', 'ingredient-84'),
(686, 'ingredient 85', 33, '2024-07-23 22:31:51', 'ingredient-85'),
(687, 'ingredient 86', 13.7, '2024-07-23 22:31:51', 'ingredient-86'),
(688, 'ingredient 87', 80.7, '2024-07-23 22:31:51', 'ingredient-87'),
(689, 'ingredient 88', 58.1, '2024-07-23 22:31:51', 'ingredient-88'),
(690, 'ingredient 89', 16, '2024-07-23 22:31:51', 'ingredient-89'),
(691, 'ingredient 90', 12.2, '2024-07-23 22:31:51', 'ingredient-90'),
(692, 'ingredient 91', 4.2, '2024-07-23 22:31:51', 'ingredient-91'),
(693, 'ingredient 92', 62, '2024-07-23 22:31:51', 'ingredient-92'),
(694, 'ingredient 93', 27.9, '2024-07-23 22:31:51', 'ingredient-93'),
(695, 'ingredient 94', 85.5, '2024-07-23 22:31:51', 'ingredient-94'),
(696, 'ingredient 95', 90.1, '2024-07-23 22:31:51', 'ingredient-95'),
(697, 'ingredient 96', 37.1, '2024-07-23 22:31:51', 'ingredient-96'),
(698, 'ingredient 97', 21.8, '2024-07-23 22:31:51', 'ingredient-97'),
(699, 'ingredient 98', 86.1, '2024-07-23 22:31:51', 'ingredient-98'),
(700, 'ingredient 99', 72.6, '2024-07-23 22:31:51', 'ingredient-99');

-- --------------------------------------------------------

--
-- Structure de la table `messenger_messages`
--

CREATE TABLE `messenger_messages` (
  `id` bigint(20) NOT NULL,
  `body` longtext NOT NULL,
  `headers` longtext NOT NULL,
  `queue_name` varchar(190) NOT NULL,
  `created_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  `available_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  `delivered_at` datetime DEFAULT NULL COMMENT '(DC2Type:datetime_immutable)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `recipe`
--

CREATE TABLE `recipe` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `slug` varchar(50) NOT NULL,
  `duration` int(11) DEFAULT NULL,
  `number_of_plates` int(11) DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `price` double DEFAULT NULL,
  `is_favorite` tinyint(1) DEFAULT NULL,
  `created_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  `updated_at` datetime DEFAULT NULL COMMENT '(DC2Type:datetime_immutable)',
  `difficulty` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `recipe`
--

INSERT INTO `recipe` (`id`, `name`, `slug`, `duration`, `number_of_plates`, `description`, `price`, `is_favorite`, `created_at`, `updated_at`, `difficulty`) VALUES
(103, 'Cheese Dog', 'cheese-dog', 18, 3, 'Sunt id molestiae libero voluptatem quia ut. Id alias soluta repellat consequatur. Eligendi possimus sint commodi veritatis nostrum dolor occaecati eum.', 98.89, 0, '2024-07-23 22:31:51', NULL, 2),
(104, 'Cheeseburger', 'cheeseburger', 34, 4, 'Similique aut eaque ut quos hic molestias qui. Officia vel nam tempora possimus commodi quidem et. Sit et sit id occaecati ea fuga.', 23.07, 0, '2024-07-23 22:31:51', NULL, 3),
(105, 'Sandwich Vegan', 'sandwich-vegan', 4, 9, 'Ullam autem nulla id illum molestias. Aut nesciunt a aut suscipit eveniet esse. Minima architecto in architecto quisquam odio. Cum quis explicabo consequatur expedita est sunt perspiciatis.', 33.55, 1, '2024-07-23 22:31:51', NULL, 3),
(106, 'Petit Hamburger', 'petit-hamburger', 36, 8, 'Aperiam rerum quas quidem. Rerum quibusdam est exercitationem eos repellat qui hic. Sed sed eum molestiae. Omnis dolor nihil culpa fuga soluta.', 5.56, 0, '2024-07-23 22:31:51', NULL, 2),
(107, 'Fromage grillé', 'fromage-grille', 7, 7, 'Velit consequatur qui minima numquam voluptatem dolores. Magnam iure et voluptatem repellat at inventore. Placeat voluptas blanditiis unde quo perferendis quia hic provident.', 18.25, 1, '2024-07-23 22:31:51', NULL, 4),
(108, 'Welsh', 'welsh', 43, 3, 'Minus in nam ipsam temporibus natus. Quis quos qui amet dolores dolor ea. Libero modi ducimus voluptates et qui enim animi. Ipsa fugiat est et quia repellendus perferendis libero id.', 86.24, 1, '2024-07-23 22:31:51', NULL, 3),
(109, 'Petit Hamburger', 'petit-hamburger', 57, 8, 'Voluptas dolorem ipsa voluptas explicabo. Facere sit repellat a officia aut repellat. Nisi aliquid et consequatur. Aut expedita deserunt vero.', 39.05, 0, '2024-07-23 22:31:51', NULL, 5),
(110, 'Fromage grillé', 'fromage-grille', 8, 8, 'Officiis consequatur sed et vero. Recusandae perferendis est atque deserunt. Qui et ut aut aliquid nemo id sunt. Corrupti non id sed molestias. Est rerum at recusandae.', 12.43, 1, '2024-07-23 22:31:51', NULL, 2),
(111, 'Pizza au fromage', 'pizza-au-fromage', 38, 7, 'Consequuntur itaque eum qui itaque eum dignissimos. Cumque enim culpa voluptate.', 42.07, 1, '2024-07-23 22:31:51', NULL, 2),
(112, 'Sandwich Vegan au fromage', 'sandwich-vegan-au-fromage', 45, 7, 'Vitae ad magnam laboriosam blanditiis voluptatem. Iusto vitae harum eum ut aut omnis. Ut quos deserunt et magni.', 78.9, 1, '2024-07-23 22:31:51', NULL, 2),
(113, 'Sandwich Vegan au fromage', 'sandwich-vegan-au-fromage', 11, 3, 'Saepe aut in sed non explicabo qui ut. Dolorem animi laudantium sapiente dolores quia consequuntur amet. Consequatur ut suscipit assumenda nihil qui.', 24.07, 1, '2024-07-23 22:31:51', NULL, 2),
(114, 'Petit Hamburger', 'petit-hamburger', 42, 7, 'Vel qui qui impedit sunt eos ad. Autem sint temporibus molestiae similique iste ut praesentium. Esse provident rerum et enim.', 68.36, 1, '2024-07-23 22:31:51', NULL, 3),
(115, 'Cheese Dog', 'cheese-dog', 59, 6, 'Distinctio autem odio est aut. Consectetur recusandae qui voluptatum exercitationem atque iure. Explicabo tempora dolorem ipsum ea qui illo. Sed id dolores sit.', 44.54, 0, '2024-07-23 22:31:51', NULL, 2),
(116, 'Petit Hamburger', 'petit-hamburger', 15, 8, 'Omnis omnis qui perferendis nihil sapiente ex dolores quasi. Ea quasi praesentium nobis necessitatibus eligendi. Est magni ratione rerum modi architecto quae.', 13.65, 1, '2024-07-23 22:31:51', NULL, 5),
(117, 'Tartiflette', 'tartiflette', 28, 8, 'Fugiat a nihil nihil quisquam aut voluptas animi quas. Voluptatem aliquam animi est et nemo. Ratione et quia occaecati.', 28.85, 1, '2024-07-23 22:31:51', NULL, 2),
(118, 'Moules Marinières', 'moules-marinieres', 12, 1, 'Ut voluptatem sint occaecati ipsam vero rerum voluptates. Repudiandae culpa provident porro. Molestiae in incidunt natus dolorum quibusdam incidunt fuga.', 98.79, 1, '2024-07-23 22:31:51', NULL, 4),
(119, 'Sandwich Vegan', 'sandwich-vegan', 41, 5, 'Quo soluta corrupti perferendis ex est illum. Itaque nemo quo consequatur sed est sint debitis. Placeat aliquid repellat fuga quia voluptas. Fugit necessitatibus quis tempore quae.', 23.45, 1, '2024-07-23 22:31:51', NULL, 4),
(120, 'Petit Cheeseburger', 'petit-cheeseburger', 51, 10, 'Quam dolor sint ipsam aut repellat ut et. Incidunt totam recusandae id maxime odit.', 81.61, 1, '2024-07-23 22:31:51', NULL, 4),
(121, 'Fromage grillé', 'fromage-grille', 8, 2, 'Sequi dolores iusto voluptas quisquam. Atque aliquam consequatur quia magni. Consequuntur et accusantium nihil numquam eveniet sint.', 62.69, 0, '2024-07-23 22:31:51', NULL, 4),
(122, 'Sandwich Vegan', 'sandwich-vegan', 55, 8, 'Et aperiam ut facere ut tempore est. Corrupti voluptas tenetur quaerat sunt autem. Quia dolore rerum illum autem. Deserunt tempora beatae itaque ea laudantium repellendus omnis.', 75.71, 1, '2024-07-23 22:31:51', NULL, 4),
(123, 'Cheeseburger', 'cheeseburger', 4, 1, 'Dolor maiores accusamus quia ex. Cum non excepturi eveniet architecto dolor soluta et vero. Consequatur occaecati est vitae maxime error. Aut est natus eos sapiente consequatur sit dolorum labore.', 45.99, 0, '2024-07-23 22:31:51', NULL, 5),
(124, 'Petit Hamburger', 'petit-hamburger', 54, 4, 'Quisquam voluptas ex cum consequatur. Quaerat animi rerum impedit atque quia eum. Eveniet animi perspiciatis enim necessitatibus.', 28.2, 1, '2024-07-23 22:31:51', NULL, 1),
(125, 'Fromage grillé', 'fromage-grille', 24, 9, 'Nam porro eos assumenda. Pariatur et dicta aliquid magnam eos. Veniam soluta suscipit aliquid ut.', 52.89, 1, '2024-07-23 22:31:51', NULL, 2),
(126, 'Cheese Dog', 'cheese-dog', 38, 7, 'Animi et sint placeat. Sed cum voluptatem voluptas qui nemo reprehenderit necessitatibus officia. Velit optio ut veniam earum blanditiis vero.', 83.84, 1, '2024-07-23 22:31:51', NULL, 5),
(127, 'Salade Grecque', 'salade-grecque', 41, 6, 'Est qui quibusdam sed et est. Id eum laborum deserunt eos voluptas iure. Quis vel tempore molestias harum.', 72.92, 0, '2024-07-23 22:31:51', NULL, 3),
(128, 'Moules Marinières', 'moules-marinieres', 7, 10, 'Esse quas facere in impedit aliquam totam adipisci. Quia occaecati non ducimus voluptatem officia deleniti repellendus. Quia delectus ullam provident voluptates ut.', 20.97, 0, '2024-07-23 22:31:51', NULL, 5),
(129, 'Petit Bacon Cheeseburger', 'petit-bacon-cheeseburger', 10, 8, 'Animi distinctio at qui voluptas nesciunt nostrum doloribus. Aut reprehenderit et autem rerum impedit voluptate veritatis porro. Iure qui non in cupiditate.', 40.91, 1, '2024-07-23 22:31:51', NULL, 4),
(130, 'Petit Bacon Burger', 'petit-bacon-burger', 39, 10, 'Consequatur asperiores ullam velit est. Amet cum fugit eos voluptatem et. Maxime excepturi omnis expedita id. Mollitia quidem ut aut fugiat.', 85.02, 0, '2024-07-23 22:31:51', NULL, 4),
(131, 'Petit Cheeseburger', 'petit-cheeseburger', 19, 5, 'Aut consequatur ut atque ut illum aut iste omnis. Aut cumque est vel voluptas nemo inventore minus. Mollitia porro qui nemo ratione voluptatem dolor sed.', 67.37, 0, '2024-07-23 22:31:51', NULL, 1),
(132, 'Welsh', 'welsh', 38, 1, 'Quod asperiores minus voluptatem beatae et non optio. Voluptates voluptatum quisquam consequatur rem dolores voluptas alias.', 21.45, 1, '2024-07-23 22:31:51', NULL, 3),
(133, 'Cheese Dog', 'cheese-dog', 13, 5, 'Quia et labore rerum dicta autem impedit. Itaque eveniet minus optio enim eaque rerum porro eum. Exercitationem recusandae nisi adipisci rem. Illo sint aliquid illo consectetur esse.', 21.88, 1, '2024-07-23 22:31:51', NULL, 3),
(134, 'Pizza au fromage', 'pizza-au-fromage', 51, 8, 'Dolorem occaecati sit accusamus impedit minus odit. Iste eligendi sed sed quo et veritatis. Dolores et aut sunt perspiciatis ullam nulla enim itaque. Rerum et accusamus tempore magnam sed in.', 73.41, 0, '2024-07-23 22:31:51', NULL, 1),
(135, 'Cheese Dog', 'cheese-dog', 49, 4, 'Eum odio sunt exercitationem odit. Sed sit asperiores quia ducimus mollitia ullam in. Aliquid quidem omnis quaerat rerum recusandae. Ratione aut odit nemo et ab nostrum quaerat illo.', 74, 1, '2024-07-23 22:31:51', NULL, 1),
(136, 'Pizza au fromage', 'pizza-au-fromage', 39, 3, 'Similique consequatur maiores et. Et nesciunt voluptas perferendis molestiae. Commodi maxime tempore cum. Aut sunt sit error fugit corporis repellendus nesciunt.', 63.04, 0, '2024-07-23 22:31:51', NULL, 3),
(137, 'Moules Marinières', 'moules-marinieres', 26, 8, 'Aliquam nemo blanditiis fuga blanditiis autem. Voluptate omnis culpa hic maxime quae.', 47.82, 0, '2024-07-23 22:31:51', NULL, 1),
(138, 'Hamburger', 'hamburger', 15, 9, 'Ad enim recusandae officiis nihil ipsa. Pariatur consequatur accusamus officiis et.', 81.02, 1, '2024-07-23 22:31:51', NULL, 4),
(139, 'Moules Marinières', 'moules-marinieres', 26, 7, 'Et porro voluptas assumenda excepturi dolor. Voluptatem corrupti autem neque et alias consectetur. Consequuntur velit consequatur at dolores doloremque a deleniti corrupti.', 88.97, 0, '2024-07-23 22:31:51', NULL, 5),
(140, 'Petit Cheeseburger', 'petit-cheeseburger', 39, 5, 'Earum dolores illo commodi atque. Fugiat culpa nobis et inventore quasi. Aut repellat nisi numquam hic minus nemo. Nisi illum vitae et facere aut.', 91.25, 0, '2024-07-23 22:31:51', NULL, 4),
(141, 'Moules Marinières', 'moules-marinieres', 12, 7, 'Id autem non non expedita labore veritatis dolores. Omnis in iste ipsa omnis. Ex alias at sint. Provident tenetur velit esse quis accusantium voluptatem.', 55.89, 1, '2024-07-23 22:31:51', NULL, 1),
(142, 'Cheese Dog', 'cheese-dog', 59, 6, 'Et quia voluptas quo ut omnis. Aliquam enim quaerat ea sed sed voluptas unde. Minus amet illum dolorem possimus sequi cupiditate. Reiciendis est tempora placeat quis voluptas.', 97.9, 1, '2024-07-23 22:31:51', NULL, 2),
(143, 'Cheeseburger', 'cheeseburger', 23, 9, 'Et qui corrupti voluptate non. Omnis eligendi repellendus ut animi. Explicabo eos autem harum dolor.', 91.03, 1, '2024-07-23 22:31:51', NULL, 2),
(144, 'Boeuf Bourguignons', 'boeuf-bourguignons', 55, 8, 'Ut optio impedit aliquam repellendus enim exercitationem. Sed architecto suscipit voluptatem occaecati aut quis. Tempora qui totam repellendus voluptas architecto. Ipsum adipisci expedita eum.', 11.59, 0, '2024-07-23 22:31:51', NULL, 3),
(145, 'Petit Bacon Burger', 'petit-bacon-burger', 44, 4, 'Sint aut quis magnam necessitatibus. Asperiores et omnis iure doloribus magnam officia. Aut dignissimos harum vel aliquid rem. Vel quis sit qui ullam pariatur.', 87.59, 0, '2024-07-23 22:31:51', NULL, 2),
(146, 'Cheese Dog', 'cheese-dog', 22, 7, 'Quasi voluptatum molestias perferendis aut molestias. Nemo libero explicabo nulla dolores dolores. Magni quae in rerum optio dolorem.', 18.52, 0, '2024-07-23 22:31:51', NULL, 2),
(147, 'Petit Bacon Burger', 'petit-bacon-burger', 6, 7, 'Explicabo incidunt tenetur magnam nobis animi laboriosam. Quod in eum praesentium perspiciatis modi blanditiis aperiam. Ut recusandae quod sit cupiditate. Quo qui odit qui.', 99.24, 0, '2024-07-23 22:31:51', NULL, 1),
(148, 'Fromage grillé', 'fromage-grille', 48, 8, 'Consequatur amet voluptatem quae laudantium ut ut illum expedita. Eveniet libero dolore qui repellat sed. A blanditiis in ut animi in modi. Quidem ea est facilis.', 22.34, 1, '2024-07-23 22:31:51', NULL, 1),
(149, 'Moules Marinières', 'moules-marinieres', 34, 7, 'Perspiciatis sapiente dolorum hic voluptate dolores ea porro. Corrupti nostrum sint dolorum labore. Maiores dignissimos aliquam quo rerum fuga est iure. Eligendi dolore fugiat distinctio id.', 15.74, 0, '2024-07-23 22:31:51', NULL, 5),
(150, 'Hamburger', 'hamburger', 58, 10, 'Id veritatis et et possimus est incidunt. Provident blanditiis quisquam et aut qui. Itaque dolor aut consequatur. Qui velit ipsam facere quia voluptatem aut.', 83.14, 1, '2024-07-23 22:31:51', NULL, 3),
(151, 'Pates', 'pates', 12, 1, 'Quos blanditiis libero iure. Natus inventore sit nihil aliquam ut. Autem laudantium quae nemo impedit ut at recusandae numquam.', 89.36, 1, '2024-07-23 22:31:51', NULL, 1);

-- --------------------------------------------------------

--
-- Structure de la table `recipe_ingredient`
--

CREATE TABLE `recipe_ingredient` (
  `recipe_id` int(11) NOT NULL,
  `ingredient_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `doctrine_migration_versions`
--
ALTER TABLE `doctrine_migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- Index pour la table `ingredient`
--
ALTER TABLE `ingredient`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `messenger_messages`
--
ALTER TABLE `messenger_messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_75EA56E0FB7336F0` (`queue_name`),
  ADD KEY `IDX_75EA56E0E3BD61CE` (`available_at`),
  ADD KEY `IDX_75EA56E016BA31DB` (`delivered_at`);

--
-- Index pour la table `recipe`
--
ALTER TABLE `recipe`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `recipe_ingredient`
--
ALTER TABLE `recipe_ingredient`
  ADD PRIMARY KEY (`recipe_id`,`ingredient_id`),
  ADD KEY `IDX_22D1FE1359D8A214` (`recipe_id`),
  ADD KEY `IDX_22D1FE13933FE08C` (`ingredient_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `ingredient`
--
ALTER TABLE `ingredient`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=701;

--
-- AUTO_INCREMENT pour la table `messenger_messages`
--
ALTER TABLE `messenger_messages`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `recipe`
--
ALTER TABLE `recipe`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=152;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `recipe_ingredient`
--
ALTER TABLE `recipe_ingredient`
  ADD CONSTRAINT `FK_22D1FE1359D8A214` FOREIGN KEY (`recipe_id`) REFERENCES `recipe` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_22D1FE13933FE08C` FOREIGN KEY (`ingredient_id`) REFERENCES `ingredient` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
