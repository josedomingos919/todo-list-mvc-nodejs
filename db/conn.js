const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("nodemvc", "root", "Domingos.1", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();

  console.log("database connected....");
} catch (err) {
  console.log("Can not connect to the data base: ", err);
}

module.exports = sequelize;
