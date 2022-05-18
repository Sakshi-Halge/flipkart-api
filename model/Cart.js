const mongoose = require('mongoose');

const cartData = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    // required: true,
  },
  productImg: {
    type: String,
    required: true,
  }
});