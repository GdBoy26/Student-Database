const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

// POST - Add student
router.post("/", async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET - All students
router.get("/", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

// GET - One student
router.get("/:id", async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.json(student);
});

// PUT - Update student
router.put("/:id", async (req, res) => {
  const updated = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE - Remove student
router.delete("/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: "Student deleted" });
});

module.exports = router;
