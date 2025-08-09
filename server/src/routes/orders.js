import { Router } from 'express';
import Order from '../models/Order.js';

const router = Router();

router.post('/', async (req, res) => {
  const { items = [], customer = {} } = req.body;
  if (!items.length) return res.status(400).json({ error: 'No items' });
  const total = items.reduce((sum, i) => sum + (i.price * i.qty), 0);
  const order = await Order.create({ items, customer, total });
  res.status(201).json({ ok: true, orderId: order._id });
});

export default router;