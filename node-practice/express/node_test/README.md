# express
## object export 
To make objects available outside of a module you just need to expose them as additional properties on the exports object. For example ,
the square.js module below is a file that exports area() and perimeter() methods:

```JS

exports.area = function (width) {
  return width * width;
};
exports.perimeter = function (width) {
  return 4 * width;
};
```
We can import this module using require() ,
and then call the exported method(s) as shown:

```JS
Copy to Clipboard

const square = require("./square"); // Here we require() the name of the file without the (optional) .js file extension
console.log(`The area of a square with a width of 4 is ${square.area(4)}`);
```

The Express application object also provides methods to define route handlers for all the other HTTP verbs ,
which are mostly used in exactly the same way:

`checkout()` ,
`copy()` ,
`delete()` ,
`get()` ,
`head()` ,
`lock()` ,
`merge()` ,
`mkactivity()` ,
`mkcol()` ,
`move()` ,
`m-search()` ,
`notify()` ,
`options()` ,
`patch()` ,
`post()` ,
`purge()` ,
`put()` ,
`report()` ,
`search()` ,
`subscribe()` ,
`trace()` ,
`unlock()` ,
`unsubscribe()`

Handling errors
Errors are handled by one or more special middleware functions that have four arguments, instead of the usual three: (err, req, res, next). For example:

```JS
Copy to Clipboard

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
```
These can return any content required, but must be called after all other app.use() and routes calls so that they are the last middleware in the request handling process!

Express comes with a built-in error handler, which takes care of any remaining errors that might be encountered in the app. This default error-handling middleware function is added at the end of the middleware function stack. If you pass an error to next() and you do not handle it in an error handler, it will be handled by the built-in error handler; the error will be written to the client with the stack trace.

Using databases
Express apps can use any database mechanism supported by Node (Express itself doesn't define any specific additional behavior/requirements for database management). There are many options, including PostgreSQL, MySQL, Redis, SQLite, MongoDB, etc.

In order to use these you have to first install the database driver using npm. For example, to install the driver for the popular NoSQL MongoDB you would use the command:

BASH
Copy to Clipboard

npm install mongodb
The database itself can be installed locally or on a cloud server. In your Express code you require the driver, connect to the database, and then perform create, read, update, and delete (CRUD) operations. The example below (from the Express documentation) shows how you can find "mammal" records using MongoDB.

This works with older versions of MongoDB version ~ 2.2.33:

```JS
Copy to Clipboard

const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/animals", (err, db) => {
  if (err) throw err;

  db.collection("mammals")
    .find()
    .toArray((err, result) => {
      if (err) throw err;

      console.log(result);
    });
});
```
For MongoDB version 3.0 and up:

```JS
Copy to Clipboard

const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/animals", (err, client) => {
  if (err) throw err;

  const db = client.db("animals");
  db.collection("mammals")
    .find()
    .toArray((err, result) => {
      if (err) throw err;
      console.log(result);
      client.close();
    });
});
```
Another popular approach is to access your database indirectly, via an Object Relational Mapper ("ORM"). In this approach you define your data as "objects" or "models" and the ORM maps these through to the underlying database format. This approach has the benefit that as a developer you can continue to think in terms of JavaScript objects rather than database semantics, and that there is an obvious place to perform validation and checking of incoming data.