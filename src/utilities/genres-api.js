import sendRequest from './send-request';

const BASE_URL = '/api/genres';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function getByName(name) {
  return sendRequest(`${BASE_URL}/genre-name/${name}`)
}