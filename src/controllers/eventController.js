const { Event } = require('../models');

exports.createEvent = async (req, res) => {
    
    try {

        const event = await Event.create(req.body);
        res.status(201).json(event);

    } catch (error) {

        res.status(400).json({ error: error.message });

    }

};

exports.getAllEvents = async (req, res) => {

    try {

        const events = await Event.findAll();
        res.status(200).json(events);

    } catch (error) {

        res.status(400).json({ error: error.message });

    }

};

exports.getEventById = async (req, res) => {
    try {
        const event = await Event.findByPk(req.params.id);
        if (!event) {
            return res.status(404).json({ error: 'Event not found' });
        }
        res.status(200).json(event);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateEvent = async (req, res) => {
    try {
        const [updated] = await Event.update(req.body, {
            where: { id: req.params.id }
        });
        if (!updated) {
            return res.status(404).json({ error: 'Event not found' });
        }
        const updatedEvent = await Event.findByPk(req.params.id);
        res.status(200).json(updatedEvent);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteEvent = async (req, res) => {

    try {

        const deleted = await Event.destroy({

            where: { id: req.params.id }
        });

        if (!deleted) {

            return res.status(404).json({ error: 'Event not found' });
        }

        res.status(204).json();

    } catch (error) {

        res.status(400).json({ error: error.message });
    }

};
