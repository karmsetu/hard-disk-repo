# MongoDB CRUD Operations: Insert and Find Documents
## Finding Documents in a MongoDB Collection
Review the following code, which demonstrates how to query documents in MongoDB.

### Find a Document with Equality
When given equality with an `_id` field, the `find()` command will return the specified document that matches the `_id`. Here's an example:

```js
db.zips.find({ _id: ObjectId("5c8eccc1caa187d17ca6ed16") })
```
### Find a Document by Using the `$in` Operator
Use the `$in` operator to select documents where the value of a field equals any value in the specified array. Here's an example:

```js
db.zips.find({ city: { $in: ["PHOENIX", "CHICAGO"] } })
```

### comparison operators

1. `$gt`
Use the `$gt` operator to match documents with a field greater than the given value. For example:

```js
db.sales.find({ "items.price": { $gt: 50}})
```
2. `$lt`
Use the `$lt` operator to match documents with a field less than the given value. For example:

```js
db.sales.find({ "items.price": { $lt: 50}})
```
3. `$lte`
Use the `$lte` operator to match documents with a field less than or equal to the given value. For example:

```js
db.sales.find({ "customer.age": { $lte: 65}})
```
4. `$gte`
Use the `$gte` operator to match documents with a field greater than or equal to the given value. For example:

```js
db.sales.find({ "customer.age": { $gte: 65}}
)
```

---
## Querying on Array Elements in MongoDB
Review the following code, which demonstrates how to query array elements in MongoDB.

### Find Documents with an Array That Contains a Specified Value
In the following example, "InvestmentFund" is not enclosed in square brackets, so MongoDB returns all documents within the `products` array that contain the specified value.
```js
db.accounts.find({ products: "InvestmentFund"})
```
### Find a Document by Using the `$elemMatch` Operator
Use the `$elemMatch` operator to find all documents that contain the specified subdocument. For example:
```js
db.sales.find({
  items: {
    $elemMatch: { name: "laptop", price: { $gt: 800 }, quantity: { $gte: 1 } },
  },
})
```

---
## Finding Documents by Using Logical Operators
Review the following logical operators: implicit $and, $or, and $and.

### Find a Document by Using Implicit $and
Use implicit `$and` to select documents that match multiple expressions. For example:
```js
db.routes.find({ "airline.name": "Southwest Airlines", stops: { $gte: 1 } })
```
### Find a Document by Using the `$or` Operator
Use the `$or` operator to select documents that match at least one of the included expressions. For example:
```js
db.routes.find({
  $or: [{ dst_airport: "SEA" }, { src_airport: "SEA" }],
})
```
### Find a Document by Using the `$and` Operator
Use the `$and` operator to use multiple `$or` expressions in your query.
```js
db.routes.find({
  $and: [
    { $or: [{ dst_airport: "SEA" }, { src_airport: "SEA" }] },
    { $or: [{ "airline.name": "American Airlines" }, { airplane: 320 }] },
  ]
})
``` 

db.sales.find({
    $and: [
        {name: "pen"},
        {tags: "witings"}
    ]
})

db.sales.find({
    $or: [
        {purchaseMethod: "Online"}, 
        {couponUsed: true} ,
        {age: {$lte:25}}
    ]
})

sb.sales.find(
  db.sales.find({ "items.name": { $in: ["laptop", "backpack", "printer paper"] }, "storeLocation": "London", }).sort({ saleDate: -1, }).limit(3)
)
db.sales.find({ "items.name": { $in: ["laptop", "backpack", "printer paper"] }, "storeLocation": "London", }).sort({ saleDate: -1, }).limit(3)