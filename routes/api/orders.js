
const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');

// GET /api/orders/cart
router.get('/cart', ordersCtrl.cart);
// GET /api/orders/user
router.get('/user', ordersCtrl.forUser);
// POST /api/orders/cart/items/:id
router.post('/cart/goods/:id', ordersCtrl.addToCart);
// POST /api/orders/cart/qty
router.put('/cart/qty', ordersCtrl.setGoodQtyInCart);

module.exports = router;
