import sendRequest from './send-request';

const BASE_URL = '/api/orders';

// Retrieve an unpaid order for the logged in user
export function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
}

// Add an item to the cart
export function addGameToCart(gameId) {
  return sendRequest(`${BASE_URL}/cart/games/${gameId}`, 'POST');
}

// Update the item's qty in the cart
// Will add the item to the order if not currently in the cart
// Sending info via the data payload instead of a long URL
export function setGameQtyInCart(gameId, newQty) {
  return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { gameId, newQty });
}

// Updates the order's (cart's) isPaid property to true
export function checkout() {
  // Changing data on the server, so make it a POST request
  return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
}

// Return all paid orders for the logged in user
export function getOrderHistory() {
  return sendRequest(`${BASE_URL}/history`);
}