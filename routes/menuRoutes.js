const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem');

// add menu item
router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newMenu = new MenuItem(data);
        const response = await newMenu.save();
        console.log('data saved');
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// get all menu items
router.get('/', async (req, res) => {
    try {
        const menudata = await MenuItem.find();
        console.log('data fetched');
        res.status(200).json(menudata);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// get menu items by taste
router.get('/:tasteType', async (req, res) => {
    try {
        const tasteType = req.params.tasteType;

        if (tasteType == 'sweet' || tasteType == 'spicy' || tasteType == 'sour') {
            const response = await MenuItem.find({ taste: tasteType });
            console.log('request fetched');
            res.status(200).json(response);
        } else {
            res.status(404).json({ error: 'Invalid Taste' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;