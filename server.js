const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const serverName = '127.0.0.1';
const databaseName = 'Bookify_Orders';
const URL = `mongodb://${serverName}:27017/${databaseName}`;

const app = express();
const port = 5001;

app.use(express.json());

app.use(cors());

// Connect to the MongoDB database
mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => console.error('Error connecting to database:', error));
db.once('open', () => console.log('Database connection established'));

// Create a model for the order
const Order = mongoose.model('Order', {
  firstName: String,
  lastName: String,
  address: String,
  optional: String,
  zipcode: String,
  cityState: String,
  country: String,
  email: String,
  phone: String,
  paymentMethod: String,
  cartItems: Array,
  totalPrice: Number,
});

// Handle POST request to save order details
app.post('/Bookify/api/orders', async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    console.log('Order details saved successfully:', order);
    res.status(201).json({ message: 'Order details saved successfully' });
  } catch (error) {
    console.error('Error saving order details:', error);
    res.status(500).json({ error: 'Error saving order details' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
