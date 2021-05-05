const express = require("express");
const router = express.Router();
const destinatarioController = require('../controllers/destinatarioController');

// api/destinatario
router.post('/', destinatarioController.crearDestinatario);
router.get('/', destinatarioController.obtenerDestinatarios);
router.get('/:id', destinatarioController.obtenerDestinatario);

module.exports = router;