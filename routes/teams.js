var express = require('express');
var router = express.Router();
var controller = require('../controllers/teamsController')

/* GET home page. */
router.get('/', controller.index);

module.exports = router;
