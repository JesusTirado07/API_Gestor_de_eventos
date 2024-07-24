const jwt = require('jsonwebtoken');
const config = require('../config/config');

module.exports = function(req, res, next) {

  const token = req.header('Authorization');

  if (!token) {

    return res.status(401).json({ message: 'Acceso denegado. No hay token.' });

  }

  try {

    const decoded = jwt.verify(token, config.jwtSecret);
    req.user = decoded.user;
    next(); 

  } catch (err) {

    res.status(401).json({ message: 'Token no válido.' });

  }
  
};
