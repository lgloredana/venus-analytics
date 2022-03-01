const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

async function main(){
    const { MongoClient, ServerApiVersion } = require('mongodb');
    const uri = "mongodb+srv://venus:venus@venus-hackathon.rhq2f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    try {
        // Connect to the MongoDB cluster
        const db = await client.connect();
        console.log(db)
        
        console.log('Db Connected!');
        // await users.find();
        // console.log(test)
        // Make the appropriate DB calls
        // await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);



app.get('/', (req, res) => {
  res.send('Hello World!');
});



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});