const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database');
const User = require('./User');
const Event = require('./Event');

const EventRegistration = db.define('event_registration', {

    user_id: {

        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    },
    event_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Event,
            key: 'id'
        }
    },
    registered_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    }
}, 

{
    
    timestamps: false

});

module.exports = EventRegistration;
