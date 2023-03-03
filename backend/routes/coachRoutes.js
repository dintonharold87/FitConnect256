const express = require("express");
const router = express.Router();
const coachController = require("../controllers/coachController");
const { auth, adminAuth, coachAuth } = require("../middleware/auth");

// Register a new coach
router.post("/", coachController.createCoach);
// Update coach data
router.put("/:id", auth, coachAuth, coachController.updateCoach);

// Get all coaches
router.get("/", coachController.getAllCoaches);

// Delete coach by ID
router.delete("/:id", auth, adminAuth, coachController.deleteCoach);

module.exports = router;
