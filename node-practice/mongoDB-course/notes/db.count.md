Counting Documents in a MongoDB Collection
Review the following code, which demonstrates how to count the number of documents that match a query.

Count Documents
Use db.collection.countDocuments() to count the number of documents that match a query. countDocuments() takes two parameters: a query document and an options document.

Syntax:

db.collection.countDocuments( <query>, <options> )
The query selects the documents to be counted.

Examples:

// Count number of docs in trip collection
db.trips.countDocuments({})
// Count number of trips over 120 minutes by subscribers
```db.trips.countDocuments({ tripduration: { $gt: 120 }, usertype: "Subscriber" })```

```db.sales.countdocuments({couponUsed:true, storeLocation:"Denver"})```

# conclusion
MongoDB CRUD Operations: Modifying Query Results
In this unit, you learned how to modify query results with MongoDB. Specifically, you learned how to:

Return query results in a specified order by using cursor.sort().

Constrained the number of results returned by using cursor.limit().

Specified fields to return by adding a projection document parameter in calls to db.collection.find().

Counted the number of documents that match a query by using db.collection.countDocuments().