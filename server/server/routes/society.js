const express = require('express');
const Society = require('../models/Society');
const router = express.Router();

router.post('/add', async (req, res) => {
  const society = new Society(req.body);
  await society.save();
  res.status(201).json(society);
});

router.get('/', async (req, res) => {
  const societies = await Society.find({});
  res.json(societies);
});

module.exports = router;
