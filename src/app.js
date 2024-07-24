const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);


sequelize.sync()

  .then(() => {

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

  })

  .catch(error => {

    console.log('Error connecting to the database:', error);
    
  });
