# Breeze App

## Installation

```bash

git clone <url>

cd breeze-app

docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v "$(pwd):/var/www/html" \
    -w /var/www/html \
    laravelsail/php83-composer:latest \
    composer install --ignore-platform-reqs


cp .env.example .env

sail up -d

sa migrate

sail npm install



```



## Run Dev

```bash
sail up -d

sail npm run dev

sa reverb:start

sa queue:work

sa schedule:work

sa horizon
```




## Dev Tools


```php
// localhost/horizon
// localhost/telescope
// localhost/pulse
```