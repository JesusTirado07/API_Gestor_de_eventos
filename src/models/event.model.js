const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  const Event = sequelize.define('Event', {
    
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    special_guests: {
      type: DataTypes.STRING(255),
    },
    cost: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('active', 'inactive', 'canceled', 'concluded'),
      defaultValue: 'active',

    },

  }, 

  {

    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',

  });


  return Event;

};
