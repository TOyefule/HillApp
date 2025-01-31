const mongoose = require('mongoose');

const ProfessorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  department: { type: String },
  bio: { type: String },
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
  tiktokHandle: { type: String, required: true },
  avatarUrl: { type: String }
}, { timestamps: true });

const Professor = mongoose.model('Professor', ProfessorSchema);
module.exports = Professor;
