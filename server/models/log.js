const mongoose = require('mongoose');
const moment = require('moment-timezone');
const dateLocal = moment().tz('Asia/Taipei').format();
// const validator = require('validator');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const Task = require('./task');

const logSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    attention: {
        type: Boolean,
        default: false
    },
    tech: {
        type: String
    },
    taskId: {
        type: String
    },
    date: {
        // type: String,
        // default: new Date().toLocaleString('en-US', {
        //     timeZone: 'Asia/Manila'
        // })
        type: Date,
        default: dateLocal
    }
});

// populate the tasks virtually(not stored on database)
// userSchema.virtual('tasks', {
//     ref: 'Task',
//     localField: '_id',
//     foreignField: 'owner'
// });

const Log = mongoose.model('Log', logSchema);

module.exports = Log;
