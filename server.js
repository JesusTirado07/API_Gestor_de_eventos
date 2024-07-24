const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./src/config/database');
const cors = require('cors');
const authRoutes = require('./src/routes/authRoutes');
const userRoutes = require('./src/routes/userRoutes');
const eventRoutes = require('./src/routes/eventRoutes');
const mapRoutes = require('./src/routes/mapRoutes');
const registrationRoutes = require('./src/routes/registrationRoutes');
const eventRegistrationRoutes = require('./src/routes/eventRegistrationRoutes');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/maps', mapRoutes);
app.use('/api/registrations', registrationRoutes);
app.use('/api/event_registrations', eventRegistrationRoutes);

sequelize.sync()

  .then(() => {

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);

    });

  })

  .catch(error => {

    console.log('Error connecting to the database:', error);
    
  });
