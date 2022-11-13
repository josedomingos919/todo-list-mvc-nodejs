const { Task } = require("../models/task");

class TaskController {
  static createTask(req, res) {
    res.render("tasks/create");
  }

  static async showTask(req, res) {
    const tasks = await Task.findAll({ raw: true });

    res.render("tasks/all", { tasks });
  }

  static async createTaskSave(req, res) {
    const { title, description } = req.body;

    const data = { title, description, done: false };

    await Task.create(data);

    res.redirect("/tasks");
  }

  static async removeTask(req, res) {
    const { id } = req.body;

    await Task.destroy({ where: { id } });

    res.redirect("/tasks");
  }

  static async updateTask(req, res) {
    const { id } = req.params;

    const task = await Task.findOne({ where: { id }, row: true });

    res.render("tasks/edit", { task: task.dataValues });
  }

  static async editTask(req, res) {
    const { id, title, description } = req.body;

    await Task.update(
      { title, description },
      {
        where: { id },
      }
    );

    res.redirect("/tasks");
  }

  static async toggleTaskStatus(req, res) {
    const { id, done } = req.body;

    await Task.update({ done: !parseInt(done) }, { where: { id } });

    res.redirect("/tasks");
  }
}

module.exports = { TaskController };
