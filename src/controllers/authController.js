const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    let user = await User.findOne({ where: { email } });

    if (user) {

      return res.status(400).json({ message: 'User already exists' });

    }

    user = new User({

      username,
      email,
      password: bcrypt.hashSync(password, 10)

    });

    await user.save();

    res.status(201).json({ message: 'User registered successfully' });

  } catch (error) {

    console.error(error.message);
    res.status(500).send('Server error');

  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {

    const user = await User.findOne({ where: { email } });

    if (!user) {

      return res.status(400).json({ message: 'Invalid credentials' });

    }

    const isMatch = bcrypt.compareSync(password, user.password);

    if (!isMatch) {

      return res.status(400).json({ message: 'Invalid credentials' });

    }

    const payload = {

      id: user.id

    };

    jwt.sign(

      payload,
      'your_jwt_secret',
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }

    );
  } catch (error) {

    console.error(error.message);
    res.status(500).send('Server error');

  }
  
};
