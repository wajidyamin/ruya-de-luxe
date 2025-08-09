import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import productsRouter from './routes/products.js';
import ordersRouter from './routes/orders.js';

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/ruyadeluxe';
const CORS_ORIGIN = process.env.CORS_ORIGIN || '*';

app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'ruyadeluxe-api', uptime: process.uptime() });
});

app.use('/api/products', productsRouter);
app.use('/api/orders', ordersRouter);

mongoose.connect(MONGO_URI).then(() => {
  app.listen(PORT, () => console.log(`API on :${PORT}`));
}).catch(err => {
  console.error('Mongo error', err);
  process.exit(1);
});