let {Sequelize, DataTypes} = require("sequelize");
let db = require("../db");

const Ingrediente = db.define("Ingrediente", 
  {

      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
      nome: { 
        type: DataTypes.STRING,
        allowNull: false
    },
      medida: {
        type: DataTypes.STRING
    },    
      estoque: {
        type: DataTypes.NUMERIC
    },
      valor: {
      type: DataTypes.NUMERIC,
      allowNull: false
    }
  }
);

module.exports = Ingrediente;