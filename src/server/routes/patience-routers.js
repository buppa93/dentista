const express = require('express');

const PatienceController = require('../controllers/patience-controller');

const router = express.Router();

router.post('/patience/save', PatienceController.createPatience);
router.get('/patience/fetch-all', PatienceController.getPatiences);

module.exports = router;