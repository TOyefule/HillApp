const express = require('express');
const Professor = require('../models/Professor');
const router = express.Router();

// Get all professors
router.get('/', async (req, res) => {
  try {
    const professors = await Professor.find();
    res.json(professors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
