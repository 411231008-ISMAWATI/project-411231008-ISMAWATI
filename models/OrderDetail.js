const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const OrderDetail = sequelize.define('OrderDetail', {
  qty: DataTypes.INTEGER,
  price: DataTypes.INTEGER
});

module.exports = OrderDetail;