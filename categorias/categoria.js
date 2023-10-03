const Sequelize = require("sequelize");
const connection = require("../database/database");

const categoria = connection.define("categorias",{
    titulo: {
      type: Sequelize.STRING,
      allowNull: false
    }, slug: {
      type: Sequelize.STRING,
      allowNull: false
    }
});

module.exports = categoria;