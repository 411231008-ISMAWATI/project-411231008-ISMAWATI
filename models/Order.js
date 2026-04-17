const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Order = sequelize.define('Order', {
  total: DataTypes.INTEGER
});

module.exports = Order;