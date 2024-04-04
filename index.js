const express = require("express");
const mongoose = require("mongoose");
const { Tasks } = require("./db");
const tasksRouter = require("./routes/tasks");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/", tasksRouter);

app.listen(3000, () => {
  console.log("Server running...");
});
