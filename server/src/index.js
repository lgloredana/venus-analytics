require('dotenv').config({ path: '../.env' });

import express from 'express';
import cors from 'cors';

import { connectDB } from './config/db';

const PORT = process.env.PORT || 5000;
const app = express();

/** Middlewares */
app.use(express.json({ extended: false }));
app.use(cors());

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.statusCode(500).send('Server Internal Error');
});

/** Define Routes */
app.use('/api/users', require('./routes/api/users'));
app.use('/api/events', require('./routes/api/events'));

connectDB(() => {
  // Start Server
  app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
  });
});
