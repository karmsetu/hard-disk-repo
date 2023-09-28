# Aggregation
    :analysis and summary of data

# Aggregation pipeline
    :A series of stages completed aon at a time 
# Structure of an Aggregation Pipeline
```js
db.collection.aggregate([
    {
        $stage1: {
            { expression1 },
            { expression2 }...
        },
        $stage2: {
            { expression1 }...
        }
    }
])
```
## Using $match and $group Stages in a MongoDB Aggregation Pipeline

### $match
    :The $match stage filters for documents that match specified conditions. Here's the code for $match:
```js
{
  $match: {
     "field_name": "value"
  }
}
```
### $group
    :The $group stage groups documents by a group key.
```js
{
  $group:
    {
      _id: <expression>, // Group key
      <field>: { <accumulator> : <expression> }
    }
 }
```
$match and $group in an Aggregation Pipeline
The following aggregation pipeline finds the documents with a field named "state" that matches a value "CA" and then groups those documents by the group key "$city" and shows the total number of zip codes in the state of California.
```js
db.zips.aggregate([
{   
   $match: { 
      state: "CA"
    }
},
{
   $group: {
      _id: "$city",
      totalZips: { `$count`: { } }
   }
}
])
```
```js
db.sightings.aggregate([
$match: {
    species_common: "Eastern Bluebird"
},
{
    $group: {
    _id: location.coordinates
    number_of_sightings: {$count: {}}
    }
}
])
```
db.sightings.aggregate([
  {
    $match: {
        species_common: 'Eastern Bluebird'
    }
  }, {
    $group: {
        _id: '$location.coordinates',
        number_of_sightings: {
            $count: {}
        }
    }
  }
])

# Using `$sort`and `$limit`Stages in a MongoDB Aggregation Pipeline
Review the following sections, which show the code for the `$sort`and `$limit`aggregation stages.

$sort
The `$sort`stage sorts all input documents and returns them to the pipeline in sorted order. We use 1 to represent ascending order, and -1 to represent descending order.

{
    $sort: {
        "field_name": 1
    }
}


$limit
The `$limit`stage returns only a specified number of records.

{
  $limit: 5
}


`$sort` and `$limit`in an Aggregation Pipeline
The following aggregation pipeline sorts the documents in descending order, so the documents with the greatest pop value appear first, and limits the output to only the first five documents after sorting.

db.zips.aggregate([
{
  $sort: {
    pop: -1
  }
},
{
  $limit:  5
}
])

db.sightings.aggregate([
    $sort: {
        `location.coordinates.1`: -1
    },
    $limit: 4
])

db.sightings.aggregate([
  {
    $sort: {
        'location.coordinates.1': -1
    }
  }, {
    $limit: 4
  }
])

# aggregation stages
## Project
similar to find()
Using  `$project`, $count, and `$set`Stages in a MongoDB Aggregation Pipeline
Review the following sections, which show the code for the $project, $set, and `$count`aggregation stages.

 `$project`
The  `$project`stage specifies the fields of the output documents. 1 means that the field should be included, and 0 means that the field should be supressed. The field can also be assigned a new value.

{
    $project: {
        state:1, 
        zip:1,
        population:"$pop",
        _id:0
    }
}
 `$set`
The  `$set`stage creates new fields or changes the value of existing fields, and then outputs the documents with the new fields.

{
    $set: {
        place: {
            $concat:["$city",",","$state"]
        },
        pop:10000
     }
  }
$count
The `$count`stage creates a new document, with the number of documents at that stage in the aggregation pipeline assigned to the specified field name.

{
  $count: "total_zips"
}

db.sightings.aggregate([
    {$project: {
        date:1,
        species_common:1,
        _id:0
    }}
])

db.birds.aggregate([
    {
        $set: {
            class: 'birds'
        }
    }
])

db.sightings.aggregate([
    {
        $match:{
            date: {
                $gt: ISODate(2022-01-01T00:00:00.000Z),
                $tt: ISODate(2023-01-01T00:00:00.000Z)
            },
            species_common:"Eastern Bluebird"
        }
    },
    {
        $count: "blue_bird_sightings_in_2022"
    }
])

db.sightings.aggregate([
  {
    $match: {
      date: {
        $gt: ISODate('2022-01-01T00:00:00.000Z'),
        $lt: ISODate('2023-01-01T00:00:00.000Z')
      },
      species_common: 'Eastern Bluebird'
    }
  }, {
    $count: 'bluebird_sightings_2022'
  }
])

# $out
db.sightings.aggregate([
    {
        $match: {
            date: {
                $gt: ISODate('2022-01-01T00:00:00.000Z'),
                $lt: ISODate('2023-01-01T00:00:00.000Z')
            }
        }
    },
    {
        $out: 'sightings_2022'
    }
])