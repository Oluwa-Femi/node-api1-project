require('dotenv').config();

// implement your API here
const express = require("express");
const {
  getUserById,
  getUsers,
  newUser,
  updateUser,
  deleteUser
} = require("./data/users");

const cors = require("cors");
const database = require("./data/db");
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

  app.post("/api/users", newUser);
  app.get("/api/users", getUsers);
  app.get("/api/users/:id", getUserById);
  app.delete("/api/users/:id", deleteUser);
  app.put("/api/users/:id", updateUser);

app.get("*", (req, res) => {
  res.send("Welcome to the app");
});

app.listen(port, () => {
  console.log('listening on ' + port);
});