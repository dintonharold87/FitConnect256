const express = require("express");
const router = express.Router();
const coachController = require("../controllers/coachController");

// Register a new coach
router.post("/coachRegistration", coachController.createCoach);
// Update coach data
router.put('/coach/:id', coachController.updateCoach);

// Get all coaches
router.get('/coaches', coachController.getAllCoaches);


// Delete coach by ID
router.delete('/coach/:id', coachController.deleteCoach);


module.exports = router;
