const express = require("express");
const router = express.Router();
const coachController = require("../controllers/coachController");

// Register a new coach
router.post("/", coachController.createCoach);
// Update coach data
router.put('/:id', coachController.updateCoach);

// Get all coaches
router.get('/', coachController.getAllCoaches);


// Delete coach by ID
router.delete('/:id', coachController.deleteCoach);


module.exports = router;
