const mongoose = require("mongoose");

const Orders_data = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
  },
  phone: {
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
  address: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  productImg: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("orders", Orders_data);
