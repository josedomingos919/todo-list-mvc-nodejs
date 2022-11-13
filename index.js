const express = require("express");
const handlebars = require("express-handlebars");

const app = express();

//**db
const cnn = require("./db/conn");

//** module
const { Task } = require("./models/task");

const { taskRouter } = require("./routes/taskRoutes");

//**settings
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");

//**midleweres
//to read data in the body of the request
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(express.static("public"));

//** routes
app.use("/tasks", taskRouter);

cnn
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
