const mongoose = require('mongoose')

const Shopping_data = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  sub_category: {
    type: String,
    required: true,
  },
  sub_category_id: {
    type: Number,
    required: true,
  },
  main_category: {
    type: String,
    required: true,
  },
  main_id: {
    type: Number,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  item_thumb: {
    type: String,
    required: true,
  },
  offer: {
    type: Number,
    required: true,
  },
  image_gallery: [
    { type: String, required: true },
    { type: String, required: true },
    { type: String, required: true },
    { type: String, required: true },
  ],
});



module.exports = mongoose.model("shopping", Shopping_data);