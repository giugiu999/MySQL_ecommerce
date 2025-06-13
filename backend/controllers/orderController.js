const db = require('../config/db');

exports.createOrder = async (req, res) => {
  const { customer_name, product_id, quantity } = req.body;

  if (!customer_name || !product_id || !quantity) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const [products] = await db.query('SELECT price FROM products WHERE id = ?', [product_id]);

    if (products.length === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const price = products[0].price;
    const total_price = price * quantity;

    const [result] = await db.query(
      'INSERT INTO orders (customer_name, product_id, quantity, total_price) VALUES (?, ?, ?, ?)',
      [customer_name, product_id, quantity, total_price]
    );

    res.status(201).json({
      message: 'Order created successfully',
      orderId: result.insertId,
      total_price
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create order' });
  }
};
