const express = require('express');
const Society = require('../models/Society');
const router = express.Router();

// Add a new society
router.post('/add', async (req, res) => {
    const society = new Society(req.body);
    await society.save();
    res.status(201).json(society);
});

// Get all societies (for admin dashboard)
router.get('/', async (req, res) => {
    const societies = await Society.find({});
    res.json(societies);
});

module.exports = router;
