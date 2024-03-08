const express = require('express')
const router = express.Router()
const genresCtrl = require('../../controllers/api/genres')

router.get('/', genresCtrl.indexGenres)

router.get('/:genreId', genresCtrl.getGenre)

module.exports = router