const Product = require('./product');
const Customer = require('./customer');
const Order = require('./order');
const OrderDetail = require('./OrderDetail');

Customer.hasMany(Order);
Order.belongsTo(Customer);

Order.hasMany(OrderDetail);
OrderDetail.belongsTo(Order);

Product.hasMany(OrderDetail);
OrderDetail.belongsTo(Product);

module.exports = { Product, Customer, Order, OrderDetail };