const User = require('../models/User');

exports.getUserProfile = async (req, res) => {

  try {

    const user = await User.findByPk(req.user.id, {

      attributes: { exclude: ['password'] }

    });

    if (!user) {

      return res.status(404).json({ message: 'User not found' });

    }

    res.json(user);

  } catch (error) {

    console.error(error.message);
    res.status(500).send('Server error');

  }
  
};
