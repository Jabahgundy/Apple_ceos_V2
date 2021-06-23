const express = require('express');
const router = express.Router();
const AppleCeos = require('../models/AppleCeos');

router.get('/', async (req, res) => {
    const appleData = await AppleCeos.getAllAppleData();

    res.render('template', {
        locals: {
            title: 'Apple Ceos',
            data: appleData
        },
        partials: {
            body: 'partials/home'
        }
    })





})

module.exports = router;