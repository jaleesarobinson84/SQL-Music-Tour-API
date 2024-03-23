const { Op } = require('sequelize');
const express = require('express');
const db = require('../models');
const { Event, Stage } = db;

const events = express.Router();

// GET all events - INDEX ROUTE
events.get('/', async (req, res) => {
    try {
        const foundEvents = await Event.findAll({
            order: [['createdAt', 'ASC']],
            where: {
                name: { [Op.like]: `%${req.query.name || ''}%` }
            }
        });
        res.status(200).json(foundEvents);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET a specific event - SHOW ROUTE
events.get('/:id', async (req, res) => {
    try {
        const foundEvent = await Event.findOne({
            where: { id: req.params.id },
            include: [{
                model: Stage,
                as: 'stage',
                include: [{
                    model: Event,
                    as: 'band',
                    where: { name: { [Op.like]: `%${req.query.event || ''}%` } }
                }]
            }]
        });
        res.status(200).json(foundEvent);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// CREATE an event
events.post('/', async (req, res) => {
    try {
        const newEvent = await Event.create(req.body);
        res.status(201).json({
            message: 'Successfully inserted a new event',
            data: newEvent
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// UPDATE an event
events.put('/:id', async (req, res) => {
    try {
        const updatedEvents = await Event.update(req.body, {
            where: { id: req.params.id }
        });
        res.status(200).json({
            message: `Successfully updated ${updatedEvents[0]} event(s)`
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// DELETE an event
events.delete('/:id', async (req, res) => {
    try {
        const deletedEvents = await Event.destroy({
            where: { id: req.params.id }
        });
        res.status(200).json({
            message: `Successfully deleted ${deletedEvents} event(s)`
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = events
