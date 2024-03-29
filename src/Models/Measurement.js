const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const measurementSchema = new Schema({
    sampling_rate: {
        type: Number,
        required: true,
    },
    user: {
        type: String,
        default: 'unknown',
    },
    distance: {
        type: Array,
    },
    angle: {
        type: Array,
    },
});

const Measurement = new mongoose.model('Measurement', measurementSchema);

module.exports = { Measurement };
