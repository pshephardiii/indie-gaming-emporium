import sendRequest from './send-request';

const BASE_URL = '/api/genres';

export function indexGenres() {
    return sendRequest(BASE_URL);
}

export function getGenre() {
    return sendRequest(`${BASE_URL}/${genreId}`)
}