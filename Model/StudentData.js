const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../Utilities/Database');

const StudentData = sequelize.define('studentdata', {
  id: {
    type: DataTypes.STRING,
    required: true,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    required: true,
  },
  email: {
    type: DataTypes.STRING,
    required: true,
  },
  password: {
    type: DataTypes.STRING,
    required: true,
  },
  image: {
    type: DataTypes.STRING,
  },
  year: {
    type: DataTypes.INTEGER,
    required: true,
  },
  branch: {
    type: DataTypes.STRING,
    required: true,
  },
  spl: {
    type: DataTypes.STRING,
  },
});
module.exports = StudentData;
