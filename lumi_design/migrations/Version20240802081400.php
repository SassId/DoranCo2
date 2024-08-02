<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240802081400 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'renamed user properties';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE user ADD last_name VARCHAR(255) DEFAULT NULL, ADD first_name VARCHAR(255) DEFAULT NULL, ADD address VARCHAR(255) DEFAULT NULL, ADD city VARCHAR(255) DEFAULT NULL, ADD phone_number VARCHAR(20) DEFAULT NULL, DROP nom, DROP prenom, DROP adresse, DROP ville, DROP telephone, CHANGE code_postal zip_code VARCHAR(10) NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE user ADD nom VARCHAR(255) NOT NULL, ADD prenom VARCHAR(255) NOT NULL, ADD adresse VARCHAR(255) NOT NULL, ADD ville VARCHAR(255) NOT NULL, ADD telephone VARCHAR(20) NOT NULL, DROP last_name, DROP first_name, DROP address, DROP city, DROP phone_number, CHANGE zip_code code_postal VARCHAR(10) NOT NULL');
    }
}
