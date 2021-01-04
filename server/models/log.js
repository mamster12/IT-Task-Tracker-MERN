const mongoose = require("mongoose");
const moment = require("moment-timezone");
const dateLocal = moment.tz.setDefault("Asia/Taipei");
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
        // default: new Date().toLocaleString("en-US", {
        //     timeZone: "Asia/Manila"
        // })
        type: Date,
        default: dateLocal

        // By default Heroku will return calls for current time in UTC.

        // You can manually set your app's time zone by adding a TZ environment variable via the config command. Keep in mind that you must use the tz database time zone format. For example, if you wanted to set your default time zone to US Central time you would use the following command (I'm assuming you have/use heroku toolbelt) :

        // heroku config:add TZ="America/Chicago"
    }
});

// populate the tasks virtually(not stored on database)
// userSchema.virtual('tasks', {
//     ref: 'Task',
//     localField: '_id',
//     foreignField: 'owner'
// });

const Log = mongoose.model("Log", logSchema);

module.exports = Log;
