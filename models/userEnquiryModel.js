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
  checkin: {
    type: Date,
    required: true,
  },
  checkout: {
    type: Date,
    required: true,
  },
  howManyPeopleTravel: {
    type: Number,
    required: true,
  },

  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("UserEnquiry", userEnquiryschema);
