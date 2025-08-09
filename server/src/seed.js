import mongoose from 'mongoose';
import Product from './models/Product.js';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/ruyadeluxe';

const data = [
  {
    name: 'Dream Glow Serum',
    slug: 'dream-glow-serum',
    price: 34.99,
    category: 'Serums',
    short: 'Vitamin C + Hyaluronic glow',
    description: 'Brightens, hydrates, and defends for a daily lit-from-within look.',
    imageUrl: '/images/dream-glow-serum.png'
  },
  {
    name: 'Luxe Night Cream',
    slug: 'luxe-night-cream',
    price: 39.99,
    category: 'Moisturizers',
    short: 'Peptide-rich overnight repair',
    description: 'Nourishes and restores while you sleep for soft, supple skin.',
    imageUrl: '/images/luxe-night-cream.png'
  },
  {
    name: 'Purity Cleanser',
    slug: 'purity-cleanser',
    price: 19.99,
    category: 'Cleansers',
    short: 'Gentle sulfate-free daily cleanse',
    description: 'Removes impurities without stripping, for all skin types.',
    imageUrl: '/images/purity-cleanser.png'
  }
];

(async () => {
  await mongoose.connect(MONGO_URI);
  await Product.deleteMany({});
  await Product.insertMany(data);
  console.log('Seeded products:', data.length);
  process.exit(0);
})();
