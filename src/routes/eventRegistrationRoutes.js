const express = require('express');
const router = express.Router();
const { registerForEvent } = require('../controllers/eventRegistrationController');

router.post('/register', registerForEvent);

module.exports = router;
