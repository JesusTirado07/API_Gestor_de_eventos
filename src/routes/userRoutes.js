const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', (req, res) => {

  res.send('Registro de usuario');
  
});

module.exports = router;
