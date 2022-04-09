const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../Utilities/Database');

const TransactionData = sequelize.define('transactiondata', {
  tx_id: {
    type: DataTypes.STRING,
    required: true,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  tx_name: {
    type: DataTypes.STRING,
    required: true,
  },
  due_date: {
    type: DataTypes.DATE,
  },
  amount: {
    type: DataTypes.INTEGER,
    required: true,
  },

  status: {
    type: DataTypes.INTEGER,
    required: true,
  },
  paid_on: {
    type: DataTypes.DATE,
  },
});
module.exports = TransactionData;
