const sequelize = require('../config/database');
const { Product, Order, OrderDetail } = require('../models');

exports.createOrder = async (data) => {
  const t = await sequelize.transaction();

  try {
    let total = 0;

    const order = await Order.create({
      CustomerId: data.customerId,
      total: 0
    }, { transaction: t });

    for (let item of data.items) {
      const product = await Product.findByPk(item.productId);

      if (product.stock < item.qty) {
        throw new Error('Stock tidak cukup');
      }

      let subtotal = product.price * item.qty;
      total += subtotal;

      await OrderDetail.create({
        OrderId: order.id,
        ProductId: item.productId,
        qty: item.qty,
        price: product.price
      }, { transaction: t });

      product.stock -= item.qty;
      await product.save({ transaction: t });
    }

    order.total = total;
    await order.save({ transaction: t });

    await t.commit();
    return order;

  } catch (err) {
    await t.rollback();
    throw err;
  }
};