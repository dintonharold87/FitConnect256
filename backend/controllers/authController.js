const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Coach } = require("../models/coachModel");
const { Admin } = require("../models/adminModel");

exports.login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    // Find the user based on their email and role
    const User = role === "coach" ? Coach : Admin;
    const user = await User.findOne({ email });

    // If the user doesn't exist, return an error
    if (!user) {
      return res.status(401).json({ message: "User doesn't exist" });
    }
    // const salt = await bcrypt.genSalt(10);
    // password = await bcrypt.hash(req.body.password, salt);
    // Verify the password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "passwords don't match" });
    }
    // If the login is successful, create a JWT token and return it
    const token = jwt.sign({ userId: user._id, role }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    return res.status(200).json({ token });
  } catch (err) {
    // If an error occurs, return an error response
    console.log(err);
    return res.status(500).json({ message: "Server error" });
  }
};
