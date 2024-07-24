const { Sequelize } = require('sequelize');

const sequelize = new Sequelize( 'gestion_eventos', 'root', '', {

  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
  logging: false,

});

const Event = require('./event.model')(sequelize, Sequelize);

module.exports = {

  Event,
  
};
