const { Product } = require('../models');

exports.createProduct = async (req, res) => {
  const data = await Product.create(req.body);
  res.json(data);
};

exports.getAllProduct = async (req, res) => {
  const data = await Product.findAll();
  res.json(data);
};

exports.updateProduct = async (req, res) => {
  await Product.update(req.body, {
    where: { id: req.params.id }
  });
  res.json({ message: "Updated" });
};

exports.deleteProduct = async (req, res) => {
  await Product.destroy({
    where: { id: req.params.id }
  });
  res.json({ message: "Deleted" });
};