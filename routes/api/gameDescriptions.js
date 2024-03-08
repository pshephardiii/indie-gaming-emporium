const express = require('express')
const router = express.Router()
const gameDescriptionsCtrl = require('../../controllers/api/gameDescriptions')

router.get('/:id', gameDescriptionsCtrl.show)

module.exports = router