const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");



const app = express();
dotenv.config();

// Environment variables
const PORT = process.env.PORT || 1997;
const uri = process.env.MONGODB_URI;


// Set `strictQuery: false` to globally opt into filtering by properties that aren't in the schema
// Included because it removes preparatory warnings for Mongoose 7.
// See: https://mongoosejs.com/docs/migrating_to_6.html#strictquery-is-removed-and-replaced-by-strict
mongoose.set("strictQuery", false);
// Database connection
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.error("Error connecting to database", error);
  });


// Middleware
app.use(cors());
app.use(express.json());

// include other routes files
const coachRoutes = require("./routes/coachRoutes");
const adminRoutes = require("./routes/adminRoutes");
// testing server
// define root URL route handler
app.get("/", (req, res) => {
  res.send("<h1>this is home page of FitConnect256 Api </h1>");
});

// use other route endpoints in your routes files
app.use("/api/coaches", coachRoutes);
app.use("/api/admins", adminRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});