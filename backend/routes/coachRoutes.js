const express = require("express");
const router = express.Router();
const coachController = require("../controllers/coachController");
const { auth, adminAuth, coachAuth } = require("../middleware/auth");

// Register a new coach
router.post("/", coachController.createCoach);
// Update coach data
router.put("/:id", coachController.updateCoach);

// Get all coaches
router.get("/", coachController.getAllCoaches);

// Get details for one coach
router.get("/:id",  coachController.getOneCoach)

// Delete coach by ID
router.delete("/:id", coachController.deleteCoach);

module.exports = router;
