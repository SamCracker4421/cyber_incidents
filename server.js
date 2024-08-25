const express = require('express');
const mongoose = require('mongoose');
const Incident = require('./models/Incident');
const app = express();

// Connect to MongoDB without deprecated options
mongoose.connect('mongodb://localhost:27017/cyber_incidents');

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    try {
        const incidents = await Incident.find({});
        console.log(incidents);  // Log the incidents to the console
        res.render('index', { incidents: incidents });
    } catch (err) {
        console.error('Error retrieving incidents:', err);
        res.status(500).send('Error retrieving incidents');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
