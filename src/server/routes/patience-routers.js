const express = require('express');

const PatienceController = require('../controllers/patience-controller');

const router = express.Router();

router.post('/patience/delete', PatienceController.deletePatience);
router.post('/patience/update', PatienceController.updatePatience);
router.post('/patience/save', PatienceController.createPatience);
router.get('/patience/fetch-all', PatienceController.getPatiences);
router.get('/patience/fetch-one', PatienceController.getPatienceById);
router.post('/patience/fetch-by-param', PatienceController.getPatienceByParam);

module.exports = router;