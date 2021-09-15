const Sequelize = require("sequelize");
const db = require("../config/database");

const schema = db.define("someSchema", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  title,
});
