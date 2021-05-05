var express = require('express');
var router = express.Router();
var controller = require('../controllers/staffController')

/* GET home page. */
router.get('/', controller.index);
router.get('/add', controller.add);

module.exports = router;
