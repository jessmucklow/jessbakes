const mongoose = require('mongoose');

// Ensure that the Category model is processed by Mongoose
// so that the Item's populate method will work
require('./category');

const goodSchema = require('./goodSchema');

module.exports = mongoose.model('Good', goodSchema);