const { timeStamp } = require("console");
const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://nikhil:Vaishu%40123@cluster0.ash9pvf.mongodb.net/"
);

// Define schemas
const TasksSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const Tasks = mongoose.model("Tasks", TasksSchema);

module.exports = {
  Tasks,
};
