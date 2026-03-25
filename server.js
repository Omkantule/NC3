const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/agridisruptor';

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    originalPrice: { type: Number, default: null },
    discount: { type: Number, default: 0 },
    rating: { type: Number, default: 4.5 },
    reviews: { type: Number, default: 0 },
    shelfLife: { type: String, required: true },
    location: { type: String, required: true },
    distance: { type: String, required: true },
    stockKg: { type: Number, required: true },
    icon: { type: String, default: '🌾' },
    images: { type: [String], default: [] },
    listedBy: { type: String, default: 'farmer' },
    farmer: {
      name: { type: String, default: 'Current Farmer' },
      avatar: { type: String, default: '👨‍🌾' },
      rating: { type: Number, default: 4.8 },
      experience: { type: Number, default: 10 },
      products: { type: Number, default: 0 },
      orders: { type: Number, default: 0 },
      bio: { type: String, default: 'Verified farmer using sustainable farming methods.' }
    },
    description: { type: String, default: '' }
  },
  { timestamps: true }
);

const orderSchema = new mongoose.Schema(
  {
    orderId: { type: String, required: true },
    buyerRole: { type: String, required: true },
    buyerName: { type: String, required: true },
    items: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        productName: { type: String, required: true },
        quantity: { type: Number, required: true },
        pricePerKg: { type: Number, required: true },
        totalPrice: { type: Number, required: true }
      }
    ]
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);
const Order = mongoose.model('Order', orderSchema);

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.get('/api/products', async (_req, res) => {
  try {
    const products = await Product.find({}).sort({ createdAt: -1 });
    res.json({ products });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products.' });
  }
});

app.post('/api/products', async (req, res) => {
  try {
    const {
      name,
      category,
      price,
      originalPrice,
      shelfLife,
      location,
      distance,
      stockKg,
      icon,
      description
    } = req.body;

    if (!name || !category || !price || !shelfLife || !location || !distance || !stockKg) {
      return res.status(400).json({ error: 'Missing required fields.' });
    }

    const parsedPrice = Number(price);
    const parsedOriginalPrice = originalPrice ? Number(originalPrice) : null;
    const parsedStock = Number(stockKg);

    const discount =
      parsedOriginalPrice && parsedOriginalPrice > parsedPrice
        ? Math.round(((parsedOriginalPrice - parsedPrice) / parsedOriginalPrice) * 100)
        : 0;

    const created = await Product.create({
      name,
      category,
      price: parsedPrice,
      originalPrice: parsedOriginalPrice,
      discount,
      shelfLife,
      location,
      distance,
      stockKg: parsedStock,
      icon: icon || '🌾',
      images: [icon || '🌾', icon || '🌾', icon || '🌾'],
      listedBy: 'farmer',
      description: description || `${name} freshly listed by farmer.`
    });

    res.status(201).json({ product: created });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create product.' });
  }
});

app.post('/api/orders', async (req, res) => {
  try {
    const { buyerRole, buyerName, items } = req.body;

    if (!buyerRole || !buyerName || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'Invalid order payload.' });
    }

    const productIds = items.map(item => item.id);
    const products = await Product.find({ _id: { $in: productIds } });

    const productMap = new Map(products.map(product => [String(product._id), product]));

    for (const item of items) {
      const product = productMap.get(String(item.id));
      if (!product || product.listedBy !== 'farmer' || product.stockKg <= 0) {
        return res.status(400).json({ error: `${item.name} is unavailable.` });
      }
      if (item.quantity > product.stockKg) {
        return res.status(400).json({ error: `${item.name} has only ${product.stockKg} kg left.` });
      }
    }

    for (const item of items) {
      const product = productMap.get(String(item.id));
      product.stockKg = Math.max(0, Number((product.stockKg - item.quantity).toFixed(2)));
      await product.save();
    }

    const orderId = 'ORD' + Date.now().toString().slice(-8);
    const orderItems = items.map(item => ({
      productId: item.id,
      productName: item.name,
      quantity: item.quantity,
      pricePerKg: item.price,
      totalPrice: Number((item.quantity * item.price).toFixed(2))
    }));

    await Order.create({
      orderId,
      buyerRole,
      buyerName,
      items: orderItems
    });

    const updatedProducts = await Product.find({}).sort({ createdAt: -1 });

    res.json({
      orderId,
      products: updatedProducts
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to place order.' });
  }
});

app.get('/api/orders/recent', async (req, res) => {
  try {
    const role = req.query.role;
    const hours = Number(req.query.hours || 24);
    const cutoff = new Date(Date.now() - hours * 60 * 60 * 1000);

    const query = { createdAt: { $gte: cutoff } };
    if (role && role !== 'farmer') {
      query.buyerRole = role;
    }
    if (role === 'farmer') {
      query.buyerRole = { $in: ['customer', 'wholesaler'] };
    }

    const orders = await Order.find(query).sort({ createdAt: -1 });

    const entries = orders.flatMap(order =>
      order.items.map(item => ({
        orderId: order.orderId,
        timestamp: order.createdAt.getTime(),
        buyerRole: order.buyerRole,
        buyerName: order.buyerName,
        productId: item.productId,
        productName: item.productName,
        quantity: item.quantity,
        pricePerKg: item.pricePerKg,
        totalPrice: item.totalPrice
      }))
    );

    res.json({ orders: entries });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch recent orders.' });
  }
});

app.use((_req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

async function startServer() {
  try {
    await mongoose.connect(MONGODB_URI);
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error.message);
    process.exit(1);
  }
}

startServer();
