// API modules are where the code lives to communicate
// with the server via AJAX
import sendRequest from './send-request';
const BASE_URL = '/api/goods';

export function getAll() {
  return sendRequest(BASE_URL);
}

// This function is never actually used in SEI CAFE,
// it's only provided as an example of RESTful routing, etc.
// For example, you had a <MoviesDetailPage> component
export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}
