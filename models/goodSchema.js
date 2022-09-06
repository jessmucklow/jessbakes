const Schema = require('mongoose').Schema;

const goodSchema = new Schema({
  name: { type: String, required: true },
  emoji: String,
  price: { type: Number, required: true, default: 0 }
}, {
  timestamps: true
});

module.exports = goodSchema;
