const mongoose = require("mongoose");

const PendingPostSchema = new mongoose.Schema({
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
    enum: ["reel", "photos", "story"],
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
    default:[]
  },
  interest: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const PendingPost = mongoose.model("PendingPost", PendingPostSchema);

module.exports = PendingPost;
