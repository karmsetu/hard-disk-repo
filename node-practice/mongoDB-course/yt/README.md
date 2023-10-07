install mongoDB and mongoSH
```bash
mongosh
show dbs
use <databasename>
show collections
cls
exit
use 
```
```js
db.users()
db.dropDatabase()
db.users.insertOne({name: "boi"})
db.users.insertOne({name: "sally", age:19, address:{street:"xyz", block:"d"}, hobbies:"none"})
db.users.find()
db.users.find({<object>})
db.users.find({<object>}, {<whatYouWantToReturn>})
db.users.find(){.sort({name:1}), .skip(1), .limit(2)}
db.users.insertMany([{name:"john"}, {name:"natasha", age:18}])
```
sorting -> 1 = ascending , -1 = descending
complex queries
$eq
$ne
$lt
$lte
$gt
$gte
$in -> kinda like or requires list
$nin
{$exists: true/false}
$and: [{}, {}]
$or: [{}, {}]
$expr: {<$comparitiveExpresson: ["$field1", "$field2"]>}

```js
db.users.updateOne({age:26}, {$set: {age:27}})
db.users.updateOne({age:26}, {$inc: {age:1}})
db.users.updateOne({name:'boi'}, {$rename: {name: "firstName"}})
db.users.updateOne({name:'boi'}, {$unset: {name: ""}})
db.users.updateOne({name:'boi'}, {$push: {hobbies: "swimming"}})
db.users.updateOne({name:'boi'}, {$pull: {hobbies: "swimming"}})
db.users.replaceOne({<oldObject>, <newObject>})
db.users.deleteOne({<object>})
db.users.deleteMany({<object>})
```


```bash
npm i mongoose
npm i --save-dev nodemon
```

# error handling 
1. press win key & R key
2. search `services.msc`
3. search mongo
4. activate services
[ref](https://stackoverflow.com/questions/46523321/mongoerror-connect-econnrefused-127-0-0-127017)

# basic guide
The following are all the valid SchemaTypes in Mongoose. Mongoose plugins can also add custom SchemaTypes like int32. Check out Mongoose's plugins search to find plugins.

- String
- Number
- Date
- Buffer
- Boolean
- Mixed
- ObjectId
- Array
- Decimal128
- Map
- Schema
- UUID
- BigInt

cd D:\hard-disk-repos\node-practice\mongoDB-course\yt