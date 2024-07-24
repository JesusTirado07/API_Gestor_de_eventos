const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Event = sequelize.define('Event', {

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    time: {
        type: DataTypes.TIME,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    special_guests: {
        type: DataTypes.STRING
    },
    cost: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('active', 'inactive', 'canceled', 'concluded'),
        defaultValue: 'active'
    }

},

{
    
    timestamps: true

});

module.exports = Event;
