<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230619091649 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE track DROP FOREIGN KEY track_ibfk_1');
        $this->addSql('DROP TABLE artist');
        $this->addSql('DROP TABLE track');
        $this->addSql('ALTER TABLE plantes ADD localisation LONGTEXT NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE artist (artistid INT NOT NULL, artistname TEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_0900_ai_ci`, PRIMARY KEY(artistid)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_0900_ai_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE track (trackartist INT DEFAULT NULL, trackid INT DEFAULT NULL, trackname TEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_0900_ai_ci`, INDEX trackartist (trackartist)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_0900_ai_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE track ADD CONSTRAINT track_ibfk_1 FOREIGN KEY (trackartist) REFERENCES artist (artistid) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE plantes DROP localisation');
    }
}
