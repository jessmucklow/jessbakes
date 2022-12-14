const Order = require('../../models/order');
// const Good = require('../../models/good');

module.exports = {
  cart,
  addToCart,
  setGoodQtyInCart,
  checkout,
  forUser
};

async function forUser(req, res) {
  // get orders for the logged in user
  const orders = await Order.find({user: req.user._id, isPaid: true}).sort('-updatedAt');
  res.json(orders);
}

// A cart is the unpaid order for a user
async function cart(req, res) {
  const cart = await Order.getCart(req.user._id);
  res.json(cart);
}

// Add an item to the cart
async function addToCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.addGoodToCart(req.params.id);
  res.json(cart);
}

// Updates an item's qty in the cart
async function setGoodQtyInCart(req, res) {
    const cart = await Order.getCart(req.user._id);
    await cart.setGoodQty(req.body.goodId, req.body.newQty);
  res.json(cart);
}

// Update the cart's isPaid property to true
async function checkout(req, res) {
  const cart = await Order.getCart(req.user._id);
  cart.requestedOrder = true;
  await cart.save();
  res.json(cart);
}
