const EventRegistration = require('../models/eventRegistration');

const registerForEvent = async (req, res) => {

    const { user_id, event_id } = req.body;
    try {

        const registration = await EventRegistration.create({ user_id, event_id });
        res.status(201).json(registration);

    } catch (err) {

        console.error(err);
        res.status(500).json({ error: 'Error registering for event' });
        
    }

};

module.exports = { registerForEvent };
