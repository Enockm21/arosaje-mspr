<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230130143420 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE plantes (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, plant_caretaker_user_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, description VARCHAR(500) NOT NULL, image VARCHAR(255) NOT NULL, INDEX IDX_F3E76151A76ED395 (user_id), INDEX IDX_F3E761511E14B3A7 (plant_caretaker_user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE plantes ADD CONSTRAINT FK_F3E76151A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE plantes ADD CONSTRAINT FK_F3E761511E14B3A7 FOREIGN KEY (plant_caretaker_user_id) REFERENCES user (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE plantes DROP FOREIGN KEY FK_F3E76151A76ED395');
        $this->addSql('ALTER TABLE plantes DROP FOREIGN KEY FK_F3E761511E14B3A7');
        $this->addSql('DROP TABLE plantes');
    }
}
