
//Connection Url
const { MongoClient } = require("mongodb")
const URL = "mongodb+srv://arvindtwr6410:t7iM5QDWuBmcIcYt@techtinder.yrmwofk.mongodb.net/"

const client = new MongoClient(URL);

//database name 
const dbName = "Helloworld";
async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('User');

    // the following code examples can be pasted here...

    //Add to app.js the following function which uses the insertMany method to add three documents to the documents collection.
    const data = {
        firstName: "Arvind",
        lastName: "Tiwari",
        address: {
            state: "madhyapradesh",
            country: "india"
        },
        age: "45"
    }

    const insertResult = await collection.insertMany([data]);
    console.log('Inserted documents =>', insertResult);

    // Add a query that returns all the documents.
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);



    return 'done.';
}


main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());
