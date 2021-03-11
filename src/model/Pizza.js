let {Sequelize, DataTypes} = require("sequelize");
let db = require("../db");

const Pizza = db.define("Pizza", 
  {

      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
      sabor: { 
        type: DataTypes.STRING,
        allowNull: false
    },
      pequena: {
        type: DataTypes.STRING
    },    
      familia: {
        type: DataTypes.STRING
    },
      valor: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }
);

module.exports = Pizza;