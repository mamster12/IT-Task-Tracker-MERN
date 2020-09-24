const express = require('express');
const path = require('path');
require('./db/mongoose');
const app = express();

// Init Middleware
app.use(express.json({ extended: false }));

// app.use('/api/posts', require('./routes/api/posts'));
app.use('/techs', require('./routers/tech'));
app.use('/logs', require('./routers/log'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

module.exports = app;
