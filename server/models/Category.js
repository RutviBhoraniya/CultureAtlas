const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  category_name: {
    type: String,
    required: true,
    unique: true,
  },
  postIds: [String], // array of Post IDs linked to this category
});

module.exports = mongoose.model("Category", categorySchema);
