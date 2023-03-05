const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const { auth, adminAuth } = require("../middleware/auth");
// Register a new coach
router.post("/", adminController.createAdmin);
// Update coach data
router.put("/:id", auth, adminAuth, adminController.updateAdmin);

module.exports = router;
