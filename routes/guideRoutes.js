const express = require('express');
const guideController = require('../controllers/guideController');

const router = express.Router();

router.get('/', guideController.guide_get);

module.exports = router;