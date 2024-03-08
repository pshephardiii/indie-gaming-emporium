const express = require('express')
const router = express.Router()
const gamesCtrl = require('../../controllers/api/games')

router.get('/genre/:genreId', gamesCtrl.indexByGenre)

router.get('/:id', gamesCtrl.show)

module.exports = router