const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
  postId: {
    type: String,
    required: true,
  },
  userid: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("Like", likeSchema);
