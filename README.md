# User API demonstration

To execute the application you should have installed a version of Node.JS with ES6 support (i.e. developped in v6.2.0)

This application is using SAILS.JS in drop mode, so every time that you launch the application the content of the sqlite3 database will be wiped.

The project is inside the folder api_project, so before to start:

```
$ cd api_project
```

## Installation

You will need to bring all the modules required in the application

```
/api_project$ npm install
```

## Execution and description

Once all the dependencies are downloaded:

```
/api_project$ npm start
```

It will serve the REST service in [http://localhost:1337/user](http://localhost:1337/user). You can execute the CRUD operations using:

METHOD | PATH | DESCRIPTION
-------|------|-------------
GET    | /user | Get all users
GET    | /user?first_name=XXXX | Filter users by first_name
GET    | /user?last_name=XXXX | Filter users by last_name
GET    | /user?birth_date=XXXX | Filter users by birth_date
GET    | /user/:id | Get user based in ID
GET    | /user/joke/:id | Get user based in ID but adding joke property
POST   | /user | Create new user (first_name & last_name are mandatories)
PUT    | /user/:id | Update selected user
DELETE    | /user/:id | Delete selected user


Those apis are open APIs, so I didn't see the necessity to implement any authentication protocol.

## Testing

To execute the tests:

```
/api_project$ npm test
```

a [Sails](http://sailsjs.org) application
