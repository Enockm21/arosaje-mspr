# Projet back symfony 

Prérequis:
Assurer d'avoir installer docker et docker compose sur votre machine.

Pour lancer l'application utiliser la commande `docker-compose up -d`

Pour voir l'application `symfony` aller sur http://localhost:8081 

Pour gérer la base de données `phpmyadmin` http://localhost:8080
Pour voir l'application `react` http://localhost:3000



1.Pour utiliser la base de données créer un fichier `.env.local`, copier tout ce qui est  sur `.env` à l'interieur du fichier `.env.local` 

1.Ensuite lancer la commande `docker exec -ti www_arosaje bash` ensuite cd app-back.

`php bin/console doctrine:database:create`