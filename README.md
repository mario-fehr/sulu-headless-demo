# Sulu Headless Demo

This is a **Sulu Demo Headless**. It was created to show a simple implementation of an application made
with Sulu and headless bundle.

## Used Extensions

### [SuluHeadlessBundle](https://github.com/sulu/SuluHeadlessBundle)

The SuluHeadlessBundle provides controllers and services for using the Sulu content management system in a headless way.

## Requirements

* PHP 8.1
    - json extension
    - xml extension
    - simplexml extension
    - gd or imagick extension (needed for image converts)
* MySQL or PostgreSQL Server
* Composer 2
* PNPM if you want to run npm tasks

## Installation

```bash
git git@github.com:mfehr94/sulu-headless-demo.git
cd sulu-headless-demo
composer install
```

### Configure required services

The demo requires a running **MySQL** instance.

Configure your `DATABASE_URL` in the `.env.local`  see `.env` as reference.

If you don't want to install the services yourself you can use the provided [docker-compose.yml](https://docs.docker.com/compose/install/)
to start this services inside an own container:

```bash
docker-compose up
```

### Install fixtures

Install the demo with all fixtures by running:

```bash
bin/console sulu:build dev
```

## Usage

Now you can try out our demo, there is no need to configure a virtual host. Just use the build in web servers:

```bash
php -S 127.0.0.1:8000 -t public config/router.php
```

or if you have symfony cli installed run:

```bash
symfony serve
```

Then you can access the administration interface via [http://127.0.0.1:8000/admin](http://127.0.0.1:8000/admin). The default user and password is “admin”.

The web frontend can be found under [http://127.0.0.1:8000](http://127.0.0.1:8000).
