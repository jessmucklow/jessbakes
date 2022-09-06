const express = require('express');
const router = express.Router();
const goodsCtrl = require('../../controllers/api/goods');

// GET /api/items
router.get('/', goodsCtrl.index);
// GET /api/items/:id
router.get('/:id', goodsCtrl.show);

module.exports = router;