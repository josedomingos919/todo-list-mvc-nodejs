const express = require("express");
const taskRouter = express.Router();

const { TaskController } = require("../controllers/taskController");

taskRouter.get("/", TaskController.showTask);
taskRouter.get("/edit/:id", TaskController.updateTask);
taskRouter.get("/add", TaskController.createTask);

taskRouter.post("/updatestatus", TaskController.toggleTaskStatus);
taskRouter.post("/edit", TaskController.editTask);
taskRouter.post("/add", TaskController.createTaskSave);
taskRouter.post("/remove", TaskController.removeTask);

module.exports = { taskRouter };
