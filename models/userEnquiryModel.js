const mongoose = require("mongoose");

const userEnquiryschema = new mongoose.Schema({
  userName: {
    type: String,
  },
  email: {
    type: String,
  },
  mobile: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
  },

  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("UserEnquiry", userEnquiryschema);
