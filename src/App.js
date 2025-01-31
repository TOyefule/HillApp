const express = require('express');
const axios = require('axios');
const Course = require('./models/Course');
const Professor = require('./models/Professor');

const router = express.Router();

// Scrape Google Sheets data
router.get('/populateCourses', async (req, res) => {
  const googleSheetURL = 'https://docs.google.com/spreadsheets/d/1mfd_rx5enTGaZABWNyelwKOgHUWD0pew/htmlview';
  
  try {
    const { data } = await axios.get(googleSheetURL); // Fetch the data from Google Sheets
    // Assuming the data is in a specific format that we can parse
    const courses = parseGoogleSheetData(data);

    // Insert data into MongoDB
    await Professor.insertMany(courses.professors);
    await Course.insertMany(courses.courses);

    res.status(200).json({ message: 'Data populated successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error populating data', error });
  }
});

module.exports = router;
