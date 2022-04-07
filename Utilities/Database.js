const Sequelize = require('sequelize').Sequelize;

const sequelize = new Sequelize(
  process.env.DATABASE,
  'root',
  process.env.DBPASS,
  {
    dialect: 'mysql',
    host: 'localhost',
  }
);

module.exports = sequelize;
