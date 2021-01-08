# [API] mini-diarium - A Diarium wanna be!
This project is under development, feel free to contact me for question.

## Installation

#### Clone the repo
``` bash
$ git clone https://github.com/aldiw01/mini-diarium-api.git
```

#### Go into app's directory
``` bash
$ cd mini-diarium-api
```

#### Import database mini_diarium.sql into mySQL server

#### Install node and npm
For windows version, you can get it here -> https://nodejs.org/en/download/ 
* MANDATORY: PLEASE USE NODE VERSION 10.15.1

#### Install app's dependencies
``` bash
$ npm install
```

## Set Environment Variables

#### Primary
```
APP_CIPHER_ALGORITHM
APP_CIPHER_BASE
APP_CIPHER_SECRET
APP_CIPHER_SALT

APP_DATABASE_DB
APP_DATABASE_HOST

APP_EMAIL_NAME
APP_EMAIL_PASSWORD
APP_EMAIL_USER

APP_HASH_ALGORITHM
APP_TOKEN_SECRET

APP_URL_LOGIN
APP_URL_RESET_PASSWORD
```

#### Production
```
APP_DATABASE_PASSWORD
APP_DATABASE_USERNAME
```

## Deploy API
``` bash
$ node index.js
```
or
``` bash
$ npm start
```
or
``` bash
$ yarn start
```

## Database
There are 3 collections: users, activites, presences in MongoDB (CSV), just import it to MongoDB