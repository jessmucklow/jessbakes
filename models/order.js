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
  return this.qty * this.good.price;
});

const orderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  lineGoods: [lineGoodSchema],
  requestedOrder: { type: Boolean, default: false }
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
  return this.findOneAndUpdate(
    { user: userId, requestedOrder: false },
    { user: userId },
    { upsert: true, new: true }
  );
};

orderSchema.methods.addGoodToCart = async function(goodId) {
  const cart = this;
  const lineGood = cart.lineGoods.find(lineGood => lineGood.good._id.equals(goodId));
  if (lineGood) {
    lineGood.qty++;
  } else {
    const Good = mongoose.model('Good');
    const good = await Good.findById(goodId);
    const newLineGood = { good };
    cart.lineGoods.push(newLineGood);
  }
  return cart.save();
};

orderSchema.methods.setGoodQty = function(goodId, newQty) {
  const cart = this;
  const lineGood = cart.lineGoods.find(lineGood => lineGood.good._id.equals(goodId));
  if (lineGood && newQty <= 0) {
    lineGood.remove();
  } else if (lineGood) {
    lineGood.qty = newQty;
  }
  return cart.save();
};


module.exports = mongoose.model('Order', orderSchema);