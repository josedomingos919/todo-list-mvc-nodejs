const { DataTypes } = require("sequelize");

const db = require("./../db/conn");

const Task = db.define("task", {
  title: {
    required: true,
    type: DataTypes.STRING,
  },
  description: {
    required: true,
    type: DataTypes.STRING,
  },
  done: {
    required: true,
    type: DataTypes.BOOLEAN,
  },
});

module.exports = { Task };
