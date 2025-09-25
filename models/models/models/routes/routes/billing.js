const express = require('express');
const Bill = require('../models/Bill');
const Society = require('../models/Society');
const router = express.Router();

// Generate bill for all units in a society (simplified)
router.post('/generate/:societyId', async (req, res) => {
    const society = await Society.findById(req.params.societyId);
    let bills = [];
    for (let unit of society.units) {
        let bill = new Bill({
            society: society._id,
            unit: unit.number,
            owner: unit.owner,
            period: req.body.period,
            invoiceDate: new Date(),
            charges: society.charges,
            total: society.charges.reduce((sum, c) => sum + c.amount, 0),
            status: 'Unpaid'
        });
        await bill.save();
        bills.push(bill);
    }
    res.status(201).json(bills);
});

// Get bills by society
router.get('/society/:societyId', async (req, res) => {
    const bills = await Bill.find({ society: req.params.societyId });
    res.json(bills);
});

module.exports = router;
