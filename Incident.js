const mongoose = require('mongoose');

const incidentSchema = new mongoose.Schema({
    title: String,
    summary: String,
    link: String,
    date: String,  // Store the date as a string
}, { collection: 'incident_reports' });  // Specify the collection name

module.exports = mongoose.model('Incident', incidentSchema);
