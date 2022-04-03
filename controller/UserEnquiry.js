const UserEnquiry = require("../models/userEnquiryModel");

module.exports = {
  UserEnquiry: async (req, res) => {
    console.log("Body->", req.body);
    const userDetails = new UserEnquiry({
      userName: req.body.userName,
      email: req.body.email,
      mobile: req.body.mobile,
      comments: req.body.comments,
    });

    const result = await userDetails.save();
    console.log("result------>", result);

    console.log("hello");
    return res.send({
      message:
        "Your enquiry processed successfully, team will connect you soon.",
      data: result,
    });
  },
};
