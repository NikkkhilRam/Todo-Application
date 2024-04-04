const express = require("express");
const { Tasks } = require("../db");
const router = express.Router();

router.post("/task", async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  await Tasks.create({
    title: title,
    description: description,
  });
  res.status(201).json({ message: "task created" });
});

router.get("/task", async (req, res) => {
  const tasks = await Tasks.find({});
  res.status(200).json({
    tasks: tasks,
  });
});

router.delete("/task/:taskId", async (req, res) => {
  const taskId = req.params.taskId;
  const task = Tasks.findById(taskId);
  await Tasks.deleteOne(task);
  res.status(200).json({
    message: "Task deleted succesfully",
  });
});

module.exports = router;
