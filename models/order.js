const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const goodSchema = require('./goodSchema');

const lineGoodSchema = new Schema({
  qty: { type: Number, default: 1 },
  good: goodSchema
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

lineGoodSchema.virtual('extPrice').get(function() {
  // 'this' is the lineItem subdoc
  return this.qty * this.good.price;
});

const orderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  lineGoods: [lineGoodSchema],
  isPaid: { type: Boolean, default: false }
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

orderSchema.virtual('orderTotal').get(function() {
  return this.lineGoods.reduce((total, Good) => total + Good.extPrice, 0);
});

orderSchema.virtual('totalQty').get(function() {
  return this.lineGoods.reduce((total, good) => total + good.qty, 0);
});

orderSchema.virtual('orderId').get(function() {
  return this.id.slice(-6).toUpperCase();
});

orderSchema.statics.getCart = function(userId) {
  // 'this' is bound to the model (don't use an arrow function)
  // return the promise that resolves to a cart (the user's unpaid order)
  return this.findOneAndUpdate(
    // query
    { user: userId, isPaid: false },
    // update - in the case the order (cart) is upserted
    { user: userId },
    // upsert option creates the doc if it doesn't exist!
    { upsert: true, new: true }
  );
};

orderSchema.methods.addGoodToCart = async function(goodId) {
  const cart = this;
  const lineGood = cart.lineGoods.find(lineGood => lineGood.good._id.equals(goodId));
  if (lineGood) {
    lineGood.qty++;
  } else {
    // Copy the item from the items collection
    // Obtain the Item model
    const Good = mongoose.model('Good');
    const good = await Good.findById(goodId);
    const newLineGood = { good };
    cart.lineGoods.push(newLineGood);
  }
  // Return the promise that's returned by the save method
  return cart.save();
};

orderSchema.methods.setGoodQty = function(goodId, newQty) {
  // this keyword is bound to the cart (order doc)
  const cart = this;
  // Find the line item in the cart for the menu item
  const lineGood = cart.lineGoods.find(lineGood => lineGood.good._id.equals(goodId));
  if (lineGood && newQty <= 0) {
    // Calling remove, removes itself from the cart.lineItems array
    lineGood.remove();
  } else if (lineGood) {
    // Set the new qty - positive value is assured thanks to prev if
    lineGood.qty = newQty;
  }
  // return the save() method's promise
  return cart.save();
};


module.exports = mongoose.model('Order', orderSchema);