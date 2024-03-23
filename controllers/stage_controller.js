const { Op } = require('sequelize');
const express = require('express');
const stages = express.Router();
const db = require('../models');
const { Stage } = db;

// FIND ALL STAGES - GET INDEX ROUTE
stages.get('/', async (req, res) => {
    try {
        const foundStages = await Stage.findAll({
            order: [['createdAt', 'ASC']],
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
            }
        });
        res.status(200).json(foundStages);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// FIND A SPECIFIC STAGE - SHOW ROUTE
stages.get('/:id', async (req, res) => {
    try {
        const foundStage = await Stage.findOne({
            where: { id: req.params.id },
            include: [
                { model: Stage }
            ]
        });
        res.status(200).json(foundStage);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// CREATE A STAGE
stages.post('/', async (req, res) => {
    try {
        const newStage = await Stage.create(req.body);
        res.status(201).json({
            message: 'Successfully inserted a new stage',
            data: newStage
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// UPDATE A STAGE
stages.put('/:id', async (req, res) => {
    try {
        const updatedStage = await Stage.update(req.body, {
            where: { id: req.params.id }
        });
        res.status(200).json({
            message: `Successfully updated ${updatedStage[0]} stage(s)`
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE A STAGE
stages.delete('/:id', async (req, res) => {
    try {
        const deletedStageCount = await Stage.destroy({
            where: { id: req.params.id }
        });
        res.status(200).json({
            message: `Successfully deleted ${deletedStageCount} stage(s)`
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = stages
