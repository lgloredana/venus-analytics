require('dotenv').config({ path: '../.env' });
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { initDbConnection } = require('./config/dbConnect');

initDbConnection();


app.get('/', (req, res) => {
  res.send('Hello World!');
});



app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});