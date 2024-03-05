const express = require('express');
const router = express.Router();
const genresCtrl = require('../../controllers/api/genres');

router.get('/', genresCtrl.indexGenres);

router.get('/:genreId', genresCtrl.getGenre);

router.get('/genre-name/:name', genresCtrl.getGenreByName)

module.exports = router;