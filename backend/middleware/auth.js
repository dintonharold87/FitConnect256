// auth.js middleware
const jwt = require("jsonwebtoken");

exports.auth = (req, res, next) => {
  try {
    // get token from the header
    const token = req.headers.authorization.split(" ")[1];

    // Check if token exists
    if (!token) {
      return res.status(401).json({ message: "No token found" });
    }
    // verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // set user from the token
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      message: "Auth failed",
    });
  }
};

// adminAuth middleware
exports.adminAuth = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({
      message: "Access denied",
    });
  }
  next();
};

// coachAuth middleware
exports.coachAuth = (req, res, next) => {
  if (req.user.role !== "coach") {
    // Check if user is authenticated
    if (!req.user) {
      return res.status(401).json({ message: "Auth failed" });
    }

    return res.status(403).json({
      message: "Access denied",
    });
  }
  next();
};
