import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  category: { type: String, default: 'General' },
  short: { type: String, default: '' },
  description: { type: String, default: '' },
  imageUrl: { type: String, default: '' },
  inStock: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model('Product', productSchema);