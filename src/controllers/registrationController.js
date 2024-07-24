const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Sequelize } = require('sequelize');
const db = require('../config/database');
const User = require('../models/User');
const mysql = require('mysql');

const connection = mysql.createConnection({

  host: 'localhost',
  user: 'root',
  password: '',
  database: 'gestion_eventos'

});

connection.connect((err) => {

  if (err) throw err;

  console.log('Conectado a MySQL.');

});

const register = async (req, res) => {

  const { username, email, password } = req.body;

  try {

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, email, password: hashedPassword });

    const sql = `GRANT ALL PRIVILEGES ON gestion_eventos.* TO '${username}'@'localhost' IDENTIFIED BY '${password}'`;
    connection.query(sql, (err, result) => {

      if (err) {

        console.error('Error asignando privilegios:', err);
        return res.status(500).json({ error: 'Error asignando privilegios' });

      }

      console.log('Privilegios asignados:', result);

    });

    const token = jwt.sign({ userId: user.id }, 'tu_secreto', { expiresIn: '1h' });
    res.status(201).json({ user, token });

  } catch (err) {

    console.error(err);
    res.status(500).json({ error: 'Error al registrar usuario' });

  }
  
};

module.exports = { register };
