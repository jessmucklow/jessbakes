// API modules are where the code lives to communicate
// with the server via AJAX
import sendRequest from './send-request';
const BASE_URL = '/api/goods';

export function getAll() {
  return sendRequest(BASE_URL);
}
