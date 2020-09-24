const express = require('express');
const router = new express.Router();

// load user model
const Tech = require('../models/tech');

// GET USER PROFILE
router.get('/', async (req, res) => {
    try {
        const techs = await Tech.find({});
        res.send(techs);
        // or this method
        // const tasks = await Task.find({ owner: req.user._id });
        // res.send(tasks);
    } catch (error) {
        res.status(500).send(error);
    }
});

// ADD TECH
router.post('/', async (req, res) => {
    const tech = new Tech(req.body);
    try {
        await tech.save();
        res.status(201).send(tech);
    } catch (error) {
        res.status(500).send(error);
    }
});

// DELETE TECH
router.delete('/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const tech = await Tech.findOneAndDelete({ _id });
        if (!tech) {
            return res.status(404).send('Tech Not Found');
        }
        res.status(200).send(tech);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
