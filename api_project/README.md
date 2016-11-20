# api_project

To execute the application you should have installed a version of Node.JS with ES6 support.

This application is using SAILS.JS in drop mode, so every time that you launch the application the content of the sqlite3 database will be wiped.

You will need to bring all the modules required in the application

```
$ npm install
```

Once all the dependencies are downloaded:

```
$ npm start
```

It will serve the REST service in [](http://localhost:1337/user). You can execute the CRUD operations using:

GET /user : Get all the users
GET /user?first_name=??? or /user?last_name=??? or /user?birth_date=??? or a combination of them : Get all the users with the condition
GET /user/:id : Get specific user with that id
POST /user : Create user
PUT /user/:id : Update user
DELETE /user/:id : Delete selected user

Those apis are open APIs, so I didn't see the necessity to implement any authentication protocol.

To execute the tests:

```
$ npm test
```

a [Sails](http://sailsjs.org) application
