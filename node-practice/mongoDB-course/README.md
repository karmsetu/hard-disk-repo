## This course is broken down into the following units:

- Unit 01: Getting Started with MongoDB Atlas, the Developer Data Platform
- Unit 02: Overview of MongoDB and the Document Model
- Unit 03: Connecting to a MongoDB Database
- Unit 04: MongoDB CRUD Operations: Insert and Find Documents
- Unit 05: MongoDB CRUD: Replace and Delete
- Unit 06: MongoDB CRUD Operations: Modifying Query Results
- Unit 07: MongoDB Aggregation
- Unit 08: MongoDB Indexing
- Unit 09: MongoDB Atlas Search
- Unit 10: Introduction to MongoDB Data Modeling
- Unit 11: MongoDB Transactions



### Unit 01: Getting Started with MongoDB Atlas, the Developer Data Platform
`db.help()`

`atlas auth register`
#### geting started with atlas
1. Step 1
In the terminal tab, copy and paste the following command to create your Atlas account. You can ignore the warning that says There was an issue opening your browser, as this is expected.

atlas auth register
2. Step 2
Copy the verification code by highlighting the code and then clicking it. Then click the Atlas Registration tab to log in to the MongoDB Atlas webpage and authenticate by pasting the verification code.


![A screenshot shows an example of a verification code in the terminal.](https://play.instruqt.com/assets/tracks/wl2vhpjdeqcq/65661a936d6210751c97a214b83e6c30/assets/atlas_auth_register_one_time_verification_code.png)

If you already have an Atlas account and if it supports creating Atlas projects in your organization, then you can use this account and follow the sign in link instead on the web page.

NOTE: If you have multiple projects in your organization, please select the project "MDB_EDU" to continue and hit enter.

3. Step 3
Once you have been authenticated in the MongoDB Atlas webpage, return to this lab and tab in your browser. Click the Next button to continue the lab.

NOTE: We advise that you create a separate Atlas account for use with MongoDB University if your current Atlas account doesn't allow the permissions necessary to create a new project or new cluster in your organization. This is required for our labs which use your own Atlas cluster.

Our lab platform and the Atlas account you use on it are independant of your learn.mongodb.com account. You can use a work email for our courses and a personal email for our labs.
---

#### deploy a free cluster
In the terminal tab, use the following command to create a MongoDB Atlas cluster in your Atlas project, MDB_EDU. Then follow the instructions in the terminal.

```bash
atlas setup --clusterName myAtlasClusterEDU --provider AWS --currentIp --skipSampleData --username myAtlasDBUser --password myatlas-001 | tee atlas_cluster_details.txt
```
When you get the following output in the terminal, press Enter or type `Y`.

? Do you want to set up your first free database in Atlas with default settings (it's free forever)? Yes
Please be patient, as it takes about 20–30 seconds for the cluster to be created.

The setup process will leave you connected in mongosh to your cluster. Click the Check button to continue to the next lab.

Note
The MongoDB university labs that use your Atlas cluster require the Atlas project and cluster as configured above, and if not present, will provision and deploy a new project "MDB_EDU" with a free tier cluster "myAtlasClusterEDU" with the sample data loaded that adheres to the following, if not already present:

Project name: "MDB_EDU"
Cluster name: "myAtlasClusterEDU"
Database user: "myAtlasDBUser"
Password: "myatlas-001"
Permissions: "readWriteAnyDatabase"
The lab checks require this configuration otherwise you will not be able to successfully complete the lab.
---
#### Sample loading
In this lab, you will load the sample dataset into your Atlas cluster by using the CLI.

Lab Instructions
In the terminal tab, use the following command to load the sample data into the Atlas cluster that you just deployed:
```bash
atlas clusters sampleData load myAtlasClusterEDU
```
output[^1]
[^1]: Sample Data Job 65048eba8f917e12ffe1ecb6 created

atlas clusters sampleData load myAtlasClusterEDU
This loading process will continue without any further action required by you.

Once you get output that is similar to the following, click the Next button to complete the lab. Note that the following job identifier value is an example; you will have a different job ID.

root@mongodb:/app# atlas clusters sampleData load myAtlasClusterEDU
Sample Data Job 63777f4360b9402aa143eb0f created.
The Atlas sample dataset is designed to provide a variety of data for you to explore best practices in schema design and, more practically, to ensure that you have data in your database to support your learning of MongoDB.
---
### Unit 02: Overview of MongoDB and the Document Model
mongodb = document-> collection -> database
Document Structure
The values in a document can be any data type, including strings, objects, arrays, booleans, nulls, dates, ObjectIds, and more. Here's the syntax for a MongoDB document, followed by an example:

Syntax:

```json
{
"key": value,
"key": value,
"key" : value
}
```
Example:

```json
{
"_id": 1,
"name": "AC3 Phone",
"colors" : ["black", "silver"],
"price" : 200,
"available" : true
}
```
---
Managing Databases, Collections, and Documents in Atlas Data Explorer
Follow these steps to view and create databases, collections, and documents in Data Explorer.

From the left panel in Atlas Data Explorer, click "Databases."[1^]
[1^] ![step1](https://d36ai2hkxl16us.cloudfront.net/course-uploads/ae62dcd7-abdc-4e90-a570-83eccba49043/bgkf6t7e0jql-011.png)




Click "Browse Collections."[2^]
[2^] ![step2](https://d36ai2hkxl16us.cloudfront.net/course-uploads/ae62dcd7-abdc-4e90-a570-83eccba49043/rq9tdzng9mhd-02.png)



Click "Create Database."[3^]
[3^] ![step ](https://d36ai2hkxl16us.cloudfront.net/course-uploads/ae62dcd7-abdc-4e90-a570-83eccba49043/est708ar3hrz-05.png)



Enter a database name and a collection name, and then click the Create button.[4^]
[4^] ![step ](https://d36ai2hkxl16us.cloudfront.net/course-uploads/ae62dcd7-abdc-4e90-a570-83eccba49043/lx381cnxia7r-06.png)



Confirm that your new database is listed in the left panel. To add another collection to your database, click "Create Collection."[5^]
[5^] ![step ](https://d36ai2hkxl16us.cloudfront.net/course-uploads/ae62dcd7-abdc-4e90-a570-83eccba49043/woh9g9lyh1j8-07.png)



Enter a new collection name, and then click the Create button.[6^]
[6^] ![step ](https://d36ai2hkxl16us.cloudfront.net/course-uploads/ae62dcd7-abdc-4e90-a570-83eccba49043/u72ufkl430ns-08.png)


To insert a document, select the collection where you want to insert it and then click "Insert Document."[7^]
[7^] ![step ](https://d36ai2hkxl16us.cloudfront.net/course-uploads/ae62dcd7-abdc-4e90-a570-83eccba49043/yjpv1jeuopzl-09.png)



Enter your document, and then click the Insert button.  [8^]
[8^] ![step ](https://d36ai2hkxl16us.cloudfront.net/course-uploads/ae62dcd7-abdc-4e90-a570-83eccba49043/c5z9svxfb1b6-10.png)
---
### Unit 03: Connecting to a MongoDB Database

```bash
npm install mongodb
```

```bash
mongodb+srv://admin-study:<password>@cluster0.enkq7xh.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp
```
### Connect to Your Atlas Cluster by Using mongosh
In this lab, you will get your connection string and then use it to connect to your Atlas cluster by using mongosh.

Lab Instructions
In this lab, you will use the Atlas CLI to get your connection string. Then, you will use mongosh to connect to your Atlas cluster. For these steps you will use the terminal tab. Follow these steps:

In the terminal, copy and paste the following command to get the connection string for your Atlas cluster. This is for your information only, we have already saved this to a bash variable which we will use in the next step.

atlas clusters connectionStrings describe myAtlasClusterEDU
Copy and paste the following commands to get the connection string and store it in an environment variable. Use this variable with mongosh to connect to your Atlas cluster.

MY_ATLAS_CONNECTION_STRING=$(atlas clusters connectionStrings describe myAtlasClusterEDU | sed "1 d")
mongosh -u myAtlasDBUser -p myatlas-001 $MY_ATLAS_CONNECTION_STRING
Copy and paste the following command to the mongosh that's running in the terminal tab and run it. The hello or helper db.hello() command will output a document that describes the role of the mongod instance that you have connected to by using the mongosh:

db.hello()
Review the document, and then click the Next button to complete the lab.

Note
If you encounter the error MongoDBServerSelectionError: connection <monitor> to XXX.YYY.ZZZ.AAA:27017 closed, follow these steps:

Copy and paste the following command in the terminal to verify your cluster's connection string:

atlas clusters connectionStrings describe myAtlasClusterEDU
Copy and paste the following command, replacing YOUR_CONNECTION_STRING in the connection string with the value provided from the command in Step 1. This will retry connecting to your Atlas cluster.

mongosh -u myAtlasDBUser -p myatlas-001 YOUR

#### Install MongoDB Compass
```bash
mongodb+srv://admin-study:<password>@cluster0.enkq7xh.mongodb.net/
```
---

### Unit 04: MongoDB CRUD Operations: Insert and Find Documents

`dv.<containername>.method`

#### Insert a Single Document
Use insertOne() to insert a document into a collection. Within the parentheses of insertOne(), include an object that contains the document data. Here's an example:

```js
db.grades.insertOne({
  student_id: 654321,
  products: [
    {
      type: "exam",
      score: 90,
    },
    {
      type: "homework",
      score: 59,
    },
    {
      type: "quiz",
      score: 75,
    },
    {
      type: "homework",
      score: 88,
    },
  ],
  class_id: 550,
})
```

#### Insert Multiple Documents
Use insertMany() to insert multiple documents at once. Within insertMany(), include the documents within an array. Each document should be separated by a comma. Here's an example:

```js
db.grades.insertMany([
  {
    student_id: 546789,
    products: [
      {
        type: "quiz",
        score: 50,
      },
      {
        type: "homework",
        score: 70,
      },
      {
        type: "quiz",
        score: 66,
      },
      {
        type: "exam",
        score: 70,
      },
    ],
    class_id: 551,
  },
  {
    student_id: 777777,
    products: [
      {
        type: "exam",
        score: 83,
      },
      {
        type: "quiz",
        score: 59,
      },
      {
        type: "quiz",
        score: 72,
      },
      {
        type: "quiz",
        score: 67,
      },
    ],
    class_id: 550,
  },
  {
    student_id: 223344,
    products: [
      {
        type: "exam",
        score: 45,
      },
      {
        type: "homework",
        score: 39,
      },
      {
        type: "quiz",
        score: 40,
      },
      {
        type: "homework",
        score: 88,
      },
    ],
    class_id: 551,
  },
])
```
---
### Unit 05: MongoDB CRUD: Replace and Delete
### Unit 06: MongoDB CRUD Operations: Modifying Query Results
### Unit 07: MongoDB Aggregation
### Unit 08: MongoDB Indexing
### Unit 09: MongoDB Atlas Search
### Unit 10: Introduction to MongoDB Data Modeling
### Unit 11: MongoDB Transactions