// 引入 Express 和数据库连接
const express = require('express');
const router = express.Router();
const db = require('../db'); // 你项目的数据库连接

// POST /api/orders 创建新订单
router.post('/', async (req, res) => {
  const { customer_name, product_id, quantity } = req.body;

  // 简单参数校验
  if (!customer_name || !product_id || !quantity) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // 1. 先查找 product 的单价
    const [productRows] = await db.promise().query(
      'SELECT price FROM products WHERE id = ?',
      [product_id]
    );

    if (productRows.length === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const product = productRows[0];
    const total_price = product.price * quantity;

    // 2. 插入订单
    const [result] = await db.promise().query(
      'INSERT INTO orders (customer_name, product_id, quantity, total_price) VALUES (?, ?, ?, ?)',
      [customer_name, product_id, quantity, total_price]
    );

    res.status(201).json({ message: 'Order created successfully', orderId: result.insertId });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Failed to create order' });
  }
});

module.exports = router;
