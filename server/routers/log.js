const express = require('express');
const router = new express.Router();

// load log model
const Log = require('../models/log');

// GET LOGS
router.get('/', async (req, res) => {
    try {
        const logs = await Log.find({}).sort({ date: -1 });
        res.status(200).send(logs);
    } catch (error) {
        res.status(500).send(error);
    }
});

// ADD LOGS
router.post('/', async (req, res) => {
    const log = new Log(req.body);
    try {
        await log.save();
        res.status(201).send(log);
    } catch (error) {
        res.status(400).send(error);
    }
});

// UPDATE LOG
router.patch('/:id', async (req, res) => {
    const _id = req.params.id;
    const updates = Object.keys(req.body);

    try {
        const log = await Log.findOne({ _id });
        updates.forEach((update) => (log[update] = req.body[update]));

        await log.save();
        res.status(201).send(log);
    } catch (error) {
        res.status(500).send(error);
    }
});

// DELETE LOG
// DELETE A TASK
router.delete('/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const log = await Log.findOneAndDelete({ _id });
        if (!log) {
            return res.status(404).send('Task Not Found');
        }
        res.status(200).send(task);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
