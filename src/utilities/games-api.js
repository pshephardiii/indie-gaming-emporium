import sendRequest from './send-request';

const BASE_URL = '/api/games';

export function getByGenre(genreId) {
  return sendRequest(`${BASE_URL}/genre/${genreId}`);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}