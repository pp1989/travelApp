const UserEnquiry = require("../models/userEnquiryModel");

module.exports = {
  UserEnquiry: async (req, res) => {
    try {
      const userDetails = new UserEnquiry({
        userName: req.body.userName,
        email: req.body.email,
        mobile: req.body.mobile,
        comments: req.body.comments,
        checkin: new Date(req.body.checkin),
        checkout: new Date(req.body.checkout),
        howManyPeopleTravel: req.body.howManyPeopleTravel,
      });

      const result = await userDetails.save();
      return res.send({
        message:
          "Your enquiry processed successfully, team will connect you soon.",
        data: result,
        statusCode: 200,
      });
    } catch (error) {
      return res.send({
        message: "Please fill all the mendetory fillied.",
        data: [],
        statusCode: 400,
      });
    }
  },
};
