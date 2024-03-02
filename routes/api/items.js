const express = require('express');
const router = express.Router();
const itemsCtrl = require('../../controllers/api/items');

// GET /api/items
router.get('/:genre', itemsCtrl.indexByGenre);
// GET /api/items/:id
router.get('/:id', itemsCtrl.show);

module.exports = router;