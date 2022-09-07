import sendRequest from './send-request';

const BASE_URL = '/api/orders';

// Retrieve an unpaid order for the logged in user
export function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
}

// Add an good to the cart
export function addGoodToCart(goodId) {
  // Just send goodId for best security (no pricing)
  return sendRequest(`${BASE_URL}/cart/goods/${goodId}`, 'POST');
}

// Update the good's qty in the cart
// Will add the good to the order if not currently in the cart
// Sending info via the data payload instead of a long URL
export function setGoodQtyInCart(goodId, newQty) {
  return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { goodId, newQty });
}

// Updates the order's (cart's) isPaid property to true
export function checkout() {
  // Changing data on the server, so make it a POST request
  return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
}

export function getAllForUser() {
  return sendRequest(`${BASE_URL}/user`);
}
