const express = require('express');
const feedbackController = require('../controllers/feedbackController');

const router = express.Router();

router.get('/', feedbackController.feedback_get);
router.post('/', feedbackController.feedback_post);

module.exports = router;