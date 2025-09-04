const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userid: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  contry: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);;
