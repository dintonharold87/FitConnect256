const { Admin } = require("../models/adminModel");
const bcrypt = require("bcrypt");

// Register admin
exports.createAdmin = async (req, res) => {
  try {
    // Hash password
    const salt = await bcrypt.genSalt(10);
    console.log("Salt:", salt);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    console.log("Hashed Password:", hashedPassword);

    // Create admin object
    const admin = new Admin({
      name: req.body.name,
      email: req.body.email,
      role: req.body.role || "admin",
      password: hashedPassword,
    });

    // Save admin to database
    await admin.save();

    res.status(201).json({ message: "Admin registered successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: "fail", message: error.message });
  }
};

// Update admin
exports.updateAdmin = async (req, res) => {
  try {
    // Hash password if it has been updated
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }

    // Update admin in database
    const admin = await Admin.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!admin) {
      return res.status(404).json({
        status: "fail",
        message: "Admin not found",
      });
    }

    res.status(200).json(admin);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Server error" });
  }
};
