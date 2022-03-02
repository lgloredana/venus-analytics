const { MongoClient } = require("mongodb");

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@venus-hackathon.rhq2f.mongodb.net/myFirstDatabase?retryWrites=true&w=majorityz`;
const client = new MongoClient(uri);

let dbConnection;

module.exports = {
  connectToServer: (callback) => {
    client.connect((err, db) => {
      // Short-circuit the app if db not found
      if (err || !db) {
        return callback(err);
      }

      // Connect to db
      dbConnection = db.db("venus-db");
      console.log("Successfully connected to MongoDB");

      return callback();
    });
  },

  getDatabase: () => dbConnection,
};
