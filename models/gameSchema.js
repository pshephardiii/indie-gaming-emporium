const game = require('./game');

const Schema = require('mongoose').Schema;

const gameSchema = new Schema({
  name: { type: String, required: true },
  image: String,
  description: String,
  genre: { type: Schema.Types.ObjectId, ref: 'Genre' },
  price: { type: Number, required: true, default: 0 }
}, {
  timestamps: true
});

module.exports = gameSchema;