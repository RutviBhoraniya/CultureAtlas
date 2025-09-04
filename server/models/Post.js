const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  postId: {
    type: String,
    unique: true,
    required: true,
  },
  userid: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["reel", "photoes", "story"],
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  contry: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  video: {
    type: Object,
  },
  photo: {
    type: Array,
    default: []
  },
  aproved: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model("Post", postSchema);
