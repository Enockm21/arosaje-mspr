<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230130144249 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE advices (id INT AUTO_INCREMENT NOT NULL, plante_id INT NOT NULL, user_id INT NOT NULL, description VARCHAR(500) NOT NULL, INDEX IDX_8863B298177B16E8 (plante_id), INDEX IDX_8863B298A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE advices ADD CONSTRAINT FK_8863B298177B16E8 FOREIGN KEY (plante_id) REFERENCES plantes (id)');
        $this->addSql('ALTER TABLE advices ADD CONSTRAINT FK_8863B298A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE advices DROP FOREIGN KEY FK_8863B298177B16E8');
        $this->addSql('ALTER TABLE advices DROP FOREIGN KEY FK_8863B298A76ED395');
        $this->addSql('DROP TABLE advices');
    }
}
