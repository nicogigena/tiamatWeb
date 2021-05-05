var express = require('express');
var router = express.Router();
var controller = require('../controllers/databaseController.js')

/* GET users listing. */
router.get('/', controller.index);
router.get('/add', controller.add);
router.get('/add/usuario', controller.addUsuario);
router.get('/add/equipo', controller.addEquipo);
router.get('/add/torneo', controller.addTorneo);

module.exports = router;