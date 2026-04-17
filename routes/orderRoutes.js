const express = require('express');
const router = express.Router();
const service = require('../services/orderService');

router.post('/create-order', async (req, res) => {
  try {
    const result = await service.createOrder(req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;