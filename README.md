# Projet arosaje 
front react et back symfony 

Prérequis:
Assurer d'avoir installer docker et docker compose sur votre machine.

Je vous conseille d'utiliser votre VM debian pour bien utiliser l'app

Connectez votre compte github avec compte gitlab ou creer un compte gitlab

cloner le repo https://gitlab.com/enock18/arosaje-mspr.git
aller sur app-front sur votre terminal `npm install`
aller app-back fait `composer install`
Pour lancer l'application utiliser la commande `docker-compose up -d`

Pour voir l'application `symfony` aller sur http://localhost:8081 

Pour gérer la base de données `phpmyadmin` http://localhost:8080
pour vous connecter mettez root à l'identifiant et rien pour password ensuite cliquez sur connexion

Pour voir https://github.com/Enockm21/arosaje-mspr.gitl'application `react` http://localhost:3000



1.Pour utiliser la base de données créer un fichier `.env.local`, copier tout ce qui est  sur `.env` à l'interieur du fichier `.env.local` 

2.Ensuite lancer la commande `docker exec -ti www_arosaje bash` ensuite cd app-back.

`php bin/console doctrine:database:create`
créer une table
`php bin/console make:entity` 
créer le fichier de migration
php `bin/console make:migration`
générer les tables dans la base de donées
`php bin/console doctrine:migrations:migrate`

# App mobile

Pour utiliser l'app sur mobile installer l'application Expo Go 

npm install
Puis aller sur le dossier app-mobile faites npm run start ou yarn start
puis scanner le QR affiché en terminal

Si vous rencontrez des problèmes du fichier expo

sudo apt-get install android-sdk
puis 
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/tools

Lien pour le thème
https://www.creative-tim.com/product/argon-dashboard-react?ref=adr-documentation-header#
