Project
=======

This project is a simple movie collection manager. It's intended to fulfill the
development example requirements for the Lead Software Developer position at
SANS Institute.

The backend is a Laravel API designed as a RESTful service. Composer was used to
initialize this side of the application.

The front-end is a responsive AngularJS application utilizing Bootstrap for
styling. Npm was used to initialize this side of the application.

Stack
=====

Docker Services
---------------
* Nginx 1.11
* PHP 5.6
* MySQL 5.6

Application Stack
-----------------

* Laravel 5.3.26
* Bootstrap 3.3.7


Local Environment Setup
=======================

Install docker on the host machine.
https://www.docker.com/products/docker

Create your local environment file dist/.env with the following contents:
```
APP_ENV=local
APP_KEY=base64:HwKbKKPmEYVc3UvKWY5ZeWTiNRsou93l3Cs/e0mUE9E=
APP_DEBUG=true
APP_LOG_LEVEL=debug
APP_URL=http://localhost:8080

DB_CONNECTION=mysql
DB_HOST=db
DB_PORT=3306
DB_DATABASE=project_local
DB_USERNAME=root
DB_PASSWORD=root
```

Boot the application inside docker.
```
docker-compose up
```

Initialize the database.
```
docker-compose exec app /usr/local/bin/php /var/www/artisan migrate
```

Access the site.

http://localhost:8080/


Local Commands
==============

Create and start all containers in the stack.
```
docker-compose up -d
```

Continuously display logs.
```
docker-compose logs -f
```

Stop the containers in stack.
```
docker-compose stop
```

Start the containers in stack.
```
docker-compose start
```

Stop and remove the containers for the stack.
```
docker-compose down
```

Migrate the database.
```
docker-compose exec app /usr/local/bin/php /var/www/artisan migrate
```
