const express = require('express');
const router = express.Router();
const { addMapLocation } = require('../controllers/mapController');

router.post('/add', addMapLocation);

module.exports = router;
