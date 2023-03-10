# FdjApp
Application web permettant le suivi des tickets à gratter.

## Prérequis

#### Symfony 6.2
#### PHP 8.2


## Installation


```bash
composer install


```
Webpack [Encore](https://symfony.com/doc/current/frontend/encore/installation.html)
```bash
npm install @symfony/webpack-encore --save-dev
npm install 
npm run build
```


Mailer [resetPassword](https://symfony.com/doc/current/security/passwords.html#reset-password)
```bash
composer require symfonycasts/reset-password-bundle
php bin/console make:reset-password
composer require symfony/mailer

```
1) Run "php bin/console make:migration" to generate a migration for the new "App\Entity\ResetPasswordRequest" entity.
2) Review forms in "src/Form" to customize validation and labels.
3) Review and customize the templates in `templates/reset_password`.
4) Make sure your MAILER_DSN env var has the correct settings.
5) Create a "forgot your password link" to the app_forgot_password_request route on your login form.


## Suivi
 Lien vers [Trello](https://trello.com/invite/b/S2HEXjlY/ATTI32d1ae21e59ca73b775c0763953ef810A164871F/start)
## Contributing


## License

[MIT](https://choosealicense.com/licenses/mit/)

