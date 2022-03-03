import mongoose from 'mongoose';

// Override env variable to the directory containing the config
process.env.NODE_CONFIG_DIR = __dirname;
const config = require('config');

let db = config.get('mongoURI');

db = db.replace('<user>', process.env.DB_USERNAME);
db = db.replace('<password>', process.env.DB_PASSWORD);

export const connectDB = async callback => {
  try {
    await mongoose.connect(db);
    console.log('MongoDB Connected succesfully!');

    callback();
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
