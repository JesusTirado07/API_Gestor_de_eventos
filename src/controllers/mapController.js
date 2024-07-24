const Map = require('../models/Map');

const addMapLocation = async (req, res) => {

    const { event_id, latitude, longitude } = req.body;
    
    try {

        const mapLocation = await Map.create({ event_id, latitude, longitude });
        res.status(201).json(mapLocation);

    } catch (err) {

        console.error(err);
        res.status(500).json({ error: 'Error adding map location' });

    }

};

module.exports = { addMapLocation };
