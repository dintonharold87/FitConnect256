const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

// Register a new coach
router.post("/", adminController.createAdmin);
// Update coach data
router.put("/:id", adminController.updateAdmin);


module.exports = router;