import { Router } from 'express';
import Product from '../models/Product.js';

const router = Router();
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || 'changeme-admin-token';

router.get('/', async (req, res) => {
  const { q = '', category = '' } = req.query;
  const filter = {};
  if (q) filter.name = { $regex: q, $options: 'i' };
  if (category) filter.category = category;
  const items = await Product.find(filter).sort({ createdAt: -1 }).lean();
  res.json(items);
});

router.get('/:slug', async (req, res) => {
  const p = await Product.findOne({ slug: req.params.slug }).lean();
  if (!p) return res.status(404).json({ error: 'Not found' });
  res.json(p);
});

router.post('/', async (req, res) => {
  if (req.headers['x-admin-token'] !== ADMIN_TOKEN)
    return res.status(401).json({ error: 'Unauthorized' });
  try {
    const created = await Product.create(req.body);
    res.status(201).json(created);
  } catch (e) {
    res.status(400).json({ error: String(e) });
  }
});

export default router;