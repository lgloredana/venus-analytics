const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@venus-hackathon.rhq2f.mongodb.net/myFirstDatabase?retryWrites=true&w=majorityz`;
const client = new MongoClient(uri);

const initDbConnection = async () => {
    try {
      await client.connect();
      const usersCollection = client.db('venus-db').collection('users');
      const findUsers = await usersCollection.findOne({ name: 'John Doe' });
      console.log('Connection to venus-db was successfully!, user found =>', findUsers);
    } catch (e) {
		console.error(e);
		await client.close();
    } finally {
        await client.close();
    }
}

module.exports = { initDbConnection };