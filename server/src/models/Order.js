import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  items: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    name: String,
    price: Number,
    qty: Number
  }],
  customer: {
    name: String,
    email: String,
    phone: String,
    address: String
  },
  total: Number,
  status: { type: String, default: 'new' }
}, { timestamps: true });

export default mongoose.model('Order', orderSchema);
