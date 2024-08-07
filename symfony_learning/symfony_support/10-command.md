# 🚀 **[Symfony](https://symfony.com/)** | Commandes : Créer des commandes personnalisées

<br>

<center>
<img src="https://symfony.com/logos/symfony_black_03.png" width="100">
</center>

<br>

> Ce guide vous explique comment créer vos propres commandes Symfony pour automatiser des tâches récurrentes et améliorer votre flux de travail.

## Sommaire

-   [Introduction](#introduction)
-   [Commandes Symfony](#commandes-symfony-1)
    -   [Explication](#explication)
-   [Conclusion](#conclusion)

## Introduction

Symfony est un framework PHP qui vous permet de créer des applications web robustes et évolutives. Il fournit un ensemble de composants et de bibliothèques qui facilitent le développement d'applications web modernes. Ce guide vous explique comment créer vos propres commandes Symfony pour automatiser des tâches récurrentes et améliorer votre flux de travail.

## Commandes Symfony

Pour créer une nouvelle commande Symfony, vous devez créer une classe qui étend la classe `Command` de Symfony. Cette classe doit implémenter la méthode `configure()` pour définir le nom et la description de la commande, et la méthode `execute()` pour exécuter la logique de la commande.

Voici un exemple de commande Symfony simple qui affiche un message :

```bash
symfony console make:command app:hello
```

### Explication

Cette commande crée une nouvelle commande Symfony appelée `app:hello`. Elle génère automatiquement une classe `HelloCommand` dans le répertoire `src/Command` de votre application. Cette classe étend la classe `Command` de Symfony et implémente la méthode `configure()` pour définir le nom et la description de la commande, et la méthode `execute()` pour afficher un message.

```php
// src/Command/HelloCommand.php
namespace App\Command;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

#[AsCommand(
    name: 'app:hello',
    description: 'Say hello',
    aliases: ['a:h'],
)]
class HelloCommand extends Command
{
    public function __construct()
    {
        parent::__construct();
    }

    protected static $defaultName = 'app:hello';

    protected function configure()
    {
        $this
            ->addArgument('name', InputArgument::OPTIONAL, 'Who to greet')
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $name = $input->getArgument('name');
        $output->writeln('Hello, '.$name.'!');

        if (!$name) {
            $name $io->ask('What is your name?');
        }

        return Command::SUCCESS;

    }

}
```

## Conclusion

Les commandes Symfony sont un moyen puissant d'automatiser des tâches récurrentes et d'améliorer votre flux de travail. En créant vos propres commandes Symfony, vous pouvez personnaliser votre application et gagner du temps lors du développement. N'hésitez pas à explorer les fonctionnalités avancées des commandes Symfony pour tirer le meilleur parti de ce framework.

---

[🏠 Retour au sommaire](#)
