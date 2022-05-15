const mongoose = require("mongoose");

const Sub_cat_data = new mongoose.Schema({
  sub_cat_id: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  main_category: {
    type: String,
    required: true,
  },
  main_category_id: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("sub_category", Sub_cat_data);
