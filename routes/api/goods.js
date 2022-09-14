const express = require('express');
const router = express.Router();
const goodsCtrl = require('../../controllers/api/goods');

router.get('/', goodsCtrl.index);
router.get('/:id', goodsCtrl.show);

module.exports = router;