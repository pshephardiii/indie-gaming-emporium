const mongoose = require('mongoose')
const Schema = mongoose.Schema

const genreSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  sortOrder: Number
}, {
  timestamps: true
});

module.exports = mongoose.model('Genre', genreSchema)