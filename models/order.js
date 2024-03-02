const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const gameSchema = require('./gameSchema');

const lineGameSchema = new Schema({
  qty: { type: Number, default: 1 },
  game: gameSchema
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

lineGameSchema.virtual('extPrice').get(function() {
  // 'this' is bound to the lineItem subdoc
  return this.qty * this.game.price;
});

const orderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  lineGames: [lineGameSchema],
  isPaid: { type: Boolean, default: false }
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

orderSchema.virtual('orderTotal').get(function() {
  return this.lineGames.reduce((total, game) => total + game.extPrice, 0);
});

orderSchema.virtual('totalQty').get(function() {
  return this.lineGames.reduce((total, game) => total + game.qty, 0);
});

orderSchema.virtual('orderId').get(function() {
  return this.id.slice(-6).toUpperCase();
});

orderSchema.statics.getCart = function(userId) {
  // 'this' is the Order model
  return this.findOneAndUpdate(
    // query
    { user: userId, isPaid: false },
    // update
    { user: userId },
    // upsert option will create the doc if
    // it doesn't exist
    { upsert: true, new: true }
  );
};

orderSchema.methods.addGameToCart = async function(gameId) {
  const cart = this;
  // Check if item already in cart
  const lineGame = cart.lineGames.find(lineGame => lineGame.game._id.equals(gameId));
  if (lineGame) {
    lineGame.qty += 1;
  } else {
    const game = await mongoose.model('Game').findById(gameId);
    cart.lineGames.push({ game });
  }
  return cart.save();
};

// Instance method to set an item's qty in the cart (will add item if does not exist)
orderSchema.methods.setGameQty = function(gameId, newQty) {
  // this keyword is bound to the cart (order doc)
  const cart = this;
  // Find the line item in the cart for the menu item
  const lineGame = cart.lineGames.find(lineGame => lineGame.game._id.equals(gameId));
  if (lineGame && newQty <= 0) {
    // Calling remove, removes itself from the cart.lineItems array
    lineGame.deleteOne();
  } else if (lineGame) {
    // Set the new qty - positive value is assured thanks to prev if
    lineGame.qty = newQty;
  }
  // return the save() method's promise
  return cart.save();
};

module.exports = mongoose.model('Order', orderSchema);