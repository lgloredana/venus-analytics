require("dotenv").config({ path: "../.env" });

import express from "express";
import dbConnection from "./config/dbConnect";

import userRouter from "./routers/users";

const PORT = process.env.PORT || 3000;
const app = express();

/** Middlewares */
app.use(express.json());
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.statusCode(500).send("Server Internal Error");
});
app.use(userRouter);

/**  Start the server when the database connection is established */
dbConnection.connectToServer((err) => {
  if (err) {
    console.log(err);
    process.exit();
  }

  // Start Server
  app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
  });
});
