const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  professor: { type: mongoose.Schema.Types.ObjectId, ref: 'Professor', required: true },
  schedule: { type: String },
  courseUrl: { type: String }
}, { timestamps: true });

const Course = mongoose.model('Course', CourseSchema);
module.exports = Course;
