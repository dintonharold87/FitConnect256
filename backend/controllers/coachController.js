const { Coach } = require("../models/coachModel");
const bcrypt = require("bcrypt");

// create a new coach
exports.createCoach = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newCoach = new Coach({
      name: req.body.name,
      email: req.body.email,
      contact: req.body.contact,
      qualifications: req.body.qualifications,
      services: req.body.services,
      experience: req.body.experience,
      age: req.body.age,
      location: req.body.location,
      password: hashedPassword,
      role: req.body.role || "coach",
      gender: req.body.gender,
      coachType: req.body.coachType,
      availability: req.body.availability,
    });
    // check if user exists
    // const userExists = await newCoach.findOne({ email });
    // if (userExists) {
    //   res.status(400).json({ status: "User exists" });
    // }
    // save the coach to the database
    const coach = await newCoach.save();
    console.log(coach);
    res.status(201).json(coach);
  } catch (err) {
    console.log(err);
    res.status(400).json({ status: "fail", message: err.message });
  }
};

// Update coach data
exports.updateCoach = async (req, res) => {
  try {
    // Hash password if it has been updated
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }

    const coach = await Coach.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // return the modified document
      runValidators: true, // validate the update operation against the model's schema
    });

    if (!coach) {
      return res.status(404).json({
        status: "fail",
        message: "Coach not found",
      });
    }

    res.status(200).json({
      coach,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

// Get all coaches
exports.getAllCoaches = async (req, res) => {
  try {
    const coaches = await Coach.find();

    res.status(200).json({
      status: "success",
      results: coaches.length,
      coaches,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

// Get one coach

exports.getOneCoach = async (req, res) => {
  try {
    const coaches = await Coach.findById(req.params.id);
    if (!coaches) {
      return res.status(404).json({ error: "Coach not found" });
    }
    res.status(200).json({
      coaches
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

//Delete a coach
exports.deleteCoach = async (req, res) => {
  try {
    const coach = await Coach.findByIdAndDelete(req.params.id);
    if (!coach) {
      return res.status(404).send({ message: "Coach not found" });
    }
    res.send({ message: "Coach deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error deleting coach" });
  }
};
