const mongoose = require('mongoose');

const goodSchema = require('./goodSchema');

module.exports = mongoose.model('Good', goodSchema);