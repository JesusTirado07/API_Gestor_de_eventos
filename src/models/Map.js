const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database');
const Event = require('./Event');

const Map = db.define('map', {
    
    event_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Event,
            key: 'id'
        }
    },
    latitude: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    longitude: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
    
},

{

    timestamps: false

});

module.exports = Map;
