const mongoose = require("mongoose");

// Define a schema
const adminSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    default: mongoose.Types.ObjectId,
  },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["admin"],
    required: true,
  },
});

// Compile model from schema
const Admin = mongoose.model("Admin", adminSchema);

module.exports = { Admin };