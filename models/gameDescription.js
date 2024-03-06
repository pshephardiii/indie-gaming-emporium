const game = require('./game');
const mongoose = require('mongoose')
const Schema = require('mongoose').Schema;

const gameDescription = new Schema({
  opening: { type: String, required: true },
  synopsis: { type: String, required: true },
  features: [{ type: String, required: true }],
  closing: { type: String, required: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('GameDescription', gameDescription);