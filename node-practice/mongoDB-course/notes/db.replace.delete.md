# MongoDB CRUD Operations: Replace and Delete Documents
`db.<collection>.replaceOne(filter, replacement, option)`

To replace documents in MongoDB, we use the `replaceOne()` method. The `replaceOne()` method takes the following parameters:

filter: A query that matches the document to replace.
replacement: The new document to replace the old one with.
options: An object that specifies options for the update.
In the previous video, we use the `_id` field to filter the document. In our replacement document, we provide the entire document that should be inserted in its place. Here's the example code from the video:
```js
db.books.replaceOne(
  {
    _id: ObjectId("6282afeb441a74a98dbbec4e"),
  },
  {
    title: "Data Science Fundamentals for Python and MongoDB",
    isbn: "1484235967",
    publishedDate: new Date("2018-5-10"),
    thumbnailUrl:
      "https://m.media-amazon.com/images/I/71opmUBc2wL._AC_UY218_.jpg",
    authors: ["David Paper"],
    categories: ["Data Science"],
  }
)
```

# Updating MongoDB Documents by Using updateOne()
The `updateOne()` method accepts a filter document, an update document, and an optional options object. MongoDB provides update operators and options to help you update documents. In this section, we'll cover three of them: `$set`, `upsert`, and `$push`.

## $set
The `$set` operator replaces the value of a field with the specified value, as shown in the following code:
```js
db.podcasts.updateOne(
{
    _id: ObjectId("5e8f8f8f8f8f8f8f8f8f8f8"),
},

{
    $set: {
    subscribers: 98562,
    },
}
)
```
## upsert
The upsert option creates a new document if no documents match the filtered criteria. Here's an example:
```js
db.podcasts.updateOne(
  { title: "The Developer Hub" },
  { $set: { topics: ["databases", "MongoDB"] } },
  { upsert: true }
)
```
## `$push`
The `$push` operator adds a new value to the hosts array field. Here's an example:
```js
db.podcasts.updateOne(
  { _id: ObjectId("5e8f8f8f8f8f8f8f8f8f8f8") },
  { $push: { hosts: "Nic Raboy" } }
)
```
```js
db.birds.updateOne(
    {_id: ObjectId("6268413c613e55b82d7065d2")},
    {$set: {tags: ['geese', 'herbivore', 'migration']}}
)
b.birds.findOne({common_name:{$in:["Robin Redbreast"]}})

db.birds.updateOne(
    {_id: ObjectId("6268471e613e55b82d7065d7")},
    {$set: {diet:  ['newts', 'opossum', 'skunks', 'squirrels']}}
)
```
db.birds.find({ _id: ObjectId("628682d92f3fa87b7d86dcce") })

## Updating MongoDB Documents by Using `findAndModify()`
The `findAndModify()` method is used to find and replace a single document in MongoDB. It accepts a filter document, a replacement document, and an optional options object. The following code shows an example:
```js
db.podcasts.findAndModify({
  query: { _id: ObjectId("6261a92dfee1ff300dc80bf1") },
  update: { $inc: { subscribers: 1 } },
  new: true,
})
```

db.birds.findAndModify({
    query: {common_name:{$in: ['Blue Jay']}},
    update: {sightings_count: db.birds.sightings_count +1},
    new: true
})

## Updating MongoDB Documents by Using updateMany()
To update multiple documents, use the updateMany() method. This method accepts a filter document, an update document, and an optional options object. The following code shows an example:
```js
db.books.updateMany(
  { publishedDate: { $lt: new Date("2019-01-01") } },
  { $set: { status: "LEGACY" } }
)
```

db.birds.updateMany(
    { common_name: { $in: ["Blue Jay", "Grackle"] } },
    {$set: {last_seen: new Date("2022-01-01")}}
)

db.birds.find({ common_name: { $in: ["Blue Jay", "Grackle"] } })

# Deleting Documents in MongoDB
To delete documents, use the ` deleteOne() ` or ` deleteMany() ` methods. Both methods accept a filter document and an options object.

## Delete One Document
The following code shows an example of the ` deleteOne() ` method:
```js
db.podcasts.deleteOne({ _id: Objectid("6282c9862acb966e76bbf20a") })
```
## Delete Many Documents
The following code shows an example of the ` deleteMany() ` method:
```js
db.podcasts.deleteMany({category: “crime”})
```