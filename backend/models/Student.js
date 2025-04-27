const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNumber: { type: String, required: true },
  department: { type: String, required: true },
  year: { type: Number, required: true },
  email: { type: String, required: true }
});

module.exports = mongoose.model("Student", StudentSchema);
