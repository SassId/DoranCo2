<?php

namespace App\Command;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

#[AsCommand(
    name: 'app:create-super-admin',
    description: 'Create a super admin',
    aliases: ['a:c:s']
)]
class CreateSuperAdminCommand extends Command
{
    public function __construct(private UserPasswordHasherInterface $userPasswordHasher, private EntityManagerInterface $em)
    {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addArgument('email', InputArgument::OPTIONAL, 'Enter the super admin\'s email')
            ->addArgument('password', InputArgument::OPTIONAL, 'Enter the super admin\'s password')
            // ->addOption('option1', null, InputOption::VALUE_NONE, 'Option description')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $email = $input->getArgument('email');
        while (!$email) {
            $email = $io->ask('Choose an email for your super admin (e.g <comment>john.doe@example.com</comment>)');
        }

        $password = $input->getArgument('password');
        while (!$password) {
            $password = $io->ask('Choose a 6 characters password for your super admin (e.g <comment>123456</comment>)');
        }

        $user = new User();
        $user->setEmail($email);

        $user->setPassword($this->userPasswordHasher->hashPassword($user, $password));

        $user->setRoles(['ROLE_SUPER_ADMIN']);

        $this->em->persist($user);
        $this->em->flush();

        $io->success('You have created a new super admin');


        // if ($arg1) {
        //     $io->note(sprintf('You passed an argument: %s', $arg1));
        // }

        // if ($input->getOption('option1')) {
        //     // ...
        // }

        return Command::SUCCESS;
    }
}
