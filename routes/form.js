var express = require('express');
var router = express.Router();
var formController = require('../controllers/formController');

router.post('/submit', formController.submitForm);
router.get('/image', formController.getImage);

module.exports = router;
