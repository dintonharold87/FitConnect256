const mongoose = require("mongoose");

const coachSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    default: mongoose.Types.ObjectId,
  },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contact: { type: String, required: true },
  qualifications: { type: String, required: true },
  experience: { type: Number, required: true },
  age: { type: Number, required: true },
  location: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, num: ["coach"], required: true },
  gender: {
    type: String,
    num: ["Male", "Female"],
    required: true,
  },
  coachType: {
    type: String,
    num: ["Fitness coach", "Nuitrition coach"],
    required: true,
  },
  availability: [
    {
      type: [String],
      enum: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
    },
  ],
  services: [
    {
      type: [String],
      enum: [
        "Cardio",
        "Strength Training",
        "Yoga",
        "Pilates",
        "Meal planning",
        "Nutritional counseling",
        "Sports nutrition",
        "Supplements advice",
      ],
    },
  ],
});

const Coach = mongoose.model("Coach", coachSchema);

module.exports = { Coach };