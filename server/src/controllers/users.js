const dbConnection = require("../config/dbConnect");

export const users = async (req, res) => {
  const userCollection = dbConnection.getDatabase().collection("users");
  const user = await userCollection.findOne({ name: "John Doe" });

  console.log(user);

  res.send({});
};
