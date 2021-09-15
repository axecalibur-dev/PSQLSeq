const { Sequelize } = require("sequelize");
const db = new Sequelize({
  host: "localhost",
  database: "codegig",
  password: "root",
  username: "postgres",
  dialect: "postgres",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = db;
