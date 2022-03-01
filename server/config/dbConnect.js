// const connectToDB = () => {
//     const { MongoClient, ServerApiVersion } = require('mongodb');
//     const uri = "mongodb+srv://<venus>:<venus>@venus-hackathon.rhq2f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//     const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
//     client.connect(err => {
//       console.log('Connected to DB successfully!')
//       const collection = client.db("test").collection("devices");
//       // perform actions on the collection object
//       client.close();
//     });
// }


// module.export = connectToDB;

// const { MongoClient } = require("mongodb");
// // Connection URI
// const uri = "mongodb+srv://<venus>:<venus>@venus-hackathon.rhq2f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// // Create a new MongoClient
// const client = new MongoClient(uri);
// async function run() {
//   try {
//     // Connect the client to the server
//     await client.connect();
//     // Establish and verify connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Connected successfully to server");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);